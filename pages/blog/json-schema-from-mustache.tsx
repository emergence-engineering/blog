import React from "react";
import { ArticleIntro } from "../../features/article/types";
import ArticleWrapper from "../../features/article/components/ArticleWrapper";
import ArticleShareOgTags from "../../features/article/components/ArticleShareOgTags";
import Markdown from "../../features/article/components/Markdown";
import ArticleHeader from "../../features/article/components/ArticleHeader";

export const MD0 = /* language=md */ `
# TLDR

- I will briefly introduce the scope of the problem, and why I needed something like this
- [Copyable gist file included](https://gist.github.com/tg44/7602a9812678f779fd5e124ff8fa42ed)
- How I implemented it
- Tests (also in a gist)

# Mustache templates and JSON schema and us

if you are reading this, I hope you are familiar with [Mustache](https://mustache.github.io/) templates or [JSON schema](https://json-schema.org/), but I will introduce them shortly.

Mustache is a popular templating system. You can write text, and add placeholders/variables to it, which are later replaced with values. It's a very simple and powerful concept. An example:
\`\`\`typescript
const Mustache = require('mustache');

const view = {
  title: "Joe",
  calc: () => ( 2 + 4 )
}; // params for the template

const output = Mustache.render(
  "{{title}} spends {{calc}}", // this is the template
  view,
  );
// output: "Joe spends 6"
\`\`\`

JSON schema is a way of describing the structure of a JSON object. It's an another very powerful concept, and it's also widely used. 
There are many tools for JSON schema, such as [ajv](https://ajv.js.org/) as a validator, or [json-schema-faker](https://json-schema-faker.js.org/) to generate fake data based on a schema, or [json-schema-form](https://rjsf-team.github.io/react-jsonschema-form/) to generate a form based on a schema.
You have probably seen a JSON schema before, because openApi (swagger) uses it to describe the structure of the request and response bodies of an API.
A simple schema for our previous view might look like this:
\`\`\`json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
    },
    "calc": {
      "type": "integer",
    }
  }
}
\`\`\`

My main problem with Mustache is that it can't validate the data, and I can't easily tell if I "broke" the "api" between the previous template and the new one. 
Also, in the previous example \`{}\` would be a valid view, and the output of that view is \` spends \` which is far from what I call correct, or what I expect.

You know what would be super cool? If I could generate a form for my template. 

# Implementation

## Types

I have a scala background. I love types. Also, for JSON schema we want types too. 
Mustache has four operators (or at least I only care about these four): 
 - \`{{\`, \`{{&\` these means "inline variable" (the first one will escape the value, the second one won't)
    - we can have string or number as a type
 - \`{{#\` means "iterate over an array" or "if it is not falsy" (yes it has two meanings)
    - in both cases this starts a block, and the block ends with an \`{{/\`
    - if it is an array, the block is repeated for each element of the array, and the variables are set to the current element
    - if we don't use a variable inside the block, we can have any type
    - if we use a variable inside the block, we can have an array of that type
 - \`{{^\`. This is the same as \`{{#\`, but it will be executed if the value is falsy (starts a block)
    - we can have any type

One more thing, that we can have a template like \`{{test.a}} and {{test.b}}\`, where \`test\` is an object, and \`a\` and \`b\` are (inlined) properties of that object.

So we can have the following types:
\`\`\`typescript
export type AllowedSchemas =
  | typeof SingleField
  | ArraySchema
  | ObjectSchema
  | typeof AnyField;
const SingleField = { type: ["string", "number"], nullable: false };
const AnyField = {
  type: ["string", "number", "object", "array", "boolean", "null"],
};
type ArraySchema = {
  type: "array";
  items: AllowedSchemas;
  nullable: false;
  minItems: 0 | 1;
};
type ObjectSchema = {
  type: "object";
  properties: Record<string, AllowedSchemas>;
  required: string[];
  nullable: false;
  additionalProperties: true;
};
\`\`\`
Only the \`AnyField\` can be nullable, and the \`ObjectSchema\` can have additional properties.
For the sake of completeness, we will need to require all the properties of an object (which is not nullable), and we will need at least one element in an array if it is not used as conditions.

So given the following template I want the \`list\` to have at least one element in it:
\`\`\`jsTemplates
List
{{#list}}
 - {{.}}
{{/list}}
\`\`\`
But in this case I would allow an empty \`list\`:
\`\`\`jsTemplates
{{#list}}
List
{{/list}}
{{#list}}
 - {{.}}
{{/list}}
\`\`\`
Or here an empty array in \`repo\` is fine too:
\`\`\`jsTemplates
{{#github}}
You can check the following github repo: {{repo}}
{{/github}}
{{^github}}
We dont have a link for this repo.
{{/github}}
\`\`\`

## Implementation

I don't want to go into fine details, because I have a gist with the code in it, but I will give a short overview.

First, we need to parse the template, and keep the "interesting" parts of it. 
Convert these parts to a "naive" representation, and then merge these parts into a single schema.

\`\`\`typescript
const variableSpans = ["name", "&", "#", "^"];
export const schemaGenFromMustacheTemplate = (
  template: string
): AllowedSchemas => {
  const parsedTemplate = Mustache.parse(template);

  const params = parsedTemplate.flatMap((e) => {
    if (variableSpans.indexOf(e[0]) > -1) {
      return [schemaOfParam(e)];
    }
    return [];
  });

  const innerSchema = mergeSchema(params);
  return {
    properties: innerSchema,
    type: "object",
    nullable: false,
    required: Object.entries(innerSchema)
      .filter(([, v]) => {
        return !(
          ("nullable" in v && v.nullable) ||
          (Array.isArray(v.type) && v.type.indexOf("null") !== -1)
        );
      })
      .map(([k]) => k),
    additionalProperties: true,
  };
};
\`\`\`

The only tricky part here is the list of required fields. We don't want to require a field that is nullable or can be null.

\`schemaOfParam\` is a function with a switch case, that converts \`name\` and \`&\`, to \`SingleField\`, and \`^\` to \`AnyField\`.
\`#\` is converted like this:
\`\`\`typescript
// we try to detect the sub-variables
if (Array.isArray(param[4])) {
    const spans: TemplateSpans = param[4];
    const schemaList = spans
      .flatMap((p) => [schemaOfParam(p)])
      .filter(nonEmptyObject);
    const itemDef = mergeSchema(schemaList);
    // if we found any named one, this is an array of objects with the sub-vars
    if (Object.keys(itemDef).length > 0) {
      return {
        [param[1]]: {
          type: "array",
          items: {
            type: "object",
            properties: itemDef,
            required: Object.keys(itemDef),
            nullable: false,
            additionalProperties: true,
          },
          nullable: false,
          minItems: 1,
        },
      };
    }
    // if we not found any named one this is an array of SingleFields
    if (schemaList.length > 0) {
      return {
        [param[1]]: {
          type: "array",
          items: SingleField,
          nullable: false,
          minItems: 1,
        },
      };
    }
}
// if we don't have any sub-variable block, this is an if condition so an AnyField
return {
    [param[1]]: AnyField,
};
\`\`\` 

The hardest part both to implement and to understand is the \`mergeSchema\` function. 
It tries to construct objects from "a.b.c" like named variables. (Dropping the "."s.)
It takes care if the same variable is used in different places, and if it is used as a condition or not. (Allowing minItems to be 0.)

# Tests

This is an easily testable function, so I wrote some tests for it. The idea is to have a template and an input data, generate the schema from the template, validate the input data with it, and check if the validation matches the expected result or not.
With code;
\`\`\`typescript
interface TestGen {
  name: string;
  template: string;
  schema: Record<string, any>;
  expectedError: string | null;
}

const runTest = (testGen: TestGen) => {
  test(testGen.name, () => {
    const schema = schemaGenFromMustacheTemplate(testGen.template);
    // console.log(JSON.stringify(schema));
    const ajv = new Ajv({ allowUnionTypes: true, verbose: true, strict: true });
    const validate = ajv.compile(schema);
    const res = validate(testGen.schema);
    if (testGen.expectedError === null) {
      if (!res) console.log(validate.errors);
      expect(res).toBeTruthy();
      expect(validate.errors).toBeNull();
    } else {
      // console.log(validate.errors);
      expect(res).toBeFalsy();
      expect(validate.errors?.[0].message).toEqual(testGen.expectedError);
    }
  });
};
const testDescriptionsBasic: TestGen[] = [
  {
    name: "no param trutly",
    template: "hello",
    schema: {},
    expectedError: null,
  },
];
describe("mustache", () => {
  testDescriptionsBasic.forEach((t) => runTest(t));
});
\`\`\`

# Conclusion

I hope this has been useful for you. I think this is a good way to validate your mustache templates, and it was not that hard to implement. 
I was shocked that no one else published code for this before, so I hope this will help someone in the future.

If you want to generate forms from your mustache templates, you can do that with the \`convertToUISchema\` function also published in the gist.
`;

export const article10Metadata: ArticleIntro = {
  title: `JsonSchema generation from \n{{ mustache }} templates`,
  postId: "json-schema-from-mustache",
  url: "https://emergence-engineering.com/blog/json-schema-from-mustache",
  author: "Törcsi",
  timestamp: 1677150227000,
  authorLink: "https://emergence-engineering.com/cv/torcsi",
  introText:
    "A guide with code samples for building a strict schema validator for your mustache templates.",
  imgSrc: "http://clipart-library.com/images/8cxrjerMi.jpg",
  tags: [
    "JsonSchema",
    "Mustache Templates",
    "Schema Validation",
    "Code Samples",
  ],
};

export default function Article() {
  return (
    <ArticleWrapper>
      <ArticleShareOgTags
        url={article10Metadata.url}
        title={article10Metadata.title}
        description={article10Metadata.introText}
        imgSrc={article10Metadata.imgSrc}
      />
      <ArticleHeader
        title={article10Metadata.title}
        author={article10Metadata.author}
        timestamp={article10Metadata.timestamp}
        tags={article10Metadata.tags}
      />
      <Markdown source={MD0} />
    </ArticleWrapper>
  );
}

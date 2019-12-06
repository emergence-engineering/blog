import React, { FunctionComponent, useState } from "react";

import ArticleWrapper from "../../modules/article/components/ArticleWrapper";
import MarkDown from "../../modules/article/components/Markdown";
import CodeEditor from "../../modules/article/components/CodeEditor";
import ArticleShareOgTags from "../../modules/article/components/ArticleShareOgTags";
import { ArticleIntro } from "../../types/article";

export const article1Metadata: ArticleIntro = {
  title: "Everyday javascript ep. 1: Rest/spread operator pt1.",
  author: "Viktor",
  authorLink: null,
  introText: `
Going trough the internet you'll find a lot of in-depth articles about specific issues,
light tutorials, and everything in between. But the javascript landscape is vast, and
sometimes too much information gets in the way of understanding.

Even after years of professional development I see tricks every now and then
which are straightforward conceptually, but easy to miss, and there's no place
where I could read more about real usage, and not a 30 page long detailed article
about every small detail of a given feature.
`,
  postId: "everyday-javascript-1-spread-operator",
  timestamp: 1574971200000,
  imgSrc:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  url:
    "https://emergence-engineering.com/blog/everyday-javascript-1-spread-operator",
};

const MD0 = /* language=md */ `# Everyday javascript ep. 1: Rest/spread operator pt1.

Length: 15 minutes.

## What's this about?

Going trough the internet you'll find a lot of in-depth articles about specific issues,
light tutorials, and everything in between. But the javascript landscape is vast, and
sometimes too much information gets in the way of understanding.

Even after years of professional development I see tricks every now and then
which are straightforward conceptually, but easy to miss, and there's no place
where I could read more about real usage, and not a 30 page long detailed article
about every small detail of a given feature.

The goal of this article series is to show the tricks used in real-world
javascript/typescript, aimed at programmers from an intermediate level to advanced.
But don't be afraid if you're a beginner, I think you can understand everything written here,
but in my experience it's better to experience a problem and then find a solution.

**TLDR:**

- How does the rest/spread operator looks like
- Spread/rest arrays, what it solves, with problems and solutions
- Spread/rest with objects, in a similar fashion

The following variables are used in the examples:
`;
const SharedCode = /* language=js */ `// Shared variables
const arrayReturningFunction = () => [1, 2, 3, 4, 5];
const objectReturningFunction = () => ({ a: "aVal", b: "bVal", name: "rick" });
const myArray = [1, 2];
const arrayToConcat = [1, 2, 3, 4];
const objectToClone = { a: "aVal", b: "bVal", c: "cVal" };
const arrayToSpread = [1, 2, 3];
const numberArr = [1, 2, 3, 4];
const argumentList = ["Old", "Timer"];
const rank = "Veteran";`;

const MD1 = /* language=md */ `## The rest/spread operator

The rest/spread operator looks like this: \`...\`. It is _always_ on a left side of an identifier ( a name for a variable etc... ),
otherwise it would be easily confused with property access on objects ( plus \`2..toString()\` is a valid JS expression,
dangerously close to three dots ).

It was introduced with es6, which was quite a while ago. As with every new feature
it solves a problem that's solvable with old tools ( there will be examples of that, don't worry ),
but using it simpifies code a lot, making it way more readable. One common thing with
a lot of cool js features is that they can be used
to solve a lot of different, seemingly unrelated problems, and the result is less head space occupied by syntax and more with
code.

ES6 really moved javascript in a functional direction, almost all of the additions helps the programmer to
write immutable code, which means never mutating variables, but creating new ones whenever they needed. No more \`Array.prototype.push\`.
Code written in this manner is _way_ easier to read and reason about.

It can be a confusing thing to use the same operator for two different things.
Obviously there's a rule which specifies that, but in everyday coding it's
more intuitive. A good rule of thumb is the following:

- If the \`...\` operator is on a "left" side of an expression, or in a function definition's
  arguments, then it's a _rest_
- If it's on the right side of an expression or in a function calls argument, then it is a _spread_

For example:
`;

const Code1 = /* language=js */ `// 1. rest
const [headItem, ...restArray] = arrayReturningFunction();
// 2. rest
const { name, ...restObject } = objectReturningFunction();
// 3. rest
const functionWithRest = (firstArgument, ...restArguments) => {
  console.log("functionWithRest", { firstArgument, restArguments });
  /* C.O.D.E */
};
// 4. rest
const functionWithObjectArg = (firstArgument, { a, ...otherParams }) => {
  console.log("functionWithObjectArg", firstArgument, a, otherParams);
  /* C.O.D.E */
};
functionWithObjectArg("firstArg", objectToClone);
// 5. spread
const resultArray = [myArray, ...arrayToConcat];
// 6. spread
const resultObject = {
  name: "The Impostor",
  ...objectToClone,
  keyToOverwrite: "Gotcha",
};
// 7. spread
functionWithRest("First argument value", ...arrayToSpread);
console.log("resultArray", resultArray);
console.log("headItem", headItem);
console.log("resultArray", resultArray);
console.log("restArray", restArray);
console.log("name", name);
console.log("restObject", restObject);`;

const MD2 = /* language=md */ `
I'll use the following variables in the examples:
`;

const MD3 = /* language=md */ `
## Spread operator on arrays

The spread operator is commonly used in two places, always before an array variable:

1. at a variable in an argument list of a function
2. in a newly created array, between \`[\` and \`]\`, at a array variable

Let's see some examples for the first part, with-and-without:
`;

const Code2 = /* language=js */ `// The old way:
const displayFn = (firstName, lastName, rank) =>
  console.log("Name: " + firstName + " " + lastName + ", rank: " + rank);
// To pass an array to a function
displayFn.apply(null, argumentList.concat([rank]));
// Prints out "Name: Old Timer, rank: Veteran
// Quite ugly and hard to follow, isn't it
const newArgList = argumentList.slice();
newArgList.push(rank);
displayFn.apply(null, newArgList);
// We had to mutate a variable.
// Also what is that null? It's the value of "this" in the function. Again, it does not simplify things.

// The new way:
displayFn(...argumentList, rank);
// better....`;

const MD4 = /* language=md */ `
You can see some of the benefits right away:

- Simpler code, no need to know about \`this\` and the correct arguments for \`apply\`, you don't have to remember if
  \`slice()\` modifies the existing array ( its not, it is used to make a copy ), you won't mutate \`argumentList\` and use it
  later without remembering etc... I'm not going to make this statement every time, I promise, but only because I don't like repeating myself.

Let's see the another option, in creating a new array:
`;

const Code3 = /* language=js */ `// Old:
const newArray = argumentList.slice().concat([rank]);
// ["Old", "Timer", "Veteran"]
// New:
const newArrayWithSpread = [...argumentList, rank];
// ["Old", "Timer", "Veteran"]
// We might want to put rank first, why not?
const rankFirstArray = [rank, ...argumentList];
// ["Veteran", "Old", "Timer"]
console.log("newArray", newArray);
console.log("newArrayWithSpread", newArrayWithSpread);
console.log("rankFirstArray", rankFirstArray);`;

const MD5 = /* language=md */ `
Again, you don't have to remember _any_ built-in functions.

If you see it for the first time then it can get confusing for a moment, but after that period it's very easy to read.

You can also concat multiple arrays, with elements between arrays:
`;

const Code4 = /* language=js */ `// Fibonacci sequence start
console.log([1, ...[1, 2], 3, ...[5, 8, 13]]);`;

const MD6 = /* language=md */ `
The line above prints out the fibonacci numbers up to \`13\`.
## Rest operator on arrays

The rest is used

1. at an argument in a function definition
2. at variable declaration, between \`[\` and \`]\`

The first one is mainly used for functions which have a variable length argument list, meaning you can pass as many
arguments as one ( for ex. \`console.log\` is such a function, try \`console.log("1","2","3")\` ).

Let's see a simple example, which removes the first item from an array, prints it on the console, and returns the
sum of the remaining items:
`;

const Code5 = /* language=js */ `// old
function sumNumbersWithoutFirst() {
  const args = Array.prototype.slice.call(arguments);
  const firstArgument = args.pop(0);
  console.log(\`Removed \${firstArgument} from list\`);
  const sum = args.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0,
  );
  return sum;
}
// new
const sumNumbersWithoutFirstRest = (firstArgument, ...numbersRest) => {
  console.log(\`Removed \${firstArgument} from list\`);
  // The following expression just adds up all items in a list to a single number
  const sum = numbersRest.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0,
  );
  return sum;
};
console.log(sumNumbersWithoutFirst(1, 2, 3, 4));
console.log(sumNumbersWithoutFirstRest(1, 2, 3, 4));
// Does the same thing, prints out 1, returns 2+3+4 = 9`;

const MD7 = /* language=md */ `
Where does \`arguments\` in the old example comes from? It exists in every function, and it is an Array-like object,
meaning that sometimes it behaves like an array, sometimes it does not. It does not for example have a \`.reduce\` method.
You have to create a new array ( from which you have to pop out a member ) from \`arguments\`, which then you can use.

As you can see you have to remember a lot of things again, just to solve a relatively simple problem.
The bonus is that in a good IDE ( let's say Webstorm ) you get much better type hints.

One thing to remember that in an argument list the rest operator must be at the last argument. You can't do this:
`;

const Code6 = /* language=js */ `// Syntax error
const fn = (first, ...restArgs, last) => { /* C O D E */ }`;

const MD8 = /* language=md */ `
One way to think of this is that a javascript function has infinite arguments, they are just undefined :).
You don't know, and neither the computer where it "ends". Or just get used to it.

For the variable declaration:
`;

const Code7 = /* language=js */ `// old
const headOld = numberArr.slice()[0];
const remainingOld = numberArr.slice(1);
// new
const [head, ...remaining] = numberArr;
console.log("headOld", headOld);
console.log("remainingOld", remainingOld);
console.log("head", head);
console.log("remaining", remaining);`;

const MD9 = /* language=md */ `
  Again, numberArr is mutated. Of course you can get around the mutation issue even with "old" JS, but it will be messier.


    Usage with object is coming up in the next part!`;

const Article: FunctionComponent<{}> = () => {
  const [sharedCode, setSharedCode] = useState(SharedCode);
  return (
    <>
      <ArticleShareOgTags
        url={article1Metadata.url}
        title={article1Metadata.title}
        description={article1Metadata.introText}
        imgSrc={article1Metadata.imgSrc}
      />
      <ArticleWrapper>
        <MarkDown source={MD0} />
        <CodeEditor
          value={sharedCode}
          onChange={setSharedCode}
          minHeight="10rem"
          noRun
        />
        <MarkDown source={MD1} />
        <CodeEditor value={Code1} hiddenCode={SharedCode} minHeight="5rem" />
        <MarkDown source={MD2} />
        <MarkDown source={MD3} />
        <CodeEditor value={Code2} hiddenCode={sharedCode} />
        <MarkDown source={MD4} />
        <CodeEditor value={Code3} hiddenCode={sharedCode} />
        <MarkDown source={MD5} />
        <CodeEditor value={Code4} hiddenCode={sharedCode} />
        <MarkDown source={MD6} />
        <CodeEditor value={Code5} hiddenCode={sharedCode} />
        <MarkDown source={MD7} />
        <CodeEditor value={Code6} hiddenCode={sharedCode} />
        <MarkDown source={MD8} />
        <CodeEditor value={Code7} hiddenCode={sharedCode} />
        <MarkDown source={MD9} />
      </ArticleWrapper>
    </>
  );
};

export default Article;

import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
} from "@storybook/addon-knobs";

import { Button } from "../front/ui/components/Button";

const stories = storiesOf("Storybook examples", module);
stories.addDecorator(withKnobs);

stories.add("Arrays", () => {
  const value = array("Styles", ["1", "2", "3", "4", "5"], ",");
  return (
    <div>
      {value.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Button key={idx}>{item}</Button>
      ))}
    </div>
  );
});

stories.add("Text, number and boolean", () => {
  const enable = boolean("Enable custom text", false);
  const customText = text("Custom text on button", "custom text test");
  const customNumber = number("A test number", 2);
  return (
    <Button>
      {enable ? customText : "default text"}, {`, number: ${customNumber}`}
    </Button>
  );
});

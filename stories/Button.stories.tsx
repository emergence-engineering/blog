import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../common/components/Button";

storiesOf("Button", module).add("with text", () => <Button>Hello</Button>);
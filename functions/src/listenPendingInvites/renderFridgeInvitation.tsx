import React from "react";
import { render } from "mjml-react";

import SharedItemInvitation from "./SharedItemInvitation";

export default function renderBookInvitation(
  props: React.ComponentProps<typeof SharedItemInvitation>,
) {
  const { html } = render(<SharedItemInvitation {...props} />);
  return html;
}

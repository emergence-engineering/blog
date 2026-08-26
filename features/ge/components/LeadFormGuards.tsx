import React, { FunctionComponent } from "react";

/**
 * Honeypot field for the site's forms. Positioned off-screen rather than
 * `display:none` — bots that skip hidden inputs still fill this one, and it
 * stays out of the tab order and the accessibility tree for real visitors.
 *
 * The matching time check lives in useLeadForm / the API route.
 */
export const LeadFormGuards: FunctionComponent = () => (
  <input
    type="text"
    name="company_url"
    tabIndex={-1}
    autoComplete="off"
    aria-hidden="true"
    style={{
      position: "absolute",
      left: "-9999px",
      width: "1px",
      height: "1px",
      opacity: 0,
      pointerEvents: "none",
    }}
  />
);

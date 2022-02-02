import styled from "styled-components";
import React from "react";

const DevtoolsRoot = styled.div`
  position: relative;
  padding-bottom: 2rem;
  .floating-btn.bottom-right {
    position: relative !important;
    top: 8px !important;
    right: 0 !important;
  }
`;

export const DevToolkit = () => (
  <DevtoolsRoot className="__prosemirror-dev-toolkit__" />
);

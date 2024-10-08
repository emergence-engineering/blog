import { css } from "styled-components";

export const withoutResizeStyle = css`
  .imagePluginRoot[imageplugin-align="left"] {
    width: 51%;
    float: left;
    margin: 1rem 2rem 0 0;
  }
  .imagePluginRoot[imageplugin-align="right"] {
    width: 51%;
    float: right;
    margin: 0;
  }
  .imagePluginRoot[imageplugin-align="center"] {
    width: 51%;
    float: none;
    margin: 0 auto;
  }

  .imagePluginRoot[imageplugin-align="fullWidth"] {
    width: auto;
    float: none;
    clear: both;
  }

  .alignFullWidthButton,
  .alignRightButton,
  .alignLeftButton,
  .alignCenterButton {
    width: 5rem;
  }

  .imagePluginRoot[imageplugin-align="left"] [imagealign="left"] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align="right"] [imagealign="right"] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align="center"] [imagealign="center"] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align="fullWidth"] [imagealign="fullWidth"] {
    background-color: red;
  }
`;

export const resizeStyle = css`
  .imagePluginRoot[imageplugin-align="left"] {
    float: left;
    margin: 1rem 2rem 0 0;
  }
  .imagePluginRoot[imageplugin-align="right"] {
    float: right;
    margin: 0;
  }
  .imagePluginRoot[imageplugin-align="center"] {
    float: none;
    margin: 0 auto;
  }

  .imagePluginRoot[imageplugin-align="fullWidth"] {
    width: auto;
    float: none;
    clear: both;
  }

  .alignFullWidthButton {
    display: none;
  }

  .alignRightButton,
  .alignLeftButton,
  .alignCenterButton {
    width: 5rem;
  }

  .imagePluginRoot[imageplugin-align="left"] [imagealign="left"] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align="right"] [imagealign="right"] {
    background-color: red;
  }
  .imagePluginRoot[imageplugin-align="center"] [imagealign="center"] {
    background-color: red;
  }

  .imageResizeBox {
    background-repeat: no-repeat;
    box-sizing: border-box;
    left: 0;
    position: relative;
    top: 0;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 0 1px 1px darkblue;
    align-self: center;
  }

  .imageResizeBox.active {
    transition: none;
  }

  .imageResizeBoxControl {
    height: 5px;
    position: absolute;
    width: 5px;
    z-index: 2;
  }

  .imagePluginRoot:hover .imageResizeBox,
  .imageResizeBox.active {
    opacity: 1;
  }

  .imageResizeBoxControl.topLeft {
    cursor: nw-resize;
    left: -5px;
    top: -5px;
  }

  .imageResizeBoxControl.top {
    cursor: n-resize;
    left: 50%;
    margin-left: -5px;
    top: -5px;
  }

  .imageResizeBoxControl.topRight {
    cursor: ne-resize;
    right: 0;
    top: -5px;
  }

  .imageResizeBoxControl.right {
    cursor: e-resize;
    margin-top: -5px;
    right: 0;
    top: 50%;
  }

  .imageResizeBoxControl.bottomRight {
    cursor: se-resize;
    bottom: 0;
    right: 0;
  }

  .imageResizeBoxControl.bottom {
    cursor: s-resize;
    bottom: 0;
    left: 50%;
    margin-left: -5px;
  }

  .imageResizeBoxControl.bottomLeft {
    cursor: sw-resize;
    bottom: 0;
    left: -5px;
  }

  .imageResizeBoxControl.left {
    cursor: w-resize;
    left: -5px;
    margin-top: -5px;
    top: 50%;
  }

  .imageResizeBoxControl::after {
    background-color: darkgreen;
    border: solid 1px #fff;
    box-sizing: border-box;
    content: "";
    height: 10px;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 10px;
  }

  .imageResizeBoxControl::before {
    bottom: -10px;
    content: "";
    left: -10px;
    position: absolute;
    right: -10px;
    top: -10px;
  }

  @media only print {
    .imageResizeBox {
      display: none;
    }
  }

  .imageResizeBoxWrapper {
    position: absolute;
    width: 100%;
    justify-content: center;
    display: flex;
  }

  .imageResizeBoxCenter {
    position: relative;
  }
  .imageResizeBox {
    position: absolute;
  }
  .imageResizeBoxControl {
    z-index: 1000;
  }
`;

export const sideResizeStyle = css`
  .imageResizeBoxControl {
    display: none;
  }

  .imageResizeBoxControl.bottomRight {
    display: inline-block;
    cursor: e-resize;
    margin-top: -5px;
    right: 0;
    top: 50%;
  }

  .imageResizeBoxControl.bottomLeft {
    display: inline-block;
    cursor: w-resize;
    left: -5px;
    margin-top: -5px;
    top: 50%;
  }

  .imageResizeBoxControl::after {
    background-color: darkgreen;
    border: solid 1px #fff;
    box-sizing: border-box;
    content: "";
    height: 50px;
    left: 0px;
    position: absolute;
    top: -20px;
    width: 10px;
  }
`;

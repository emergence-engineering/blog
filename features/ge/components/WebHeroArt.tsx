/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";

const A = "/ge/img/wd-hero";

/**
 * The web-development page hero artwork, rebuilt from the Figma component
 * geometry (600×600 frame) instead of a flattened export: the glass panels
 * and skeleton bars are CSS, the illustration layers are the exported
 * vectors, so everything stays sharp at any resolution and the page
 * background shows through. The artwork has no text layers, so nothing needs
 * localizing. All coordinates are Figma design pixels; --u (set in ge.css)
 * converts one design pixel to the current container width.
 */
const px = (n: number) => `calc(${n} * var(--u))`;

const box = (x: number, y: number, w: number, h?: number): React.CSSProperties => ({
  left: px(x),
  top: px(y),
  width: px(w),
  height: h === undefined ? undefined : px(h),
});

const Layer: FunctionComponent<{ src: string; x: number; y: number; w: number; h: number }> = ({
  src,
  x,
  y,
  w,
  h,
}) => <img src={src} alt="" className="wd-abs" style={box(x, y, w, h)} />;

export const WebHeroArt: FunctionComponent = () => (
  <div className="wd-art">
    <Layer src={`${A}/ellipse.svg`} x={-81} y={-85} w={807} h={807} />
    <Layer src={`${A}/pipes.svg`} x={65.6} y={433} w={386.4} h={69} />

    <div className="wd-abs wd-glass" style={{ ...box(124, 141, 90, 90), borderRadius: px(18) }}>
      <Layer src={`${A}/ic-ai.svg`} x={4.9} y={2.6} w={78.6} h={82.1} />
    </div>
    <span className="wd-abs wd-bar" style={box(124, 243.1, 90, 35.4)} />
    <span className="wd-abs wd-bar" style={box(124, 282.5, 90, 35.4)} />
    <span className="wd-abs wd-bar" style={box(124, 321.9, 90, 35.4)} />
    <span className="wd-abs wd-bar" style={box(124, 361.3, 90, 35.4)} />
    <span className="wd-abs wd-bar wd-glass" style={box(124, 400.6, 90, 35.4)} />

    <Layer src={`${A}/gear-cloud.svg`} x={217} y={28} w={252} h={179.7} />
    <Layer src={`${A}/cloud-dl.svg`} x={392.6} y={211} w={98.8} h={84.1} />
    <Layer src={`${A}/house.svg`} x={386.7} y={310.5} w={111.6} h={126.6} />
    <Layer src={`${A}/ic-code.svg`} x={401.9} y={345.6} w={78.6} h={82.1} />

    <div className="wd-abs wd-phone" style={box(252, 206.7, 113)}>
      <div className="wd-phone-bar">
        <img src={`${A}/ic-back.svg`} alt="" style={{ width: px(8.4), height: px(8.4) }} />
        <span className="wd-phone-pill">
          <img src={`${A}/ic-search.svg`} alt="" style={{ width: px(8.4), height: px(8.4) }} />
        </span>
        <img src={`${A}/ic-add.svg`} alt="" style={{ width: px(8.4), height: px(8.4) }} />
      </div>
      <div className="wd-glass" style={{ height: px(209.7) }} />
      <div className="wd-cols" style={{ left: px(15), top: px(40) }}>
        <span style={{ height: px(70) }} />
        <span style={{ height: px(55) }} />
        <span style={{ height: px(40) }} />
        <span style={{ height: px(28) }} />
      </div>
    </div>
    <Layer src={`${A}/donut.svg`} x={270} y={335.7} w={78} h={78} />
  </div>
);

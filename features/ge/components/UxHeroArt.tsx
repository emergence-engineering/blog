/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";
import { useGeT } from "../i18n/useGeT";

const A = "/ge/img/ux-hero";

/**
 * The UX/UI design page hero artwork, rebuilt from the Figma component
 * geometry (600×600 frame, node 11873:67359) instead of a flattened export:
 * the phone mockup and its skeleton bars are CSS, the illustration layers are
 * the exported vectors, and the three tile labels are live text so they
 * switch with the language toggle. All coordinates are Figma design pixels;
 * --u (set in ge.css) converts one design pixel to the container width.
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
}) => <img src={src} alt="" className="ux-abs" style={box(x, y, w, h)} />;

const TILES = [
  // y = tile top; icon geometry is relative to the tile's inner 36px box.
  { y: 89, icon: "ic-pain", iw: 96.9, ih: 106.2, ix: -25.2, iy: -41, gx: 3.3, gy: 0.8, strong: false, key: "ux.hero.tag1", hu: "Felhasználói fájdalompontok", ly: 184 },
  { y: 230, icon: "ic-leaks", iw: 101.3, ih: 81.9, ix: -30.8, iy: -18.7, gx: 7.3, gy: -0.2, strong: false, key: "ux.hero.tag2", hu: "Elszivárgó konverziók", ly: 325 },
  { y: 368, icon: "ic-usability", iw: 49.6, ih: 48.2, ix: -7.2, iy: -6.6, gx: 3.2, gy: 1.4, strong: true, key: "ux.hero.tag3", hu: "Használhatósági hibák", ly: 463 },
];

export const UxHeroArt: FunctionComponent = () => {
  const t = useGeT();
  return (
    <div className="ux-art">
      <Layer src={`${A}/ellipse.svg`} x={-127} y={-111.3} w={819} h={819} />

      {/* phone mockup */}
      <div className="ux-abs ux-phone" style={box(57, 91, 186.7, 381)}>
        <div className="ux-phone-bar">
          <img src={`${A}/ic-back.svg`} alt="" style={{ width: px(13.8), height: px(13.8) }} />
          <span className="ux-phone-pill">
            <img src={`${A}/ic-search.svg`} alt="" style={{ width: px(13.8), height: px(13.8) }} />
          </span>
          <img src={`${A}/ic-add.svg`} alt="" style={{ width: px(13.8), height: px(13.8) }} />
        </div>
        <div className="ux-abs ux-glass" style={box(0, 34.6, 186.7, 346.4)} />
        <span className="ux-abs ux-bar" style={{ ...box(16, 52, 22, 22), borderRadius: "50%" }} />
        <span className="ux-abs ux-bar" style={box(46, 57.4, 123, 11.2)} />
        <span className="ux-abs ux-glass" style={{ ...box(15, 85, 62, 62), borderRadius: px(4) }} />
        <span className="ux-abs ux-glass" style={{ ...box(89, 85, 63, 62), borderRadius: px(4) }} />
        <span className="ux-abs ux-glass" style={{ ...box(164, 85, 62, 62), borderRadius: px(4) }} />
        <span className="ux-abs ux-glass" style={{ ...box(15, 166, 156, 62), borderRadius: px(4) }} />
        <span className="ux-abs ux-bar" style={box(16, 252, 87, 11)} />
        <span className="ux-abs ux-bar" style={box(16, 275, 153, 11.2)} />
        <span className="ux-abs ux-bar" style={box(16, 292.2, 153, 11.2)} />
        <span className="ux-abs ux-bar" style={box(16, 309.4, 130, 11)} />
        <span className="ux-abs ux-bar" style={box(16, 332.4, 51, 17)} />
      </div>

      <Layer src={`${A}/star1.svg`} x={29.5} y={289.7} w={35.1} h={33.6} />
      <Layer src={`${A}/star2.svg`} x={214.4} y={50.3} w={49.1} h={47} />
      <img src={`${A}/dashes.svg`} alt="" className="ux-abs ux-flip" style={box(267, 126.7, 247, 294)} />

      {TILES.map((c) => (
        <React.Fragment key={c.key}>
          <div className="ux-abs ux-tile" style={box(318, c.y, 90.1, 90.1)}>
            <div className="ux-abs" style={box(27, 27, 36, 36)}>
              <span className={"ux-abs ux-glow" + (c.strong ? " ux-glow-strong" : "")} style={box(c.gx, c.gy, 29.7, 33.2)} />
              <img src={`${A}/${c.icon}.svg`} alt="" className="ux-abs" style={box(c.ix, c.iy, c.iw, c.ih)} />
            </div>
          </div>
          <div
            className="ux-abs ux-tag"
            style={{ left: px(363), top: px(c.ly), width: px(160) }}
            dangerouslySetInnerHTML={{ __html: t(c.key, c.hu) }}
          />
        </React.Fragment>
      ))}

      <div className="ux-abs ux-flip" style={box(486, 365, 95, 95)}>
        <img src={`${A}/pacman.svg`} alt="" className="ux-abs" style={box(0, 0, 84.8, 95)} />
      </div>
    </div>
  );
};

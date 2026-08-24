/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent, ReactNode } from "react";

import { useGeT } from "../i18n/useGeT";

const A = "/ge/img/gm-hero";

/**
 * The marketing-page hero artwork, rebuilt from the Figma component geometry
 * (615px-wide frame) instead of a flattened export: the browser mockup and
 * gradient backdrop are CSS plus the exported vectors, while the four service
 * chips are live, localized text, so everything stays sharp at any resolution
 * and switches with the locale. All coordinates are Figma design pixels; --u
 * (set in ge.css) converts one design pixel to the current container width.
 */
const px = (n: number) => `calc(${n} * var(--u))`;

const box = (x: number, y: number, w: number, h?: number): React.CSSProperties => ({
  left: px(x),
  top: px(y),
  width: px(w),
  height: h === undefined ? undefined : px(h),
});

const Chip: FunctionComponent<{ x: number; y: number; label: string; children: ReactNode }> = ({
  x,
  y,
  label,
  children,
}) => (
  <div className="gm-chip" style={{ left: px(x), top: px(y) }}>
    <span className="gm-chip-ic">{children}</span>
    <span dangerouslySetInnerHTML={{ __html: label }} />
  </div>
);

export const GmHeroArt: FunctionComponent = () => {
  const t = useGeT();
  return (
    <div className="gm-art">
      <img className="gm-abs" src={`${A}/ellipse.svg`} alt="" style={box(-100, -115.3, 869, 869)} />
      <div className="gm-abs gm-browser" style={box(168.8, 105.3, 718.3, 460.9)} />
      <div className="gm-abs gm-browser-bar" style={box(168.8, 104.7, 718.2, 63.5)}>
        <img src={`${A}/logo.svg`} alt="" style={{ width: px(60.8), height: px(11.3) }} />
        <span className="gm-pill" />
        <img src={`${A}/menu.svg`} alt="" style={{ width: px(27), height: px(27) }} />
      </div>
      <div className="gm-abs gm-skel" style={box(201.9, 284.6, 303.1)}>
        <span />
        <span />
        <span style={{ width: px(184.8) }} />
      </div>
      <span className="gm-abs gm-grad-btn" style={box(201.9, 407.6, 105.8, 31.7)} />

      <Chip x={343} y={4.7} label={t("gm.hero.chip1", "SEO/AIO")}>
        <img src={`${A}/ic-search.svg`} alt="" className="gm-abs" style={box(-23.5, -27.5, 81.8, 85)} />
      </Chip>
      <Chip x={48} y={155.7} label={t("gm.hero.chip2", "PPC hirdetés")}>
        <span
          className="gm-abs gm-glow"
          style={{ ...box(0.3, 0.3, 34.3, 34.3), filter: `blur(${px(14.5)})` }}
        />
        <span className="gm-abs gm-glass" style={box(0.9, 7.3, 34.3, 26.5)} />
        <img src={`${A}/ic-chart.svg`} alt="" className="gm-abs" style={box(4.9, 0.9, 27.8, 29)} />
      </Chip>
      <Chip x={306} y={333.7} label={t("gm.hero.chip3", "CRO és webdesign")}>
        <span
          className="gm-abs gm-glow"
          style={{ ...box(8.1, 6.6, 23.4, 26.2), filter: `blur(${px(13.8)})` }}
        />
        <img src={`${A}/ic-cart.svg`} alt="" className="gm-abs" style={box(0.9, 1.8, 38.2, 40.5)} />
      </Chip>
      <Chip x={25} y={508.7} label={t("gm.hero.chip4", "E-mail marketing és automatizáció")}>
        <span
          className="gm-abs gm-glow"
          style={{ ...box(6.1, 5.7, 24.2, 27), filter: `blur(${px(12.4)})` }}
        />
        <img src={`${A}/ic-mail-a.svg`} alt="" className="gm-abs" style={box(-11.7, -9.4, 60.4, 63.9)} />
        <img src={`${A}/ic-mail-b.svg`} alt="" className="gm-abs" style={box(5.2, -1.5, 25.9, 20)} />
      </Chip>
    </div>
  );
};

/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";

import { useGeT } from "../i18n/useGeT";

const UX = "/ge/img/ux-hero";
const GM = "/ge/img/gm-hero";

/**
 * The creative & video production page hero artwork, composed in the same
 * family as the marketing / UX / web hero arts (600×600 design frame): a
 * phone playing a vertical video in the middle, two tilted creative variants
 * behind it, and three platform chips with live, localized labels. Everything
 * is CSS plus the vector layers the sibling arts already ship, so it stays
 * sharp at any size and shows no client work. All coordinates are design
 * pixels; --u (set in ge.css) converts one design pixel to the container
 * width.
 */
const px = (n: number) => `calc(${n} * var(--u))`;

const box = (x: number, y: number, w: number, h?: number): React.CSSProperties => ({
  left: px(x),
  top: px(y),
  width: px(w),
  height: h === undefined ? undefined : px(h),
});

const Chip: FunctionComponent<{ x: number; y: number; label: string }> = ({ x, y, label }) => (
  <div className="gm-chip" style={{ left: px(x), top: px(y) }}>
    <span className="gm-chip-ic">
      <span
        className="gm-abs gm-glow"
        style={{ ...box(0.3, 0.3, 34.3, 34.3), filter: `blur(${px(14.5)})` }}
      />
      <span className="gm-abs gm-glass" style={box(0.9, 7.3, 34.3, 26.5)} />
      <span className="gm-abs cv-play cv-play-sm" style={box(9.5, 12, 17, 17)} />
    </span>
    <span dangerouslySetInnerHTML={{ __html: label }} />
  </div>
);

/* A tilted "creative variant" card behind the phone: media block + caption bars. */
const Variant: FunctionComponent<{ x: number; y: number; tilt: number }> = ({ x, y, tilt }) => (
  <div className="cv-abs cv-card" style={{ ...box(x, y, 168, 300), transform: `rotate(${tilt}deg)` }}>
    <span className="cv-abs cv-media" style={box(12, 12, 144, 196)} />
    <span className="cv-abs ux-bar" style={box(12, 224, 104, 10)} />
    <span className="cv-abs ux-bar" style={box(12, 242, 132, 10)} />
    <span className="cv-abs ux-bar" style={box(12, 260, 76, 10)} />
  </div>
);

export const CvHeroArt: FunctionComponent = () => {
  const t = useGeT();
  return (
    <div className="cv-art">
      <img className="cv-abs" src={`${GM}/ellipse.svg`} alt="" style={box(-127, -111.3, 819, 819)} />
      <img className="cv-abs" src={`${UX}/dashes.svg`} alt="" style={box(452, 118, 130, 155)} />
      <img className="cv-abs" src={`${UX}/star1.svg`} alt="" style={box(38, 62, 35.1, 33.6)} />
      <img className="cv-abs" src={`${UX}/star2.svg`} alt="" style={box(528, 336, 49.1, 47)} />

      <Variant x={48} y={128} tilt={-7} />
      <Variant x={384} y={150} tilt={7} />

      {/* phone playing a vertical video */}
      <div className="cv-abs cv-phone" style={box(207, 52, 186, 404)}>
        <div className="ux-phone-bar">
          <img src={`${UX}/ic-back.svg`} alt="" style={{ width: px(13.8), height: px(13.8) }} />
          <span className="ux-phone-pill">
            <img src={`${UX}/ic-search.svg`} alt="" style={{ width: px(13.8), height: px(13.8) }} />
          </span>
          <img src={`${UX}/ic-add.svg`} alt="" style={{ width: px(13.8), height: px(13.8) }} />
        </div>
        <div className="cv-abs cv-video" style={box(0, 34, 186, 290)}>
          <span className="cv-abs cv-playbtn" style={box(67, 119, 52, 52)}>
            <span className="cv-play" />
          </span>
          <span className="cv-abs cv-track" style={box(14, 270, 158, 4)}>
            <span className="cv-fill" />
          </span>
        </div>
        <span className="cv-abs ux-bar" style={box(14, 340, 120, 11)} />
        <span className="cv-abs ux-bar" style={box(14, 358, 90, 11)} />
        <span className="cv-abs gm-grad-btn" style={box(14, 380, 88, 26)} />
      </div>

      <Chip x={2} y={392} label={t("con.hero.chip1", "Reels")} />
      <Chip x={400} y={8} label={t("con.hero.chip2", "TikTok")} />
      <Chip x={372} y={470} label={t("con.hero.chip3", "LinkedIn")} />
    </div>
  );
};

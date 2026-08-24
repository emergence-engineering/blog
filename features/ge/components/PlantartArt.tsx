/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";

import { useGeT } from "../i18n/useGeT";

const A = "/ge/img/pa-art";

/**
 * The Plantart case-study timeline illustrations, rebuilt from the Figma
 * component geometry (576px-wide frames) instead of flattened exports: the
 * artwork layers are the exported vectors, while the labels are live,
 * localized text, so everything stays sharp at any resolution and the page
 * background shows through. All coordinates are Figma design pixels; --u
 * (set in ge.css) converts one design pixel to the current container width.
 */
const px = (n: number) => `calc(${n} * var(--u))`;

const Layer: FunctionComponent<{ src: string; x: number; y: number; w: number }> = ({
  src,
  x,
  y,
  w,
}) => (
  <img src={src} alt="" className="pa-abs" style={{ left: px(x), top: px(y), width: px(w) }} />
);

const Chip: FunctionComponent<{
  x: number;
  y: number;
  label: string;
  fs?: number;
  maxW?: number;
}> = ({ x, y, label, fs = 16, maxW }) => (
  <div
    className={maxW ? "pa-chip wrap" : "pa-chip"}
    style={{
      left: px(x),
      top: px(y),
      fontSize: px(fs),
      maxWidth: maxW ? px(maxW) : undefined,
    }}
  >
    <span className="pa-chip-ic">
      <img src={`${A}/mag-icon.svg`} alt="" />
    </span>
    <span dangerouslySetInnerHTML={{ __html: label }} />
  </div>
);

/** Phase 1: audit gears with a magnifier and the three focus-area chips. */
export const PaAuditArt: FunctionComponent<{ alt: string }> = ({ alt }) => {
  const t = useGeT();
  return (
    <div className="pa-illu" style={{ aspectRatio: "576 / 605.3" }} role="img" aria-label={alt}>
      <Layer src={`${A}/audit-blob.svg`} x={-36} y={-21} w={649} />
      <Layer src={`${A}/audit-gear-big.svg`} x={-7} y={13} w={596.8} />
      <Layer src={`${A}/audit-gear-small.svg`} x={132.5} y={152.1} w={311.9} />
      <Layer src={`${A}/mag-icon.svg`} x={218.6} y={226.5} w={160.1} />
      <Chip x={303.9} y={88.5} label={t("cspa.art.vp", "Értékajánlat")} />
      <Chip x={16} y={170} maxW={218} label={t("cspa.art.lead", "Lead-szerzési stratégia")} />
      <Chip x={283} y={413} label={t("cspa.art.bn", "Szűk keresztmetszetek")} />
    </div>
  );
};

/** Phase 2: webshop product card with the first-year revenue badge. */
export const PaEcomArt: FunctionComponent<{ alt: string }> = ({ alt }) => {
  const t = useGeT();
  return (
    <div className="pa-illu" style={{ aspectRatio: "576 / 484.8" }} role="img" aria-label={alt}>
      <div className="pa-ecard" style={{ left: px(97.4), top: px(89.8), width: px(252.8) }}>
        <img className="pa-ecard-photo" src={`${A}/ecom-photo.webp`} alt="" />
        <div className="pa-ecard-body">
          <span className="pa-bar" style={{ width: "100%" }} />
          <img
            src={`${A}/ecom-dots.svg`}
            alt=""
            style={{ width: px(112.2), marginTop: px(5.4) }}
          />
          <div className="pa-ecard-row">
            <span className="pa-bar" style={{ width: px(74.6) }} />
            <span className="pa-cartbtn">
              <img src={`${A}/ecom-cart.svg`} alt="" style={{ width: px(23.2) }} />
            </span>
          </div>
        </div>
      </div>
      <div
        className="pa-rev"
        style={{ left: px(315.9), top: px(164.2), minWidth: px(162.8), height: px(218.5) }}
      >
        <img
          src={`${A}/ecom-bars.svg`}
          alt=""
          className="pa-abs"
          style={{ left: px(-0.7), top: px(-8.1), width: px(301) }}
        />
        <div className="pa-rev-txt">
          <p className="amt">
            <span className="plus">+ </span>
            <span dangerouslySetInnerHTML={{ __html: t("cspa.art.rev", "100 millió Ft") }} />
          </p>
          <p className="sub" dangerouslySetInnerHTML={{ __html: t("cspa.art.revsub", "Árbevétel-növekedés") }} />
        </div>
      </div>
      <div className="pa-cartglass" style={{ left: px(128.1), top: px(26), width: px(85), height: px(85) }}>
        <span className="blob" />
        <img
          src={`${A}/ecom-cart2.svg`}
          alt=""
          className="pa-abs"
          style={{ left: px(18.2), top: px(20.3), width: px(51.3) }}
        />
      </div>
    </div>
  );
};

/** Phase 4: the internal engine — arrows, gear, chart tile and tooling chips. */
export const PaCrmArt: FunctionComponent<{ alt: string }> = ({ alt }) => {
  const t = useGeT();
  return (
    <div className="pa-illu" style={{ aspectRatio: "576 / 605.3" }} role="img" aria-label={alt}>
      <Layer src={`${A}/crm-blob.svg`} x={-20} y={-4} w={615} />
      <Layer src={`${A}/crm-arrows.svg`} x={45} y={50} w={506} />
      <Layer src={`${A}/crm-gear.svg`} x={142.5} y={152.1} w={311.9} />
      <div
        className="pa-abs pa-chart-blur"
        style={{ left: px(276.5), top: px(280.8), width: px(52.2), height: px(46.3) }}
      />
      <div
        className="pa-abs pa-glass"
        style={{ left: px(269.5), top: px(279.8), width: px(59.2), height: px(45.7) }}
      />
      <Layer src={`${A}/crm-chart.svg`} x={276.5} y={268.8} w={48} />
      <Chip x={347} y={123} fs={20} label={t("cspa.art.crm", "Salesforce CRM")} />
      <Chip x={15} y={152} fs={20} label={t("cspa.art.st", "Sales tréning")} />
      <Chip x={123} y={463} fs={20} label={t("cspa.art.aq", "Automatikus ajánlatkészítő")} />
    </div>
  );
};

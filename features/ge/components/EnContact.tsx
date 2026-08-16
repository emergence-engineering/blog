import React, { FunctionComponent } from "react";
import Link from "next/link";

/**
 * Closing contact CTA of the English (software) side. Extracted from the
 * index-en page so the legacy pages (blog, articles, references, opensource)
 * close with the same block instead of the old dark contact form.
 *
 * Wrapped in .ge because the GE stylesheet is scoped to it.
 */
export const EnContact: FunctionComponent = () => (
  <div className="ge w-full">
    <section className="on-navy" id="contact">
      <div className="wrap">
        <div className="cta">
          <div className="eyebrow rv in">Let’s talk</div>
          <h2 className="rv in">Building something hard?</h2>
          <p className="lede rv in">If your product lives or dies on the editor, the collaboration, or getting something impossible to run in the browser, that’s exactly the conversation we like.</p>
          <div className="btns rv in">
            <Link href="/contact-en" className="btn">Book a call <span className="ar">→</span></Link>
            <a href="mailto:info@emergence-engineering.com" className="btn btn-line">Prefer email?</a>
          </div>
          <p className="rv in" style={{ fontSize: ".88rem", color: "#8FA0B8" }}>No sales pitch. Just an honest read on whether we’re the right team for your problem.</p>
        </div>
      </div>
    </section>
  </div>
);

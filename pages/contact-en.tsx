import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import { EnShell } from "../features/ge/components/EnShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { LeadFormGuards } from "../features/ge/components/LeadFormGuards";
import { useLeadForm } from "../features/ge/hooks/useLeadForm";

// Ported from growth-engineers-v4/contact-en.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const ContactEn: NextPage = () => {
  const form = useLeadForm({ kind: "enquiry", source: "/contact-en" });
  return (
    <EnShell page="contact-en">
      <GeSEO
        enOnly
        title="Book a call — Emergence Engineering"
        description="Tell us about your project: rich-text editors, real-time collaboration, browser-native software or AI-native features. A senior engineer joins the first call, and we reply within one business day."
        ogTitle="Book a call — Emergence Engineering"
        ogDescription="A senior engineer joins the first call, not a salesperson. We reply within one business day."
      />
      <section className="phero">
        <div className="wrap">
          <div className="crumbs rv">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Book a call</span>
          </div>
          <div className="eyebrow rv">Let’s talk</div>
          <h1 className="rv">Building something <mark>hard?</mark></h1>
          <p className="lede rv" style={{ maxWidth: "58ch" }}>If your product lives or dies on the editor, the collaboration, or getting something impossible to run in the browser, that’s exactly the conversation we like.</p>
        </div>
      </section>
      <section className="tight-top">
        <div className="wrap">
          <div className="contact-grid">
            <div className="rv">
              <h2 style={{ fontSize: "clamp(1.4rem,2.6vw,1.9rem)" }}>What happens next</h2>
              <ul className="cbullets">
                <li>A senior engineer joins the first call, not a salesperson</li>
                <li>We’ll tell you straight if we’re not the right team for it</li>
                <li>You get a technical read on feasibility, scope and rough timeline</li>
                <li>We reply within one business day</li>
              </ul>
              <div className="cmeta"><b>Emergence Engineering Kft.</b><br /> Budapest, EU<br /> <a href="mailto:info@emergence-engineering.com">info@emergence-engineering.com</a></div>
            </div>
            <div className="rv">
              <div className="formcard">
                <h3 style={{ marginBottom: "1.4rem" }}>Tell us about your project</h3>
                <form onSubmit={form.onSubmit}>
                  <LeadFormGuards />
                  <div className="frow">
                    <div className="fld">
                      <label htmlFor="en-name">Your name*</label>
                      <input id="en-name" name="name" required />
                    </div>
                    <div className="fld">
                      <label htmlFor="en-co">Company</label>
                      <input id="en-co" name="company" />
                    </div>
                  </div>
                  <div className="frow">
                    <div className="fld">
                      <label htmlFor="en-mail">Email*</label>
                      <input id="en-mail" type="email" name="email" required placeholder="you@company.com" />
                    </div>
                    <div className="fld">
                      <label htmlFor="en-web">Website</label>
                      <input id="en-web" name="website" placeholder="https://" />
                    </div>
                  </div>
                  <div className="fld">
                    <label htmlFor="en-msg">Short description</label>
                    <textarea id="en-msg" name="message" placeholder="Where are you now, and what needs to work in the next few months?" />
                  </div>
                  <label className="consent" style={{ marginBottom: "1.3rem" }}>
                    <input type="checkbox" name="consent" required />
                    <span>I agree that Emergence Engineering Kft. may handle my data per the <Link href="/adatkezeles">privacy policy</Link> and contact me about my enquiry.</span>
                  </label>
                  <button className="btn" type="submit" disabled={form.state === "sending"}>{form.state === "sending" ? "Sending…" : "Send"} <span className="ar">→</span></button>
                  <p className="ok" hidden={form.state !== "ok"} style={{ marginTop: "1rem", fontSize: ".9rem", color: "var(--coral-d)", fontWeight: "600" }}>Thanks! We’ll get back to you within one business day.</p>
                  <p className="err" hidden={form.state !== "error"} style={{ marginTop: "1rem", fontSize: ".9rem", color: "var(--coral-d)", fontWeight: "600" }}>Something went wrong on our side. Please email us directly at <a href="mailto:contact@emergence-engineering.com">contact@emergence-engineering.com</a>.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EnShell>
  );
};

export default ContactEn;

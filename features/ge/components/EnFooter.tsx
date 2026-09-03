import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Footer of the English-only startup-facing pages (index-en, contact-en).
 */
export const EnFooter: FunctionComponent = () => {
  return (
      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div>
              <Link href="/" className="logo">
                <Image className="logo-flower" src="/ge/img/logo-emergence.png" alt="" width={30} height={30} />
                <span className="logo-wm">Emergence<i>/</i><span className="w2">Engineering</span></span>
              </Link>
              <p style={{ maxWidth: "32ch", lineHeight: "1.6" }}>The engineers behind ambitious editors, real-time collaboration and browser-native web apps.</p>
              <p style={{ fontSize: ".9rem", marginTop: ".6rem" }}>Emergence Engineering Ltd. · Budapest, EU</p>
            </div>
            <div>
              <h5>What we build</h5>
              <ul>
                <li>
                  <a href="#build">Rich-text editors</a>
                </li>
                <li>
                  <a href="#build">Real-time collaboration</a>
                </li>
                <li>
                  <a href="#pcbjam">Software in the browser</a>
                </li>
                <li>
                  <a href="#build">AI product engineering</a>
                </li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <Link href="/opensource" rel="noopener">Open source</Link>
                </li>
                <li>
                  <Link href="/contact-en">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5>Get in touch</h5>
              <ul>
                <li>
                  <a href="mailto:info@emergence-engineering.com">info@emergence-engineering.com</a>
                </li>
                <li>
                  <Link href="/" rel="noopener">emergence-engineering.com</Link>
                </li>
                <li>Budapest, EU</li>
              </ul>
            </div>
          </div>
          <div className="fbot">
            <div>© 2026 Emergence Engineering Ltd. All rights reserved.</div>
          </div>
        </div>
      </footer>
  );
};

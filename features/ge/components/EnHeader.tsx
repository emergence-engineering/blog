import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Header of the English-only startup-facing pages (index-en, contact-en).
 */
export const EnHeader: FunctionComponent = () => {
  return (
      <header id="hdr">
        <div className="wrap nav">
          <Link href="/index-en" className="logo">
            <Image className="logo-flower" src="/ge/img/logo-emergence.png" alt="" width={30} height={30} />
            <span className="logo-wm">Emergence<i>/</i><span className="w2">Engineering</span></span>
          </Link>
          <nav className="nav-links" id="navLinks">
            <Link href="/index-en">Home</Link>
            <Link href="/blog" rel="noopener">Blog</Link>
            <Link href="/references" rel="noopener">References</Link>
            <Link href="/opensource" rel="noopener">Open source</Link>
            <Link href="/" className="brandlink">For SMEs →</Link>
          </nav>
          <button className="nav-toggle" id="navToggle" aria-expanded="false">
            <span>Menu</span>
            <span className="burger" aria-hidden="true" />
          </button>
          <Link href="/contact-en" className="btn">Book a call</Link>
        </div>
      </header>
  );
};

import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { EE_HOME } from "../routes";

/**
 * Header of the English (software) side of the site: the startup-facing
 * pages (index-en, contact-en) and the legacy pages that share this menu
 * via TwLayout (blog, team, references, opensource, …).
 */
export const EnHeader: FunctionComponent = () => {
  const { pathname } = useRouter();
  const cur = (route: string): "page" | undefined => {
    if (pathname === route) return "page";
    if (route === "/blog" && pathname.startsWith("/blog")) return "page";
    return undefined;
  };

  return (
      <header id="hdr">
        <div className="wrap nav">
          <Link href={EE_HOME} className="logo">
            <Image className="logo-flower" src="/ge/img/logo-emergence.png" alt="" width={30} height={30} />
            <span className="logo-wm">Emergence<i>/</i><span className="w2">Engineering</span></span>
          </Link>
          <nav className="nav-links" id="navLinks">
            <Link href={EE_HOME} aria-current={cur(EE_HOME)}>Home</Link>
            <Link href="/blog" rel="noopener" aria-current={cur("/blog")}>Blog</Link>
            <Link href="/references" rel="noopener" aria-current={cur("/references")}>References</Link>
            <Link href="/opensource" rel="noopener" aria-current={cur("/opensource")}>Open source</Link>
            <Link href="/growth" className="brandlink">For SMEs →</Link>
          </nav>
          <button className="nav-toggle" id="navToggle" aria-expanded="false">
            <span>Menu</span>
            <span className="burger" aria-hidden="true" />
          </button>
          <Link href="/contact-en" className="btn" aria-current={cur("/contact-en")}>Book a call</Link>
        </div>
      </header>
  );
};

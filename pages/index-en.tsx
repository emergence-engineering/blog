import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { EnShell } from "../features/ge/components/EnShell";
import { GeSEO } from "../features/ge/components/GeSEO";
import { EnTestimonials } from "../features/ge/components/EnTestimonials";

// Ported from growth-engineers-v4/index-en.html; DOM structure intentionally
// mirrors the static original (see features/ge/README.md).
const IndexEn: NextPage = () => {
  return (
    <EnShell page="index-en">
      <GeSEO
        title="Emergence Engineering: Editors, real-time collaboration &amp; hard web apps for startups"
        description="We build the hard parts of modern web products: rich-text editors (ProseMirror, TipTap, Lexical), real-time collaboration, AI-native features, and desktop-grade software in the browser. Trusted by US startups, one acquired by Notion."
        ogTitle="Emergence Engineering, We build the web apps other teams can't"
        ogDescription="Rich-text editors, real-time collaboration, AI features, and desktop software in the browser, for ambitious startups."
      />
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow rv">Software engineering · Budapest, EU</div>
              <h1 className="rv">We build the web apps<br />other teams <mark>can’t.</mark></h1>
              <p className="lede rv">US startups hire us for the hard parts: rich-text editors, real-time collaboration, AI-native features, and desktop-grade software running in the browser. One of our clients was acquired by Notion.</p>
              <div className="hero-cta rv">
                <Link href="/contact-en" className="btn">Book a call <span className="ar">→</span></Link>
                <a href="#opensource" className="btn btn-line">Explore our open source</a>
              </div>
              <div className="trust rv">
                <span><b>Stripe</b> Verified Partner</span>
                <span><b>Open-source</b> ProseMirror maintainers</span>
                <span><b>Show HN</b>, KiCad in the browser</span>
              </div>
            </div>
            <div className="mosaic rv">
              <a className="tile tile-wide" href="#work">
                <Image src="/ge/img/p-suggestcat.webp" alt="AI grammar and completion inside a rich-text editor" width={733} height={484} />
                <span className="tile-label">SuggestCat · AI in the editor</span>
              </a>
              <div className="stat stat-coral">
                <div className="dnum">Notion</div>
                <div className="lbl">acquired Skiff, a product we helped build</div>
              </div>
              <a className="tile" href="#work">
                <Image src="/ge/img/l-axdraft.webp" alt="Axdraft collaborative legal drafting editor" width={728} height={484} />
                <span className="tile-label">Axdraft · collaborative legal editor</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="proof">
        <div className="wrap">
          <div className="proof-in">
            <div>
              <div className="dnum">100%</div>
              <div className="lbl">senior full-stack engineers</div>
            </div>
            <div>
              <div className="dnum">10+ yrs</div>
              <div className="lbl">shipping editors, collaboration and web apps</div>
            </div>
            <div>
              <div className="dnum">50+</div>
              <div className="lbl">founders we’ve worked with</div>
            </div>
            <div>
              <a href="#work" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div className="dnum">Our work <span className="ar" style={{ color: "var(--coral)" }}>→</span></div>
                <div className="lbl">the products we’ve helped build</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="band" id="whatwedo">
        <div className="wrap">
          <h2 className="rv" style={{ textAlign: "center", fontSize: "clamp(1.5rem,2.8vw,2.1rem)", marginBottom: "clamp(2rem,4vw,3rem)" }}>Building Products and Growing Businesses</h2>
          <div className="wwd">
            <div className="wwd-col rv">
              <div className="wwd-brand">
                <Image src="/ge/img/logo-emergence.png" alt="" width={22} height={22} />
                <span>Emergence<i>/</i><span className="w2">Engineering</span></span>
              </div>
              <h3>Engineering</h3>
              <ul>
                <li>ProseMirror / TipTap</li>
                <li>YJS / collaborative applications</li>
                <li>AI-first development</li>
                <li>Hard engineering problems</li>
              </ul>
              <div className="face">
                <span className="ini">VV</span>
                <Image src="/ge/img/viktor-vaczi.jpg" alt="Viktor Váczi" onError={(e) => e.currentTarget.remove()} width={225} height={219} />
              </div>
              <div className="nm">Viktor Váczi</div>
              <div className="rl">CTO & Co-CEO</div>
              <div className="socials">
                <Link href="/cv/viktor" className="soc" rel="noopener" title="CV">CV</Link>
                <a href="https://www.linkedin.com/" className="soc" rel="noopener" title="LinkedIn">in</a>
                <a href="https://github.com/emergence-engineering" className="soc" rel="noopener" title="GitHub">GH</a>
              </div>
            </div>
            <div className="wwd-col rv">
              <Link className="wwd-brand" href="/" title="Growth Engineering, business development">
                <Image src="/ge/img/logo-emergence.png" alt="" width={22} height={22} />
                <span>Growth<i>/</i><span className="w2">Engineering</span></span>
                <span className="ar">→</span>
              </Link>
              <h3>Business Development</h3>
              <ul>
                <li>Marketing</li>
                <li>E-commerce</li>
                <li>Analytics</li>
                <li>Strategy</li>
              </ul>
              <div className="face gh">
                <span className="ini">GG</span>
                <Image src="/ge/img/greg-gillay.jpg" alt="Greg Gillay" onError={(e) => e.currentTarget.remove()} width={640} height={640} />
              </div>
              <div className="nm">Greg Gillay</div>
              <div className="rl">COO & Co-CEO</div>
              <div className="socials">
                <a href="https://www.linkedin.com/in/greggillay/" className="soc" rel="noopener" title="LinkedIn">in</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="build">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv">What we build</div>
              <h2 className="rv">Four hard problems<br />we’ve solved many times</h2>
            </div>
            <p className="lede rv">Most teams can build a CRUD app. The parts below are where projects stall, and where a specialist team saves you months. We’ve shipped each of these into production, repeatedly.</p>
          </div>
          <div className="cards2 rv">
            <article className="pcard">
              <span className="pnum">01</span>
              <h3>Rich-text editors</h3>
              <p>The editor <em>is</em> the product in writing tools, docs, and AI apps: and it’s deceptively hard: every keystroke, paste, undo and copy has to behave perfectly. We build production editors on <strong>ProseMirror, TipTap and Lexical</strong>, and we maintain the open-source plugins the rest of the industry uses.</p>
            </article>
            <article className="pcard">
              <span className="pnum">02</span>
              <h3>Real-time collaboration</h3>
              <p><strong>What it means:</strong> many people editing the same document at once, like Google Docs or Figma, with no conflicts and nothing lost, even when someone goes offline and comes back. <strong>How we do it:</strong> CRDTs and <strong>YJS</strong>, the hard sync math that merges everyone’s changes correctly instead of overwriting them.</p>
            </article>
            <article className="pcard">
              <span className="pnum">03</span>
              <h3>Desktop-grade software in the browser</h3>
              <p><strong>What it means:</strong> heavy software that normally needs an install, a CAD tool, an editor, a design suite, running in a plain browser tab, nothing to download. <strong>How we do it:</strong> we compile C++ to <strong>WebAssembly</strong> and render it ourselves. We did exactly this with KiCad, a full PCB-design suite (see PCBJam below).</p>
            </article>
            <article className="pcard">
              <span className="pnum">04</span>
              <h3>AI-native product engineering</h3>
              <p>LLM features that actually ship, not demos: in-editor assistants, grammar and completion (our <strong>SuggestCat</strong> plugin), retrieval and summarization, wired into real products with the latency, streaming and UX that make them usable.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="on-navy" id="pcbjam">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <div className="eyebrow">Flagship experiment</div>
              <h2>We put an entire<br />PCB suite in a browser tab.</h2>
              <p className="lede" style={{ marginTop: "1.2rem" }}><strong>PCBJam</strong> is KiCad, a full professional PCB-design suite normally installed on your desktop, running entirely in the browser. No install, no plugin. We compiled KiCad’s C++ codebase to <strong>WebAssembly</strong> with Emscripten and wrote our own <strong>WebGL</strong> renderer for its graphics layer. It hit the front page of Hacker News.</p>
              <div className="stat-row" style={{ margin: "1.8rem 0" }}>
                <div className="k" style={{ color: "var(--coral-l)" }}>C++ → WASM<small>KiCad compiled to run in-browser</small></div>
                <div className="k" style={{ color: "var(--coral-l)" }}>Own WebGL<small>renderer for KiCad’s graphics layer</small></div>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <a href="https://pcbjam.com" rel="noopener" className="btn">Visit PCBJam <span className="ar">→</span></a>
                <a href="https://news.ycombinator.com/item?id=48793542" rel="noopener" className="btn btn-line">Read the Show HN</a>
              </div>
            </div>
            <div className="rv">
              <div className="browserframe">
                <div className="browserbar">
                  <i />
                  <i />
                  <i />
                  <span className="url">pcbjam.com</span>
                </div>
                <div className="browserbody">
                  <span className="chip">KiCad, running in your browser</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv">Clients</div>
              <h2 className="rv">Products we helped build</h2>
            </div>
            <p className="lede rv">Mostly US startups, mostly in editors, collaboration and AI. A few of them you may already use.</p>
          </div>
          <div className="scrollhint rv" style={{ marginTop: "1.1rem" }}>Scroll for more <b>→</b></div>
          <div className="refscroll rv">
            <Link className="refcard" href="/contact-en">
              <div className="shot">
                <Image src="/ge/img/r-skiff.png" alt="Skiff collaborative editor screenshot" width={1624} height={1086} />
              </div>
              <div className="rb">
                <div className="rk">Acquired by Notion</div>
                <div className="rn">Skiff</div>
                <p className="rp">We developed key product features for their end-to-end encrypted collaboration platform. The result: acquisition by Notion.</p>
              </div>
            </Link>
            <Link className="refcard" href="/contact-en">
              <div className="shot">
                <Image src="/ge/img/r-memrise.png" alt="Memrise conversational language tutor" width={1300} height={800} />
              </div>
              <div className="rb">
                <div className="rk">AI language tutor</div>
                <div className="rn">Memrise</div>
                <p className="rp">An AI-powered conversational tutor giving learners instant feedback on speaking and pronunciation.</p>
              </div>
            </Link>
            <Link className="refcard" href="/contact-en">
              <div className="shot">
                <Image src="/ge/img/r-axdraft.png" alt="Axdraft legal document editor" width={680} height={380} />
              </div>
              <div className="rb">
                <div className="rk">Collaborative legal editor</div>
                <div className="rn">Axdraft</div>
                <p className="rp">A specialised legal document editor for law firms, built for real-time team collaboration.</p>
              </div>
            </Link>
            <Link className="refcard" href="/contact-en">
              <div className="shot">
                <Image src="/ge/img/r-lex.png" alt="Lex collaborative text editor" width={2340} height={1342} />
              </div>
              <div className="rb">
                <div className="rk">Collaborative editor</div>
                <div className="rn">Lex</div>
                <p className="rp">A collaborative text editor for writers and their editors.</p>
              </div>
            </Link>
            <Link className="refcard" href="/contact-en">
              <div className="shot">
                <Image src="/ge/img/r-swaralink.png" alt="SwaraLink Bluetooth testing framework" width={370} height={320} />
              </div>
              <div className="rb">
                <div className="rk">Bluetooth testing</div>
                <div className="rn">SwaraLink</div>
                <p className="rp">A testing framework for a new Bluetooth product, ensuring production quality on the factory line.</p>
              </div>
            </Link>
            <Link className="refcard" href="/contact-en">
              <div className="shot">
                <Image src="/ge/img/r-filtered.png" alt="Filtered content organization tool" width={858} height={557} />
              </div>
              <div className="rb">
                <div className="rk">Content organization</div>
                <div className="rn">Filtered</div>
                <p className="rp">A solution that helps firms organize their content for easier everyday use.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <EnTestimonials />
      <section id="ownproducts">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv">Our own products</div>
              <h2 className="rv">Things we build for ourselves</h2>
            </div>
            <p className="lede rv">When we can’t buy the tool we need, we ship it, and often open-source it.</p>
          </div>
          <div className="scrollhint rv" style={{ marginTop: "1.1rem" }}>Scroll for more <b>→</b></div>
          <div className="refscroll rv">
            <a className="refcard" href="https://pcbjam.com" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-pcbjam.jpg" alt="The PCBJam website" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk">KiCad in the browser</div>
                <div className="rn">PCBJam</div>
                <p className="rp">A full PCB-design suite running entirely in the browser via WebAssembly. Featured on Hacker News.</p>
              </div>
            </a>
            <a className="refcard" href="https://suggestcat.com" rel="noopener">
              <div className="shot cover">
                <Image src="/ge/img/s-suggestcat.jpg" alt="The SuggestCat website" width={1280} height={800} />
              </div>
              <div className="rb">
                <div className="rk">Open-source AI plugin</div>
                <div className="rn">SuggestCat</div>
                <p className="rp">An AI plugin for rich-text editors: grammar correction and text completion, built on ProseMirror.</p>
              </div>
            </a>
            <Link className="refcard" href="/contact-en">
              <div className="shot">
                <Image src="/ge/img/r-jumphigher.png" alt="JumpHigher AI fitness app" width={462} height={330} />
              </div>
              <div className="rb">
                <div className="rk">AI fitness app</div>
                <div className="rn">JumpHigher</div>
                <p className="rp">A platform we built to help users track and coach their progress on their fitness journey.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="company">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv">How we work</div>
              <h2 className="rv">A senior team that ships</h2>
            </div>
            <p className="lede rv">Small, senior, and used to ambiguous early-stage problems. We plug into your repo and your Slack and move like part of the team, not a distant agency.</p>
          </div>
          <div className="cards3 rv">
            <article className="pcard">
              <span className="pnum">01</span>
              <h3>Specialists, not generalists</h3>
              <p>Editors, collaboration and browser-native engineering are our home turf. You skip the ramp-up and the “let’s research this” months.</p>
            </article>
            <article className="pcard">
              <span className="pnum">02</span>
              <h3>AI-first, in production</h3>
              <p>We build LLM features that survive real users, streaming, latency, guardrails, not just a nice demo.</p>
            </article>
            <article className="pcard">
              <span className="pnum">03</span>
              <h3>Embedded with your team</h3>
              <p>Your repo, your CI, your standups. We transfer the know-how so the system is yours, documented, when we’re done.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="band" id="opensource">
        <div className="wrap">
          <div className="shead">
            <div>
              <div className="eyebrow rv">Open source</div>
              <h2 className="rv">We maintain the tools<br />we wished existed</h2>
            </div>
            <p className="lede rv">A suite of ProseMirror plugins that teams around the world build their editors on. It’s also the fastest way to see how we write code, and why editor work is second nature to us.</p>
          </div>
          <div className="pkg rv">
            <div className="p">
              <code>prosemirror-suggestcat-plugin</code>
              <span>Adds AI features, grammar correction and text completion, to a ProseMirror editor.</span>
            </div>
            <div className="p">
              <code>prosemirror-slash-menu</code>
              <span>The “/” command menu, opened inline and searchable by keyboard. (React UI package too.)</span>
            </div>
            <div className="p">
              <code>prosemirror-link-preview</code>
              <span>Discord- and Slack-style link previews inside the editor.</span>
            </div>
            <div className="p">
              <code>prosemirror-image-plugin</code>
              <span>Framework-agnostic image handling: upload, resize, placement.</span>
            </div>
            <div className="p">
              <code>prosemirror-codemirror-block</code>
              <span>Code blocks powered by the modern CodeMirror 6.</span>
            </div>
            <div className="p">
              <code>prosemirror-link-plugin</code>
              <code>prosemirror-paste-link</code>
              <span>Robust link detection, change-tracking and paste behaviour.</span>
            </div>
          </div>
          <div className="rv" style={{ marginTop: "2rem" }}>
            <Link href="/opensource" rel="noopener" className="tlink">See all open-source projects <span className="ar">→</span></Link>
          </div>
        </div>
      </section>
      <section className="on-navy" id="contact">
        <div className="wrap">
          <div className="cta">
            <div className="eyebrow rv">Let’s talk</div>
            <h2 className="rv">Building something hard?</h2>
            <p className="lede rv">If your product lives or dies on the editor, the collaboration, or getting something impossible to run in the browser, that’s exactly the conversation we like.</p>
            <div className="btns rv">
              <Link href="/contact-en" className="btn">Book a call <span className="ar">→</span></Link>
              <a href="mailto:info@emergence-engineering.com" className="btn btn-line">Prefer email?</a>
            </div>
            <p className="rv" style={{ fontSize: ".88rem", color: "#8FA0B8" }}>No sales pitch. Just an honest read on whether we’re the right team for your problem.</p>
          </div>
        </div>
      </section>
    </EnShell>
  );
};

export default IndexEn;

import { phases, regions, responsibilities, whyCards } from "@/lib/content";
import { Reveal } from "./reveal";

export function Why() {
  return (
    <section className="why pad" id="why">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="label">Why Auttonotech</span>
            </div>
            <h2>
              Built On Capability,
              <br />
              Discipline &amp; Trust.
            </h2>
          </div>
        </Reveal>
        <Reveal className="whygrid">
          {whyCards.map((card) => (
            <div className="wcard" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Pipeline() {
  return (
    <section className="pipeline pad" id="pipeline">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="label">Projects &amp; Pipeline</span>
            </div>
            <h2>
              Where We&apos;re
              <br />
              Building Next.
            </h2>
          </div>
        </Reveal>
        <Reveal className="pipe-grid">
          <div>
            <div className="pipe-note">
              The Infrastructure Division was established by Board Resolution in May
              2026. The pipeline below reflects our active focus and the project
              types we are mobilising for. Project specifics are shared with
              prospective clients on request.
            </div>
            {phases.map((phase) => (
              <div className="phase" key={phase.title}>
                <div className="pt">
                  <h3>{phase.title}</h3>
                  <span className="tag">{phase.tag}</span>
                </div>
                <p>{phase.body}</p>
              </div>
            ))}
          </div>
          <div className="regions">
            <h3>
              <span className="dot" />
              Current Focus Regions
            </h3>
            {regions.map((region) => (
              <div className="rstate" key={region.state}>
                <b>{region.state}</b>
                <div className="chips">
                  {region.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="rstate tight">
              <b>Expansion Outlook</b>
              <p className="outlook">
                National scaling across infrastructure, renewable, industrial and
                government sectors.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Leadership() {
  return (
    <section className="lead pad" id="leadership">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="label">Leadership</span>
            </div>
            <h2>
              The People
              <br />
              Behind Execution.
            </h2>
          </div>
        </Reveal>
        <Reveal className="lead-card">
          <div className="lead-photo">
            <span className="corner c1" />
            <span className="corner c2" />
            <span className="initials">BS</span>
          </div>
          <div className="lead-info">
            <div className="role">Vice President — Infrastructure Projects</div>
            <h3>Bharani Shankar M</h3>
            <p>
              Appointed to the Board on 28 May 2026, Bharani leads the Infrastructure Division end-to-end — from project development through EPC delivery to on-site execution. Backed by over 12 years of RCC execution and quantity surveying experience, including large-scale refinery civil packages, he owns the division&apos;s project strategy, partnerships, and delivery discipline.
            </p>
            <div className="resp">
              {responsibilities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <h2>Have a project? Let&apos;s engineer it.</h2>
        <a href="#contact" className="btn">
          Request a Consultation
        </a>
      </div>
    </section>
  );
}

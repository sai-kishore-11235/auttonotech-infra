import { marqueeItems, sectors, services } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectorIconGraphic } from "./sector-icon";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export function Sectors() {
  return (
    <section className="sectors pad" id="sectors">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="label">01 — Core Business Areas</span>
            </div>
            <h2>
              Six Sectors.
              <br />
              One Engineering Standard.
            </h2>
          </div>
          <div className="idx">{"// CAPABILITY MATRIX"}</div>
        </Reveal>
        <Reveal className="grid-sec">
          {sectors.map((sector) => (
            <div className="scard" key={sector.n}>
              <div className="ico" aria-hidden="true">
                <SectorIconGraphic name={sector.icon} />
              </div>
              <div className="n">{sector.n}</div>
              <h3>{sector.title}</h3>
              <ul>
                {sector.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services pad" id="services">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="label">02 — Service Lines</span>
            </div>
            <h2>
              End-to-End Delivery,
              <br />
              From Tender to Handover.
            </h2>
          </div>
          <div className="idx">{"// 08 CAPABILITIES"}</div>
        </Reveal>
        <Reveal>
          {services.map((service) => (
            <div className="srow" key={service.n}>
              <div className="sn">{service.n}</div>
              <h3>{service.title}</h3>
              <div className="sd">{service.detail}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

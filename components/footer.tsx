import { Brand } from "./brand";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <Brand />
            <p>
              In pursuit of engineering excellence across EPC, civil, renewable
              energy, industrial and government infrastructure in India.
            </p>
            <span className="parent-tag">A division of Auttonotech Solutions Pvt Ltd</span>
          </div>
          <div className="fcol">
            <h4>Sectors</h4>
            <a href="#sectors">Civil Construction</a>
            <a href="#sectors">Renewable Energy</a>
            <a href="#sectors">Government Infrastructure</a>
            <a href="#sectors">Electrical Infrastructure</a>
            <a href="#sectors">Industrial Projects</a>
          </div>
          <div className="fcol">
            <h4>Company</h4>
            <a href="#why">Why Us</a>
            <a href="#pipeline">Projects</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Careers</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="fbottom">
          <p>© 2026 Auttonotech Solutions Pvt Ltd. All rights reserved.</p>
          <p className="cin">CIN: U63110KA2025PTC197715 · HSR Layout, Bangalore</p>
        </div>
      </div>
    </footer>
  );
}

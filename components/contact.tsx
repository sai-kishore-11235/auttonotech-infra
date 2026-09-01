"use client";

import { FormEvent, useState } from "react";
import { sectorOptions } from "@/lib/content";
import { Reveal } from "./reveal";

export function Contact() {
  const [note, setNote] = useState("Your enquiry routes to the Infrastructure Division team.");
  const [accent, setAccent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !email) {
      setNote("Please add your name and email to submit.");
      setAccent(true);
      return;
    }
    const first = name.split(" ")[0];
    setNote(`Thank you, ${first}. The Infrastructure Division team will be in touch.`);
    setAccent(true);
    form.reset();
  }

  return (
    <section className="contact pad" id="contact">
      <div className="wrap">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">
              <span className="label">Contact</span>
            </div>
            <h2>
              Start The
              <br />
              Conversation.
            </h2>
          </div>
        </Reveal>
        <Reveal className="cform">
          <form id="enquiry" onSubmit={onSubmit}>
            <div className="row2">
              <div className="fr">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="fr">
                <label htmlFor="org">Organisation</label>
                <input id="org" name="org" type="text" placeholder="Company" />
              </div>
            </div>
            <div className="row2">
              <div className="fr">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="fr">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+91" />
              </div>
            </div>
            <div className="fr">
              <label htmlFor="sector">Project Sector</label>
              <select id="sector" name="sector" defaultValue={sectorOptions[0]}>
                {sectorOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="fr">
              <label htmlFor="msg">Project Details</label>
              <textarea
                id="msg"
                name="msg"
                rows={4}
                placeholder="Tell us about your project, location and timeline."
              />
            </div>
            <button className="btn" type="submit">
              Submit Enquiry &nbsp;→
            </button>
            <div className={accent ? "form-note accent" : "form-note"}>{note}</div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

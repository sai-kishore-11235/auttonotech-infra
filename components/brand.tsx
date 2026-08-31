import Image from "next/image";

export function Brand() {
  return (
    <a className="brand" href="#top">
      <Image
        className="logo-img"
        src="/logo.png"
        alt="AUTTONO TECH — In Pursuit of Engineering Excellence"
        width={1158}
        height={238}
        priority
      />
      <span className="sub-div">
        Infrastructure
        <br />
        Division
      </span>
    </a>
  );
}

import Image from "next/image";

export function Brand({ variant = "light" }: { variant?: "light" | "dark" }) {
  const src = variant === "dark" ? "/logo-on-dark.png" : "/logo.png";
  return (
    <a className="brand" href="#top">
      <Image
        className="logo-img"
        src={src}
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

import Image from "next/image";

export function Brand({ variant = "light" }: { variant?: "light" | "dark" }) {
  const src = variant === "dark" ? "/logo-on-dark.png" : "/logo.png";
  return (
    <div className="brand">
      <a href="https://auttonotech.com">
        <Image
          className="logo-img"
          src={src}
          alt="AUTTONO TECH — In Pursuit of Engineering Excellence"
          width={1158}
          height={238}
          priority
        />
      </a>
      <a className="sub-div" href="#top">
        Infrastructure
        <br />
        Division
      </a>
    </div>
  );
}

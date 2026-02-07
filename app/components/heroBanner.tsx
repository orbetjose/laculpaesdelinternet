import Image from "next/image";

export default function heroBanner() {
  const currentDomain = process.env.WP_DOMAIN;

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="w-full justify-center absolute flex md:gap-8 left-1/2 -translate-x-1/2 md:top-16 top-28 3xl:top-32 px-8 md:px-0">
        <a href="#">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/02/fb-icon.png`}
            alt="Facebook icono banner"
            className="h-12 object-contain md:h-12 3xl:h-16 md:w-auto"
            width={65}
            height={107}
          />
        </a>
        <a href="#">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/02/yt-icon.png`}
            alt="YouTube icono banner"
            className="h-12 object-contain md:h-12 3xl:h-16 md:w-auto"
            width={137}
            height={106}
          />
        </a>
        <a href="#">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/02/ig-icon.png`}
            alt="Instagram icono banner"
            className="h-12 object-contain md:h-12 3xl:h-16 md:w-auto"
            width={97}
            height={97}
          />
        </a>
        <a href="#">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/02/tiktok-icon.png`}
            alt="TikTok icono banner"
            className="h-12 object-contain md:h-12 3xl:h-16 md:w-auto"
            width={94}
            height={94}
          />
        </a>
      </div>
      <Image
        src={`${currentDomain}wp-content/uploads/2026/02/fondo-hero.png`}
        alt="Fondo hero ladrillos"
        className="w-full h-full"
        width={1920}
        height={1427}
      />
      <Image
        src={`${currentDomain}wp-content/uploads/2026/02/content-hero.png`}
        alt="Imagen Oscar, Daniela y Nacho"
        className="translate-middle md:h-100 3xl:h-130 w-auto"
        width={750}
        height={545}
      />
      <Image
        src={`${currentDomain}wp-content/uploads/2026/02/separator.png`}
        alt="Separador hero"
        className="separator-hero h-8 w-full "
        width={1920}
        height={320}
      />
      <Image
        src={`${currentDomain}wp-content/uploads/2026/02/purple-dot.png`}
        alt="Purple shadow"
        className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 h-200 w-auto"
        width={1880}
        height={1536}
      />
    </div>
  );
}

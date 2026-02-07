import ContactForm from "./components/contactForm";
import HeroBanner from "./components/heroBanner";
import InfoTeam from "./components/infoTeam";
import Image from "next/image";

export default function Home() {
  const infoTeams = [
    {
      name: "Oscar el teacher",
      subtitle: "Humor inteligente, sarcasmo fino y verdades incómodas.",
      description: [
        "El profe que nadie pidió, pero todos necesitamos.",
        "Oscar convierte lo cotidiano, lo educativo y lo absurdo del internet en comedia pura. Observador, directo y con un humor que te hace reír… y pensar si deberías borrar ese post viejo.",
      ],
      image: "wp-content/uploads/2026/02/oscar-image.webp",
    },
    {
      name: "Daniela rosas",
      subtitle: "Frescura, ironía y el lado real de las redes.",

      description: [
        "Daniela pone sobre la mesa lo que pasa detrás del feed perfecto. ",
        "Con humor, personalidad y mucha autenticidad, habla de relaciones, tendencias, haters y situaciones que solo existen porque estamos demasiado tiempo conectados.",
      ],
      image: "wp-content/uploads/2026/02/daniela-image.webp",
    },
    {
      name: "Nacho el biónico",
      subtitle: "Humor sin filtros y verdades incómodas.",
      description: [
        "Nacho es espontáneo, irreverente y brutalmente honesto.",
        "Dice lo que muchos piensan pero nadie se atreve a publicar.",
        "Su humor nace del caos del internet y se alimenta de historias reales, exageradas… o peligrosamente ciertas.",
      ],
      image: "wp-content/uploads/2026/02/nacho-image.webp",
    },
  ];
  const currentDomain = process.env.WP_DOMAIN;

  return (
    <main className="">
      <HeroBanner />
      <div className="relative h-[75vh] 3xl:h-[65vh]">
        <Image
          src={`${currentDomain}wp-content/uploads/2026/02/fondo-podcast.png`}
          alt="Fondo podcast"
          width={1920}
          height={608}
          className="w-full h-[75vh] 3xl:h-[65vh] object-cover absolute top-0 left-0"
        />
        <Image
          src={`${currentDomain}wp-content/uploads/2026/02/imagen-podcast.png`}
          alt="Imagen podcast la culpa es del internet"
          width={1034}
          height={710}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-30 z-1 h-35 md:h-90 3xl:h-120 w-auto"
        />
        <div className="flex flex-col ml-auto md:max-w-xl 3xl:max-w-3xl 3xl:mr-20 text-white font-poppins relative md:h-[75vh] 3xl:h-[65vh] justify-center px-8 md:px-0 py-4 md:py-0">
          <div className="md:pr-20 space-y-4">
            <p className="font-poppins-italic text-lg 3xl:text-xl">
              Tres voces, cero filtro y demasiadas historias que solo podían pasar… en internet.
            </p>
            <p className="3xl:text-lg">
              Un podcast de humor donde las tendencias, las redes sociales, las metidas de pata digitales y la vida
              online se convierten en excusa para reírnos de nosotros mismos.
            </p>
            <p className="3xl:text-lg">Porque si algo salió mal… la culpa es del internet.</p>
          </div>
          <div className="flex justify-center md:justify-start gap-8 pt-4">
            <a href="">
              <Image
                src={`${currentDomain}wp-content/uploads/2026/02/fb-icon.png`}
                alt="Facebook podcast"
                width={65}
                height={107}
                className="h-10 md:h-14 w-auto"
              />
            </a>
            <a href="">
              <Image
                src={`${currentDomain}wp-content/uploads/2026/02/yt-icon.png`}
                alt="Youtube podcast"
                width={137}
                height={106}
                className="h-10 md:h-14 w-auto"
              />
            </a>
            <a href="">
              <Image
                src={`${currentDomain}wp-content/uploads/2026/02/ig-icon.png`}
                alt="Instagram podcast"
                width={97}
                height={97}
                className="h-10 md:h-14 w-auto"
              />
            </a>
            <a href="">
              <Image
                src={`${currentDomain}wp-content/uploads/2026/02/tiktok-icon.png`}
                alt="Tiktok podcast"
                width={94}
                height={94}
                className="h-10 md:h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center py-14 space-y-10 px-4 md:px-0"
        style={{
          backgroundImage: "url('https://admin.laculpaesdelinternet.com/wp-content/uploads/2026/02/fondo-team-scaled.png')",
        }}>
        {infoTeams.map((team, index) => (
          <InfoTeam
            key={index}
            infoTeams={team}
            orientation={index % 2 === 0}
          />
        ))}
        <div className="pt-8">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/02/video-test.webp`}
            alt="Video la culpa es del internet"
            width={1920}
            height={662}
            className="w-full h-80 md:max-h-100 3xl:max-h-150 object-cover"
          />
        </div>
      </div>
      <div className="relative h-100 md:h-120">
        <Image
          src={`${currentDomain}wp-content/uploads/2026/02/fondo-contacto.png`}
          alt="Fondo contacto"
          width={1920}
          height={1023}
          className="absolute w-full h-100 md:h-120 object-cover"
        />
        <div className="flex flex-col absolute bottom-0 md:left-10 left-1/2 -translate-x-1/2 md:translate-x-0 gap-4">
          <h3 className="font-dirtylizard text-5xl text-white text-center">Contácto</h3>
          <Image
            src={`${currentDomain}wp-content/uploads/2026/02/imagen-formulario.webp`}
            alt="Imagen formulario contacto la culpa es del internet"
            width={984}
            height={660}
            className="h-40 md:h-80 w-auto "
          />
        </div>

        <ContactForm />
      </div>
      <div className="relative ">
        <Image
          src={`${currentDomain}wp-content/uploads/2026/02/fondo-footer.png`}
          alt="Fondo footer"
          width={1920}
          height={755}
          className="h-100 md:h-130"
        />
        <Image
          src={`${currentDomain}wp-content/uploads/2026/02/footer-imagen.png`}
          alt="Imagen footer la culpa es del internet"
          width={1244}
          height={552}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-70 object-cover md:h-100 w-auto"
        />
      </div>
    </main>
  );
}

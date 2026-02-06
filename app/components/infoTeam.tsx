import Image from "next/image";

type infoTeamProps = {
  infoTeams: {
    name: string;
    subtitle: string;
    description: string[];
    image: string;
  };

  orientation: boolean
};

export default function infoTeam({ infoTeams, orientation }: infoTeamProps) {
  const currentDomain = process.env.WP_DOMAIN;
  return (
    <div className= {`max-w-4xl mx-auto flex justify-between relative  items-center ${orientation ? "flex-row" : "flex-row-reverse"}`}>
      <div className="md:w-1/2 text-white font-poppins ">
        <h3 className={`font-dirtylizard md:text-6xl pb-12 uppercase md:max-w-sm ${orientation ? "text-left" : "text-right"}`}>{infoTeams.name}</h3>
        <Image
          alt="Separador teams"
          src={`${currentDomain}wp-content/uploads/2026/02/seperador-teams.png`}
          width={300}
          height={20}
          className={`absolute ${orientation ? "-left-46" : "-right-46 rotate-180" }  top-33 md:w-150 h-13`}
        />
        <div className={`space-y-4 ${orientation ? "text-left" : "text-right"}`}>
          <p className="font-light text-lg">{infoTeams.subtitle}</p>
          {infoTeams.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      </div>
      <div className="md:w-2/5">
        <Image
          alt={`Imagen ${infoTeams.name}`}
          src={`${currentDomain}${infoTeams.image}`}
          width={400}
          height={400}
          className={`h-100 w-auto ${orientation ? "ml-auto" : "mr-auto"}`}
        />
      </div>
    </div>
  );
}

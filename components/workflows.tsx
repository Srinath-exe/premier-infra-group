import Image, { StaticImageData } from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import WorflowImg04 from "@/public/images/workflow-04.png";
import Spotlight from "@/components/spotlight";
import companyData from "@/data/company-data";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-red-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-red-200/50">
              <span className="inline-flex bg-linear-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
                {companyData.name}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#FF0000,#FF4D4D,#FF9999,#FF4D4D,#FF0000)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              {companyData.strengths_title}
            </h2>
            <p className="text-lg text-black">
              {companyData.strengths_subtitle}
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-4">
            {/* Card 1 */}
            <Card
              imgSrc={WorflowImg01}
              title={companyData.strengths_section[0].title}
              description={companyData.strengths_section[0].description}
            />
            {/* Card 2 */}
            <Card
              imgSrc={WorflowImg02}
              title={companyData.strengths_section[1].title}
              description={companyData.strengths_section[1].description}
            />
            {/* Card 3 */}
            <Card
              imgSrc={WorflowImg03}
              title={companyData.strengths_section[2].title}
              description={companyData.strengths_section[2].description}
            />
            {/* Card 4 */}
            <Card
              imgSrc={WorflowImg04}
              title={companyData.strengths_section[3].title}
              description={companyData.strengths_section[3].description}
            />
          </Spotlight>
        </div>
      </div>
    </section>
  );
}


interface CardProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}

export  function Card({ imgSrc, title, description }: CardProps) {
  return (
    <a
      className="group/card relative h-full overflow-hidden rounded-2xl  p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-red-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-red-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
      href="#0"
    >
      <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-100 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-100/50 after:via-gray-200/25 after:to-gray-100/50"> <div className="pt-2 relative z-20 flex justify-center items-center">
          <Image className="inline-flex" src={imgSrc} width={60} height={100} alt={title} />
        </div>
        <div className="p-6">
          <div className="mb-3">
            <span className="btn-sm relative rounded-full bg-gray-200/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
              <span className="bg-linear-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                {title}
              </span>
            </span>
          </div>
          <p className="text-black">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
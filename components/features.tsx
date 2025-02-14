import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import companyData from "@/data/company-data";

import service1 from "@/public/images/service1.png";
import service2 from "@/public/images/service2.png";
import service3 from "@/public/images/service3.png";
import service4 from "@/public/images/service4.png";
import service5 from "@/public/images/service5.png";
import service6 from "@/public/images/service6.png";
import service7 from "@/public/images/service7.png";
import service8 from "@/public/images/service8.png";


export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {companyData.services_mini_title}
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            {companyData.services_title}
            </h2>
            <p className="text-lg text-indigo-200/65">
            {companyData.services_subtitle}
            </p>
          </div>
          {/* <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div> */}
          {/* Items */}
          <div className="pt-6 mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              {/* <svg
                className="mb-3 fill-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path
                  fillOpacity=".48"
                  d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
                />
              </svg> */}
              <Image
                className="mb-3 fill-indigo-500"
                src={service1}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[0].title}
              </h3>
              <p className="text-indigo-200/65">
              {companyData.services_section[0].description}
              </p>
            </article>
            <article>
              <Image
                className="mb-3 fill-indigo-500"
                src={service2}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[1].title}
              </h3>
              <p className="text-indigo-200/65">
              {companyData.services_section[1].description}
              </p>
            </article>
            <article>
              <Image
                className="mb-3 fill-indigo-500"
                src={service3}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[2].title}
              </h3>
              <p className="text-indigo-200/65">
              {companyData.services_section[2].description}
              </p>
            </article>
            <article>
              <Image
                className="mb-3 fill-indigo-500"
                src={service4}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[3].title}
              </h3>
              <p className="text-indigo-200/65">

              {companyData.services_section[3].description}
                
              </p>
            </article>
            <article>
              <Image
                className="mb-3 fill-indigo-500"
                src={service5}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[4].title}
              </h3>
              <p className="text-indigo-200/65">
                {companyData.services_section[4].description}
              </p>
            </article>
            <article>
              <Image
                className="mb-3 fill-indigo-500"
                src={service6}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[5].title}
              </h3>
              <p className="text-indigo-200/65">
                {companyData.services_section[5].description}
              </p>
            </article>

            <article>
              <Image
                className="mb-3 fill-indigo-500"
                src={service7}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[6].title}
              </h3>
              <p className="text-indigo-200/65">
                {companyData.services_section[6].description}
              </p>
            </article>

            <article>
              <Image
                className="mb-3 fill-indigo-500"
                src={service8}
                width={24}
                height={24}
                alt="Features"
              />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                {companyData.services_section[7].title}
              </h3>
              <p className="text-indigo-200/65">
                {companyData.services_section[7].description}
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

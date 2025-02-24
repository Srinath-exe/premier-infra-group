import React from "react";
import companyData from "@/data/company-data";
import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 bg-white text-gray-900 p-10">
            <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">About Us</h1>

            {/* Introduction Section */}
            <div className="my-16 ">
                <h2 className="text-3xl font-bold text-red-600 mb-4">{companyData.name}</h2>
                <div className="flex flex-col md:flex-row items-center mb-2">

                    <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                        <p className="text-md text-gray-700">{companyData.aboutUs_description}</p>
                    </div>

                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <div className="w-[200px] h-[300px] overflow-hidden rounded-lg mx-auto">
                            <Image src="/images/logo.png" alt={companyData.name}  width={300} height={300} className=" object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Saftry Section */}
          
            <Section 
                title={companyData.safety_title}
                description={companyData.safety_description}
                imageUrl="/images/project/op1.jpg"
            />

            {/* Quality Section */}
            <Section
                title={companyData.quality_title}
                description={companyData.quality_description}
                imageUrl="/images/project/op2.jpg"
            />

            {/* Placeholder for Third Section */}
            {/* <Section
                title="Our Mission"
                description="Our mission is to deliver exceptional civil construction and engineering solutions that exceed our clients' expectations. We are committed to innovation, quality, and safety in all our projects."
                imageUrl="/images/project/op3.jpg"
            /> */}

            {/* Placeholder for Fourth Section */}
            {/* Key Personnel Section */}
            <KeyPersonnelSection keyPersonnel={companyData.keyPersonnel} />
        </div>
    );
}

function Section({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
    return (
        <div className="my-16 ">
            <h2 className="text-3xl font-bold text-red-600 mb-4">{title}</h2>
            <div className="flex flex-col md:flex-row items-center mb-6">

                <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
                    <p className="text-md    text-gray-700">{description}</p>
                </div>

                <div className="md:w-1/2 mt-4 md:mt-0">
                    <div className="w-full h-[300px] overflow-hidden rounded-lg ">
                        <Image src={imageUrl} alt={title} width={1200} height={500} className="w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}



function KeyPersonnelSection({ keyPersonnel }: { keyPersonnel: { name: string; title: string; phone: string }[] }) {
    return (
        <div className="my-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Key Personnel</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {keyPersonnel.map((person, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <Image
                            src="/images/team/person.jpg"
                            alt={person.name}
                            width={150}
                            height={150}
                            className="mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                        <p className="text-gray-600">{person.title}</p>
                        <p className="text-gray-500">{person.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
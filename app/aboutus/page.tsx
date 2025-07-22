import React from "react";
import companyData from "@/data/company-data";
import Image from "next/image";

export const metadata = {
    title: "About Us",
    description: "Learn more about Premier Infra Group, our team, and our values.",
};

export default function AboutUsPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 py-20 min-h-screen">
            <h1 className="text-5xl sm:text-6xl font-black text-center mb-20 tracking-tight bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-md">
            About Us
            </h1>

            {/* Introduction Section */}
            <section className="relative flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-lg p-10 mb-24 overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
            <GradientBlobs />
            <div className="md:w-2/3 z-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {companyData.name}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {companyData.aboutUs_description}
                </p>
            </div>
            <div className="md:w-1/3 flex justify-center z-10">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center shadow-xl border-8 border-white hover:scale-105 transition-transform">
                <Image
                    src="/images/logo.png"
                    alt={companyData.name}
                    width={180}
                    height={180}
                    className="object-contain rounded-full"
                />
                </div>
            </div>
            </section>
             {/* Sections */}
            <Section
                title={companyData.safety_title}
                description={companyData.safety_description}
                imageUrl="/images/project/op1.jpg"
                reverse
            />
            <Section
                title={companyData.quality_title}
                description={companyData.quality_description}
                imageUrl="/images/project/op2.jpg"
            />

            {/* First 2 Key Personnel in a row */}
            <section className="my-24">
            <h2 className="text-4xl font-extrabold text-center text-red-600 mb-14 tracking-tight">
                Key Personnel
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center max-w-2xl mx-auto">
                {companyData.keyPersonnel.slice(0, 2).map((person, index) => (
                <div
                    key={index}
                    className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
                >
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-red-200 mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-red-100 to-red-300">
                    <Image
                        src="/images/team/person.jpg"
                        alt={person.name}
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                    />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                    {person.name}
                    </h3>
                    <p className="text-red-600 font-medium mb-1 text-center">
                    {person.title}
                    </p>
                    {person.phone && (
                    <p className="text-gray-500 text-center">{person.phone}</p>
                    )}
                </div>
                ))}
            </div>
            </section>

           

            {/* Our Team Title */}
            <h2 className="text-2xl font-extrabold text-center text-red-600 mb-14 tracking-tight">
            Our Team
            </h2>
            {/* Rest of the Key Personnel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
            {companyData.keyPersonnel.slice(2).map((person, index) => (
                <div
                key={index + 2}
                className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
                >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-red-200 mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-red-100 to-red-300">
                    <Image
                    src="/images/team/person.jpg"
                    alt={person.name}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                    />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                    {person.name}
                </h3>
                <p className="text-red-600 font-medium mb-1 text-center">
                    {person.title}
                </p>
                {person.phone && (
                    <p className="text-gray-500 text-center">{person.phone}</p>
                )}
                </div>
            ))}
            </div>

          
        </div>
    );
}

function Section({
    title,
    description,
    imageUrl,
    reverse = false,
}: {
    title: string;
    description: string;
    imageUrl: string;
    reverse?: boolean;
}) {
    return (
        <section
            className={`my-20 flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
                } items-center gap-12 bg-white rounded-3xl shadow-lg p-10 relative overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300`}
        >
            <GradientBlobs />
            <div className="md:w-1/2 z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">{title}</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{description}</p>
            </div>
            <div className="md:w-1/2 flex justify-center z-10">
                <div className="w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-md border-2 border-red-100 hover:scale-105 transition-transform duration-300">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
function KeyPersonnelSection({
    keyPersonnel,
}: {
    keyPersonnel: { name: string; title: string; phone?: string }[];
}) {
    return (
        <section className="my-24">
            <h2 className="text-4xl font-extrabold text-center text-red-600 mb-14 tracking-tight">
                Key Personnel
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {keyPersonnel.map((person, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
                    >
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-red-200 mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-red-100 to-red-300">
                            <Image
                                src="/images/team/person.jpg"
                                alt={person.name}
                                width={112}
                                height={112}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                            {person.name}
                        </h3>
                        <p className="text-red-600 font-medium mb-1 text-center">
                            {person.title}
                        </p>
                        {person.phone && (
                            <p className="text-gray-500 text-center">{person.phone}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

function GradientBlobs() {
    return (
        <>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-30 z-0" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-red-200 rounded-full blur-2xl opacity-20 z-0" />
        </>
    );
}

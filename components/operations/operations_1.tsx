"use client";
import Image from "next/image";

const projects = [
    {
        title: "Tata Projects Ltd.",
        location: "Nalasopara, Mumbai",
        owner: "Dedicated Freight Corridor Corporation (DFCC)",
        scope: "Construction of Viaduct 163D, spanning from Km 89.300 to 90.751 (approximately 1.4 km), as part of the CTP-11 Section of the Western Dedicated Freight Corridor (WDFCC).",
        image: "/images/project/op1.jpg",
        details: [
            {
                heading: "Congested Urban Area",
                text: "The project site is located in a densely populated and traffic-congested area, with slums on both sides of the Right of Way (ROW), presenting considerable logistical and operational challenges."
            },
            {
                heading: "Tight Project Timeline",
                text: "The viaduct construction was awarded at the later stages of the overall project, resulting in a compressed timeframe for completion."
            },
            {
                heading: "Solution",
                text: "Thorough Preplanning: Comprehensive preplanning was undertaken to ensure seamless project execution in alignment with the client’s requirements. Enhanced Resource Deployment: To meet the stringent deadlines, additional resources—including manpower, machinery, and shuttering—were swiftly mobilized, enabling the team to meet the established targets and maintain the project schedule."
            }
        ],
        detailImage: "/images/project/op2.jpg"
    },
    {
        title: "Dahanu Detour",
        location: "Construction of Stilt Bridges in Coastal Regulation Zone (CRZ)",
        owner: "",
        scope: "This project is part of the Western Dedicated Freight Corridor (Phase-II) between Vaitarna and Sachin Section, specifically focusing on the Dahanu Detour within the Coastal Regulation Zone (CRZ-I). The scope includes three stilt bridges and earthen embankments in between, covering a total 9 km stretch, with 1.70 km of stilt bridges and 7.30 km of embankments.",
        image: "/images/project/op3.jpg",
        details: [
            {
                heading: "Key Stakeholders:",
                text: `<b>Employer:</b> DFCCIL<br/>
<b>PMC (Project Management Consultant):</b> Oriental Consultants Global Consortium<br/>
<b>Contractor:</b> Express Freight Consortium (IRCON)<br/>
<b>Total project value:</b> 270 Cr`
            }
        ],
        detailImage: "/images/project/op4.jpg"
    }
];

export default function ModernProjectsShowcase() {
    return (
        <div className="max-w-7xl mx-auto py-20 px-4 space-y-32">
            {projects.map((project, idx) => (
                <section key={project.title} className="space-y-12">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-end gap-10">
                        <div className="flex-1">
                            <h2 className="text-4xl font-black text-red-600 mb-2">{project.title}</h2>
                            <p className="text-xl font-medium text-gray-800 mb-1">{project.location}</p>
                            {project.owner && (
                                <p className="text-base text-gray-500 mb-4">
                                    <span className="font-semibold">Owner:</span> {project.owner}
                                </p>
                            )}
                            <div className="mb-4">
                                <span className="block text-lg font-bold text-red-500 mb-1">Scope</span>
                                <p className="text-gray-800 text-base">{project.scope}</p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-red-200 w-full max-w-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={350}
                                    className="object-cover w-full h-64"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="flex-1 flex flex-col gap-8">
                            {project.details.map((d, i) => (
                                <div key={i}>
                                    <h4 className={`font-bold text-lg mb-1 ${d.heading.toLowerCase().includes("solution") ? "text-red-600" : "text-gray-900"}`}>
                                        {d.heading}
                                    </h4>
                                    <p
                                        className="text-gray-700 text-base"
                                        dangerouslySetInnerHTML={{ __html: d.text }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-red-100 w-full max-w-md">
                                <Image
                                    src={project.detailImage}
                                    alt={project.title + " detail"}
                                    width={500}
                                    height={320}
                                    className="object-cover w-full h-56"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-red-200 to-transparent mt-16" />
                </section>
            ))}
        </div>
    );
}
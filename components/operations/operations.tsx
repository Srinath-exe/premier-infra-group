"use client";
import img1 from "@/public/images/project/op1.jpg";
import img2 from "@/public/images/project/op2.jpg";
import img3 from "@/public/images/project/op3.jpg";
import img4 from "@/public/images/project/op4.jpg";
import img5 from "@/public/images/project/op5.jpg";

import { useState } from "react";
import Image from "next/image";

const projects = [
    { id: 1, imgSrc: img1, title: "Bridge Construction", subtitle: "Ongoing Project", details: "This bridge spans 2 km and connects major trade routes. The construction involves advanced engineering techniques to ensure durability and safety. The project is expected to significantly reduce travel time and boost economic activities in the region.", additionalInfo: "Estimated completion: Q4 2025. Budget: $200M. The bridge will feature pedestrian walkways, bike lanes, and state-of-the-art lighting systems. Environmental impact assessments have been conducted to minimize ecological disruption." },
    { id: 2, imgSrc: img2, title: "Highway Expansion", subtitle: "Phase 2 Development", details: "Expanding the highway to 8 lanes to reduce congestion. This phase includes the construction of new interchanges, overpasses, and service roads. The project aims to improve traffic flow and enhance road safety for commuters.", additionalInfo: "Completion by Q3 2026. Investment: $500M. The expansion will incorporate smart traffic management systems and noise barriers to reduce environmental impact. Community engagement sessions have been held to address local concerns." },
    { id: 3, imgSrc: img3, title: "Metro Rail System", subtitle: "Urban Transport Upgrade", details: "New metro stations and routes for efficient transit. The project will connect key urban areas, reducing travel time and easing traffic congestion. Modern trains with high capacity and advanced safety features will be introduced.", additionalInfo: "Completion: 2027. Capacity: 2M passengers/day. The metro system will include features such as Wi-Fi, air conditioning, and real-time passenger information systems. Sustainability measures include energy-efficient trains and green station designs." },
    { id: 4, imgSrc: img4, title: "Smart City Development", subtitle: "Sustainable Living", details: "Integrated smart technology and green infrastructure. The development will feature smart grids, waste management systems, and IoT solutions to enhance the quality of life for residents. Public spaces will be designed to promote community engagement and well-being.", additionalInfo: "Smart grid systems, waste management, IoT solutions. The project includes the construction of energy-efficient buildings, renewable energy sources, and advanced water management systems. Residents will benefit from smart home technologies and enhanced public services." },
    { id: 5, imgSrc: img5, title: "Hydroelectric Dam", subtitle: "Renewable Energy Project", details: "Providing clean energy to 5M homes. The dam will harness the power of flowing water to generate electricity, contributing to the reduction of carbon emissions. The project includes the construction of a reservoir, power station, and transmission lines.", additionalInfo: "Completion: 2028. Power output: 2GW. The hydroelectric dam will feature fish ladders and other measures to protect local wildlife. Community outreach programs have been implemented to ensure local support and address any concerns." }
];

export default function ProjectShowcase() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className="flex w-full h-[75vh] gap-4 p-4">
            {projects.map(({ id, imgSrc, title, subtitle, details, additionalInfo }) => (
                <div
                    key={id}
                    className={`relative overflow-hidden transition-all duration-300 ease-in-out rounded-lg shadow-lg 
            ${hoveredId === id ? "w-[80%]" : "w-[20%]"}`}
                    onMouseEnter={() => setHoveredId(id)}
                    onMouseLeave={() => setHoveredId(null)}
                >

                    {hoveredId !== id && (
                        <Image src={imgSrc} alt={title} fill className="object-cover w-full h-full" />
                    )}

                    <div className="absolute inset-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end items-center">
                        <h3 className="text-white text-lg font-semibold">{title}</h3>
                        <p className="text-white text-sm">{subtitle}</p>
                    </div>
                    {hoveredId === id && (
                        <div className="absolute inset-0 bg-white p-8 flex flex-col text-black overflow-y-auto rounded-lg">
                            <h3 className="text-3xl font-bold mb-4">{title}</h3>
                            <p className="text-lg mb-6">{details}</p>
                            <div className="flex gap-6">
                                <div className="flex-1">
                                    <p className="text-md">{additionalInfo}</p>
                                    <p className="mt-6 text-md">This is a detailed message about the project. It provides more information and context about the project, its goals, and its progress.</p>
                                </div>
                            </div>
                            {/* add image grid here */}
                            <div className="flex-shrink-0 grid grid-cols-1 gap-6">
                                <ImageGrid images={[img1.src, img2.src, img3.src, img4.src, img5.src]} />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}


import { useEffect,  } from "react";
import { motion } from "framer-motion";



interface ImageGridProps {
    images: string[];
}

export function ImageGrid({ images }: ImageGridProps) {

    return (
        <div className="grid grid-cols-3 gap-2 p-2 w-full h-auto overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg shadow-lg`}
                    style={{ aspectRatio: "1/1" }}
                >
                    <Image src={src} alt={`Infrastructure ${index + 1}`}  className="object-cover" fill />
                </div>
            ))}
        </div>
    );
}


"use client";

import Image from "next/image";
import CountUp from "react-countup";
const stats = [
    {
        icon: "images/draw/clients-w.svg",
        value: 350,
        label: "Equipments",
    },
    {
        icon: "images/draw/lattice-boom-crane-icon-w.svg",
        value: 500,
        label: "Team Members",
    },
    {
        icon: "images/draw/projects-w.svg",
        value: 100,
        label: "Retained Clients",
    },
    {
        icon: "images/draw/team-w.svg",
        value: 500,
        label: "Projects Executed",
    },
];

const StatsSection = () => {
    return (
        <div className="pb-20">
            <div className="bg-black text-white py-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image src={stat.icon} alt={stat.label} width={80} height={80} />
                            <p className="text-3xl font-bold text-red-500 mt-3">
                                <CountUp end={stat.value} duration={2} /> +
                            </p>
                            <p className="text-gray-300 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;

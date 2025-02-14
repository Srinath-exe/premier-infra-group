
"use client";
import Image ,{StaticImageData} from "next/image";
import { useState } from "react";

interface CardProps {
    imgSrc: StaticImageData;
    title: string;
    subtitle: string;
    additionalText: string;
}

export default function Card({ imgSrc, title, subtitle, additionalText }: CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative overflow-hidden h-[75vh] transition-transform duration-300 ease-in-out ${isHovered ? 'scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src={imgSrc} alt={title} className={`w-full h-full object-cover transition-transform duration-300 ease-in-out ${isHovered ? 'scale-110' : ''}`} />
            <div className="absolute inset-0 p-4  bg-gradient-to-t from-black/80 to-transparent  flex flex-col justify-end gap-2 items-center">
                <h3 className="text-white text-lg font-semibold">{title}</h3>

                <p className="text-white text-sm">{subtitle}</p>
            </div>
            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center p-4 ">
                    <p className="text-white text-sm">{additionalText}</p>
                </div>
            )}
        </div>
    );
}


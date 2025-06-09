import React from "react";
import Contact from "@/components/cta";

export const metadata = {
    title: "Contact Us | Premier Infra Group",
    description: "Contact Premier Infra Group for inquiries, project collaborations, and more.",
};

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-8xl px-4 sm:px-6 bg-white text-gray-900 p-10">
        <Contact />
        </div>
    );
}
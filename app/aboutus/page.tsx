import { motion } from "framer-motion";
import Image from "next/image";
import companyData from "@/data/company-data";

export default function AboutUsPage() {
    return (
        // create a simple page

        <motion.div
            className="mx-auto max-w-6xl px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}

        >

            </motion.div>
    );
}

function Section({ title, description }: { title: string; description: string }) {
    return (
        <motion.div
            className="my-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold text-red-600 mb-4">{title}</h2>
            <p className="text-lg text-gray-700 max-w-3xl">{description}</p>
        </motion.div>
    );
}

function ImageSection({ imageUrl }: { imageUrl: string }) {
    return (
        <motion.div
            className="my-10 w-full overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Image src={imageUrl} alt="Section Image" width={1200} height={500} className="w-full object-cover" />
        </motion.div>
    );
}

interface Person {
    name: string;
    title: string;
    phone: string;
}

function TeamSection({ keyPersonnel }: { keyPersonnel: Person[] }) {
    return (
        <motion.div className="mt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-red-600 mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyPersonnel.map((person, index) => (
                    <motion.div
                        key={index}
                        className="p-6 border-l-4 border-red-600 shadow-md rounded-lg bg-gray-50"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src="https://via.placeholder.com/200"
                            alt={person.name}
                            width={200}
                            height={200}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{person.name}</h3>
                        <p className="text-gray-600">{person.title}</p>
                        <p className="text-gray-500">{person.phone}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
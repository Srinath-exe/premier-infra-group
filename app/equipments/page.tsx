import React from "react";
import companyData from "@/data/company-data";

export default function EquipmentsPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 bg-white text-gray-900 p-10">
            <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Equipments</h1>


            {/* table 1  */}
            <h1 className="text-2xl font-bold text-red-600 mb-8 pt-6"> HYDRAULIC CRANES </h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <tbody>
                        {companyData.equipmentList.hydraulic_cranes.map((equipment, index) => (
                            <tr key={index} className={`relative group overflow-hidden ${index === 0 ? 'bg-black text-white' : ''}`}>
                                {/* Background transition layer */}
                                <td className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></td>

                                {/* Table Cells */}
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.name}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.capacity_mt}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.boom_length_m}
                                </td>

                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

                        
            <h1 className="text-2xl font-bold text-red-600 mb-8 pt-20"> CRAWLER CRANES </h1>

            {/* table 2 */} <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <tbody>
                        {companyData.equipmentList.crawler_cranes.map((equipment, index) => (
                            <tr key={index} className={`relative group overflow-hidden ${index === 0 ? 'bg-black text-white' : ''}`}>
                                {/* Background transition layer */}
                                <td className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></td>

                                {/* Table Cells */}
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.name}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.capacity_mt}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.boom_length_m}
                                </td>

                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


            <h1 className="text-2xl font-bold text-red-600 mb-8 pt-20"> TRUCKS AND TRAILERS </h1>

            {/* table 3 */}
            <div className="overflow-x-auto">

                <table className="min-w-full bg-white">
                    <tbody>
                        {companyData.equipmentList.trucks_and_trailers.map((equipment, index) => (
                            <tr key={index} className={`relative group overflow-hidden ${index === 0 ? 'bg-black text-white' : ''}`}>
                                {/* Background transition layer */}
                                <td className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></td>

                                {/* Table Cells */}
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.name}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.quantity}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <h1 className="text-2xl font-bold text-red-600 mb-8 pt-20"> TOWER CRANES </h1>
            {/* table 4 */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <tbody>
                        {companyData.equipmentList.tower_cranes.map((equipment, index) => (
                            <tr key={index} className={`relative group overflow-hidden ${index === 0 ? 'bg-black text-white' : ''}`}>
                                {/* Background transition layer */}
                                <td className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></td>

                                {/* Table Cells */}
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.name}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.jib_length_m}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.free_standing_height_m}
                                </td>

                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.extendable_height_m}
                                </td>

                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.max_capacity_ton}
                                </td>

                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.tip_load_ton}
                                </td>

                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {equipment.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
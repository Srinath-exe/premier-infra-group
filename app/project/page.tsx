import companyData from "@/data/company-data";

export default function ProjectsPage() {
    return (
        <div className=" mx-auto max-w-7xl px-4 sm:px-6 bg-white text-gray-900 p-10">
            <h1 className="text-4xl font-bold text-red-600 mb-8  text-center">Projects</h1>
            <div className="overflow-x-auto">

                <table className="min-w-full bg-white">
                    <tbody>
                        {companyData.projects.map((project, index) => (
                            <tr key={index} className={`relative group overflow-hidden ${index === 0 ? 'bg-black text-white' : ''}`}>
                                {/* Background transition layer */}
                                <td className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500"></td>

                                {/* Table Cells */}
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {project.client}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {project.principle_client}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {project.type_of_work}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {new Date(project.work_order_date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                    })}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {project.work_order_value_lakh}
                                </td>
                                <td className={`px-4 py-6 border-b relative z-10 transition-colors duration-300 group-hover:text-white ${index === 0 ? 'font-bold' : ''}`}>
                                    {project.completion_status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
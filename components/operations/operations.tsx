import Card from "@/components/operations/card";
import img1 from "@/public/images/project/op1.jpg";
import img2 from "@/public/images/project/op2.jpg";
import img3 from "@/public/images/project/op3.jpg";
import img4 from "@/public/images/project/op4.jpg";
import img5 from "@/public/images/project/op5.jpg";

export default function Operations() {
    return (
        <section className="py-12 bg-secondary">
            <div className="mx-auto w-full px-4 sm:px-6">
                <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <Card
                        imgSrc={img1}
                        title="Operation 1"
                        subtitle="Subtitle 1"
                        additionalText="Additional information about Operation 1."
                    />
                    <Card
                        imgSrc={img2}
                        title="Operation 2"
                        subtitle="Subtitle 2"
                        additionalText="Additional information about Operation 2."
                    />
                    <Card
                        imgSrc={img3}
                        title="Operation 3"
                        subtitle="Subtitle 3"
                        additionalText="Additional information about Operation 3."
                    />
                    <Card
                        imgSrc={img4}
                        title="Operation 4"
                        subtitle="Subtitle 4"
                        additionalText="Additional information about Operation 4."
                    />
                    <Card
                        imgSrc={img5}
                        title="Operation 5"
                        subtitle="Subtitle 5"
                        additionalText="Additional information about Operation 5."
                    />
                </div>
            </div>
        </section>
    );
}
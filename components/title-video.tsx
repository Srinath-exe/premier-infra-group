import React from "react";

const TitleVideo = () => {
    return (
        <div className="flex items-center justify-center w-full h-[75%]"> {/* Full screen container */}
            <video autoPlay loop muted className="object-fill w-full h-[75%]">
                <source src="/videos/premier.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default TitleVideo;
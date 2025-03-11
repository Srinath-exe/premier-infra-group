import React from "react";

const TitleVideo = () => {
    return (
        <video autoPlay loop muted className="object-cover max-w-full max-h-[75%]">
            <source src="/videos/premier.mp4" type="video/mp4" />
        </video>
    );
};

export default TitleVideo;
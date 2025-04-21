import { PlayIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export const HeroSection = (): JSX.Element => {
    // Image URLs for the grid background
    const imageRows = [
        [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-57.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-58.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-59.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-60.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-61.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-62.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-63.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-64.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-65.png",
        ],
        [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-66.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-67.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-68.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-69.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-70.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-71.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-72.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-73.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-74.png",
        ],
        [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-75.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-76.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-77.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-78.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-79.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-80.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-81.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-82.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-83.png",
        ],
        [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-84.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-85.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-86.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-87.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-88.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-89.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-90.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-91.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-92.png",
        ],
    ];

    return (
        <section className="relative w-full">
            <div className="flex flex-col items-center">
                <div className="relative h-[860px] w-full">
                    {/* Image Grid Background */}
                    {imageRows.map((row, rowIndex) => (
                        <div key={`row-${rowIndex}`} className="flex gap-5 h-1/4 w-full">
                            {row.map((imgSrc, imgIndex) => (
                                <img
                                    key={`img-${rowIndex}-${imgIndex}`}
                                    className="flex-1 h-full object-cover"
                                    alt={`Movie thumbnail ${rowIndex * 9 + imgIndex + 1}`}
                                    src={imgSrc}
                                />
                            ))}
                        </div>
                    ))}

                    {/* Overlay Image */}
                    <img
                        className="absolute w-full h-full top-0 left-0 bg-blend-overlay object-cover"
                        alt="Overlay"
                        src="https://c.animaapp.com/m9mpcg8cxzUWoO/img/image.png"
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute w-full h-[581px] top-0 left-0 bg-gradient-to-b from-black-08 to-transparent" />
                    <div className="absolute w-full h-[581px] bottom-0 left-0 bg-gradient-to-t from-black-08 to-transparent" />
                </div>

                {/* Content Section */}
                <Card className="max-w-3xl mx-auto px-8 py-10 -mt-16 z-10 border-0 bg-transparent">
                    <div className="flex flex-col items-center gap-[50px]">
                        <div className="flex flex-col items-center gap-3.5 text-center">
                            <h1 className="text-[58px] font-bold leading-[87px] text-white font-['Manrope',Helvetica] tracking-normal">
                                The Best Streaming Experience
                            </h1>
                            <p className="text-lg font-normal text-grey-60 leading-[27px] font-['Manrope',Helvetica] tracking-normal">
                                StreamVibe is the best streaming experience for watching your
                                favorite movies and shows on demand, anytime, anywhere. With
                                StreamVibe, you can enjoy a wide variety of content, including
                                the latest blockbusters, classic movies, popular TV shows, and
                                more. You can also create your own watchlists, so you can easily
                                find the content you want to watch.
                            </p>
                        </div>

                        <Button className="bg-red-45 hover:bg-red-45/90 text-white rounded-lg px-6 py-[18px] h-auto">
                            <PlayIcon className="w-7 h-7 mr-1" />
                            <span className="font-semibold text-lg leading-[27px] font-['Manrope',Helvetica]">
                Start Watching Now
              </span>
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    );
};

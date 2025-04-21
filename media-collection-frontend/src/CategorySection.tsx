import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Card, CardContent } from "./card";

// Define category data for mapping
const categories = [
    {
        name: "Action",
        images: [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-37.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-75.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-77.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-40.png",
        ],
    },
    {
        name: "Adventure",
        images: [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-41.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-42.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-43.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-44.png",
        ],
    },
    {
        name: "Comedy",
        images: [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-45.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-46.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-47.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-48.png",
        ],
    },
    {
        name: "Drama",
        images: [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-49.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-50.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-51.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-52.png",
        ],
    },
    {
        name: "Horror",
        images: [
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-53.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-54.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-55.png",
            "https://c.animaapp.com/m9mpcg8cxzUWoO/img/image-56.png",
        ],
    },
];

export const CategorySection = (): JSX.Element => {
    return (
        <section className="flex flex-col w-full items-start gap-20 py-16">
            <div className="flex items-end justify-between w-full gap-8">
                <div className="flex flex-col items-start gap-3.5">
                    <h2 className="font-bold text-white text-[38px] leading-[57px] font-['Manrope',Helvetica]">
                        Explore our wide variety of categories
                    </h2>
                    <p className="text-grey-60 text-lg leading-[27px] font-['Manrope',Helvetica]">
                        Whether you're looking for a comedy to make you laugh, a drama to
                        make you think, or a documentary to learn something new
                    </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-black-06 rounded-xl border border-solid border-[#1e1e1e]">
                    <button className="inline-flex items-center justify-center p-3.5 bg-black-10 rounded-lg border border-solid border-[#1e1e1e]">
                        <ChevronLeftIcon className="w-7 h-7" />
                    </button>

                    <div className="flex w-[81px] items-center gap-[3px]">
                        <div className="w-[23px] h-1 bg-red-45 rounded-[100px]" />
                        <div className="flex-1 h-1 bg-black-20 rounded-[100px]" />
                        <div className="flex-1 h-1 bg-black-20 rounded-[100px]" />
                        <div className="flex-1 h-1 bg-black-20 rounded-[100px]" />
                    </div>

                    <button className="inline-flex items-center justify-center p-3.5 bg-black-10 rounded-lg border border-solid border-[#1e1e1e]">
                        <ChevronRightIcon className="w-7 h-7" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-[30px] w-full">
                {categories.map((category, index) => (
                    <Card
                        key={index}
                        className="bg-black-10 rounded-xl border border-solid border-neutral-800"
                    >
                        <CardContent className="p-[30px]">
                            <div className="flex flex-col h-[252px] gap-[5px] relative w-full overflow-hidden">
                                <div className="flex gap-[5px] flex-1">
                                    <img
                                        className="flex-1 object-cover"
                                        alt="Category image"
                                        src={category.images[0]}
                                    />
                                    <img
                                        className="flex-1 object-cover"
                                        alt="Category image"
                                        src={category.images[1]}
                                    />
                                </div>
                                <div className="flex gap-[5px] flex-1">
                                    <img
                                        className="flex-1 object-cover"
                                        alt="Category image"
                                        src={category.images[2]}
                                    />
                                    <img
                                        className="flex-1 object-cover"
                                        alt="Category image"
                                        src={category.images[3]}
                                    />
                                </div>
                                <div className="absolute w-[237px] h-[252px] top-0 -left-px [background:linear-gradient(180deg,rgba(26,26,26,0)_0%,rgba(26,26,26,1)_100%)]" />
                            </div>

                            <div className="flex items-center justify-between w-full mt-4">
                                <h3 className="font-semibold text-lg leading-[27px] text-white font-['Manrope',Helvetica]">
                                    {category.name}
                                </h3>
                                <ChevronRightIcon className="w-[30px] h-[30px]" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

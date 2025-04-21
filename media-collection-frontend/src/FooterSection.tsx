import React from "react";
import { Separator } from "./separator";

export const FooterSection = (): JSX.Element => {
    // Footer navigation data
    const footerNavigation = [
        {
            title: "Home",
            links: ["Categories", "Devices", "Pricing", "FAQ"],
        },
        {
            title: "Movies",
            links: ["Gernes", "Trending", "New Release", "Popular"],
        },
        {
            title: "Shows",
            links: ["Gernes", "Trending", "New Release", "Popular"],
        },
        {
            title: "Support",
            links: ["Contact Us"],
        },
        {
            title: "Subscription",
            links: ["Plans", "Features"],
        },
    ];

    // Social media icons
    const socialIcons = [
        {
            src: "https://c.animaapp.com/m9mpcg8cxzUWoO/img/icon-7.svg",
            alt: "Icon",
        },
        {
            src: "https://c.animaapp.com/m9mpcg8cxzUWoO/img/icon-6.svg",
            alt: "Icon",
        },
        {
            src: "https://c.animaapp.com/m9mpcg8cxzUWoO/img/icon-17.svg",
            alt: "Icon",
        },
    ];

    // Legal links
    const legalLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

    return (
        <footer className="flex flex-col w-full items-start gap-[100px] pt-[100px] pb-[50px] px-[162px] bg-black-06">
            <div className="flex items-start gap-[30px] relative self-stretch w-full">
                {/* Navigation columns */}
                {footerNavigation.map((section, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start gap-6 relative flex-1 grow"
                    >
                        <div className="self-stretch mt-[-1.00px] font-semibold text-xl leading-[30px] [font-family:'Manrope',Helvetica] text-white tracking-[0]">
                            {section.title}
                        </div>

                        <div className="flex flex-col items-start gap-3.5 relative self-stretch w-full">
                            {section.links.map((link, linkIndex) => (
                                <div
                                    key={linkIndex}
                                    className="relative self-stretch [font-family:'Manrope',Helvetica] font-medium text-grey-60 text-lg tracking-[0] leading-[27px]"
                                >
                                    {link}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Connect With Us section */}
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                    <div className="self-stretch mt-[-1.00px] font-semibold text-xl leading-[30px] relative [font-family:'Manrope',Helvetica] text-white tracking-[0]">
                        Connect With Us
                    </div>

                    <div className="items-start gap-3.5 inline-flex relative">
                        {socialIcons.map((icon, index) => (
                            <div
                                key={index}
                                className="inline-flex items-start gap-2.5 p-4 relative bg-black-10 rounded-lg border border-solid border-neutral-800"
                            >
                                <img
                                    className="relative w-6 h-6"
                                    alt={icon.alt}
                                    src={icon.src}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <Separator className="w-full h-px bg-neutral-800" />

                <div className="flex items-center justify-between relative self-stretch w-full">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-grey-60 text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                        @2023 streamvib, All Rights Reserved
                    </div>

                    <div className="items-start gap-5 inline-flex relative">
                        {legalLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-grey-60 text-lg tracking-[0] leading-[27px] whitespace-nowrap">
                                    {link}
                                </div>
                                {index < legalLinks.length - 1 && (
                                    <img
                                        className="w-px relative self-stretch object-cover"
                                        alt="Line"
                                        src="https://c.animaapp.com/m9mpcg8cxzUWoO/img/line-7.svg"
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};


import { CallToActionSection } from "./CallToActionSection";
import { CategorySection } from "./CategorySection";


import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";


export const HomePageDesktop = (): JSX.Element => {
    return (
        <div className="bg-black-08 flex flex-col items-center w-full min-h-screen">
            <div className="w-full">
                {/* Navbar would be here, currently using an image placeholder */}
                <img
                    className="w-full h-[120px]"
                    alt="Navbar"
                    src="https://c.animaapp.com/m9mpcg8cxzUWoO/img/navbar.png"
                />

                {/* Main content sections in the correct order based on the image */}
                <HeroSection />
                <CategorySection />

                <CallToActionSection />

                <FooterSection />
            </div>
        </div>
    );
};

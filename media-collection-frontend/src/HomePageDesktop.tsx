
import { CategorySection } from "./CategorySection";
// @ts-ignore
import MediaForm from './components/MediaForm'

// @ts-ignore
import Navbar from './components/Navbar';


import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";


export const HomePageDesktop = (): JSX.Element => {
    return (
        <div className="bg-black-08 flex flex-col items-center w-full min-h-screen">
            <div className="w-full">
                {/* Navbar would be here, currently using an image placeholder */}
                <Navbar />
                <MediaForm />

                {/* Main content sections in the correct order based on the image */}
                <HeroSection />
                <CategorySection />



                <FooterSection />
            </div>
        </div>
    );
};

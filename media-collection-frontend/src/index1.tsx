import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePageDesktop } from "./HomePageDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
    <StrictMode>
        <HomePageDesktop />
    </StrictMode>,
);

import React from "react";
import "./Footer.css";

const FooterSection = () => {
    const footerNavigation = [
        {
            title: "Home",
            links: ["Categories", "Devices", "Pricing", "FAQ"],
        },
        {
            title: "Movies",
            links: ["Genres", "Trending", "New Release", "Popular"],
        },
        {
            title: "Shows",
            links: ["Genres", "Trending", "New Release", "Popular"],
        },
        {
            title: "Support",
            links: ["Contact Us"],
        },

    ];

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

    const legalLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

    return (
        <footer className="footer">
            <div className="footer-top">
                {footerNavigation.map((section, index) => (
                    <div key={index} className="footer-column">
                        <div className="footer-title">{section.title}</div>
                        <div className="footer-links">
                            {section.links.map((link, i) => (
                                <div key={i} className="footer-link">
                                    {link}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="footer-column">
                    <div className="footer-title">Connect With Us</div>
                    <div className="footer-social-icons">
                        {socialIcons.map((icon, i) => (
                            <div key={i} className="footer-icon">
                                <img src={icon.src} alt={icon.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-separator"></div>
                <div className="footer-bottom-content">
                    <div className="footer-copyright">
                        @2025 WP_Media_Collection, All Rights Reserved
                    </div>
                    <div className="footer-legal">
                        {legalLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <div className="footer-legal-link">{link}</div>
                                {index < legalLinks.length - 1 && (
                                    <div className="footer-divider"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;

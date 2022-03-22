import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/HeroSection/Hero.jsx";
import FirstInfoBlack from "../../Components/FirstInfoBlack/FirstInfoBlack";
import SecondInfoBlock from "../../Components/SecondInfoBlock/SecondInfoBlock";
import ThirdInfoBlock from "../../Components/ThirdInfoBlock/ThirdInfoBlock";
import Footer from "../../Components/Footer/Footer";
import ConversionBlock from "../../Components/ConversionBlock/ConversionBlock";

function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <FirstInfoBlack />
            <SecondInfoBlock />
            <ThirdInfoBlock />
            <ConversionBlock />
            <Footer />
        </>
    );
}

export default HomePage;

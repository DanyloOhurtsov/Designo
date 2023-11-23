import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderComp } from "../../components/HeaderComp";
import { FooterComp } from "../../components/FooterComp";

export const RootLayout = () => {
    return (
        <>
            <HeaderComp />
            <main>
                <Outlet />
            </main>
            <FooterComp />
        </>
    );
};

import React from "react";
import { Outlet } from "react-router-dom";
import { FooterComp } from "../../components/FooterComp/FooterComp";
import { HeaderComp } from "../../components/HeaderComp/HeaderComp";

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

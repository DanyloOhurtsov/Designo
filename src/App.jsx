import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RootLayout } from "./pages/BasicPages/RootLayout";
import { OurCompanyPage } from "./pages/OurCompanyPage";
import { ErrorPage } from "./pages/BasicPages/ErrorPage/ErrorPage";
import { LocationPage } from "./pages/LocationPage";
import { ContactPage } from "./pages/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "our-company",
                element: <OurCompanyPage />,
            },
            {
                path: "locations",
                element: <LocationPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;

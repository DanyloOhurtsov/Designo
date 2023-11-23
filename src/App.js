import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RootLayout } from "./pages/BasicPages/RootLayout";
import { OurCompanyPage } from "./pages/OurCompanyPage";
import { ErrorPage } from "./pages/BasicPages/ErrorPage/ErrorPage";

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

import Login from "./pages/Login";
import Register from "./pages/Register";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    Navigate
} from "react-router-dom";

import Navbar from "./components/NavBar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {

    const { currentUser } = useContext(AuthContext)

    // Home page
    const Layout = () => {
        return (
            <div className="overflow-hidden h-screen bg-gray-50 dark:bg-[color:var(--dark-base-lite)]">
                <Navbar />
                <div className="grid grid-cols-1 md:grid-cols-[3fr_6fr] xl:grid-cols-[3fr_5fr_3fr]">

                    <div className="hidden md:block overflow-auto h-screen hide-scrollbar pb-[7rem] xl:pb-0">
                        <LeftBar />
                        <div className="xl:hidden">
                            <RightBar />
                        </div>
                    </div>

                    <Outlet />

                    <div className="hidden xl:block">
                        <RightBar />
                    </div>
                </div>
            </div>
        )
    }

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to='/login' />
        }

        return children
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/profile/:id",
                    element: <Profile />
                }
            ]
        },

        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

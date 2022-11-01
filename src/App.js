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

function App() {
    const currentUser = true

    // Home page
    const Layout = () => {
        return (
            <div>
                <Navbar />
                <div className="grid grid-cols-[3fr_5fr_3fr]">
                    <LeftBar />
                    <Outlet />
                    <RightBar />
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

import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {

    const token = useSelector((state: RootState) => state.auth.token);

    if (!token)
        return <Navigate to="/login" />

    return (
        <>
            {/**  Header Component  */}
            <Header />

            {/**  Render Page  */}
            <Outlet />

            {/**  Footer Component  */}
            <Footer />
        </>
    )
}
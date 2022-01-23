import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";

const MainRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                { /*<Route path="*" element={ <NotFound /> } />*/ }
            </Routes>
        </Router>
    );
};

export default MainRouter;
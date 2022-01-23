import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "../pages/Home/Home";

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> } />
                { /*<Route path="*" element={ <NotFound /> } />*/ }
            </Routes>
        </Router>
    );
};

export default MainRouter;
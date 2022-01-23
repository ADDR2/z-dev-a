import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Header from "../components/Header/Header";
import PageLoader from "../components/PageLoader/PageLoader";
import Home from "../pages/Home/Home";
import { homeSagaNames } from "../pages/Home/HomeSagas";

const MainRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PageLoader
                            pageSaga={homeSagaNames.FETCH_PODCASTS}
                            component={routerProps => <Home {...routerProps}/>}
                        />
                    }
                />
                { /*<Route path="*" element={ <NotFound /> } />*/ }
            </Routes>
        </Router>
    );
};

export default MainRouter;
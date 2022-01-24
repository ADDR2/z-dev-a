import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import EpisodeList from "../components/EpisodeList/EpisodeList";

import Header from "../components/Header/Header";
import PageLoader from "../components/PageLoader/PageLoader";
import Home from "../pages/Home/Home";
import { homeSagaNames } from "../pages/Home/HomeSagas";
import Podcast from "../pages/Podcast/Podcast";
import { podcastSagaNames } from "../pages/Podcast/PodcastSagas";

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
                <Route
                    path="/podcast/:podcastId"
                    element={
                        <PageLoader
                            pageSaga={podcastSagaNames.FETCH_PODCAST_DETAILS}
                            component={routerProps => <Podcast {...routerProps}/>}
                        />
                    }
                >
                    <Route path="" element={ <EpisodeList /> }/>
                </Route>
                { /*<Route path="*" element={ <NotFound /> } />*/ }
            </Routes>
        </Router>
    );
};

export default MainRouter;
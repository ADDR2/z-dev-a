import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import PodcastDetails from "../../components/PodcastDetails/PodcastDetails";
import { podcastReducerKeys } from "../../reducers/podcastReducer";

const Podcast = () => {
    const { episodes, ...podcastProps } = useSelector(reducers => reducers[podcastReducerKeys.name]);

    return (
        <div className="zara-podcast">
            <PodcastDetails {...podcastProps}/>
            <Outlet />
        </div>
    );
};

export default Podcast;
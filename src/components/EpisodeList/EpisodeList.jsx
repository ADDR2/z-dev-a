import { useSelector } from "react-redux";
import { podcastReducerKeys } from "../../reducers/podcastReducer";

const EpisodeList = () => {
    const { episodes } = useSelector(reducers => reducers[podcastReducerKeys.name]);

    return (
        <div className="episode-list-container">

        </div>
    );
};

export default EpisodeList;
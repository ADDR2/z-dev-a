import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PodcastThumbnail from "../../components/PodcastThumbnail/PodcastThumbnail";
import { homeReducerKeys } from "../../reducers/homeReducer";

const Home = () => {
    const { podcasts } = useSelector(reducers => reducers[homeReducerKeys.name]);
    const [ filter, setFilter ] = useState('');

    const filteredPodcasts = useMemo(
        () => {
            return Object.values(podcasts).filter(
                ({ name, author }) => {
                    const filterParsed = filter.trim().toLowerCase();
                    const nameParsed = name.trim().toLowerCase();
                    const authorParsed = author.trim().toLowerCase();

                    return nameParsed.includes(filterParsed) || authorParsed.includes(filterParsed);
                }
            );
        },
        [ podcasts, filter ]
    );

    return (
        <div className="zara-home">
            <div className="filter-section">
                <div className="podcasts-amount">{ filteredPodcasts?.length || 0 }</div>
                <input
                    placeholder="Fiter podcasts..."
                    className="podcasts-filter"
                    value={filter}
                    onChange={({ target: { value } }) => setFilter(value)}
                />
            </div>

            <div className="podcasts-container">
                {
                    (filteredPodcasts || []).map(podcast => (
                        <PodcastThumbnail
                            key={`podcast-thumbnail-${podcast.id}`}
                            {...podcast}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
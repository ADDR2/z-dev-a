import { Link } from "react-router-dom";

const PodcastThumbnail = ({ name, author, image, id }) => (
    <Link className="podcast-link" to={`/podcast/${id}`}>
        <div className="podcast-thumbnail">
            <img
                className="podcast-image"
                src={image}
                alt={name}
            />
            <p className="podcast-name">{ name }</p>
            <p className="podcast-author">Author: { author }</p>
        </div>
    </Link>
);

export default PodcastThumbnail;
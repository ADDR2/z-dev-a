import { Link } from "react-router-dom";

const PodcastDetails = ({ name, author, description, id, largeImage }) => {
    return (
        <div className="podcast-detail-container">
            <Link className="hidden-link image-link" to={`/podcast/${id}`}>
                <img
                    className="podcast-detail-image"
                    src={largeImage}
                    alt={name}
                />
            </Link>

            <div className="podcast-detail-separator"/>

            <Link className="hidden-link podcast-detail-name" to={`/podcast/${id}`}>{ name }</Link>
            <Link className="hidden-link podcast-detail-author" to={`/podcast/${id}`}>by { author }</Link>

            <div className="podcast-detail-separator"/>

            <p className="podcast-detail-description">
                <span>Description:</span>
                <br/>
                { description }
            </p>
        </div>
    );
};

export default PodcastDetails;
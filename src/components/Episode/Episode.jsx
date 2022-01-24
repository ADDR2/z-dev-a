import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { podcastReducerKeys } from "../../reducers/podcastReducer";

import 'react-quill/dist/quill.snow.css';

const Episode = () => {
    const { episodeId } = useParams();
    const { episodes } = useSelector(reducers => reducers[podcastReducerKeys.name]);
    const { name, description, audio, episodeContentType, episodeFileExtension } = episodes[episodeId];

    return (
        <div className="episode-container">
            <h1 className="episode-name">{ name }</h1>
            <ReactQuill className="rich-editor" theme="snow" value={ description } readOnly modules={{ toolbar: null }}/>
            
            <div className="episode-player">
                <audio controls>
                    <source src={audio} type={`${episodeContentType}/${episodeFileExtension}`} />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default Episode;
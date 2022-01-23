import { useSelector } from "react-redux";
import { homeReducerKeys } from "../../reducers/homeReducer";

const Home = () => {
    const { podcasts } = useSelector(reducers => reducers[homeReducerKeys.name]);

    return (
        <div className="zara-home">
            
        </div>
    );
};

export default Home;
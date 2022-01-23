import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MainReducerKeys } from '../../reducers/main';

const Header = () => {
    const { navigating } = useSelector(reducers => reducers[MainReducerKeys.name]);

    return (
        <div className="zara-header">
            <Link className="zara-logo" to="/">Podcaster</Link>
            { navigating && <CircularProgress size={22} className="zara-spinner" /> }
        </div>
    );
};

export default Header;
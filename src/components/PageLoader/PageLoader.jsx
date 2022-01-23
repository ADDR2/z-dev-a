import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { mainReducerKeys } from "../../reducers/main";


const PageLoader = ({ pageSaga, component, ...inheritedProps }) => {
    const { navigating } = useSelector(reducers => reducers[mainReducerKeys.name]);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(
        () => {
            dispatch({ type: pageSaga, payload: params });
        },
        [ dispatch, pageSaga, params ]
    );

    if (navigating) return <></>;

    return component({ ...inheritedProps });
};

export default PageLoader;
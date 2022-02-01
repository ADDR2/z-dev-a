import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { mainReducerKeys } from "../../reducers/main";


const PageLoader = ({ pageSaga, Component, ...inheritedProps }) => {
    const { navigating } = useSelector(reducers => reducers[mainReducerKeys.name]);
    const dispatch = useDispatch();
    const params = useRef(() => {});
    params.current = useParams();

    useEffect(
        () => {
            dispatch({ type: pageSaga, payload: params.current });
        },
        [ dispatch, pageSaga ]
    );

    if (navigating) return <></>;

    return <Component { ...inheritedProps }/>;
};

export default PageLoader;
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const PageLoader = ({ pageSaga, component, ...inheritedProps }) => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(
        () => {
            dispatch({ type: pageSaga, payload: params });
        },
        [ dispatch, pageSaga, params ]
    );

    return component({ ...inheritedProps });
};

export default PageLoader;
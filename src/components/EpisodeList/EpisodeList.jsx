import { useMemo } from "react";
import { useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { podcastReducerKeys } from "../../reducers/podcastReducer";
import { Link } from "react-router-dom";

const EpisodeList = () => {
    const { episodes, id: podcastId } = useSelector(reducers => reducers[podcastReducerKeys.name]);
    const arrayOfEpisodes = useMemo(
        () => {
            return Object.values(episodes);
        },
        [ episodes ]
    );

    const columns = [
        {
            field: 'name',
            headerName: 'Title',
            width: 500,
            renderCell: ({ row: { name, id } }) => <Link
                className="episode-link"
                to={`/podcast/${podcastId}/episode/${id}`}
            >
                { name }
            </Link>
        },
        { field: 'releaseDate', headerName: 'Date', width: 100 },
        { field: 'duration', headerName: 'Duration', width: 100 }
    ];

    return (
        <div className="episode-list-container">
            <h1 className="episodes-amount">Episodes: { arrayOfEpisodes?.length }</h1>

            <div className="episodes-table-container">
                <DataGrid
                    rows={arrayOfEpisodes}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                    sortable={false}
                />
            </div>
        </div>
    );
};

export default EpisodeList;
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Search from "./components/search";
import { Table } from "./components/table";
import Pagination from "./components/pagination";

function App() {
    const [data, setData] = useState({});
    const [sort, setSort] = useState({ sort: "rating", order: "desc" });
    const [filterGenre, setFilterGenre] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const BASE_URL = "http://localhost:5000/api/movies/";

    console.log(data);

    const getAllMovies = async () => {
        try {
            const URL = `${BASE_URL}?page=${page}&sort=${sort.sort},${
                sort.order
            }&genre=${filterGenre.toString()}&search=${search}`;

            const response = await axios.get(URL);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, [search, sort, filterGenre, page]);
    return (
        <div className="wrapper">
            <div className="container">
                <div className="head">
                    <img
                        src="./assets/images/logo.png"
                        alt="logo"
                        className="logo"
                    />
                    <Search setSearch={(search) => setSearch(search)} />
                </div>
                <div className="body">
                    <div className="table-container">
                        <Table movies={data?.movies ? data.movies : []} />
                        <Pagination
                            page={page}
                            limit={data?.limit ? data.limit : 0}
                            total={data?.total ? data.total : 0}
                            setPage={setPage}
                        />
                    </div>
                    <div className="filter-container"></div>
                </div>
            </div>
        </div>
    );
}

export default App;

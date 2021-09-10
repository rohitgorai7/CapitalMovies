import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Movie from './movie';
import CustomPagination from './CustomPagination'
import './discover.css';
const Discover = (props) => {

    const {user, fav} = props;
    const[page, setPage] = useState(1);
    const [content, setContent] = useState([]);    

    useEffect(() => {
        const fetchDiscover = async () => {
            const { data} = await axios.get(`
            https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&page=${page}`);
            
            console.log(data);
            setContent(data.results);
            
        };
        fetchDiscover();
    }, [page]);

    return(
        <div className="container">
            <h1 className="pageTitle">Discover</h1>
            <div className="discover"  >
                {
                    content && content.map((c) => (
                        <Movie id={c.id} fav={fav} user={user} image={c.poster_path} title={c.title || c.name} avgvote={c.vote_average} date={c.release_date} />
                    )) 
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
};

export default Discover;
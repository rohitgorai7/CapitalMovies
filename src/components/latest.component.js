import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Movie from './movie';
import CustomPagination from './CustomPagination'
import './discover.css';
const Latest = (props) => {
    const {user, fav} = props;
    
    const[page, setPage] = useState(1);

    const [content, setContent] = useState([]);    

    useEffect(() => {
        const fetchLatest = async () => {
            const { data} = await axios.get(`
            https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}&language=en-US&page=${page}`);
            
            console.log(data);
            setContent(data.results);
            
        };
        fetchLatest();
    }, [page]);

    return(
        <div className="container">
            <h1 className="pageTitle">Latest</h1>
            <div className="discover" >
                {
                    content && content.map((c) => (
                        <Movie id={c.id} fav={fav} user={user} image={c.poster_path} title={c.title || c.name} avgvote={c.vote_average} date={c.release_date} />
                    )) 
                }
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    );
};

export default Latest;
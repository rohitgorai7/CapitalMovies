import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Movie from './movie';
import CustomPagination from './CustomPagination'
import './discover.css';
const Favourites = (props) => {
    
    const {user, fav} = props;    

    const[page, setPage] = useState(1);

    const [maxPage, setMaxPage]= useState('');
    
    const [content, setContent] = useState([]);
        

    const fetchFav = async () => {
        const { data} = await axios.get(`https://api.themoviedb.org/3/account/${process.env.REACT_APP_USER_ID}/favorite/movies?api_key=${process.env.REACT_APP_API}&language=en-US&session_id=${process.env.REACT_APP_SESSION_ID}&sort_by=created_at.asc&&page=${page}`);
        
        console.log(data);
        
        setContent(data.results);

        setMaxPage(data.total_pages);
        
    };

    useEffect(() => {
        fetchFav();
    }, [page, maxPage]);

    return(
        <div className="container">
            <h1 className="pageTitle">Favourites</h1>
            <div className="discover"  >
                {
                    content && content.map((c) => (
                        <Movie id={c.id} fav={fav} user={user} image={c.poster_path} title={c.title || c.name} avgvote={c.vote_average} date={c.release_date} />
                    )) 
                }
            </div>
            <CustomPagination setPage={setPage} setMaxPage={setMaxPage} />
            <br /><br />
        </div>
    );
};

export default Favourites;
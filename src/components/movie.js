import { Badge } from '@material-ui/core';
import React, { useEffect } from 'react';
import { img_300, unavailable } from './config/config';
import "./movie.css";
import axios from 'axios';
import Discover from './discover.component';
import { useHistory } from 'react-router';

const Movie =  (props) => {

        const{
            id,
            fav,
            user,    
            image,
            title,
            avgvote,
            date,
        } = props;

        const history = useHistory();
        
        //Another method to post JSON data
        /*async function postData() {
            try{
                let result = await fetch(``,{
                    method: 'post',
                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({

                    })
                })
            } catch(e) {
                console.log(e)
            }
        }*/

        

        const postFav = async () => {
            const res = await axios.post(`
            https://api.themoviedb.org/3/account/${process.env.REACT_APP_USER_ID}/favorite?api_key=${process.env.REACT_APP_API}&session_id=${process.env.REACT_APP_SESSION_ID}`
            , {
                "media_type": "movie",
                "media_id": id,
                "favorite": true
              });
            console.log(res);
            
            
        };

        const removeFav = async () => {
            const res = await axios.post(`
            https://api.themoviedb.org/3/account/${process.env.REACT_APP_USER_ID}/favorite?api_key=${process.env.REACT_APP_API}&session_id=${process.env.REACT_APP_SESSION_ID}`
            , {
                "media_type": "movie",
                "media_id": id,
                "favorite": false
              });
            console.log(res);            
        };
        
        return (
            <div className="media">
                <Badge badgeContent={avgvote} color={avgvote>7 ? 'primary':'secondary'}/>
                <img className="poster" src={ image ? `${img_300}/${image}` : unavailable } alt={title} />
                <b className="title">{title}</b>
                <span className="dateSpan">{date} {
                    user ?
                    (
                        !fav ? (
                            <button onClick={()=>{postFav(); history.push("/discover/favourites")}} type="button" class="btn btn-success btn-sm">Add to fav</button>
                        ) : (
                            <button onClick={() => {
                                removeFav(); history.push("/discover");
                            }} type="button" class="btn btn-danger btn-sm">Remove</button>
                        )
                    ) : (
                        <>
                        </>
                    )
                } </span>            
            </div>
        );
};

export default Movie;
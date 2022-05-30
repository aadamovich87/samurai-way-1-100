import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <>
            <div>
                My post
            </div>
            <Post massage='Hi, how are you?' LikeNumber ={23}/>
            <Post massage='My first post' LikeNumber ={0}/>
        </>
    )
}
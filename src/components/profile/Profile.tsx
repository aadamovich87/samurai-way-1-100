import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = ()=> {
    return (
        <div className={s.content}>
            <div>
                <img src='https://get.pxhere.com/photo/beach-sea-coast-tree-water-sand-ocean-person-sky-boat-shore-vacation-bay-jetski-body-of-water-caribbean-palm-trees-tropics-coconut-trees-arecales-palm-family-952393.jpg'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}
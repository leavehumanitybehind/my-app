import React from 'react';
import classes from "./post.module.css";


const Post = (props) => {
    return (
    <div className={classes.post}>
            <div className={classes.info}>
        <img src='https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg' width='40' height='40'/>
         <p> {props.name} </p>
         <p> {props.surname} </p>
            
            </div>
            <div className={classes.message}>
            {props.message}
            </div>
            <div className={classes.like__wrapper}>
                <button className={classes.like}></button>
                <span> {props.count}</span>
                </div>
                
            <div>
               
            </div>
            </div>
    );
};

export default Post;
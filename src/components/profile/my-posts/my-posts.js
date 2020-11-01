import React from 'react';
import Post from '../post/post';
import classes from "./my-posts.module.css";


const MyPosts = (props) => {
    return (
    <div className={classes.posts}>
        <div>
            My posts
            <div className={classes.posts__window}>
                <textarea></textarea>
                <button>Add post </button>
                <button>Remove post </button>
            </div>
                <Post message='Почему никто не чешет пузико?' name='Виктор' surname='Лисицын' count='15'/>
                <Post message='How are you' count ='15'/>
                <Post message='Where are you' count='20' />
                <Post message='I love you' count='25' />
                <Post message='Why nobody loves me?' count='14'/>

    </div>

    </div>
    );
};

export default MyPosts;
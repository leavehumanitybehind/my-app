import React from 'react';
import Post from '../post/post';
import classes from "./my-posts.module.css";
import PostsWindow from './posts-window/posts-window';


const MyPosts = (props) => {
    return (
    <div className={classes.posts}>
        <div>
            <PostsWindow />
                <Post message='Почему никто не чешет пузико?' name='Пряничек' surname='Сладенький' count='15'/>
                <Post message='How are you' name='Ягодка' surname='Спелая' count ='15'/>
                <Post message='Where are you' name='Эклерчик' surname='Ванильный' count='20' />
                <Post message='I love you' name='Кексик' surname='Малиновый' count='25' />
                <Post message='Why nobody loves me?' name='Кролик' surname='Апельсиновый' count='14'/>

    </div>

    </div>
    );
};

export default MyPosts;
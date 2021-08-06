import Post from './Post/Post';
import s from './profile.module.css';
import React from 'react';

const Myposts = (props) => {

    let newdataPosts = props.post.map(
        post => <Post message={post.message} likes={post.likes}></Post>
    )

    let Valuer = React.createRef();

    let butClick = () => {
        console.log(Valuer.current.value[0]);
        if ((Valuer.current.value !== '') && (Valuer.current.value[0] !== ' ')) {
            let text = Valuer.current.value;
            props.addPost(text);
            Valuer.current.value = '';
        }
    }

    return (
        <div className={s.postplace}>
            <textarea ref={Valuer} className={s.margin_blocks}></textarea>
            <button onClick={butClick} className={s.margin_blocks}>Add post</button>
            <div className={s.margin_blocks}>
                {newdataPosts}
            </div>
        </div>
    );
};


export default Myposts;
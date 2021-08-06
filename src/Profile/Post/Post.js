import s from './post.module.css';


   const Post = (props) => {
       return (
        <div className={s.post}><div className={s.avaman}></div><strong>User</strong> - {props.message} | Likes - {props.likes}</div>
           );
   };


export default Post;
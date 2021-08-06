import Myposts from './MyPosts';
import s from './profile.module.css';

const ProfileInfo = (props) => {
    
     
    
    return (
        <div>
            <div className={s.profile_page}>
                <div className={s.profile_card_img}>
                    <img src="https://i.ibb.co/vHP70CW/Av-AB-5y-R2f-M.jpg"></img>
                </div>

                <div className={s.profile_card}>
                    <div className={s.profile_card__cnt}>
                        <div className={s.profile_card__name}>NIKITA KRASNOV</div>
                        <div className={s.profile_card__txt}>Front-end Developer from <strong>Russia</strong></div>
                        <div className={s.profile_card_loc}>
                            <span className={s.profile_card_loc__txt}>
                                <div className={s.imgspan}></div>Ivanovo, ISUCT
                            </span>
                        </div>
                    </div>
                    MyPosts
                   <Myposts post = {props.post} addPost = {props.addPost}></Myposts>
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;
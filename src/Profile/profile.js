import ProfileInfo from './ProfileInfo';



const Profile = (props) => {
    
    return (
            <ProfileInfo post = {props.state.dataPosts} addPost = {props.addPost}></ProfileInfo>
    );
};


export default Profile;
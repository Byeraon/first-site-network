import React from 'react';
import Nav from './nav';
import Profile from './Profile/profile';
import Dialogs from './Dialogs/dialogs';
import News from './News/news';
import Settings from './Settings/settings';
import Music from './Music/music';
import s from './content.module.css';
import f from './App.module.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={f.page}>
        <Nav></Nav>
        <div className={s.blkpage}>
          <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesDataPage} />}></Route>
          <Route path="/profile" render={ () => <Profile state={props.state.profileDataPage} addPost={props.addPost}/>}></Route>
          <Route path="/news" render={ () => <News />}></Route>
          <Route path="/settings" render={ () => <Settings />}></Route>
          <Route path="/music" render={ () => <Music />}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;

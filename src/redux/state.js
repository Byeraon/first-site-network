import {renderDOM} from '../render';

let state = {
    profileDataPage: {
    dataPosts: [
        { id: 0, message: "Hi, man", likes: 3 },
        { id: 1, message: "Nice", likes: 4 },
        { id: 2, message: "I like", likes: 9 },
      ]
    },
    messagesDataPage: {
    dataMessages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How, man"},
        {id: 3, message: "Yooo"}
      ],
      
    dataDialogs: [
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Ilya'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Serega'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Misha'}
      ]
    }
}

export let addPost = (postMessage) => {
  let newPost = { id: 3, message: postMessage, likes: 0 }
  
  state.profileDataPage.dataPosts.push(newPost);
  renderDOM(state);
}

export default state;
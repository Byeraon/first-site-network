import DialogItem from './dialogItem';
import s from './dialogs.module.css';
import Message from './message';
import React from 'react';

const Dialogs = (props) => {
    let newdataDialogs = props.state.dataDialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}></DialogItem>
    )

    let Valuer = React.createRef();

    let butClick = () => {
        let text = Valuer.current.value;
        alert(text);
    }

    let newdataMessages = props.state.dataMessages.map(
        message => <Message message={message.message}></Message>
    )

    return (
        <div className={s.dialog_page}>
            <div className={s.dialog_items}>
                {newdataDialogs}

            </div>
            <div className={s.message_items}>
                {newdataMessages}
                <div className={s.sending_place}>
                    <textarea ref={Valuer}></textarea>
                    <button onClick={butClick}></button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
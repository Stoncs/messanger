import React from 'react';
import ContentEditable from 'react-contenteditable';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllMessagesChat, sendMessage } from '../../http/messageApi';
import { setSelectedChat } from '../../redux/actions/chats';
import { MESSENGER_ROUTE } from '../../utils/consts';
import {Message, DotsIcon, Popup, ConfirmWindow} from '../index';

import './ChatPanel.scss';

export default function ChatPanel() {
  const chatsState = useSelector(({chats}) => chats);
  const user = useSelector(({user}) => user.info);

  const {chatId} = useParams();
  const [messages, setMessages] = React.useState([]);
  const [messageInput, setMessageInput] = React.useState('');
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);
  const [confirmationRequired, setConfirmationRequired] = React.useState({message: 'Уверены, что хотите удалить чат?', onConfirm: () => console.log('че ты наделал..')});

  const onSubmit = (e) => {
    e.preventDefault();
    if (messageInput) {
      sendMessage(chatId, user.id, messageInput);
      setMessageInput('');
      window.location.reload();
    }

  };

  const $messagesArea = React.useRef();
  React.useEffect(() => {
    $messagesArea.current.scrollTop = $messagesArea.current.scrollHeight;
  }, [messages]);


  React.useEffect(() => {
    getAllMessagesChat(chatId).then((messages) => setMessages(messages));
  }, [chatId]);

  return (
    <div className='chat-panel'>
      <div className='chat-panel__header'>
        <div className='chat-panel__title' >{chatsState.selectedChat.title}</div>
        <div className='header__toggle-button' onClick={() => setIsOpenPopup((prev) => !prev)}>
          <DotsIcon />
        </div>
        {isOpenPopup &&
          <div className='header__popup' onClick={() => setIsOpenPopup(false)}>
            <Popup 
              elements={[
                {title: 'Добавить участников'},
                {title: 'Удалить участников'},
                {title: 'Переименновать чат'},
                {title: 'Выйти из чата'},
                {title: 'Удалить чат'},
              ]}
            />
          </div>
        }
      </div>
      <div ref={$messagesArea} className='chat-panel__messages-area'>
        {messages.map((message) => <Message key={message.id} messageInfo={message} />)}
      </div>
      <div className='chat-panel__footer'>
        <form onSubmit={onSubmit} className='chat-panel__input'>
          <textarea name='sendMessage' placeholder='Введите ваше сообщение здесь...' value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
        </form>
        <button onClick={onSubmit} className='btn chat-panel__send-button'>Отправить</button>
      </div>
      {confirmationRequired &&
        <ConfirmWindow info={{...confirmationRequired, setConfirmationRequired}}/>
      }
    </div>
  );
}
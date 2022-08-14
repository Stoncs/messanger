import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllMessagesChat, sendMessage } from '../../http/messageApi';
import {Message} from '../index';

import './ChatPanel.scss';

export default function ChatPanel() {
  const user = useSelector(({user}) => user.info);
  const {chatId} = useParams();
  const [messages, setMessages] = React.useState([]);
  const [messageInput, setMessageInput] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(chatId);
    if (messageInput) {
      sendMessage(chatId, user.id, messageInput);
      setMessageInput('');
      setMessages((prev) => [...prev, {
        chatId,
        date: Date.now(),
        text: messageInput,
        user: {
          id: user.id,
          username: user.username,
          avatar_image: user.avatar_image
        }
      }]);
    }
  };

  const $messagesArea = React.useRef();
  React.useEffect(() => {
    $messagesArea.current.scrollTop = $messagesArea.current.scrollHeight;
  }, [messages]);

  React.useEffect(() => {
    getAllMessagesChat(chatId).then((messages) => setMessages(messages));
    // getAllMessagesChat(chatId).then((messages) =>  console.log(messages));
  }, [chatId]);

  return (
    <div className='chat-panel'>
      <div className='chat-panel__header'>
        lsdjfsdf
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

      
    </div>
  );
}
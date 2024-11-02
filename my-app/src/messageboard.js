import { useCollection } from 'react-firebase-hooks/firestore';
import logo from './logo.svg';
import './App.css';
import { dB } from './firebase.js';
import { collection } from 'firebase/firestore';
import { format } from 'date-fns';


const FirestoreCollection = () => {
    const usersRef = collection(dB, 'posts');
    const [value, loading, error] = useCollection(usersRef, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    return (
      <>
  <ul className="message-board">
    {value?.docs.map((doc) => {
      const { username, title, message, time, replies } = doc.data();
      return (
        <li className="message-item" key={doc.id}>
          <div className="message-header">
            <strong>{username}</strong>
            <span className="message-time">{format(time.toDate(), 'MMMM dd, yyyy HH:mm:ss')}</span>
          </div>
          <span className="message-title">{title}</span>
          <p className="message-body">{message}</p>
          
          {/* Only render replies if they exist */}
          {replies && replies.length > 0 && (
            <ul className="reply-list">
              {replies.map((reply, index) => (
                <li className="reply-item" key={index}>
                  <div className="reply-header">
                    <strong>{reply.username}</strong>
                    <span className="reply-time">{format(reply.time.toDate(), 'MMMM dd, yyyy HH:mm:ss')}</span>
                  </div>
                  {reply.message}
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    })}
  </ul>
  
  {/* Optional: New Reply Button */}
  <button className="new-reply">New Reply</button>
</>
        
    );
  };

function MessageBoard() {



  return (
    <div className="App">
      <FirestoreCollection/>
    </div>
  );
}

export default MessageBoard;




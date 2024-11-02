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
        
            <ul>
              {value?.docs.map((doc) => (
                <div><li key={doc.id}>{doc.data().username} {doc.data().title} {doc.data().message} {format(doc.data().time.toDate(), 'MMMM dd, yyyy HH:mm:ss')}</li>
                    <ul>
                        {doc.data().replies.map((reply) => (
                            <li key={reply.id}>{reply.username} {reply.message} {format(reply.time.toDate(), 'MMMM dd, yyyy HH:mm:ss')}</li>
                        ))}
                    </ul>
                </div>
              ))}
            </ul>
        
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




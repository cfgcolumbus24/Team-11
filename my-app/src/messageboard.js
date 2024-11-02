import { useCollection } from 'react-firebase-hooks/firestore';
import logo from './logo.svg';
import './App.css';
import { dB } from './firebase.js';
import { collection } from 'firebase/firestore';


const FirestoreCollection = () => {
    const usersRef = collection(dB, 'users');
    const [value, loading, error] = useCollection(usersRef, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    return (
        
            <ul>
              {value?.docs.map((doc) => (
                <li key={doc.id}>{doc.data().name} {doc.data().password}</li>
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




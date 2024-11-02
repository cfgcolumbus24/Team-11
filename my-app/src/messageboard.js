import { useCollection } from 'react-firebase-hooks/firestore';
import logo from './logo.svg';
import './App.css';

function MessageBoard() {


    const FirestoreCollection = () => {
        const [value, loading, error] = useCollection(
          firebase.firestore().collection('users'),
          {
            snapshotListenOptions: { includeMetadataChanges: true },
          }
        );
        return (
          <div>
            <p>
              {error && <strong>Error: {JSON.stringify(error)}</strong>}
              {loading && <span>Collection: Loading...</span>}
              {value && (
                <span>
                  Collection:{' '}
                  {value.docs.map((doc) => (
                    <React.Fragment key={doc.id}>
                      {JSON.stringify(doc.data())},{' '}
                    </React.Fragment>
                  ))}
                </span>
              )}
            </p>
          </div>
        );
      };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MessageBoard;




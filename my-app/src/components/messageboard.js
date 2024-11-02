// import { useCollection } from 'react-firebase-hooks/firestore';
// import logo from '../logo.svg';
// import { useState } from 'react';
// import '../App.css';
// import { dB } from '../firebase.js';
// import { collection, doc, updateDoc, arrayUnion, addDoc, orderBy, query } from 'firebase/firestore';
// import { format } from 'date-fns';
// import Header from './Header';
// const FirestoreCollection = () => {
//     const [isNewReply, setIsNewReply] = useState(false);
//     const [newReply, setNewReply] =  useState('');
//     const [currentPost, setCurrentPostId] = useState(null);
//     const [err, setReplyError] = useState(null);


//     const [isNewPost, setIsNewPost] = useState(false);
//     const [newPost, setNewPostMessage] = useState('');
//     const [newPostTitle, setNewPostTitle] = useState('');

//     const [err2, setPostError] = useState(null);

//     const usersRef = collection(dB, 'posts');
//     const q = query(usersRef, orderBy('time', 'desc')); // Order by time descending

//     const [value, loading, error] = useCollection(q, {
//         snapshotListenOptions: { includeMetadataChanges: true },
//     });

//     const handlePostSubmit = async (e) => {
//       e.preventDefault();
//       const postsRef = collection(dB, 'posts');
  
//       // Validate input
//       if (newPost.trim() === '' || newPostTitle.trim() === '') return;
  
//       try {
//           // Add new post to Firestore
//           await addDoc(postsRef, {
//               message: newPost,
//               replies: [],
//               time: new Date(),
//               title: newPostTitle,
//               username: localStorage.getItem('username')  // Placeholder for username
//           });
  
//           alert('New Post Successfully Added!');
//       } catch (err) {
//           setPostError('Error making post: ' + err.message);
//       } finally {
//           // Reset the state
//           setNewPostMessage('');
//           setIsNewPost(false);
//           setNewPostTitle('');
//       }
//   };



//     const handleReplySubmit = async (e) => {
//       e.preventDefault();
//       const reply = {
//         username: localStorage.getItem('username'), // Hardcoded for now
//         message: newReply,
//         time: new Date(),
//       }
//       if (newReply.trim() === '') return; // Validate input
//       // Reset the state
//       const postRef = doc(dB, 'posts', currentPost);

//       try {
//         // Update the post document by adding the new reply to the replies array
//         await updateDoc(postRef, {
//             replies: arrayUnion(reply), // Use arrayUnion to add the reply
//         });
//     } catch (err) {
//         setReplyError('Error adding reply: ' + err.message);
//     }
//       setNewReply('');
//       setIsNewReply(false);
//      setCurrentPostId(null);
//   };




//     return (
//       <div className = "App">
//       <Header />
//       <h1 className='page-title'>Message Board</h1>

// {!isNewPost&& (<button className="loginbutton" onClick={() => { setIsNewPost(true); }}> New Post</button>)}

//   {isNewPost && (
//     <div className='centered-container'>
//       <form  className='loginform' onSubmit={handlePostSubmit}>
//          <textarea
//           className='inputlogin'
//           value={newPostTitle}
//             onChange={(e) => setNewPostTitle(e.target.value)}
//             placeholder="Write your title..."
//             required
//             rows="1"
//         />
//         <textarea
//           className='inputlogin'
//           value={newPost}
//             onChange={(e) => setNewPostMessage(e.target.value)}
//             placeholder="Write your message..."
//             required
//             rows="3"
//         />
//          <button className='loginbutton' type="submit">Submit</button>
//         <button className='loginbutton' type="button" onClick={() => setIsNewPost(false)}>Cancel</button>
//       </form>
//     </div>
//    )}   
//     <ul className="message-board">
//     {value?.docs.map((doc) => {
//       const { username, title, message, time, replies } = doc.data();
//       return (
//         <li className="message-item" key={doc.id}>
//           <div className="message-header">
//             <strong>{username}</strong>
//             <span className="message-time">{format(time.toDate(), 'MMMM dd, yyyy HH:mm:ss')}</span>
//           </div>
//           <span className="message-title">{title}</span>
//           <p className="message-body">{message}</p>
          
//           {/* Only render replies if they exist */}
//           {replies && replies.length > 0 && (
//             <ul className="reply-list">
//             {replies
//                 .sort((a, b) => b.time - a.time) // Sort replies by time descending
//                 .map((reply, index) => (
//                     <li className="reply-item" key={index}>
//                         <div className="reply-header">
//                             <strong>{reply.username}</strong>
//                             <span className="reply-time">{format(reply.time.toDate(), 'MMMM dd, yyyy HH:mm:ss')}</span>
//                         </div>
//                         {reply.message}
//                     </li>
//                 ))}
//         </ul>
//           )}
//           {/* Optional: New Reply Button */}
//   {(!isNewReply || doc.id!=currentPost)&& (<button className="loginbutton" onClick={() => { setIsNewReply(true); setCurrentPostId(doc.id); }}> New Reply</button>)}

//   {isNewReply && doc.id == currentPost && (
//     <div className='centered-container-white'>
//       <form className='replyform'onSubmit={handleReplySubmit}>
//          <textarea
//           className='inputreply'
//           value={newReply}
//             onChange={(e) => setNewReply(e.target.value)}
//             placeholder="Write your reply..."
//             required
//             rows="3"
//         />
//          <button className='loginbutton' type="submit">Submit</button>
//         <button  className='loginbutton' type="button" onClick={() => setIsNewReply(false)}>Cancel</button>
//       </form>
//     </div>
//    )}
//    {error && <p>{error}</p>}
//         </li>
//       );
//     })}
//   </ul>
  
  
//   </div>
        
//     );
//   };

// function MessageBoard() {
//   const [isNewPost, setIsNewPost] = useState(false);


//   return (
//     <div className="App">
//       <FirestoreCollection/>
//     </div>
//   );
// }

// export default MessageBoard;

import { useCollection } from 'react-firebase-hooks/firestore';
import { useState } from 'react';
import { collection, doc, updateDoc, arrayUnion, addDoc, orderBy, query } from 'firebase/firestore';
import { format } from 'date-fns';
import Header from './Header';
import '../App.css';
import { dB } from '../firebase.js';

const FirestoreCollection = () => {
    const [isNewReply, setIsNewReply] = useState(false);
    const [newReply, setNewReply] = useState('');
    const [currentPost, setCurrentPostId] = useState(null);

    const [isNewPost, setIsNewPost] = useState(false);
    const [newPost, setNewPostMessage] = useState('');
    const [newPostTitle, setNewPostTitle] = useState('');

    const usersRef = collection(dB, 'posts');
    const q = query(usersRef, orderBy('time', 'desc'));

    const [value, , error] = useCollection(q, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        const postsRef = collection(dB, 'posts');

        if (newPost.trim() === '' || newPostTitle.trim() === '') return;

        try {
            await addDoc(postsRef, {
                message: newPost,
                replies: [],
                time: new Date(),
                title: newPostTitle,
                username: localStorage.getItem('username')  // Placeholder for username
            });
            alert('New Post Successfully Added!');
        } finally {
            setNewPostMessage('');
            setIsNewPost(false);
            setNewPostTitle('');
        }
    };

    const handleReplySubmit = async (e) => {
        e.preventDefault();
        const reply = {
            username: localStorage.getItem('username'),
            message: newReply,
            time: new Date(),
        };
        if (newReply.trim() === '') return;

        const postRef = doc(dB, 'posts', currentPost);

        try {
            await updateDoc(postRef, {
                replies: arrayUnion(reply),
            });
        } finally {
            setNewReply('');
            setIsNewReply(false);
            setCurrentPostId(null);
        }
    };

    return (
        <div className="App">
            <Header />
            <h1 className="page-title">Message Board</h1>

            {!isNewPost && (
                <button className="teal-button" onClick={() => setIsNewPost(true)}>
                    New Post
                </button>
            )}

            {isNewPost && (
                <div className="centered-container">
                    <form className="loginform" onSubmit={handlePostSubmit}>
                        <textarea
                            className="inputlogin"
                            value={newPostTitle}
                            onChange={(e) => setNewPostTitle(e.target.value)}
                            placeholder="Write your title..."
                            required
                            rows="1"
                        />
                        <textarea
                            className="inputlogin"
                            value={newPost}
                            onChange={(e) => setNewPostMessage(e.target.value)}
                            placeholder="Write your message..."
                            required
                            rows="3"
                        />
                        <button className="teal-button" type="submit">Submit</button>
                        <button className="teal-button" type="button" onClick={() => setIsNewPost(false)}>Cancel</button>
                    </form>
                </div>
            )}

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

                            {replies && replies.length > 0 && (
                                <ul className="reply-list">
                                    {replies
                                        .sort((a, b) => b.time - a.time)
                                        .map((reply, index) => (
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

                            {(!isNewReply || doc.id !== currentPost) && (
                                <button className="teal-button" onClick={() => { setIsNewReply(true); setCurrentPostId(doc.id); }}>
                                    New Reply
                                </button>
                            )}

                            {isNewReply && doc.id === currentPost && (
                                <div className="centered-container-white">
                                    <form className="replyform" onSubmit={handleReplySubmit}>
                                        <textarea
                                            className="inputreply"
                                            value={newReply}
                                            onChange={(e) => setNewReply(e.target.value)}
                                            placeholder="Write your reply..."
                                            required
                                            rows="3"
                                        />
                                        <button className="teal-button" type="submit">Submit</button>
                                        <button className="teal-button" type="button" onClick={() => setIsNewReply(false)}>Cancel</button>
                                    </form>
                                </div>
                            )}
                            {error && <p>{error.message}</p>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

function MessageBoard() {
    return (
        <div className="App">
            <FirestoreCollection />
        </div>
    );
}

export default MessageBoard;

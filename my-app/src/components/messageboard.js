import { useCollection } from 'react-firebase-hooks/firestore';
import logo from '../logo.svg';
import { useState } from 'react';
import '../App.css';
import { dB } from '../firebase.js';
import { collection, doc, updateDoc, arrayUnion, addDoc } from 'firebase/firestore';
import { format } from 'date-fns';
import Header from './Header';
const FirestoreCollection = () => {
    const [isNewReply, setIsNewReply] = useState(false);
    const [newReply, setNewReply] =  useState('');
    const [currentPost, setCurrentPostId] = useState(null);
    const [err, setReplyError] = useState(null);


    const [isNewPost, setIsNewPost] = useState(false);
    const [newPost, setNewPostMessage] = useState('');
    const [newPostTitle, setNewPostTitle] = useState('');

    const [err2, setPostError] = useState(null);

    const usersRef = collection(dB, 'posts');
    const [value, loading, error] = useCollection(usersRef, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });


    const handlePostSubmit = async (e) => {
      e.preventDefault();
      const postsRef = collection(dB, 'posts');
  
      // Validate input
      if (newPost.trim() === '' || newPostTitle.trim() === '') return;
  
      try {
          // Add new post to Firestore
          await addDoc(postsRef, {
              message: newPost,
              replies: [],
              time: new Date(),
              title: newPostTitle,
              username: 'Anonymous'  // Placeholder for username
          });
  
          alert('New Post Successfully Added!');
      } catch (err) {
          setPostError('Error making post: ' + err.message);
      } finally {
          // Reset the state
          setNewPostMessage('');
          setIsNewPost(false);
          setNewPostTitle('');
      }
  };



    const handleReplySubmit = async (e) => {
      e.preventDefault();
      const reply = {
        username: 'Anonymous', // Hardcoded for now
        message: newReply,
        time: new Date(),
      }
      if (newReply.trim() === '') return; // Validate input
      // Reset the state
      const postRef = doc(dB, 'posts', currentPost);

      try {
        // Update the post document by adding the new reply to the replies array
        await updateDoc(postRef, {
            replies: arrayUnion(reply), // Use arrayUnion to add the reply
        });
    } catch (err) {
        setReplyError('Error adding reply: ' + err.message);
    }
      setNewReply('');
      setIsNewReply(false);
     setCurrentPostId(null);
  };




    return (
      <>
      <Header />
      <h1>Message Board</h1>

{!isNewPost&& (<button className="new-reply" onClick={() => { setIsNewPost(true); }}> New Post</button>)}

  {isNewPost && (
      <form onSubmit={handlePostSubmit}>
         <textarea
          value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            placeholder="Write your title..."
            required
            rows="1"
        />
        <textarea
          value={newPost}
            onChange={(e) => setNewPostMessage(e.target.value)}
            placeholder="Write your message..."
            required
            rows="3"
        />
         <button type="submit">Submit</button>
        <button type="button" onClick={() => setIsNewPost(false)}>Cancel</button>
      </form>
   )}    <ul className="message-board">
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
          {/* Optional: New Reply Button */}
  {(!isNewReply || doc.id!=currentPost)&& (<button className="new-reply" onClick={() => { setIsNewReply(true); setCurrentPostId(doc.id); }}> New Reply</button>)}

  {isNewReply && doc.id == currentPost && (
      <form onSubmit={handleReplySubmit}>
         <textarea
          value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Write your reply..."
            required
            rows="3"
        />
         <button type="submit">Submit</button>
        <button type="button" onClick={() => setIsNewReply(false)}>Cancel</button>
      </form>
   )}
   {error && <p>{error}</p>}
        </li>
      );
    })}
  </ul>
  
  
</>
        
    );
  };

function MessageBoard() {
  const [isNewPost, setIsNewPost] = useState(false);


  return (
    <div className="App">
      <FirestoreCollection/>
    </div>
  );
}

export default MessageBoard;




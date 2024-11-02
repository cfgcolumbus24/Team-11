// login.js
import { useState } from 'react';
import { getDocs, query, where, collection, addDoc } from 'firebase/firestore';
import { dB } from '../firebase.js';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import '../loginpage.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isRegistering, setIsRegistering] = useState(false);

    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const usersRef = collection(dB, 'users');
        const q = query(usersRef, where('username', '==', username));
        
        try {
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setError('Username not found');
                return;
            }

            const userDoc = querySnapshot.docs[0].data();
            if (userDoc.password === password) { // Use secure password handling in production
                localStorage.setItem('username', username);  // Save username to local storage
                navigate('/home'); // Redirect to message board on successful login
            } else {
                setError('Incorrect password');
            }
        } catch (err) {
            setError('Error logging in: ' + err.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const usersRef = collection(dB, 'users');
        const q = query(usersRef, where('username', '==', username));

        try {
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setError('Username already exists');
                return;
            }

            // Add new user to Firestore
            await addDoc(usersRef, {
                username,
                password,  // Store as plain text only for learning; use a hash in production
            });

            alert('User registered successfully!');
            setIsRegistering(false);  // Switch back to login mode
        } catch (err) {
            setError('Error registering user: ' + err.message);
        }
    };

    return (
        <div id= "amazing">
            <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
            </form>
            {error && <p>{error}</p>}
            <p>
                {isRegistering ? (
                    <span>
                        Already have an account?{' '}
                        <button onClick={() => setIsRegistering(false)}>Log in</button>
                    </span>
                ) : (
                    <span>
                        New user?{' '}
                        <button onClick={() => setIsRegistering(true)}>Register</button>
                    </span>
                )}
            </p>
        </div>
    );
}

export default Login;

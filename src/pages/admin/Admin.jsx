import React, { useState, useEffect } from 'react';
import './Admin.css'; // Import your CSS styles for the admin panel
// You can add this CSS to your existing stylesheet or use a new one.
// const styles = `
  
// `;

// ==============================================================================
// LOGIN COMPONENT
// ==============================================================================
const Login = ({ onLoginSuccess, onLoginFail }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLoginFail(''); // Clear previous error messages

    try {
      const response = await fetch('https://smartriverr-backend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        onLoginSuccess();
      } else {
        onLoginFail(data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      onLoginFail('Could not connect to the server.');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input
        type="text"
        className="admin-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        className="admin-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="admin-button">Login</button>
    </form>
  );
};

// ==============================================================================
// ADMIN PANEL COMPONENT
// ==============================================================================
const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Admin'); // Or get from logged in user
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all posts when the component loads
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://smartriverr-backend.onrender.com/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts.');
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  // Handle form submission to create a new post
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://smartriverr-backend.onrender.com/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post.');
      }

      const newPost = await response.json();
      // Add the new post to the top of the list
      setPosts([newPost, ...posts]);
      
      // Clear the form
      setTitle('');
      setContent('');
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="post-form">
        <h2>Create a New Blog Post</h2>
        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            className="admin-input"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="admin-textarea"
            placeholder="Write your blog content here..."
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="admin-button" disabled={isLoading}>
            {isLoading ? 'Publishing...' : 'Publish Post'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      <div className="posts-list">
        <h2>Published Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div className="post-date">
                Published on: {new Date(post.publishDate).toLocaleDateString()}
              </div>
            </div>
          ))
        ) : (
          <p>No posts yet. Write your first one above!</p>
        )}
      </div>
    </div>
  );
};


// ==============================================================================
// MAIN APP COMPONENT
// This is what you'll integrate into your website
// ==============================================================================
export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  // You would typically use React Router for this.
  // For simplicity, we are just using state to switch views.
  return (
    <>
      {/* <style>{styles}</style> */}
      <div className="admin-container">
        <h1>Blog Management Panel</h1>
        {!isLoggedIn ? (
          <>
            <Login
              onLoginSuccess={() => setIsLoggedIn(true)}
              onLoginFail={setLoginError}
            />
            {loginError && <p className="error-message" style={{textAlign: 'center', marginTop: '10px'}}>{loginError}</p>}
          </>
        ) : (
          <AdminPanel />
        )}
      </div>
    </>
  );
}

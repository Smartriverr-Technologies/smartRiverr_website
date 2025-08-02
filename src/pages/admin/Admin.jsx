import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import './Admin.css';

// NEW: A component for success/failure notifications (toasts)
const Notification = ({ message, type }) => {
  if (!message) return null;
  return <div className={`notification ${type}`}>{message}</div>;
};

// NEW: A reusable confirmation modal component
const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onClose} className="admin-button cancel">Cancel</button>
          <button onClick={onConfirm} className="delete-btn confirm">Confirm Delete</button>
        </div>
      </div>
    </div>
  );
};

// ==============================================================================
// LOGIN COMPONENT (No changes here)
// ==============================================================================
const Login = ({ onLoginSuccess, onLoginFail }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    onLoginFail('');
    try {
      const response = await fetch('https://smartriverr-backend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      <input type="text" className="admin-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" className="admin-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className="admin-button">Login</button>
    </form>
  );
};

// ==============================================================================
// ADMIN PANEL COMPONENT (with new UI logic)
// ==============================================================================
const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Admin');
  const [isLoading, setIsLoading] = useState(false);
  
  // NEW: Combined state for notifications
  const [notification, setNotification] = useState({ message: '', type: '' });
  
  // NEW: State for managing the delete confirmation modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://smartriverr-backend.onrender.com/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setNotification({ message: 'Failed to fetch posts.', type: 'error' });
      }
    };
    fetchPosts();
  }, []);
  
  // NEW: Effect to automatically hide notifications after 3 seconds
  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification({ message: '', type: '' }); // Clear previous notifications
    try {
      const response = await fetch('https://smartriverr-backend.onrender.com/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, author }),
      });
      if (!response.ok) throw new Error('Failed to create post.');
      const newPost = await response.json();
      setPosts([newPost, ...posts]);
      setTitle('');
      setContent('');
      setNotification({ message: 'Post published successfully!', type: 'success' });
    } catch (err) {
      setNotification({ message: err.message, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  // NEW: This function just opens the modal
  const handleDeleteClick = (postId) => {
    setPostToDelete(postId);
    setIsModalOpen(true);
  };

  // NEW: This function runs when the user confirms the deletion in the modal
  const confirmDelete = async () => {
    if (!postToDelete) return;
    try {
      const response = await fetch(`https://smartriverr-backend.onrender.com/api/posts/${postToDelete}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post.');
      setPosts(posts.filter((post) => post.id !== postToDelete));
      setNotification({ message: 'Post deleted successfully!', type: 'success' });
    } catch (err) {
      setNotification({ message: err.message, type: 'error' });
    } finally {
      setIsModalOpen(false);
      setPostToDelete(null);
    }
  };

  return (
    <div>
      {/* NEW: Render the notification component */}
      <Notification message={notification.message} type={notification.type} />
      
      {/* NEW: Render the modal component */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to permanently delete this post?"
      />

      <div className="post-form">
        <h2>Create a New Blog Post</h2>
        <form onSubmit={handlePostSubmit}>
          <input type="text" className="admin-input" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
           <Editor
            apiKey='crtuy033pu9ayckhj0dyla4twp26nrl46xrjkv5yhc9t85u9' // Paste your free API key here
            value={content}
            onEditorChange={(newValue, editor) => setContent(newValue)}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Inter,sans-serif; font-size:16px }'
            }}
          />
          {/* <textarea className="admin-textarea" placeholder="Write your blog content here..." rows="10" value={content} onChange={(e) => setContent(e.target.value)} required></textarea> */}
          <button type="submit" className="admin-button" disabled={isLoading}>{isLoading ? 'Publishing...' : 'Publish Post'}</button>
        </form>
      </div>

      <div className="posts-list">
        <h2>Published Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <div className="post-item-header">
              <h3>{post.title}</h3>
              {/* NEW: This button now opens the modal */}
              <button onClick={() => handleDeleteClick(post.id)} className="delete-btn">Delete</button>
            </div>
            <p>{post.content.substring(0, 200)}...</p>
            <div className="post-date">Published on: {new Date(post.publishDate).toLocaleDateString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ==============================================================================
// MAIN APP COMPONENT (No changes here)
// ==============================================================================
export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  return (
    <>
      <div className="admin-container">
        <h1>Blog Management Panel</h1>
        {!isLoggedIn ? (
          <>
            <Login onLoginSuccess={() => setIsLoggedIn(true)} onLoginFail={setLoginError} />
            {loginError && <p className="error-message" style={{textAlign: 'center', marginTop: '10px'}}>{loginError}</p>}
          </>
        ) : (
          <AdminPanel />
        )}
      </div>
    </>
  );
}
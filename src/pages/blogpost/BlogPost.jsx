import React, { useState, useEffect } from 'react';
import './BlogPost.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

// ==============================================================================
// HELPER: FORMAT DATE SAFELY
// ==============================================================================
const formatDate = (publishDate) => {
  if (!publishDate) return "Unknown Date";

  try {
    // Case 1: Firestore Timestamp
    if (publishDate._seconds) {
      return new Date(publishDate._seconds * 1000).toLocaleDateString();
    }

    // Case 2: ISO string or normal date string
    const date = new Date(publishDate);
    if (!isNaN(date)) {
      return date.toLocaleDateString();
    }

    return "Unknown Date";
  } catch {
    return "Unknown Date";
  }
};

// ==============================================================================
// BLOG PAGE COMPONENT
// ==============================================================================
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://smartriverr-backend.onrender.com/api/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  const handleGoBack = () => {
    setSelectedPost(null);
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading posts...Please wait!</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-text">{error}</div>;
  }

  return (
    <div className="blog-container">
      {selectedPost ? (
        // --- SINGLE POST VIEW ---
        <div className="single-post-view">
          <button onClick={handleGoBack} className="back-button">
            &larr; Back to Blog
          </button>
          <h1>{selectedPost.title}</h1>
          <div className="post-meta">
            By {selectedPost.author} on {formatDate(selectedPost.publishDate)}
          </div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          ></div>
        </div>
      ) : (
        // --- BLOG LIST VIEW ---
        <>
          <div className="blog-header">
            <h1>Our Blogs</h1>
            <p>A space for deeper thinking and new perspectives</p>
          </div>
          <div className="blog-post-list">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="blog-post-list-item"
                  onClick={() => handlePostSelect(post)}
                >
                  <h2>{post.title}</h2>
                  <div className="post-meta">
                    By {post.author} on {formatDate(post.publishDate)}
                  </div>
                  <p className="post-excerpt">
                    {post.content.replace(/<[^>]*>?/gm, ' ').split(' ').slice(0, 20).join(' ')}
                    {post.content.replace(/<[^>]*>?/gm, ' ').split(' ').length > 20 ? '...' : ''}
                  </p>
                  <a
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePostSelect(post);
                    }}
                    className="read-more-btn classic"
                  >
                    Read more..
                  </a>
                </div>
              ))
            ) : (
              <p>There are no blog posts to display yet.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// ==============================================================================
// MAIN EXPORT
// ==============================================================================
export default function BlogPost() {
  return (
    <>
      <Navbar />
      <BlogPage />
      <Footer />
    </>
  );
}

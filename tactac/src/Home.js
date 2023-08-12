import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      imageUrl: 'https://media.istockphoto.com/id/1419234404/photo/girl-avatar-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=UEceiyNGaWnJIKDws4dk-dfPcS5B-TTZwXXcLlpEKv8=',
      caption: 'Avatars',
      liked: false,
      likes: 42,
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1409728243/photo/aerial-view-of-woman-and-man-contemplating-summer-in-norway-canoeing-in-the-lake-lovatnet.webp?b=1&s=170667a&w=0&k=20&c=YmD6REIqVTvXKBjb5f7-7PIefKLVYtmiQNUkyKbm1gk=',
      caption: 'Waterfalls!',
      liked: false,
      likes: 27,
    },
  ]);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="home">
     {/*header*/}
      <div className="header">
        <div className="logo">TacTac</div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <img src={post.imageUrl} alt={post.caption} className="post-image" />
            <div className="post-actions">
            <span
                className={`heart${post.liked ? ' liked' : ''}`}
                onClick={() => handleLike(post.id)}
              >
                {post.liked ? '❤️' : '🤍'}
              </span>
              <i className="far fa-comment"></i>
              <i className="far fa-paper-plane"></i>
            </div>
            <div className="post-likes">{post.likes} likes</div>
            <div className="post-caption">{post.caption}</div>
          </div>
         
        ))}
      </div>
    </div>
  );
}

export default Home;
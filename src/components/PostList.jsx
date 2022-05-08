import React from 'react';
import PostItem from './PostItem';
import Image from '../images/Anatomy_of_a_Sunset-2.jpg';

const PostList = ({posts, title}) => {
  return (
    <div style={{background: `url(${Image}) center / cover no-repeat`}}>
       <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  );
};

export default PostList;
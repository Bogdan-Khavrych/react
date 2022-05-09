import React from 'react';

const PostItem = (props) => {
    return(
    <div className='post'>
        <div className="post__content">
            <strong>1. Javascript</strong>
            <div>Javascript - язык программирования</div>
        </div>
        <button className='post__btns'>
            Удалить
        </button>
    </div>
    
    )
}

export default PostItem;
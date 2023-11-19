import React from 'react';
import './PostItem.css';
import {Post} from '../../types';

interface Props {
  post: Post;
}
const PostItem: React.FC<Props> = ({post}) => {

  return (
    <div>
      <div className="card mb-2">
        <div className="row no-gutters">
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">{post.name}</h5>
              <p className="card-text small">{post.message}</p>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}

export default PostItem;
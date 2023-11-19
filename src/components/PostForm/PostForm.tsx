import React, {useState} from 'react';
import {Post, PostMutation} from '../../types';


interface Props {
  onSubmit: (post: Post) => void;
}

const PostForm: React.FC<Props> = ({onSubmit}) => {
  const [post, setPost] = useState<PostMutation>({
    name: '',
    message: '',
  });

  const changePost = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...post,
    });
  };


  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new message</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={post.name}
          onChange={changePost}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          value={post.message}
          onChange={changePost}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default PostForm;
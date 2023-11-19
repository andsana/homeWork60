import './App.css';
import {useState} from 'react';
import PostForm from './components/PostForm/PostForm';

const url = 'http://146.185.154.90:8000/messages';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <>
      <PostForm/>
    </>
  );
}

export default App;

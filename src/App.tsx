import {useState} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import {Post} from './types';

const url = 'http://146.185.154.90:8000/messages';

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {name: 'Sana', message: 'Hello, World!', id: '1'},
    {name: 'Elon', message: 'Test Post!', id: '2'}
  ]);

  const addPost = (post: Post) => {
    setPosts((prevState) => [...prevState, post] )
  };

  return (
    <>
      <header>
        <Toolbar/>
      </header>

      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4">
            <PostForm onSubmit={addPost}/>
          </div>
          <div className="col-4">
            <Posts posts={posts}/>
          </div>
        </div>
      </main>

    </>
  );
}

export default App;

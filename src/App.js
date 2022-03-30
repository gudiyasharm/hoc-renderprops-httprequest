import './App.css';
// import EnhancedComment from './components/CommentCount';
// import CommentCount from './components/CommentCount';
// import EnhancedLikes from './components/LikesCount';
// import FetchApi from './components/httprequest/FetchApi';
import PostApi from './components/httprequest/PostApi';

function App() {
  return (
    // <div className="App">
    //   <EnhancedLikes />
    //   <EnhancedComment />
    // </div>

    <div className="App">
     {/* <FetchApi /> */}
     <PostApi />
    </div>


  );
}

export default App;

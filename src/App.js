import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // NavLink,
} from "react-router-dom";
// import Card from "./components/shared/Card";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
// import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/:id/:name" element={<Post />}></Route> */}
            {/* <Route path="/post/*" element={<Post />}></Route> */}
          </Routes>

          {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>

          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card> */}

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

// function App() {
//   const title = "Blog Post";
//   const body = "This is my blog post";
//   const comments = [
//     { id: 1, text: "Comment one" },
//     { id: 2, text: "Comment two" },
//     { id: 3, text: "Comment three" },
//   ];

//   const loading = false;
//   const showComments = true;

//   if (loading) return <h1>Loading...</h1>;

//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={index}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   return (
//     <div className="container">
//       <h1>{title.toLocaleUpperCase()}</h1>
//       <p>{body}</p>

//       {showComments && commentBlock}
//     </div>
//   );
// }

// export default App;

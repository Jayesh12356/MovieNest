import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

// function Test() {
//   const [movieRating, setMovierating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={11} onSetRating={setMovierating} />
//       <p>This movie was rated {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={10} defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

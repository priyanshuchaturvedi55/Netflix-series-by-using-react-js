import React from "react";
import CodeSeries2 from "./components/codeseries2.jsx";
// import "./components/codeseriescss.css"; 
import "./components/codeseriescss.module.css"; 


 const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <CodeSeries2 />
    </section>
  );
};
export default App;

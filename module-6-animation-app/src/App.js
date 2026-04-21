import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Demo1Page from "./Demo1Page";
import Demo2Page from "./Demo2Page";
import Demo3Page from "./Demo3Page";

function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Module 6 - React Animations</h1>
      <ul style={{ lineHeight: "2", fontSize: "18px" }}>
        <li><Link to="/demo1">Demo 1 - Animated Bar Chart</Link></li>
        <li><Link to="/demo2">Demo 2 - 3D Sphere Scene</Link></li>
        <li><Link to="/demo3">Demo 3 - Collapsible Tree</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "10px 20px", background: "#222", display: "flex", gap: "24px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/demo1" style={{ color: "white", textDecoration: "none" }}>Demo 1</Link>
          <Link to="/demo2" style={{ color: "white", textDecoration: "none" }}>Demo 2</Link>
          <Link to="/demo3" style={{ color: "white", textDecoration: "none" }}>Demo 3</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/demo1" component={Demo1Page} />
          <Route path="/demo2" component={Demo2Page} />
          <Route path="/demo3" component={Demo3Page} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

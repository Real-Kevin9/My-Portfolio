import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
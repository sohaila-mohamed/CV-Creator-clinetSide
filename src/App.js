import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header> </Header>

      <Switch>
        <Route path="/Editor" render={() => <p>Editor</p>} />
        <Route exact path="/templates" render={() => <p>Templates</p>} />
        <Route path="/tips" render={() => <p>Tips</p>} />
        <Route path="/about-us" render={() => <p>About</p>} />
        <Route path="/sign-in" render={() => <p>Sign in</p>} />
        <Route path="/sign-up" render={() => <p>sign up</p>} />
        <Route exact path="/" render={() => <p>Home</p>} />
        <Route path="*" render={() => <p>404</p>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './views/LogIn';
import Todo from './views/ToDo';

function App() {


  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/">
            <Todo />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (JSON.parse(localStorage.getItem('x-api-token'))?.secret === 'ai-love-you') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;

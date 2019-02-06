import { Router, Route, Switch, Redirect } from 'react-router';
import { hot } from 'react-hot-loader/root'

import createBrowserHistory from 'history/createBrowserHistory';
//import ReactGA from 'react-ga';
//ReactGA.initialize(''); // Here we should use our GA id
const browserHistory = createBrowserHistory();

//browserHistory.listen(location => ReactGA.pageview(location.pathname));

// route components
import Home from './containers/Home.js';
import App from './components/App'

const Routes = () => {

  return (
    <App>
      <Router history={browserHistory}>
        <Switch>
        <Route path="/" render={(props) => <Home {...props} params={props.match.params} />}/>
        </Switch>
      </Router>
    </App>
  )
  
}


export default hot(Routes)

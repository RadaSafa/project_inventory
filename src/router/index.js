import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Register from '../pages/register';

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Register}></Route>
            </Switch>
        </Router>
    );
}

export { App };

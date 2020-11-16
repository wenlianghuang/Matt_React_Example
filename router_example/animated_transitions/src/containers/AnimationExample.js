import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import "../components/AnimationApp";
import AnimationApp from "../components/AnimationApp";
export default () => (
    <Router>
        <Switch>            
            <Route path="*">
                <AnimationApp/>
                <Redirect from="/" to="/hsl/10/90/50"/>
            </Route>
        </Switch>
    </Router>
)
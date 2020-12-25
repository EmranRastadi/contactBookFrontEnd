import Home from "./Home";
import Login from "./home/Login";
import Register from "./home/Register";
import Dashboard from "./dashboard/Dashboard";
import {PrivateRoute} from "./PrivateRoute";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home/login" component={Login}/>
                <Route path="/home/register" component={Register}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default App;
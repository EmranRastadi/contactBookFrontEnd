import {Route , Switch} from "react-router-dom";
import Login from "./home/Login";
import Register from "./home/Register";

const Home = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path={props.match.path} component={Login}/>
                <Route path={`${props.match.path}/register`} component={Register}/>
            </Switch>

        </div>
    )
}
export default Home;
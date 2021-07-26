import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import routes from "./Routes";
import Product from "../components/Product";
import AdminPage from "./AdminPage";


export default function App() {
    return (
        <div>
            <Router>
                <div className="App">
                    <div className="header">
                        <NavigationBar/>
                    </div>
                    <Switch>
                        {showContentMenus(routes)}
                        <Route path="/:id" children={<Product/>}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
        //mỗi lần map lấy đc 1 route và 1 index
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
        });
    }
    return result;
}


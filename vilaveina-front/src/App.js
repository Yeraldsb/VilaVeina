import {PaginaHome} from "./componentes/welcomePage/PaginaHome";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MenuOptions} from "./componentes/menuOptions/MenuOptions";

function App() {
    return (

        <Router>
            <Switch>
                <Route exact path="/">
                 <PaginaHome/>
                </Route>

                <Route path="/MenuOptions">
                    <MenuOptions />
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
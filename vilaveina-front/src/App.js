import {PaginaHome} from "./componentes/welcomePage/PaginaHome";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MenuOptions} from "./componentes/menuOptions/MenuOptions";

function App() {
    return (

        <div>
            <MenuOptions />
        </div>
/*
        <Router>
            <PaginaHome/>
            <Switch>
                <Route eaxct path="/MenuOptions">
                    <MenuOptions />
                </Route>
            </Switch>

        </Router>  */
    );
}

export default App;
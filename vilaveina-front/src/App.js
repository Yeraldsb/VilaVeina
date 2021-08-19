import {PaginaHome} from "./componentes/welcomePage/PaginaHome";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MenuOptions} from "./componentes/menuOptions/MenuOptions";

function App() {
    return (

        <Router>
            <Route>
                <PaginaHome/>
            </Route>
            <Route>
                <MenuOptions />
            </Route>

        </Router>
    );
}

export default App;
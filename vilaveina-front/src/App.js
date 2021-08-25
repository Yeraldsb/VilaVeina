import {PaginaHome} from "./componentes/welcomePage/PaginaHome";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {MenuOptions} from "./componentes/menuOptions/MenuOptions";
import {FormEnquestas} from "./componentes/Form/FormEnquestas";
import SideBarUser from "./componentes/sideBarUser/SideBarUser";

function App() {
    return (

        <Router>
            <Switch>
                <Route exact path="/">
                 <PaginaHome/>
                </Route>

                <Route path="/enquesta">
                    <FormEnquestas />
                </Route>

                <Route path="/side">
                    <SideBarUser />
                </Route>

                <Route path="/MenuOptions">
                    <MenuOptions />
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
import {PaginaHome} from "./componentes/welcomePage/PaginaHome";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (

        <Router>
            <Route>
                <PaginaHome/>
            </Route>
        </Router>
    );
}

export default App;
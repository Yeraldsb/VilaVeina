import {PaginaHome} from "./componentes/welcomePage/PaginaHome";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Footer} from "./componentes/footer/Footer";
import {FormEnquestas} from "./componentes/Form/FormEnquestas";
import SideBarUser from "./componentes/sideBarUser/SideBarUser";

function App() {
    return (

        <Router>
            <SideBarUser/>
            <Switch>

                <Route path="/enquesta">
                    <FormEnquestas />
                </Route>

                <Route path="/register">
                    <RegisterForm />
                </Route>

            </Switch>

        </Router>
    );
}

export default App;



/*        <Route exact path="/">
                 <PaginaHome/>
                </Route>

                <Route path="/enquesta">
                    <FormEnquestas />
                </Route>

                <Route path="/side">
                    <SideBarUser />
                </Route>

                <Route path="/Footer">
                    <Footer />
                </Route>

             */

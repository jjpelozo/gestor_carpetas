import "./App.css";
import Carpetas from "./Carpetas/Carpetas";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import CarpetaSingle from "./CarpetaSingle/CarpetaSingle";
import NuevaCarpeta from "./NuevaCarpeta/NuevaCarpeta";
import Calendario from "./Calendario/Calendario";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArchivosDescargables from "./ArchivosDescargables/ArchivosDescargables";
import Login from "./Login/Login";
import {useSelector} from "react-redux"
import Paginas from "./Paginas/Paginas";

function App() {
  const user = useSelector((store) => store.login);
 

  return (
    <div>
      <div>
      {!user.data ? (
        <Router exact path="/">
          <Login/>
        </Router>
        ):(
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/carpetas">
            <Carpetas />
          </Route>
          <Route
            exact
            path="/carpetasingle/:id"
            render={({ match }) => <CarpetaSingle id={match.params.id} />}
          >
          </Route>
        {/*   <Route exact path="/login">
            <Login/>
          </Route> */}
          <Route exact path="/carpetas/nuevacarpeta">
            <NuevaCarpeta />
          </Route>
          <Route exact path="/descargaarchivos">
            <ArchivosDescargables />
          </Route>
          <Route exact path="/calendario">
            <Calendario />
          </Route>
          <Route exact path="/paginas">
            <Paginas/>
          </Route>

        </Switch>
      </Router>
    )}
    </div>
    </div>
  );
}

export default App;

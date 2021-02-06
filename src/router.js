import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import characters_ from "./assets/data/data.json";

import Home from "./pages/Home";
import DetailedUser from "./pages/DetailedUser/DetailedUser";
import GeneralHeader from "./components/GeneralHeader";
import DetailedEpisode from "./pages/DetailedEpisode";

const Router = () => {
  const characters = characters_.results;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home characters={characters} />
        </Route>
        <Route exact path="*">
          <GeneralHeader />
          <Switch>
            <Route path="/character/:id">
              <DetailedUser />
            </Route>
            <Route path="/episode/:id">
              <DetailedEpisode />
            </Route>
            <Route exact path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

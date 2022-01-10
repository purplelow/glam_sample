import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlamMain from './routes/GlamMain';
import ProfileEdit from './routes/ProfileEdit';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userId.ProfileEdit">
          <ProfileEdit />
        </Route>
        <Route path="/">
          <GlamMain />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SocialMain from './routes/SocialMain';
import ProfileEdit from './routes/ProfileEdit';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userId.ProfileEdit">
          <ProfileEdit />
        </Route>
        <Route path="/">
          <SocialMain />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
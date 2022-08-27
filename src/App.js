import { BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./views/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  )
}


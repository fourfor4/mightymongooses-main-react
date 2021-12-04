import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import BreedPage from "./pages/BreedPage/BreedPage";
import Home from "./pages/Home";
import Collections from "./pages/MintPage/collections/Collections";
import Header from "./pages/MintPage/header/Header";
import Footer from "./pages/MintPage/footer/Footer";

function App() {
  return (
    <ToastProvider autoDismissTimeout={3000}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/breeding'>
            <BreedPage />
          </Route>
          <Route path='/mint'>
            <Header />
            <Collections />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactList from "./components/contactList/ContactList";
import NewContact from "./components/newContact/NewContact";
import ContactDetails from "./components/contactDetails/ContactDetails";
function App() {
  return (
    <div className="App">
      <div className="components">
        <Header />
        <Switch>
          <Route exact path={"/"} component={ContactList} />
          <Route path={"/newContact"} component={NewContact} />
          <Route path={"/:fullname"} component={ContactDetails} />
        </Switch>
      </div>
      {/* made it like this so footer always stays on bottom */}
      <Footer />
    </div>
  );
}
export default App;

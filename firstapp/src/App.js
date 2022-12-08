import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";

const contacts =[
  {
  id: "001",
  name:"Abhay",
  email:"abhaysn19@gmail.com"
  },
  {
  id: "009",
  name:"Aditya",
  email:"aditya@gmail.com"
  }

]
function App() {
  return (
  <div className="ui container">
    <Header/>
     <AddContact/>
    <ContactList contacts={contacts}/>

  </div>
  );
}

export default App;

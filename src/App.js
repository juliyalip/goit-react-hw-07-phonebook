import { Component } from "react";
import "./index.css";
import Contacts from "./component/Contacts";
import Filter from "./component/Filter";
import Form from "./component/Form";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './component/contact.css'




import {CSSTransition} from 'react-transition-group'

export default class App extends Component {

 // componentDidMount() {
 //   const contacts = localStorage.getItem("contacts");
 //   const parsedContacts = JSON.parse(contacts);
 //   console.log(parsedContacts);
 //   console.log("component App DidMount");
 //   if (parsedContacts) {
  //    this.setState({ contacts: parsedContacts });
  //  }
 // }

 // componentDidUpdate(prevProps, prevState) {
 //   console.log("app componentDidUpdate");
 //   if (this.state.contacts !== prevState.contacts) {
 //     console.log("obnovilos pole contact");
  //    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
   // }
 // }




  render() {

    return (
      <>
        <div className="container">

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        
        
          <Form />

          <h2>Contacts</h2>
      

          {/* <CSSTransition in={this.state.contacts.length > 0 } classNames="contactItem" timeout={250} unmountOnExit>  */}
              <Filter />
            
            <Contacts />
                    
   {/* </CSSTransition>   
       */}
          
      
          <ToastContainer autoClose={3000} position="top-left"/> 
         
        </div>
      </>
    );
  }
}

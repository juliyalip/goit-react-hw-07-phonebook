import { Component } from "react";
import "./index.css";
import Contacts from "./component/Contacts";
import Filter from "./component/Filter";
import Form from "./component/Form";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './component/contact.css'
import { connect } from 'react-redux';

import {fetchContact} from './redux/contact-operations'


import {CSSTransition} from 'react-transition-group'


class App extends Component {

  componentDidMount(){
    this.props.contactView()
  }
    
 render() {
   const { contacts } = this.props
   
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
      <CSSTransition in={contacts.length > 1}
      timeout={250} unmountOnExit>

            <Filter />
            
            </CSSTransition>
            
          <CSSTransition in={contacts.length > 0}
          appear={true} timeout={250} unmountOnExit
          >
         <Contacts />  
                    
            </CSSTransition>
   
     
      
          <ToastContainer autoClose={3000} position="top-left"/> 
         
        </div>
      </>
    )
  }
}


 

const mapStateToProps = state => ({
  contacts: state.contacts
}
);


const mapDispatchToProps = dispatch => ({
  contactView: ()=> dispatch(fetchContact()) 
})
  
  
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
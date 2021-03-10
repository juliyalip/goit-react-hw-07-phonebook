import { Component } from "react";
import { connect } from 'react-redux';
import shortid from "shortid";
import PropTypes from "prop-types";
import * as actions from '../redux/contact-action'

import s from "./form.module.css";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 class Form extends Component {
  state = {
    name: "",
    number: "",
    
  };

  static propTypes = {
    handleChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    validateForm: PropTypes.func,
    reset: PropTypes.func,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;
   const isValedeForm = this.validateForm();
   if (!isValedeForm) return;
        onAdd({name, number});
    this.reset();
  };

  validateForm = () => {
    const { name, number } = this.state;
       if (!name || !number) {
      alert("filed is empti");
      return false;
    }
    const contacts = this.props.contacts;
    if (contacts.some(contact => contact.name === name)) {
  return toast.error("Контакт уже есть")
}
    return true;
  };

     
  reset = () => {
    this.setState({
      name: "",
      number: "",
  
    });
   };
   



  render() {
    const { name, number } = this.state;
 

    return (
      <form onSubmit={this.handleFormSubmit} className={s.form}>
        <label className={s.input}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="enter name"
            onChange={this.handleChange}
          />
        </label>
        <label className={s.input}>
          Number
          <input
            type="text"
            name="number"
            value={number}
            placeholder="enter number"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
})


const mapDispatchToProps = dispatch => ({
  onAdd: (name, number) => dispatch(actions.addContact(name, number)),
 


})

export default connect(mapStateToProps, mapDispatchToProps  )(Form)
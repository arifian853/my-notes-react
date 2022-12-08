import React from 'react';
import { BsPlusSquareFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Data Added', {
  duration: 4000,
  position: 'bottom-center',
});

export class NoteInsert extends React.Component {
 constructor(props) {
    super(props);
  
    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    }
  
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

 render() {
   return (
     <form className='note-insert' onSubmit={this.onSubmitEventHandler}>
       <input className='input-title' type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
       <input className='input-content' type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
       <button onClick={notify} type="submit"><BsPlusSquareFill /> </button>
       <Toaster />   
     </form>
   )
 }
}

NoteInsert.propTypes = {
  addNote: PropTypes.func.isRequired,
};

import React, { Component } from 'react'

export default class Form extends Component {
  constructor () {
    super();
    this.state = {
      nameuser: '',
      surname: '', 
      tel: '', 
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addсontact(this.state.nameuser, this.state.surname, this.state.tel)
    this.setState({
      nameuser: '',
      surname: '', 
      tel: ''
    })
    
  }

  cancel = (e) => {
    e.preventDefault();
    this.props.cancel()
  }
  
  render() {
    return (
      <form className='form-users' 
      onSubmit={this.submitHandler}
      >
            <input 
              type='text' 
              placeholder='Name' 
              name='nameuser' 
              onChange={this.changeHandler} 
              value={this.state.nameuser} 
              key={1} />
            <input 
              type='text' 
              placeholder='Surname' 
              name='surname' 
              onChange={this.changeHandler} 
              value={this.state.surname}
              key={2} />
            <input 
              type='tel' 
              placeholder='Phone' 
              name='tel' 
              onChange={this.changeHandler} 
              value={this.state.tel} 
              key={3} />
            <button key={4} type="submit" className='btn'>Save contact</button>
            <button key={5} onClick={this.cancel} className='btn'>Cancel</button>
      </form>
    )
  }
}

import React, { Component } from 'react'

export default class AddContact extends Component {
  render() {
    return (
      <div>
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>name</label>
                    <input type="text" name="name" placeholder="name"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="email"/>
                </div>
                <button classname="ui button blue">Add</button>
            </form>
        </div>
        
      </div>
    )
  }
}

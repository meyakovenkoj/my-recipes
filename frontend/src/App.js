import React, { Component } from 'react';
import axios from 'axios';
import Recipes from './Recipes';

class App extends Component {

  state = {
    name: '',
    description: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('name', this.state.name);
    form_data.append('description', this.state.description);
    let url = 'http://localhost:8000/api/recipe/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Name' id='name' value={this.state.name} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Description' id='description' value={this.state.description} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
        <Recipes/>
      </div>
    );
  }
}

export default App;
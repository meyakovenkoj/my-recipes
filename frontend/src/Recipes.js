import React, { Component } from 'react';
import axios from 'axios';

class Recipes extends Component {

  state = {
    recipes: []
  };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.id]: e.target.value
//     })
//   };

//   handleImageChange = (e) => {
//     this.setState({
//       image: e.target.files[0]
//     })
//   };
    componentDidMount(){
        let url = 'http://localhost:8000/api/recipe/';
    axios.get(url, {
    })
        .then(res => {
            this.setState({
                      recipes: res.data.Recipes
                    });
          console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    handleDelete(itemId){
        let url = 'http://localhost:8000/api/recipe/';
        axios.delete(url, { params: { id: itemId } 
        })
            .then(res => {
                this.setState({
                          recipes: this.state.recipes.filter(item => item.id !== itemId)
                        });
            })
            .catch(err => console.log(err))
    }



  render() {
    return (
      <div className="Recipes">
          <ul>
       {this.state.recipes.map(recipe => {
          return (
              <div>
                  <button onClick={() => {this.handleDelete(recipe.id)}}>Delete</button>
            <li key={recipe.id}>
              {recipe.name} - {recipe.description}
            </li>
            <img src={'http://localhost:8000/media/'+recipe.image} width="350"
   height="250" alt=""/>
</div>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Recipes;
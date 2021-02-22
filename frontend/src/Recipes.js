import React, { Component } from "react";
import axios from "axios";

class Recipes extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    let url = "http://localhost:8000/api/recipe/";
    axios
      .get(url, {})
      .then((res) => {
        if (Array.isArray(res.data.Recipes)) {
          this.setState({
            recipes: res.data.Recipes,
          });
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  handleDelete(itemId) {
    let url = "http://localhost:8000/api/recipe/";
    axios
      .delete(url, { params: { id: itemId } })
      .then((res) => {
        this.setState({
          recipes: this.state.recipes.filter((item) => item.id !== itemId),
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.recipes);
    return (
      <div className="Recipes">
        <ul>
          {this.state.recipes?.map((recipe) => {
            return (
              <div key={recipe.id}>
                <li>
                  <p>
                    {recipe.name} - {recipe.description}
                  </p>
                  <button
                    onClick={() => {
                      this.handleDelete(recipe.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
                <img
                  src={"http://localhost:8000/media/" + recipe.image}
                  width="350"
                  height="250"
                  alt=""
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Recipes;

import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { deleteRecipe } from "../actions/actions";

class Recipes extends Component {
  handleDelete(itemId) {
    this.props.deleteRecipe(itemId);
  }

  render() {
    console.log(this.props.recipes);
    return (
      <div className="Recipes">
        <ul>
          {this.props.recipes.recipes?.map((recipe) => {
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

const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
});
export default connect(null, mapDispatchToProps)(Recipes);

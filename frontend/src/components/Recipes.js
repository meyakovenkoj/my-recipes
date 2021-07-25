import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { deleteRecipe } from '../actions/actions'
import RecipeReviewCard from './Card.js'
import Grid from '@material-ui/core/Grid'
class Recipes extends Component {
  handleDelete(itemId) {
    this.props.deleteRecipe(itemId)
  }

  render() {
    // console.log(this.props.recipes.recipes)
    return (
      <div style={{ padding: 20 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {this.props.recipes.recipes.map((recipe) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={recipe.id}>
                <RecipeReviewCard
                  recipe={recipe}
                  deleteRecipe={this.props.deleteRecipe}
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
})
export default connect(null, mapDispatchToProps)(Recipes)

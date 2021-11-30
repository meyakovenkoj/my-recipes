import axios from 'axios'

export const url = 'http://localhost:8000' //window.location.protocol + '//' + window.location.hostname

export function getRecipes(form_data) {
  return (dispatch) => {
    axios
      .get(`${url}/api/recipe/`, {})
      .then((res) => {
        if (Array.isArray(res.data.Recipes)) {
          let recipes = res.data.Recipes
          console.log(recipes)
          dispatch({ type: 'GET_RECIPES', recipes })
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
}

export function deleteRecipe(itemId) {
  return (dispatch) => {
    axios
      .delete(`${url}/api/recipe/`, { params: { id: itemId } })
      .then((res) => {
        dispatch({ type: 'DELETE_RECIPE', itemId })
      })
      .catch((err) => console.log(err))
  }
}

export function postRecipe(form_data) {
  return (dispatch) => {
    axios
      .post(`${url}/api/recipe/`, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        let recipe = res.data.Recipes
        dispatch({ type: 'ADD_RECIPE', recipe })
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }
}

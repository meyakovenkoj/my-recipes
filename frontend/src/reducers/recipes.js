const initialState = {
  recipes: [],
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_RECIPES': {
      let items = Array.isArray(action.recipes) ? action.recipes : []
      console.log(items)
      return {
        ...state,
        recipes: items,
      }
    }
    case 'ADD_RECIPE':
      console.log(state)
      state.recipes = [...state.recipes, ...action.recipe]
      return {
        ...state,
      }
    case 'DELETE_RECIPE':
      return {
        ...state,
        recipes: state.recipes.filter((item) => item.id !== action.itemId),
      }
    default:
      return state
  }
}

export default reducer

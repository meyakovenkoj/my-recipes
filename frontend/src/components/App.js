import React, { Component } from "react";
import { connect } from "react-redux";
import Recipes from "./Recipes";
import { postRecipe, getRecipes } from "../actions/actions";

class App extends Component {
  state = {
    name: "",
    description: "",
    image: null,
  };
  inputRef = React.createRef();

  componentDidMount() {
    this.props.getRecipes();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isPosting === true && nextProps.isPosting === false) {
      this.props.fetchMessages();
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.name.trim() !== "" && this.state.description.trim() !== "") {
      let form_data = new FormData();
      form_data.append("image", this.state.image, this.state.image.name);
      form_data.append("name", this.state.name);
      form_data.append("description", this.state.description);
      this.props.postRecipe(form_data);
      this.setState({
        name: "",
        description: "",
      });
      this.inputRef.current.value = "";
    } else {
      alert("Name or Description shouldn't be empty or only with whitespaces");
    }
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              ref={this.inputRef}
              required
            />
          </p>
          <input type="submit" />
        </form>
        <Recipes recipes={this.props.recipes} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    needUpdate: state.needUpdate,
  };
}
const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
  postRecipe: (form) => dispatch(postRecipe(form)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

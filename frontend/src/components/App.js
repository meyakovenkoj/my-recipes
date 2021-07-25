import React, { Component } from 'react'
import { connect } from 'react-redux'
import Recipes from './Recipes'
import { withStyles } from '@material-ui/styles'
import { postRecipe, getRecipes } from '../actions/actions'
import { Paper } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Preview from './Preview'

const styles = (theme) => ({
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  input: {
    display: 'none',
  },
})

class App extends Component {
  state = {
    name: '',
    description: '',
    image: null,
    created_at: '',
    open: false,
    preview: null,
  }
  inputRef = React.createRef()

  componentDidMount() {
    this.props.getRecipes()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isPosting === true && nextProps.isPosting === false) {
      this.props.fetchMessages()
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleImageChange = (e) => {
    const [file] = e.target.files
    if (file) {
      this.setState({
        image: file,
        preview: URL.createObjectURL(file),
      })
    }
  }
  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({
      name: '',
      description: '',
      image: null,
      preview: null,
      open: false,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    if (this.state.name.trim() !== '' && this.state.description.trim() !== '') {
      let form_data = new FormData()
      form_data.append('image', this.state.image, this.state.image.name)
      form_data.append('name', this.state.name)
      form_data.append('description', this.state.description)
      form_data.append('created_at', this.state.created_at)
      this.props.postRecipe(form_data)
      this.setState({
        name: '',
        description: '',
        image: null,
        open: false,
      })
      this.inputRef.current.value = ''
    } else {
      alert("Name or Description shouldn't be empty or only with whitespaces")
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className="App">
        <Recipes recipes={this.props.recipes} />
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add recipe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter name and description of your dish. Optionaly you can add a
              photo.
            </DialogContentText>
            <form noValidate autoComplete="off">
              <p>
                <TextField
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </p>
              <p>
                <TextField
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
                  accept="image/png, image/jpeg"
                  className={classes.input}
                  type="file"
                  onChange={this.handleImageChange}
                  ref={this.inputRef}
                  id="image"
                />
                <label htmlFor="image">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
              </p>
              <p>
                <Preview preview={this.state.preview} />
              </p>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    needUpdate: state.needUpdate,
  }
}
const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
  postRecipe: (form) => dispatch(postRecipe(form)),
})
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(App),
)

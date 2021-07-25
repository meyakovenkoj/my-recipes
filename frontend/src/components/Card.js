import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteIcon from '@material-ui/icons/Delete'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { url } from '../actions/actions'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function RecipeReviewCard(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const handleDelete = (itemId) => {
    props.deleteRecipe(itemId)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDeleteCard = () => {
    handleDelete(props.recipe.id)
    setAnchorEl(null)
  }

  console.log(props.recipe)
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <div>
              <IconButton
                aria-label="settings"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="settings"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleDeleteCard}>Delete</MenuItem>
              </Menu>
            </div>
          }
          title={props.recipe.name}
          subheader={new Date(props.recipe.created_at).toDateString()}
        />
        <CardMedia
          className={classes.media}
          image={url + '/media/' + props.recipe.image}
          title={props.recipe.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.recipe.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton
            onClick={() => {
              handleDelete(props.recipe.id)
            }}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton> */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Recipe:</Typography>
            <Typography paragraph>{props.recipe.recipeDetails}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}

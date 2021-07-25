import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}))

export default function Preview(props) {
  const classes = useStyles()
  if (props.preview) {
    return (
      <div className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.preview}
          title="Preview"
        />
      </div>
    )
  } else {
    return <div></div>
  }
}

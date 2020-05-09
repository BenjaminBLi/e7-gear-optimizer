import { Component } from "react";
import Box from '@material-ui/core/Box';
import React from "react";
import { Gear } from "../../GearDisplayTypes";
import { makeStyles, CardContent, Button } from "@material-ui/core";
import { Card, CardActions } from "material-ui";
import Typography from "material-ui/styles/typography";

interface Props {
    gear: Gear
}

interface State {

}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const SimpleCard = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root}>
        <CardContent>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

export default class GearView extends Component<Props, State> {
    render() {
        return <Box></Box>
    }
}
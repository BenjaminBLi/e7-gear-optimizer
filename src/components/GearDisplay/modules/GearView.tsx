import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Gear} from '../GearDisplayTypes'
import { Paper, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: "15%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

interface Props {
  gear: Gear
}

const SingleGear: React.FunctionComponent<Props> = props => {
  const classes = useStyles();
  const {mainStat, subStats, set} = props.gear

  return (
    <Box borderRadius={40} >
    <Paper>
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary">
            {set}
          </Typography>
          <Typography className={classes.title}>
            {mainStat.val}: {mainStat.type}
          </Typography>
            {subStats.map((value, idx) => {
              return (
              <Typography variant="body2" component="p">
                {value.val}: {value.type}
              </Typography>)
            })}
        </CardContent>
      </Card>
    </Paper>
    </Box>
  );

}

export default SingleGear;
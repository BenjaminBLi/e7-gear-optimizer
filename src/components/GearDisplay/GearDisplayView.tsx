import React from 'react';
import {Gear} from './GearDisplayTypes'
import GearView from './modules/GearView'
import { Container, GridList, GridListTile, Grid, makeStyles, Theme, createStyles, Box } from '@material-ui/core';
import GearInput from './modules/GearInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "50%",
      height: 450,
    },
  }),
);
interface GearDisplayProps {
    gears: Gear[]
    //submitFunc: (gears: Gear[]) => void
}

//TODO: implement renderGears properly
const renderGears = (gears: Gear[]) => {
  return (
        <GridList cellHeight={160}>
            {gears.map(gear => (
                <GridListTile>
                    <GearView gear={gear}/>
                </GridListTile>
            ))}
        </GridList>
      );
}

const GearDisplayView: React.FunctionComponent<GearDisplayProps> = props => {
    //we want a grid of gears
    const classes = useStyles()
    const {gears} = props
    
    return (
        <Box display="flex">
            <GearInput></GearInput>
            <GridList cellHeight={160} className={classes.gridList}>
                {gears.map(gear => (
                    <GridListTile>
                        <GearView gear={gear}/>
                    </GridListTile>
                ))}
            </GridList>
        </Box>
    );
}

GearDisplayView.defaultProps = {
    gears: [],
}

export default GearDisplayView

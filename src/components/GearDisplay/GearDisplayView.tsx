import React, { Component } from 'react';
import {Gear} from './GearDisplayTypes'
import GearView from './modules/GearView'
import { Container } from '@material-ui/core';
import GearInput from './modules/GearInput';
import { useDispatch } from 'react-redux';

interface GearDisplayProps {
    gears: Gear[]
    //submitFunc: (gears: Gear[]) => void
}

const renderGears = (gears: Gear[]) => {
  return (
        <div>
            {gears.map(gear => (<GearView gear={gear}/>))}
        </div>
      )
}

const GearDisplayView: React.FunctionComponent<GearDisplayProps> = props => {
    const dispatch = useDispatch();
    //we want a grid of gears
    const {gears} = props
    
    return (
        <Container>
            <GearInput></GearInput>
            {renderGears(gears)}
        </Container>
    );
}

GearDisplayView.defaultProps = {
    gears: [],
}

export default GearDisplayView

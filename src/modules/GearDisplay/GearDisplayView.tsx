import React, { Component } from 'react';
import {Gear} from './GearDisplayTypes'

interface Props {
    gear: Gear[]
}

interface State{

}


export default class GearDisplayView extends Component<Props, State>{
    render() {
        return (
            <div> "Gear goes Here" </div>
        )
    }

}

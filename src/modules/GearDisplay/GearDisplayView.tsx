import React, { Component } from 'react';

interface Props {
    gear: string[]
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

import React, { Component } from 'react';

interface Props {
    gear: string[]
}

interface State{

}


export default class HeroSelectorView extends Component<Props, State>{
    render() {
        return (
            <div> "Heroes goes Here" </div>
        )
    }

}

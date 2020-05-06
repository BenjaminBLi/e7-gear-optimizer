import React, { Component } from 'react';
import Multiselect from '../../components/MultiSelect/Multiselect'
import MultiSelect from '../../components/MultiSelect/Multiselect';

interface Props {
    gear: string[]
}

interface State{

}


export default class HeroSelectorView extends Component<Props, State>{
    render() {
        return (
            <MultiSelect></MultiSelect>
        )
    }
}

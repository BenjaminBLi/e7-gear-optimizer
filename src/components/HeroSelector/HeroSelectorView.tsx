import React, { Component } from 'react';
import MultiSelect from '../MultiSelect/Multiselect';

//TODO: modify heroes to be fixed list (?)

interface Props {
    heroes: string[]
}

const HeroSelectorView: React.FunctionComponent<Props> = props => {
    return (
        <MultiSelect></MultiSelect>
    );
}

export default HeroSelectorView;
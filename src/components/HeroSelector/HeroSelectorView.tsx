import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { Hero } from './HeroSelectorTypes';
import { selectedHeroes } from './HeroSelectorActions';
import { Box } from '@material-ui/core';

//TODO: modify heroes to be fixed list (?)

interface Props {
    heroes: Hero[]
}

const renderHeroes = (heroes: Hero[]) => {
    //we want a grid to display of all the heroes w/ the selected removed...
    
}

const HeroSelectorView: React.FunctionComponent<Props> = props => {
    const dispatch = useDispatch();

    const {heroes} = props

    //TODO: implement hero displays:
    // gridlist for unselected heroes in autocomplete, + dropdown
    // Gridlist for selected heroes
    return (
        <Box>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={heroes}
                getOptionLabel={(option: Hero) => option.name}
                filterSelectedOptions
                onChange={(e, value) => {
                    console.log(e.target, value);
                    dispatch(selectedHeroes(value))
                }}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Pick Heroes"
                    placeholder="Pick more... or don't"
                />
                )}
            />
        </Box>
    );
}

export default HeroSelectorView;
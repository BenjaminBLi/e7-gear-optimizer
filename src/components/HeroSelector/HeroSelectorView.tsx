import React, { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { Hero } from './HeroSelectorTypes';
import { selectedHeroes } from './HeroSelectorActions';

//TODO: modify heroes to be fixed list (?)

interface Props {
    heroes: Hero[]
}

const HeroSelectorView: React.FunctionComponent<Props> = props => {
    const dispatch = useDispatch();

    const {heroes} = props

    return (
        <div>
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
        </div>
    );
}

export default HeroSelectorView;
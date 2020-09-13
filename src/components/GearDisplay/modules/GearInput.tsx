import { Container, TextField, Button, Select, FormControl, InputLabel, Grid, Box } from "@material-ui/core"
import {Gear, GearTypes, StatTypes} from '../GearDisplayTypes'
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addGear } from "../GearDisplayActions"
import { StatTypeList, SetTypeList } from "../GearDisplayTypes"
import { MenuItem } from "material-ui"

//TODO: COMPLETE GEAR INPUT PROPERLY 
//TODO: Gear input validation

interface Props {
    levelList?: number[] //list of gear levels
}

const renderSetOptions = () => {
    return SetTypeList.map((stat: GearTypes) => {
        return <MenuItem value={stat} key={stat}>{stat}</MenuItem>
    })
}

const renderStatOptions = () => {
    return StatTypeList.map((stat: StatTypes) => {
        return <MenuItem value={stat}>{stat}</MenuItem>
    })
}


//TODO: PROPERLY TYPE EVENT STUFF

const GearInput: React.FunctionComponent<Props> = props => {
    const dispatch = useDispatch();
    
    //initialize that other shit
    const [values, setValues] = useState<Gear>({
        set: 'hp',
        mainStat: {val: 1, type: 'hp%'},
        subStats: [{val: 1, type: 'hp%'},{val: 1, type: 'hp%'},{val: 1, type: 'hp%'},{val: 1, type: 'hp%'}]
    });

    //TODO: possibly find more elegant solution to this god awful onchange handler, with proper typing
    const handleSelectChange = (event: React.ChangeEvent<{name?: string; value: unknown}>) => {
        const name = event.target.name;
        console.log(name);

        let newThing: Gear = {...values}
        if(name === 'set'){
            newThing.set = event.target.value as GearTypes
        }else if(name === 'main'){
            newThing.mainStat.type = event.target.value as StatTypes
        }else if(name === 'sub1'){
            newThing.subStats[0].type = event.target.value as StatTypes
        }else if(name === 'sub2'){
            newThing.subStats[1].type = event.target.value as StatTypes
        }else if(name === 'sub3'){
            newThing.subStats[2].type = event.target.value as StatTypes
        }else if(name === 'sub4'){
            newThing.subStats[3].type = event.target.value as StatTypes
        }
        setValues({
            ...newThing
        })

    }

    const handleTextChange = (event: React.ChangeEvent<{name?: string; value: unknown}>) => {
        const name = event.target.name;

        let newSubs = [...values.subStats]
        if(name === 'main'){
            setValues({
                ...values,
                mainStat: {val: event.target.value as number, type: values.mainStat.type}
            })
        }else if(name === 'sub1'){
            newSubs[0].val = event.target.value as number
            setValues({
                ...values,
                subStats: [...newSubs]
            })
        }else if(name === 'sub2'){
            newSubs[1].val = event.target.value as number
            setValues({
                ...values,
                subStats: [...newSubs]
            })

        }else if(name === 'sub3'){
            newSubs[2].val = event.target.value as number
            setValues({
                ...values,
                subStats: [...newSubs]
            })
        }else if(name === 'sub4'){
            newSubs[3].val = event.target.value as number
            setValues({
                ...values,
                subStats: [...newSubs]
            })
        }
    }

    const temp = () => {
        //console.log(values, setters);
        dispatch(addGear([values]));
    }

    //TODO: rework labeling and naming for fields
    return (
        <Box display>
            <Box>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="set">Set</InputLabel>
                    <Select label={"set"} placeholder={"pick set"} 
                        value={values.set} inputProps={{name:'set'}} 
                        onChange={handleSelectChange}> 
                        {renderSetOptions()}
                    </Select>
                </FormControl> 
            </Box>

            <Box>
                <TextField label={"Main Stat"} 
                    variant="outlined"
                    name="main"
                    value={values.mainStat.val}
                    inputProps= {{name: 'main'}}
                    onChange={handleTextChange}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="main-stat-type">Main Stat Type</InputLabel>
                    <Select label={"main-stat-type"} placeholder={"pick set"} 
                        value={values.mainStat.type} inputProps={{name:'main'}} 
                        onChange={handleSelectChange}> 
                        {renderStatOptions()}
                    </Select>
                </FormControl> 
            </Box>

            <Box>

                <TextField label={"sub1"} 
                    variant="outlined"
                    name="sub1"
                    value={values.subStats[0].val}
                    inputProps= {{name: 'sub1'}}
                    onChange={handleTextChange}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="sub1-stat-type">substat Type</InputLabel>
                    <Select label={"sub1-stat-type"} placeholder={"pick set"} 
                        value={values.subStats[0].type} inputProps={{name:'sub1'}} 
                        onChange={handleSelectChange}> 
                        {renderStatOptions()}
                    </Select>
                </FormControl> 
            </Box>

            <Box>
                <TextField label={"sub2"} 
                    variant="outlined"
                    name="sub2"
                    value={values.subStats[1].val}
                    inputProps= {{name: 'sub2'}}
                    onChange={handleTextChange}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="sub2-stat-type">substat Type</InputLabel>
                    <Select label={"sub2-stat-type"} placeholder={"pick set"} 
                        value={values.subStats[1].type} inputProps={{name:'sub2'}} 
                        onChange={handleSelectChange}> 
                        {renderStatOptions()}
                    </Select>
                </FormControl> 
            </Box>

            <Box>
                <TextField label={"sub3"} 
                    variant="outlined"
                    name="sub3"
                    value={values.subStats[2].val}
                    inputProps= {{name: 'sub3'}}
                    onChange={handleTextChange}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="sub3-stat-type">Substat Type</InputLabel>
                    <Select label={"sub3-stat-type"} placeholder={"pick set"} 
                        value={values.subStats[2].type} inputProps={{name:'sub3'}} 
                        onChange={handleSelectChange}> 
                        {renderSetOptions()}
                    </Select>
                </FormControl> 
            </Box>

            <Box>
                <TextField label={"sub4"} 
                    variant="outlined"
                    name="sub4"
                    value={values.subStats[3].val}
                    inputProps= {{name: 'sub4'}}
                    onChange={handleTextChange}
                />
                <FormControl variant="outlined">
                    <InputLabel htmlFor="sub4-stat-type">Substat Type</InputLabel>
                    <Select label={"sub4-stat-type"} placeholder={"pick set"} 
                        value={values.subStats[3].type} inputProps={{name:'sub4'}} 
                        onChange={handleSelectChange}> 
                        {renderSetOptions()}
                    </Select>
                </FormControl> 
            </Box>

            <Box>
                <Button onClick={temp}>Submit</Button>
            </Box>
        </Box>
    )
}

export default GearInput
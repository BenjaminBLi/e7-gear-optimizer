import { Container, TextField, Button } from "@material-ui/core"
import {Gear} from '../GearDisplayTypes'
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addGear } from "../GearDisplayActions"

//TODO: COMPLETE GEAR INPUT PROPERLY 
interface Props {
    levelList?: number[] //list of gear levels
}

const GearInput: React.FunctionComponent<Props> = props => {
    const dispatch = useDispatch();
    
    //initialize that other shit
    //const [values, setters] = useState<Gear>();


    const temp = () => {
        const test: Gear = {set: "hp", mainStat: {val: 12, type: "hp"}, subStats: []}
        //console.log(values, setters);
        dispatch(addGear([test]));
    }
    return (
        <Container>
            <div>
                <TextField label={"set"} 
                    variant="outlined"
                    name="set"
                />
                <TextField label={"sub1"} 
                    variant="outlined"
                    name="sub1"
                />
                <TextField label={"sub2"} 
                    variant="outlined"
                    name="sub2"
                />
                <TextField label={"sub3"} 
                    variant="outlined"
                    name="sub3"
                />
                <TextField label={"sub4"} 
                    variant="outlined"
                    name="sub4"
                />
            </div>
            <div>
                <Button onClick={temp}>Submit</Button>
            </div>
        </Container>
    )
}

export default GearInput
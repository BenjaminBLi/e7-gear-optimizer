import React from "react";
import { storiesOf } from "@storybook/react";
import {store} from '../../redux/store'
import { Provider } from "react-redux";
import GearView from './modules/GearView'
import GearDisplayView from "./GearDisplayView"
import GearInputView from './modules/GearInput'
import { Gear } from "./GearDisplayTypes";
import { MuiThemeProvider } from "material-ui/styles";
import { Container } from "@material-ui/core";

const withProvider = (story: any) => (
    <MuiThemeProvider>
        <Provider store={store}>
            { story()}
        </Provider>
    </MuiThemeProvider>
)

const testGear: Gear = {
    set: 'hp',
    mainStat: {
        val: 12,
        type: 'hp'
    },
    subStats: []
}

storiesOf("Gear", module).addDecorator(withProvider)
    .add('fullView', () => (
        <Container>
        <GearDisplayView gears={[]}></GearDisplayView> 
        </Container>
    )).add('SingleCard', () => (
        <Container>
        <GearView gear={testGear}></GearView> </Container>
    )).add('GearInput', () => (
        <Container>
            <GearInputView/>
        </Container>
    ))
import React from "react";
import { storiesOf } from "@storybook/react";
import {store} from '../../redux/store'
import { Provider } from "react-redux";
import GearView from './GearView'
import { Gear } from "../../modules/GearDisplay/GearDisplayTypes";
import { MuiThemeProvider } from "material-ui/styles";

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

storiesOf("SingleGear", module).addDecorator(withProvider)
    .add('default', () => (
        <GearView></GearView>
    ))
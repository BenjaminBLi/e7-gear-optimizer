import React from "react";
import { storiesOf } from "@storybook/react";
import {store} from '../../../../redux/store'
import { Provider } from "react-redux";
import GearView from './GearView'
import { Gear } from "../../GearDisplayTypes";

const withProvider = (story: any) => (
    <Provider store={store}>
        { story()}
    </Provider>
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
        <GearView gear={testGear}></GearView>
    ))
import React from "react";
import { storiesOf } from "@storybook/react";
import {store} from '../../redux/store'
import { Provider } from "react-redux";
import { MuiThemeProvider } from "material-ui/styles";
import MultiSelect from "./Multiselect";

const withProvider = (story: any) => (
    <MuiThemeProvider>
        <Provider store={store}>
            { story()}
        </Provider>
    </MuiThemeProvider>
)

storiesOf("multiselect", module).addDecorator(withProvider)
    .add('default', () => (
        <MultiSelect></MultiSelect>
    ))
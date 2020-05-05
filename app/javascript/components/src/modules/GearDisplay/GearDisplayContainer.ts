import { connect } from 'react-redux'
import GearDisplayView from './GearDisplayView'
import {AppState} from '../../redux/types'
import {getGear} from './GearDisplaySelector'

export default connect(
    (state: AppState) => {
        return {gear: getGear(state)}
    },
)(GearDisplayView)
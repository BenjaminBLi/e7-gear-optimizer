import { connect } from 'react-redux'
import GearDisplayView from './GearDisplayView'
import {AppState} from '../../redux/types'
import {getGear} from './GearDisplaySelector'

const mapStatetoProps = (state: AppState) => {
    return {gears: getGear(state)}
};


export default connect(
    mapStatetoProps,
)(GearDisplayView)
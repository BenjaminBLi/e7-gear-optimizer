import { connect } from 'react-redux'
import GearDisplayView from './GearDisplayView'

export default connect((state:any) => {
    return {gear: []}
},
)(GearDisplayView)
import {connect} from 'react-redux'
import HeroSelectorView from './HeroSelectorView'
import {HeroSelectorState} from './HeroSelectorTypes'

export default connect(
    (state: HeroSelectorState) => {
        return {
            gear: []
        }
    }
)(HeroSelectorView)
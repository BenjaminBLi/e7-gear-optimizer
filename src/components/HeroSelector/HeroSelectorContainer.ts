import {connect} from 'react-redux'
import HeroSelectorView from './HeroSelectorView'
import {HeroSelectorState} from './HeroSelectorTypes'
import { AppState } from '../../redux/types'

const mapStateToProps = (state: AppState) => ({
    heroes: state.hero.heroes
});

export default connect(
    mapStateToProps
)(HeroSelectorView)
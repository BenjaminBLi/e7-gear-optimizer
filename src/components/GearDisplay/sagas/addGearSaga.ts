import { put, takeEvery, all } from 'redux-saga/effects'
import { addGearAction } from '../GearDisplayTypes';

export default function* addGearSaga(action: addGearAction){
    const {gears} = action.payload;
    //console.log(gears);
}
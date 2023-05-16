import {delay, takeLatest} from 'redux-saga/effects'
import { TYPING } from '../adminReducer/actionTypeAd';

export function* fetchProductAsyn() {
}

export function* sagaTyping(action) {
    yield delay(800);
     action.payload();
 }

export function* mySaga() {
    yield takeLatest(TYPING , sagaTyping) 


 

}
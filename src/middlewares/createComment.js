import md5 from 'md5'
import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    let curAction = {...action};
    switch (curAction.type) {
        case ADD_COMMENT:
            const payload = curAction.payload
            curAction.payload = {id: getRandomId(), ...payload}
            break
    }

    next(curAction)
}

function getRandomId() {
    const curDate = new Date()
    return md5(curDate)
}
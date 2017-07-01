import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    let curAction = {...action};
    switch (curAction.type) {
        case ADD_COMMENT:
            const payload = curAction.articleId
            curAction.payload = {id: getRandomId(), ...payload}
            break
    }

    next(curAction)
}
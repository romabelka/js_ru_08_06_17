import {COMBOBOX_CHANGE, DATE_CHANGE} from '../constants'

const defaultFilterState = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
};

export default (state = defaultFilterState, action) => {
    const {type, selected, dateRange} = action

    switch (type) {
        case COMBOBOX_CHANGE:
            return {...state, selected}
        case DATE_CHANGE:
            return {...state, dateRange}
    }

    return state
}
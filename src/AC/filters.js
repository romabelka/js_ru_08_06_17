import {COMBOBOX_CHANGE, DATE_CHANGE} from '../constants'

export const filterSelectChange = selected => {
    return {
        type: COMBOBOX_CHANGE,
        selected
    }
}

export const filterDateChange = dateRange => {
    return {
        type: DATE_CHANGE,
        dateRange
    }
}




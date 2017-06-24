import {COMBOBOX_CHANGE, DATE_FROM_CHANGE, DATE_TO_CHANGE, DATE_CHANGE} from '../constants'

export const filterSelectChange = selected => {
    return {
        type: COMBOBOX_CHANGE,
        selected
    }
}

export const dateFromChange = dateFrom => {
    return {
        type: DATE_FROM_CHANGE,
        dateFrom
    }
}

export const dateToChange = dateTo => {
    return {
        type: DATE_TO_CHANGE,
        dateTo
    }
}

export const filterDateChange = dateRange => {
    return {
        type: DATE_CHANGE,
        dateRange
    }
}




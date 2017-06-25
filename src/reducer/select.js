export default select (dateRange = {from: '', to: ''}, action) {
  if(action.type = 'DATE_RANGE') return dateRange
}

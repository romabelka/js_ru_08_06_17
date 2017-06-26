import {articles as defaultArticles} from '../fixtures'

export default  (dateRange = {from: null, to: null}, action) => {
  console.log(action);
  if(action.type === 'DATE_RANGE') return {from: action.dates.from , to: action.dates.to}
  else return dateRange
}

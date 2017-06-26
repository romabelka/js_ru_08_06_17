import {articles as defaultArticles} from '../fixtures'
import {SELECT} from '../constants'

export default (selected=[],action) => {
   const {type, payload} = action
   switch(type) {
     case SELECT : return payload
   }
   return selected
}

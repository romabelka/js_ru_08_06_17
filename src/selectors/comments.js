import {createSelector} from 'reselect'

const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id]
})
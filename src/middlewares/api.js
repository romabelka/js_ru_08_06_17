export default store => next => action => {
    const {callAPI} = action
    if (!callAPI) return next(action)

    setTimeout(() => {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => next({...action, response}))
    }, 1000)

}
const initState = {
    posts: [
        { id: 1, title: 'test1', body: 'bod1' },
        { id: 2, title: 'test2', body: 'bod2' },
        { id: 3, title: 'test3', body: 'bod3' }
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'DELETE_POST') {
        let newposts = state.posts.filter(post => {
            return post.id != action.id
        })
        return {
            ...state,
            posts: newposts
        }
    }
    return state;
}

export default rootReducer;
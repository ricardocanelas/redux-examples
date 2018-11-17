export const addPost = ({ merge, getSpace }, item) => {
    merge({
        data: getSpace().data.concat(item),
    })
}

export const updatePost = ({ merge, getSpace }, post) => {
    merge({
        data: getSpace().data.map((item) => {
            if (item.id === post.id) {
                return {
                    ...item,
                    ...post,
                }
            }
            return item
        }),
    })
}

export const removePost = ({ merge, getSpace }, post) => {
    merge({
        data: getSpace().data.filter((item) => item.id !== post.id),
    })
}

export default {
    addPost,
    updatePost,
    removePost,
}

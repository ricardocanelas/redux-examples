import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import gql from 'graphql-tag'

const cache = new InMemoryCache()

// STATE

const myDefaultState = {
    posts: [],
}

// GRAPHQL

const postsQuery = gql`
    query getPosts {
        posts @client
    }
`

const addPostMutationQuery = gql`
    mutation addPost($title: String) {
        addPost(title: $title) @client
    }
`

// CACHE MUTATIONS

const addPost = (_obj, { title }, { cache }) => {
    const query = postsQuery

    const { posts } = cache.readQuery({ query })

    const updatedPosts = posts.concat({ title: title })

    cache.writeQuery({ query, data: { posts: updatedPosts } })

    return null
}

const myStateLink = withClientState({
    defaults: myDefaultState,
    resolvers: {
        Mutation: {
            addPost,
        },
    },
    cache,
})

// ------------------------------------------------------

const client = new ApolloClient({
    cache,
    link: myStateLink,
})

client
    .mutate({
        mutation: addPostMutationQuery,
        variables: { title: 'anything' },
    })
    .then((result) => {
        console.log('\n=================MUTATE')
        console.log(result)

        client
            .query({
                query: postsQuery,
            })
            .then((result) => {
                console.log('\n=================QUERY')
                console.log(result.data)
            })
    })

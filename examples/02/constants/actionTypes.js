// Types should typically be defined as string constants.

// You don't have to define action type constants in a separate file,
// or even to define them at all.For a small project,
// it might be easier to just use string literals for action types.
// However, there are some benefits to explicitly declaring constants
// in larger codebases

export const ADD_BOOK = 'ADD_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const DESTROY_BOOK = 'DESTROY_BOOK'

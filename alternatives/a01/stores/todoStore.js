import { decorate, observable, action } from 'mobx'

class TodoStore {
    constructor() {
        this.data = []
    }

    fetchData() {
        this.data = [{ title: 'first', done: true }, { title: 'two', done: false }, { title: 'three', done: false }]
    }
}
decorate(TodoStore, {
    data: observable,
    fetchData: action.bound,
})

export default TodoStore

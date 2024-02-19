enum ToDoItemStatus {
    DONE = "done",
    INPROGRESS = "in-progress",
    TODO = "todo"
}

interface ToDoItem {
    id: number
    title: string
    status: ToDoItemStatus
    completedOn?: Date
}

const todoItems: ToDoItem[] = [
    { id: 1, title: "Learn HTML", status: ToDoItemStatus.DONE, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: ToDoItemStatus.INPROGRESS },
    { id: 3, title: "Write the best app in the world", status: ToDoItemStatus.TODO },
]

function addTodoItem(todo: string): ToDoItem {
    const id = getNextId(todoItems)

    const newTodo: ToDoItem = {
        id,
        title: todo,
        status: ToDoItemStatus.TODO,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends { id: number }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))

import TodoItem from '@/components/TodoItem';

const TodoList = ({todosProps}) =>{ //accessing the todoProps prop in the parameter
    return (
        <ul>
            {todosProps.map((todo) =>(
                <TodoItem key={todo.id} itemProp={todo} />
            ))}
        </ul>
    )
}

export default TodoList
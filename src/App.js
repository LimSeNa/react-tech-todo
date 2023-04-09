import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useCallback, useRef, useState} from "react";

const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트 세미나 준비하기',
            checked: true,
        },
        {
            id: 2,
            text: '자바스크립트 세미나 준비하기',
            checked: false,
        },
        {
            id: 3,
            text: '정처기 실기 시험 준비하기',
            checked: false,
        },
    ]);

    // 고윳값을 사용될 id는 ref를 사용하여 변수에 담기
    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,),);
        },
        [todos],
    );

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
};

export default App;
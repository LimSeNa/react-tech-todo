import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useState} from "react";

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

    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
};

export default App;
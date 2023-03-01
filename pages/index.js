import AddTodo from "../components/AddTodo";
import { Authenticate } from "../components/Auth";
import TodoItem from "../components/TodoItem";

export default function Home() {
  return (
    <div>
      <AddTodo />
      <Authenticate />
      <TodoItem />
    </div>
  );
}

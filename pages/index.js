import AddTodo from "../components/AddTodo";
import { Authenticate } from "../components/Auth";

export default function Home() {
  return (
    <div className="">
      <AddTodo />
      <Authenticate />
    </div>
  );
}

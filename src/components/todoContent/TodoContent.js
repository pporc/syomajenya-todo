import { TodoItem } from './TodoItem';
import './todoContent.scss';

export const TodoContent = () => (
  <div className="todoList">
    <ul>
      <TodoItem task="Pell potatoes" />
      <TodoItem task="Walk the dog" />
      <TodoItem task="Feed the cat" />
      <TodoItem task="Help sister with lessons" />
      <TodoItem task="Write a paper" />
      <TodoItem task="Read the article" />
    </ul>
    <div className="button -green center">Add new task</div>
  </div>
);

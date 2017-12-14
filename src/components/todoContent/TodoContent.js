import { TodoItem } from './TodoItem';
import './todoContent.scss';

const tasks = [
  'Pell potatoes',
  'Walk the dog',
  'Feed the cat',
  'Help sister with lessons',
  'Write a paper',
  'Read the article'
];

export const TodoContent = () => (
  <div className="todoList">
    <ul>
      {
        tasks.map((task, index) => <TodoItem key={index} task={task} />)
      }
    </ul>
    <div className="button -green center">Add new task</div>
  </div>
);

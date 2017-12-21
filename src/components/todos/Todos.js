export class Todos extends React.Component {
  constructor(prop) {
    super(prop);
    this.originTodos = [];
    this.state = { todos: this.originTodos };
  }

  loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        this.originTodos = todos;
        this.setState({ todos: todos })
      });
  }

  componentDidMount = () => {
    this.loadData();
  };

  filterTodos = (e) => {
    if (e.target.value.length > 1) {
      this.setState({
        todos:  this.originTodos.filter(value => value.title.indexOf(e.target.value) !== -1)
      });
    } else {
      this.setState({ todos: this.originTodos });
    }
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.filterTodos}
        />
        <ul>
          {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      </div>
    );
  }
}

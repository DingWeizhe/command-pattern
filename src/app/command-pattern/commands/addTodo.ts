import { Todo } from "../todo";
import { TodoList } from "../todoList";
import { Command } from "../command";

export class AddTodoCommand extends Command {
  constructor(public todoList: TodoList, public todo: Todo) {
    super();
  }

  do() {
    this.todoList.list.push(this.todo);
  }

  undo() {
    let idx = this.todoList.list.indexOf(this.todo);
    this.todoList.list.splice(idx, 1);
  }
}

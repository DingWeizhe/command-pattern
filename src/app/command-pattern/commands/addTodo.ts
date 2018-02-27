// import { Todo } from "../todo";
// import { TodoList } from "../todoList";
import { Command } from "../command";

export class AddTodoCommand extends Command {
  constructor(public list: string[], public todo: string) {
    super();
  }

  do() {
    this.list.push(this.todo);
  }

  undo() {
    let idx = this.list.indexOf(this.todo);
    this.list.splice(idx, 1);
  }
}

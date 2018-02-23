import { Todo } from "../todo";
import { TodoList } from "../todoList";
import { Command } from "../command";

export class RemoveTodoCommand extends Command {
  public idx = 0;
  constructor(public todoList: TodoList, public todo: Todo) {
    super();
  }

  do() {
    this.idx = this.todoList.list.indexOf(this.todo);
    this.todoList.list.splice(this.idx, 1);
  }

  undo() {
    this.todoList.list.splice(this.idx, 0, this.todo);
  }
}

import { Todo } from "../todo";
import { TodoList } from "../todoList";
import { Command } from "../command";

export class RenameTodoCommand extends Command {
  public oldName: string;
  constructor(public todo: Todo, public newName: string) {
    super();
    this.oldName = todo.name;
  }

  do() {
    this.todo.name = this.newName;
  }

  undo() {
    this.todo.name = this.oldName;
  }
}

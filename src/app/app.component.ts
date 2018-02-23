import { Component } from "@angular/core";
import { TodoList } from "./command-pattern/todoList";
import { Invoker } from "./command-pattern/invoker";
import { Todo } from "./command-pattern/todo";
import { AddTodoCommand } from "./command-pattern/commands/addTodo";
import { RemoveTodoCommand } from "./command-pattern/commands/removeTodo";
import { RenameTodoCommand } from "./command-pattern/commands/renameTodo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  list = new TodoList();
  invoker = Invoker.getInstance();

  add() {
    let name = prompt();
    this.invoker.do(new AddTodoCommand(this.list, new Todo(name)));
  }

  remove(todo: Todo) {
    this.invoker.do(new RemoveTodoCommand(this.list, todo));
  }

  rename(todo: Todo) {
    let name = prompt();
    this.invoker.do(new RenameTodoCommand(todo, name));
  }

  redo() {
    this.invoker.redo();
  }

  undo() {
    this.invoker.undo();
  }
}

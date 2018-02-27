import { Component } from "@angular/core";
import { Invoker } from "./command-pattern/invoker";
import { AddTodoCommand } from "./command-pattern/commands/addTodo";
import { RemoveTodoCommand } from "./command-pattern/commands/removeTodo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  list: string[] = [];

  public constructor(public invoker: Invoker) {}

  add() {
    let name = prompt();
    this.invoker.do(new AddTodoCommand(this.list, name));
  }

  remove(todo: string) {
    this.invoker.do(new RemoveTodoCommand(this.list, todo));
  }

  undo() {
    this.invoker.undo();
  }
}

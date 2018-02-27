import { Command } from "./command";

export class Invoker {
  private undoStack: Command[] = [];

  do(command: Command) {
    command.do();
    this.undoStack.push(command);
  }

  undo() {
    const command = this.undoStack.pop();
    if (command === undefined) return;
    command.undo();
  }
}

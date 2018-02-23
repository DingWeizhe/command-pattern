import { Command } from "./command";

export class Invoker {
  private redoStack: Command[] = [];
  private undoStack: Command[] = [];

  private constructor() {}

  static instance;
  static getInstance(): Invoker {
    if (!Invoker.instance) {
      Invoker.instance = new Invoker();
    }
    return Invoker.instance;
  }

  do(command: Command) {
    command.do();
    this.undoStack.push(command);
    this.redoStack = [];
  }

  redo() {
    const command = this.redoStack.pop();
    if (command === undefined) return;
    this.undoStack.push(command);
    command.do();
  }

  undo() {
    const command = this.undoStack.pop();
    if (command === undefined) return;
    command.undo();
    this.redoStack.push(command);
  }
}

import { Command } from "../command";

export class RemoveTodoCommand extends Command {
  public idx = 0;
  constructor(public list: string[], public todo: string) {
    super();
  }

  do() {
    this.idx = this.list.indexOf(this.todo);
    this.list.splice(this.idx, 1);
  }

  undo() {
    this.list.splice(this.idx, 0, this.todo);
  }
}

export class Task {
  readonly listId: number;
  readonly id: number;
  name: string;

  constructor(listId: number, id: number, name: string) {
    this.listId = listId;
    this.id = id;
    this.name = name;
  }
}

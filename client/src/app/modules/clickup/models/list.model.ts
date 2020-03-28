export class List {
  folderId: number;
  id: number;
  name: string;
  taskCount: number;

  static from(data: any): List {
    const list = new List();

    list.folderId = data.folder.id;
    list.id = data.id;
    list.name = data.name;
    list.taskCount = data.task_count;

    // TODO: Status
    console.log(data);

    return list;
  }
}

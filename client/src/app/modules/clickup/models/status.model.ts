export class Status {
  title: string;
  type: string;
  color: string;
  order: number;

  constructor(init: object = {}) {
    Object.assign(this, init);
  }

  static from(data: any): Status {
    // TODO:

    const status = new Status();

    if (data == null) {
      status.color = '#c3c3c3';
      return status;
    }

    status.title = data.status;
    status.type = data.type;
    status.color = data.color;
    status.order = data.orderindex;

    return status;
  }
}

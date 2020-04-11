export class Context {
  isPlaying: boolean;
  item: {
    album: any;
    name: string;
  };

  constructor(context: IContext) {
    this.isPlaying = context.is_playing;
    this.item = {
      album: context.item.album,
      name: context.item.name,
    }
  }
}

export interface IContext {
  is_playing: boolean;
  item: {
    album: any,
    name: string;
  }
}

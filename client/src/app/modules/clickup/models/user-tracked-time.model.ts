export class UserTrackedTime {
  intervals: any[] = [];

  static from(data: any): UserTrackedTime {
    if (!data) {
      return null;
    }

    const userTrackedTime = new UserTrackedTime();

    return userTrackedTime;
  }
}

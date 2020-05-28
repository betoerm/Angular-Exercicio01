interface IBlock<T> {
  name: string;
  add(blockType: T): string;
  remove(blockType: T): string;
}

type User = {
  name: string;
  email: string;
};

interface IAdmin {
  inviteUser(user: User): void;
  removeUser(user: User): void;
}

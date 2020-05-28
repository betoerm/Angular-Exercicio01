export function User(name: string, email: string) {
  return function(classFn: Function) {
    classFn.prototype.name = name;
    classFn.prototype.email = email;
  };
}

@User("name", "email")
export class Guest implements IAdmin {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  inviteUser() {
    return "Invite user";
  }

  removeUser() {
    return "Remove user";
  }
}

export class List<T> implements IBlock<T> {
  name: string;
  item: string;

  constructor(name: string, item: string) {
    this.name = name;
    this.item = item;
  }

  add() {
    return "Adicionando lista: " + this.name;
  }

  remove() {
    return "Removendo lista: " + this.name;
  }
}

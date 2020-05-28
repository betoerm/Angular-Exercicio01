export class Block<T> implements IBlock<T> {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  add(blockType: T) {
    return "Bloco adicionado.";
  }
  remove(blockType: T) {
    return "Bloco removido.";
  }
}

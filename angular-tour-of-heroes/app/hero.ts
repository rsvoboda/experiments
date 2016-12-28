export class Hero {
  id: number;
  name: string;

  public toString = () : string => {
        return `Hero (id: ${this.id}, name: ${this.name})`;
    }
}

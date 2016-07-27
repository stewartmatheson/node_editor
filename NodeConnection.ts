import { Node } from "./Node";

export class NodeConnection {

  private a: Node;
  private b: Node;

  constructor (a: Node, b: Node) {
    this.a = a; this.b = b;
  }

  public draw (canvas: CanvasRenderingContext2D): void {
    canvas.moveTo(0, 0);
    canvas.lineTo(200, 100);
    canvas.stroke();
  }
}

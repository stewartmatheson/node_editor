import { Node } from "./Node";

export class NodeLayer {

  private nodeContainer: HTMLDivElement;

  constructor (rootContainer: HTMLDivElement) {
    this.nodeContainer = <HTMLDivElement>document.createElement("div");
    this.nodeContainer.className = "nodeContainer";
  }

  appendTo(rootElement: HTMLDivElement): void {
    rootElement.appendChild(this.getElement());
  }

  getElement(): HTMLDivElement {
    return this.nodeContainer;
  }
}

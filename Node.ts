import codemirror = require("codemirror");
import { NodeScope } from "./NodeScope.ts";
import { NodeLayer } from "./NodeLayer.ts";

// This class not only wrangles the DOM it also performs the heavy lifting
// of the scope analysis. This should really be split in to two classes

export interface Vector {
  x: Number;
  y: Number;
}

export class Node {

  private editor: codemirror.Editor;
  private container: HTMLDivElement;
  private position: Vector;
  private isError: boolean;

  appendTo (nodeLayer: NodeLayer) {
    const textArea: HTMLTextAreaElement =
      <HTMLTextAreaElement>document.createElement("textArea");
    this.container = <HTMLDivElement>document.createElement("div");
    this.container.appendChild(textArea);

    // I would prefer nodes to not know what node layer they have
    // been appended to however it looks like codemirror wants
    // to be initialized after it's parents have been appended
    // to the DOM.
    nodeLayer.getElement().appendChild(this.container);

    // I'm sure there is a more direct way of doing this.
    this.editor = codemirror.fromTextArea(textArea, { lineNumbers : true });

    // The most importent event here is the change
    this.editor.on("change", this.onEditorChange.bind(this));
    this.editor.focus();
  }

  private createNodeHeader(): HTMLDivElement {
    const titleContainer: HTMLDivElement =
      <HTMLDivElement>document.createElement("div");
    titleContainer.innerHTML = "Node Title";
    titleContainer.className = "title";
    return titleContainer;
  }

  // This should come out in to it's own class one day
  private onEditorChange () {
    try {
      const ns: NodeScope = new NodeScope(this.editor.doc.getValue());
      ns.getPromiseLocations();
    } catch (e) {
      console.log(e);
      this.isError = true;
      return;
    }
    this.isError = false;
  }

}

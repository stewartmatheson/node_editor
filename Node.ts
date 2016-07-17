import codemirror = require("codemirror");
import esprima = require("esprima");
import escope = require("escope");
import { NodeScope } from "./NodeScope.ts";

// This class not only wrangles the DOM it also performs the heavy lifting
// of the scope analysis. This should really be split in to two classes
export class Node {

  private editor: codemirror.Editor;
  private container: HTMLDivElement;
  private state: Object;

  // TODO : This is too big. I Want to spint this out in to smaller methods
  constructor () {

    const nodeContainer: HTMLDivElement =
      <HTMLDivElement>document.createElement("div");
    nodeContainer.className = "node";

    const textArea: HTMLTextAreaElement =
      <HTMLTextAreaElement>document.createElement("textArea");

    nodeContainer.appendChild(this.createNodeHeader());
    nodeContainer.appendChild(textArea);

    const appication: HTMLDivElement =
      <HTMLDivElement>document.getElementById("app");
    appication.appendChild(nodeContainer);

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

  private onEditorChange () {
    try {
      const ns: NodeScope = new NodeScope(this.editor.doc.getValue())
      ns.getPromiseLocations();
    } catch (e) {
      this.update({ error : true });
      return;
    }
    this.update({ error : true });
  }

  // TODO : Think about the following
  // Not sure if I want to manage state in this way. Even if I did
  // it's unlinkey this class (which to this point is mainly presentational)
  // would be the right place to do it. I'm going to do it here for now
  // because I could not be bothered to figure out the correct abstraction
  private update(state: Object) {
    this.state = state;
  }
}

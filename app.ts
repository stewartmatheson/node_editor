import codemirror = require("codemirror");
import esprima = require("esprima");
import escope = require("escope");

require("./node_modules/codemirror/lib/codemirror.css");
require("./default.css");

function createNodeHeader(): HTMLDivElement {
  const titleContainer: HTMLDivElement =
    <HTMLDivElement>document.createElement("div");
  titleContainer.innerHTML = "Node Title";
  titleContainer.className = "title";
  return titleContainer;
}

function createTextNode(): void {
  const appication: HTMLDivElement =
    <HTMLDivElement>document.getElementById("app");

  const nodeContainer: HTMLDivElement =
    <HTMLDivElement>document.createElement("div");
  nodeContainer.className = "node";

  const textArea: HTMLTextAreaElement =
    <HTMLTextAreaElement>document.createElement("textArea");

  nodeContainer.appendChild(createNodeHeader());
  nodeContainer.appendChild(textArea);
  appication.appendChild(nodeContainer);

  // I'm sure there is a more direct way of doing this.
  const editor: codemirror.Editor =
    codemirror.fromTextArea(textArea, { lineNumbers : true });

  editor.on("change", () => {
    const ast = esprima.parse(editor.doc.getValue());
    console.log(escope.analyze(ast));
  });
}

window.onload = () => {
  createTextNode();
  createTextNode();
  createTextNode();
  createTextNode();
};

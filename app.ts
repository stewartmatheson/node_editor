import { NodeScope } from "./NodeScope";
import { Node } from "./Node.ts";
import { NodeLayer } from "./NodeLayer.ts";
import { NodeConnection } from "./NodeConnection.ts";

require("./node_modules/codemirror/lib/codemirror.css");
require("./default.css");

class NodeConnectionLayer {
  constructor () {
  }
}

// Let's create our node
window.onload = () => {
  // First we create a plain old div
  const rootContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("app");

  // The first layer of the application is the node layer. This will
  // construct and update the nodes of the application in the DOM
  // Here we pass the constructor our root container.
  const nodeLayer: NodeLayer = new NodeLayer(rootContainer);
  // Append the node layer to the appication
  nodeLayer.appendTo(rootContainer);

  // For now lets create and append two nodes.
  const firstNode: Node = new Node();
  const secondNode: Node = new Node();

  // I would prefer this line to be nodeLayer.append(firstNode) however
  // there seem to be issues around the way code mirror binds to the DOM.
  firstNode.appendTo(nodeLayer);
  secondNode.appendTo(nodeLayer);

  // Let's create a node
  const nodeConnectionLayer: NodeConnectionLayer = new NodeConnectionLayer();
  const nodeConnection: NodeConnection = new NodeConnection(firstNode, secondNode);
};

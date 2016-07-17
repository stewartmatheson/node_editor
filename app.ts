import codemirror = require("codemirror");
import esprima = require("esprima");
import escope = require("escope");
import { NodeScope } from "./NodeScope.ts";
import { Node } from "./Node.ts";

require("./node_modules/codemirror/lib/codemirror.css");
require("./default.css");

// Let's create our node
window.onload = () => {
  const n: Node = new Node();
};

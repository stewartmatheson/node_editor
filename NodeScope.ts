import * as escope from "escope";
import { SourceLocation } from "./SourceLocation";

// TODO make consistant with other imports
import esprima = require("esprima");

export class NodeScope {
  scopeManager: escope.ScopeManager;

  constructor (source: string) {
    const ast: ESTree.Program = esprima.parse(source);
    console.log(ast);
    this.scopeManager = escope.analyze(ast);
  }

  // Returns all the souce locations for promises across all scopes in the node
  getPromiseLocations (): Array<SourceLocation> {
    this.scopeManager.scopes.forEach((currentScope: escope.Scope) => this.findPromiseInScope(currentScope));
    return [
      { line : 1, col : 3 }
    ];
  }

  findPromiseInScope (currentScope: escope.Scope): void {
    const isPromiseFlags = currentScope
      .references
      .map((r: escope.Reference) => this.isReferenceAPromise(r));
    //console.log(isPromiseFlags);
  }

  isReferenceAPromise (reference: escope.Reference) {
    //console.log(reference);
    return reference.identifier.name === "Promise";
  }
};

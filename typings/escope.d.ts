declare module "escope" {

  interface Identifer {
    name: string;
    type: string;
  }

  interface Reference {
    identifier: Identifer;
  }

  interface Scope {
    references: Array<Reference>;
  }

  interface ScopeManager {
    scopes: Array<Scope>;
  }

  function analyze(ast: ESTree.Program): ScopeManager;
}

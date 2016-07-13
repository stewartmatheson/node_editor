declare module "codemirror" {

  interface Options {
    lineNumbers: boolean;
  }

  interface Document {
    getValue(): string;
  }

  interface Editor {
    on(eventName: string, callback: () => void): void;
    value(): string;
    doc: Document;
  }

  function fromTextArea(element: HTMLTextAreaElement, options: Options): Editor
}

declare function require(path: String): void

# The javascript Node Editor

##The Problem
Asynchronous code is hard to write. Its code that implements a call back that returns a promise that returns a call back. It’s hard to read and it’s even harder to reason about. There is a disconnect occurring between the text that represents our source code and the way control flow passes through a program. We need to change the way we express our programs in source code to align with runtime execution. This is not a language design issue, nor is it an issue of abstractions. This is an issue with the imperative nature of text. Like programming languages our code editors are largely based on text which is an imperative expression. Consider the following list of layers that go in to authoring a program.

 * Program Logic (Business Rules, Data Structures)
 * Programming Language (Classes, Functions, Source Code)
 * Text (Line Numbers)
 * Files (Names, Encodings)

We write out our program line by line for a compiler or runtime to read line by line. This is our program logic. Our code editors and text based languages work great in this situation as they deal with line numbers. However having a program execute line by line is rare. It’s common to write code that not only executes in an asynchronously but might also execute at the same time as other parts of our program. This moves us away from the imperative programming execution model and our text file source code is no longer analogous. While there have been efforts to resolve this issue at a programming language level few have been made at a text level.

## A new kind of programming environment
While the nature of expressing source code though text will most likely not change any time soon the way we consider this text relative to other text in our source code can. I propose a new type of editor based on nodes rather than line progression. Think of a set of boxes wired up with each other in the same way you might draw out UML with a tool like visio. Instead of putting labels on our nodes we write source code in them. Interconnected nodes better represent the control flow of an asynchronous JavaScript program. This programming environment can still support the rendering of source code that both node.js and the browser can understand. (I’m imagining a transcompile step on save.) Visually the human brain can follow a set of nodes more intuitively than scanning down a disparate set of line numbers.
With the shift in paradigm that a node editor represents it becomes vital to consider how we reference our code. As we are no longer addressing text in files line numbers and filenames are no longer relevant. Instead I propose two new dimensions for referring to parts of our programs. These are nodes and layers. A node represents a block of code. This block of code could represent a call back function a future object or perhaps even a promise. A layer represents where that node executes in relation to the rest of the program. While nodes maintain their own individual scope layers can be thought of a way to orchestrate sets of nodes. Layers allow the grouping of nodes with abstractions that are not possible using conventional source code. We can now at a glance evaluate what call-back created our current node while understanding its relationship with the wider program relative to its execution.  
---
layout: readme
title: Molecule Laws — this.gui
---
# Molecule Laws

This document defines the architectural meaning of a molecule in this.GUI.

## Definition

A molecule is a declarative law registered in `GuiRegistry`: it receives a
small semantic spec, applies an explicit policy, and deterministically produces
or renders a tree of GuiNodes.

A molecule learns when the system gains better registered laws, policies,
constraints, and tests. It must not improvise silently at runtime.

## Kinds

`resolver`
: A pure law. It receives data and policy, then returns GuiNodes. It has no
I/O, subscriptions, timers, or browser state.

`shell`
: A stateful boundary around one or more resolvers. It may fetch, subscribe,
handle loading/error states, or read runtime context. The shape law inside the
shell should still be pure and testable.

`component`
: A React component used directly when the behavior is primarily interactive
or physical. Components can still expose semantic props, but they are not the
preferred place for shape-learning rules.

## Registry

For now all laws live in `GuiRegistry`. Molecules should use:

- `kind: "molecule"`
- `group: "Molecules/<Domain>"`
- `moleculeKind: "resolver" | "shell" | "component"`

This keeps atoms, layouts, and molecules discoverable through one registry
without hiding the kind of law being registered.

## MarkdownDocument

`MarkdownDocument` is the first document molecule following this split:

```txt
MarkdownDocument shell
  fetch/loading/error
  -> markdownToGuiNodes(source, policy)
  -> GuiNode tree
  -> GUI renderer
```

The public contract is GUI-owned. It must not expose parser or renderer
implementation details such as `@uiw`, `remark`, or `unified`.

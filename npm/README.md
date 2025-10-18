# This.GUI
## 🚀 Installation
Install the library via npm:

```bash
npm install this.gui
```

or with yarn:

```bash
yarn add this.gui
```

---

## ⚙️ Initialization
To initialize **This.GUI** in your project, wrap your application with the `GuiProvider` and optionally set a theme:

```tsx
import { GuiProvider } from 'this.gui';
import { Layout } from 'this.gui';

function App() {
  return (
    <GuiProvider theme="dark">
      <Layout>
        <h1>Hello from This.GUI</h1>
      </Layout>
    </GuiProvider>
  );
}

export default App;
```

This structure sets up the reactive theme system, context, and global styles needed by all This.GUI components.

---

## 🧩 Using Components
This.GUI provides a rich collection of atomic and composite components ready to use:

```tsx
import { Button, Card, Text } from 'this.gui';

export function Example() {
  return (
    <Card>
      <Text size="lg" weight="bold">Welcome!</Text>
      <Button onClick={() => alert('Clicked!')}>Click me</Button>
    </Card>
  );
}
```

All components are theme-aware and automatically inherit styles and tokens from the `GuiProvider`.

---

## 🎨 Customizing Themes
You can override tokens and themes by passing a `theme` object or token map to `GuiProvider`:

```tsx
import { GuiProvider, tokens } from 'this.gui';

const myTheme = {
  ...tokens,
  color: {
    ...tokens.color,
    primary: '#FF006E'
  }
};

function App() {
  return (
    <GuiProvider theme={myTheme}>
      <MyInterface />
    </GuiProvider>
  );
}
```

---

## 🧠 Declarative Rendering
This.GUI allows components to be rendered declaratively using JSON structures:

```tsx
import { RenderGUI } from 'this.gui';

const layout = {
  type: 'Card',
  props: { padding: 'md' },
  children: [
    { type: 'Text', props: { content: 'Dynamic content' } },
    { type: 'Button', props: { label: 'Continue' } }
  ]
};

<RenderGUI schema={layout} />;
```

---

## 🧰 CLI Integration
If you have the CLI installed (`npx thisgui`), you can quickly scaffold a demo project:

```bash
npx thisgui my-app
cd my-app
npm run storybook
```

This will start a local Storybook environment with your components ready to explore.

---

## 🪐 License
MIT © [Neuroverse](https://neurons.me)

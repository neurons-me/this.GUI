import { Meta, Canvas } from '@storybook/addon-docs/blocks';
import * as HomeStories from './ GUI.stories';
import * as ThemeViewerStories from './Theme/ThemeViewer.stories';
import * as PaletteStories from './Theme/Palette.stories';
import * as TypographyStories from './Theme/Typography.stories';
import * as RouterStories from './RouterSemantics.stories';

<Meta title="Getting Started" />
<Canvas of={HomeStories.Default} />



---

## Router Semantics

<Canvas of={RouterStories.QueryExpressions} />

---

## Runtime

If you want the ultra-minimal **window.GUI** bootstrap (for plain HTML), keep it in the example file:
- `/examples/bootstrap.html`
(We keep docs here component-first; the runtime example lives as runnable HTML.)

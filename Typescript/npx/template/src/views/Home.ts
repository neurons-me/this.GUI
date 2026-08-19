import type { GuiSpecNode } from 'this.gui/runtime';

const TITLE_PATH = 'me/apps.__APP_ID__.manifest.title';

export default function createHomeSpec(): GuiSpecNode {
  return {
    type: 'Hero',
    props: { height: '100vh', mode: 'left', padding: { xs: 3, md: 8 }, contentMaxWidth: 680 },
    provenance: {
      source: 'views/Home.ts',
      note: 'Template landing view.',
    },
    children: {
      type: 'Stack',
      props: { spacing: 2, alignItems: 'flex-start' },
      children: [
        {
          type: 'Typography',
          props: { variant: 'h1', children: { read: TITLE_PATH } },
          provenance: {
            source: 'views/Home.ts#title',
            semanticPath: TITLE_PATH,
            note: 'App title, read live from the kernel manifest written by declareApp().',
          },
        },
        {
          type: 'Typography',
          props: { variant: 'h5', children: 'Powered by this.gui' },
          provenance: {
            source: 'views/Home.ts#subtitle',
            note: 'Static template copy — no kernel binding.',
          },
        },
        {
          type: 'Button',
          props: { variant: 'contained', size: 'large', children: 'Get started' },
          provenance: {
            source: 'views/Home.ts#cta',
            note: 'Template placeholder CTA — wire an onClick: { write: ... } action here.',
          },
        },
      ],
    },
  };
}

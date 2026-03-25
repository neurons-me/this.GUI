import type { Meta, StoryObj } from '@storybook/react';
import DOMModule from '../../DOM/DOM.module';
import GUIModule from '../../GUI/GUI.module';
import ModulesGrid from './ModulesGrid';

const meta: Meta<typeof ModulesGrid> = {
  title: 'All.This/Primitives/ModulesGrid',
  component: ModulesGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ModulesGrid>;

export const Default: Story = {
  args: {
    children: (
      <>
        <GUIModule
          source="local"
          state="on"
          assetUrl="../../this/GUI/npm/dist/this.gui.umd.js"
          version="1.4.89"
        />
        <DOMModule
          source="local"
          state="on"
          assetUrl="./npm/dist/dom.umd.js"
          version="1.0.98"
          fetchUrl="https://example.com"
          htmlValue={`<!doctype html><html><body><h1>Hello this.DOM</h1></body></html>`}
          jsonValue={`{
  "title": null,
  "headings": ["Hello this.DOM"]
}`}
          statusMessage="Ready."
        />
      </>
    ),
  },
};

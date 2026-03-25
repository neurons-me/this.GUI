import type { Meta, StoryObj } from '@storybook/react';
import DOMModule from '../../DOM/DOM.module';
import GUIModule from '../../GUI/GUI.module';
import MeModule from '../../me/me.module';
import ModulesList from './ModulesList';

const meta: Meta<typeof ModulesList> = {
  title: 'All.This/Primitives/ModulesList',
  component: ModulesList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ModulesList>;

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
        <MeModule
          source="cdn"
          state="on"
          assetUrl="https://cdn.jsdelivr.net/npm/this.me@3.4.7/dist/me.umd.js"
          version="3.4.7"
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

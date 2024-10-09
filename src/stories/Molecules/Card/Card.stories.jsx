//this.GUI/src/stories/Molecules/Card/Card.stories.jsx
import React from 'react';
import { Card } from './Card';

export default {
  title: 'Molecules/Display/Card',
  component: Card,
};

export const SolidCard = (args) => (
  <Card {...args}>
    <h2>Solid Card Example</h2>
    <p>This is a solid card.</p>
  </Card>
);

SolidCard.args = {
  variant: 'solid',
  color: 'primary-color',
  textColor: 'secondary-color',
};

export const OutlinedCard = (args) => (
  <Card {...args}>
    <h2>Outlined Card Example</h2>
    <p>This is an outlined card.</p>
  </Card>
);

OutlinedCard.args = {
  variant: 'outline',
  color: 'primary-color',
  textColor: 'secondary-color',
};
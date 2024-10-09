```js
//this.GUI/src/stories/Atoms/index.js
// Import all components directly
import { Heading } from './Heading/Heading';
import { Paragraph } from './Paragraph/Paragraph';
import { Label } from './Label/Label';
import { Caption } from './Caption/Caption';
import { Container } from './Container/Container';
import { Button } from './Button/Button';
import { Link } from './Link/Link';
import { Icon } from './Icon/Icon';
import { Checkbox } from './Checkbox/Checkbox';
import { RadioButton } from './RadioButton/RadioButton';
import { Toggle } from './Toggle/Toggle';
import { TextInput } from './TextInput/TextInput';
import { TextArea } from './TextArea/TextArea';
import { Select } from './Select/Select';
import { Slider } from './Slider/Slider';
import { Range } from './Range/Range';
import { Image } from './Image/Image';
import { Video } from './Video/Video';
import { Audio } from './Audio/Audio';
import { Divider } from './Divider/Divider';
import { Spacer } from './Spacer/Spacer';
import { Tooltip } from './Tooltip/Tooltip';
import { Badge } from './Badge/Badge';
import { Tag } from './Tag/Tag';
import { Loader } from './Loader/Loader';
import { Spinner } from './Spinner/Spinner';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { Alert } from './Alert/Alert';
import { Snackbar } from './Snackbar/Snackbar';
import { Logo } from './Logo/Logo'; 
import { Section } from './Section/Section';
import { Grid } from './Grid/Grid';

// Flattened export of all components
const Atoms = {
  Heading,
  Paragraph,
  Label,
  Caption,
  Container,
  Button,
  Link,
  Icon,
  Checkbox,
  RadioButton,
  Toggle,
  TextInput,
  TextArea,
  Select,
  Slider,
  Range,
  Image,
  Video,
  Audio,
  Divider,
  Spacer,
  Tooltip,
  Badge,
  Tag,
  Loader,
  Logo,
  Spinner,
  ProgressBar,
  Alert,
  Snackbar,
  Section,
  Grid
};

export default Atoms;
```

```js
const Atomic = {
    "Atomic": {
    "Text": [
      { name: "Heading", paths: { css: "./Heading/Heading.css", globalCss: "styles/global.css", jsx: "./Heading/Heading.jsx", stories: "./Heading/Heading.stories.jsx" }},
      { name: "Paragraph", paths: { css: "./Paragraph/Paragraph.css", globalCss: "styles/global.css", jsx: "./Paragraph/Paragraph.jsx", stories: "./Paragraph/Paragraph.stories.jsx" }},
      { name: "Label", paths: { css: "./Label/Label.css", globalCss: "styles/global.css", jsx: "./Label/Label.jsx", stories: "./Label/Label.stories.jsx" }},
      { name: "Caption", paths: { css: "./Caption/Caption.css", globalCss: "styles/global.css", jsx: "./Caption/Caption.jsx", stories: "./Caption/Caption.stories.jsx" }},
    ],
    "Layout": [
      { name: "Container", paths: { css: "./Container/Container.css", globalCss: "styles/global.css", jsx: "./Container/Container.jsx", stories: "./Container/Container.stories.jsx" }},
      { name: "Grid", paths: { css: "./Grid/Grid.css", globalCss: "styles/Grid.css", jsx: "./Grid/Grid.jsx", stories: "./Grid/Grid.stories.jsx" }},
      { name: "Section", paths: { css: "./Section/Section.css", globalCss: "styles/Section.css", jsx: "./Section/Section.jsx", stories: "./Section/Grid.stories.jsx" }},

    ],
    "Interactive": [
      { name: "Button", paths: { css: "/Button/Button.css", globalCss: "styles/global.css", jsx: "./Button/Button.jsx", stories: "./Button/Button.stories.jsx" }},
      { name: "Link", paths: { css: "Atomic/Link/Link.css", globalCss: "styles/global.css", jsx: "./Link/Link.jsx", stories: "./Link/Link.stories.jsx" }},
      { name: "Icon", paths: { css: "/Atomic/Icon/Icon.css", globalCss: "styles/global.css", jsx: "./Icon/Icon.jsx", stories: "./Icon/Icon.stories.jsx" }},
      { name: "Checkbox", paths: { css: "./Checkbox/Checkbox.css", globalCss: "styles/global.css", jsx: "./Checkbox/Checkbox.jsx", stories: "./Checkbox/Checkbox.stories.jsx" }},
      { name: "RadioButton", paths: { css: "./RadioButton/RadioButton.css", globalCss: "styles/global.css", jsx: "./RadioButton/RadioButton.jsx", stories: "./RadioButton/RadioButton.stories.jsx" }},
      { name: "Toggle", paths: { css: "./Toggle/Toggle.css", globalCss: "styles/global.css", jsx: "./Toggle/Toggle.jsx", stories: "./Toggle/Toggle.stories.jsx" }},
      { name: "TextInput", paths: { css: "./TextInput/TextInput.css", globalCss: "styles/global.css", jsx: "./TextInput/TextInput.jsx", stories: "./TextInput/TextInput.stories.jsx" }},
      { name: "TextArea", paths: { css: "./TextArea/TextArea.css", globalCss: "styles/global.css", jsx: "./TextArea/TextArea.jsx", stories: "./TextArea/TextArea.stories.jsx" }},
      { name: "Select", paths: { css: "./Select/Select.css", globalCss: "styles/global.css", jsx: "./Select/Select.jsx", stories: "./Select/Select.stories.jsx" }},
      { name: "Slider", paths: { css: "./Slider/Slider.css", globalCss: "styles/global.css", jsx: "./Slider/Slider.jsx", stories: "./Slider/Slider.stories.jsx" }},
      { name: "RangeInput", paths: { css: "./RangeInput/RangeInput.css", globalCss: "styles/global.css", jsx: "./RangeInput/RangeInput.jsx", stories: "./RangeInput/RangeInput.stories.jsx" }},
    ],
    "Media": [
      { name: "Image", paths: { css: "./Image/Image.css", globalCss: "styles/global.css", jsx: "./Image/Image.jsx", stories: "./Image/Image.stories.jsx" }},
      { name: "Video", paths: { css: "./Video/Video.css", globalCss: "styles/global.css", jsx: "./Video/Video.jsx", stories: "./Video/Video.stories.jsx" }},
      { name: "Audio", paths: { css: "./Audio/Audio.css", globalCss: "styles/global.css", jsx: "./Audio/Audio.jsx", stories: "./Audio/Audio.stories.jsx" }},
      { name: "Icon", paths: { css: "./Icon/Icon.css", globalCss: "styles/global.css", jsx: "./Icon/Icon.jsx", stories: "./Icon/Icon.stories.jsx" }},
    ],
    "Visual": [
      { name: "Divider", paths: { css: "./Divider/Divider.css", globalCss: "styles/global.css", jsx: "./Divider/Divider.jsx", stories: "./Divider/Divider.stories.jsx" }},
      { name: "Spacer", paths: { css: "./Spacer/Spacer.css", globalCss: "styles/global.css", jsx: "./Spacer/Spacer.jsx", stories: "./Spacer/Spacer.stories.jsx" }},
      { name: "Tooltip", paths: { css: "./Tooltip/Tooltip.css", globalCss: "styles/global.css", jsx: "./Tooltip/Tooltip.jsx", stories: "./Tooltip/Tooltip.stories.jsx" }},
      { name: "Badge", paths: { css: "./Badge/Badge.css", globalCss: "styles/global.css", jsx: "./Badge/Badge.jsx", stories: "./Badge/Badge.stories.jsx" }},
      { name: "Tag", paths: { css: "./Tag/Tag.css", globalCss: "styles/global.css", jsx: "./Tag/Tag.jsx", stories: "./Tag/Tag.stories.jsx" }},
    ],
    "Feedback": [
      { name: "Loader", paths: { css: "./Loader/Loader.css", globalCss: "styles/global.css", jsx: "./Loader/Loader.jsx", stories: "./Loader/Loader.stories.jsx" }},
      { name: "Spinner", paths: { css: "./Spinner/Spinner.css", globalCss: "styles/global.css", jsx: "./Spinner/Spinner.jsx", stories: "./Spinner/Spinner.stories.jsx" }},
      { name: "ProgressBar", paths: { css: "./ProgressBar/ProgressBar.css", globalCss: "styles/global.css", jsx: "./ProgressBar/ProgressBar.jsx", stories: "./ProgressBar/ProgressBar.stories.jsx" }},
      { name: "Alert", paths: { css: "./Alert/Alert.css", globalCss: "styles/global.css", jsx: "./Alert/Alert.jsx", stories: "./Alert/Alert.stories.jsx" }},
      { name: "Snackbar", paths: { css: "./Snackbar/Snackbar.css", globalCss: "styles/global.css", jsx: "./Snackbar/Snackbar.jsx", stories: "./Snackbar/Snackbar.stories.jsx" }},
    ]
  }
}

export default Atomic;
```



# Alert Component

A versatile alert component to display important messages, warnings, or confirmations to users. Supports different variants, colors, and can be dismissible.

## Usage

Import the `Alert` component into your React file:

```jsx
import { Alert } from './Alert';
```

Use it within your JSX to display alert messages:

```jsx
<Alert color="success" variant="primary">
  This is a success alert — check it out!
</Alert>
```

## Props

| Prop        | Type                                                         | Default      | Description                                                  |
| ----------- | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| variant     | `oneOf(['primary', 'secondary'])`                            | `primary`    | Style variant of the alert. `primary` for prominent alerts, `secondary` for subtle alerts. |
| color       | `oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark'])` | `info`       | Color theme of the alert based on global CSS variables.      |
| children    | `node`                                                       | **Required** | Content inside the alert. Can include text, icons, or other elements. |
| className   | `string`                                                     | `''`         | Additional CSS classes for custom styling.                   |
| style       | `object`                                                     | `{}`         | Inline styles for custom styling.                            |
| onClose     | `function`                                                   | `undefined`  | Handler function called when the alert is dismissed.         |
| dismissible | `boolean`                                                    | `false`      | If `true`, shows a close button to allow users to dismiss the alert. |
| icon        | `node`                                                       | `undefined`  | Optional icon element to display alongside the alert content. |

## Examples

### Basic Primary Alert

```jsx
<Alert color="info" variant="primary">
  This is a primary info alert.
</Alert>
```

### Secondary Warning Alert

```jsx
<Alert color="warning" variant="secondary">
  This is a secondary warning alert.
</Alert>
```

### Dismissible Success Alert with Icon

```jsx
import { FaCheckCircle } from 'react-icons/fa';

<Alert
  color="success"
  variant="primary"
  dismissible
  onClose={() => alert('Alert dismissed!')}
  icon={<FaCheckCircle />}
>
  Your operation was successful!
</Alert>
```

### Dark Alert with Custom Styles

```jsx
<Alert
  color="dark"
  variant="secondary"
  style={{ borderRadius: '8px', padding: '20px' }}
>
  This is a dark alert with custom styles.
</Alert>
```

## Notes

- The `children` prop is required and can contain any React nodes, allowing for flexible content within the alert.
- When `dismissible` is set to `true`, ensure to provide an `onClose` handler to manage the alert's dismissal.
- Utilize the `icon` prop to include visual cues alongside the alert message.
- Combine `className` and `style` props for additional customizations beyond the predefined variants and colors.
- Ensure that the global CSS variables for colors are defined to apply the correct color themes.
- Refer to Storybook for interactive examples and detailed prop options.

```css
/* src/stories/Atoms/Alert/Alert.css */

/* Base Alert Styles */
.alert {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  margin-bottom: var(--spacing-md);
  transition: 
    background-color var(--transition-speed),
    border-color var(--transition-speed),
    color var(--transition-speed);
  
  /* Default Colors (Primary Variant) */
  background-color: var(--alert-bg-color, var(--primary-color));
  color: var(--alert-text-color, var(--text-color-inverse));
  border: 1px solid var(--alert-border-color, var(--primary-color));
  
  /* Entrance Animation */
  animation: fadeIn 0.3s ease-out;
}

/* Primary Variant */
.alert--primary {
  /* Primary Variant Colors */
  --alert-bg-color: var(--primary-color);
  --alert-text-color: var(--text-color-inverse);
  --alert-border-color: var(--primary-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--primary-color-hover);
  --alert-border-hover-color: var(--primary-color-hover);
}

.alert--primary:hover {
  background-color: var(--alert-bg-hover-color);
  border-color: var(--alert-border-hover-color);
}

/* Secondary Variant */
.alert--secondary {
  /* Secondary Variant Colors */
  --alert-bg-color: transparent;
  --alert-text-color: var(--secondary-color);
  --alert-border-color: var(--secondary-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--secondary-color-hover);
  --alert-border-hover-color: var(--secondary-color-hover);
  --alert-text-hover-color: var(--text-color-inverse);
}

.alert--secondary:hover {
  background-color: var(--alert-bg-hover-color);
  color: var(--alert-text-hover-color);
  border-color: var(--alert-border-hover-color);
}

/* Semantic Color Modifiers for Primary Variant */
.alert--primary.alert--info {
  --alert-bg-color: var(--info-color);
  --alert-border-color: var(--info-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--info-color-hover);
  --alert-border-hover-color: var(--info-color-hover);
}

.alert--primary.alert--warning {
  --alert-bg-color: var(--warning-color);
  --alert-border-color: var(--warning-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--warning-color-hover);
  --alert-border-hover-color: var(--warning-color-hover);
}

.alert--primary.alert--alert {
  --alert-bg-color: var(--alert-color);
  --alert-border-color: var(--alert-color);
  --alert-text-color: var(--text-color); /* Dark text for readability */
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--alert-color-hover);
  --alert-border-hover-color: var(--alert-color-hover);
}

.alert--primary.alert--success {
  --alert-bg-color: var(--success-color);
  --alert-border-color: var(--success-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--success-color-hover);
  --alert-border-hover-color: var(--success-color-hover);
}

.alert--primary.alert--neutral {
  --alert-bg-color: var(--neutral-color);
  --alert-border-color: var(--neutral-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--neutral-color-hover);
  --alert-border-hover-color: var(--neutral-color-hover);
}

.alert--primary.alert--dark {
  --alert-bg-color: var(--dark-color);
  --alert-border-color: var(--dark-color);
  --alert-text-color: var(--text-color-inverse); /* White text on dark background */
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--dark-color-hover);
  --alert-border-hover-color: var(--dark-color-hover);
}

/* Semantic Color Modifiers for Secondary Variant */
.alert--secondary.alert--info {
  --alert-text-color: var(--info-color);
  --alert-border-color: var(--info-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--info-color-hover);
  --alert-border-hover-color: var(--info-color-hover);
}

.alert--secondary.alert--warning {
  --alert-text-color: var(--warning-color);
  --alert-border-color: var(--warning-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--warning-color-hover);
  --alert-border-hover-color: var(--warning-color-hover);
}

.alert--secondary.alert--alert {
  --alert-text-color: var(--alert-color);
  --alert-border-color: var(--alert-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--alert-color-hover);
  --alert-border-hover-color: var(--alert-color-hover);
}

.alert--secondary.alert--success {
  --alert-text-color: var(--success-color);
  --alert-border-color: var(--success-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--success-color-hover);
  --alert-border-hover-color: var(--success-color-hover);
}

.alert--secondary.alert--neutral {
  --alert-text-color: var(--neutral-color);
  --alert-border-color: var(--neutral-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--neutral-color-hover);
  --alert-border-hover-color: var(--neutral-color-hover);
}

.alert--secondary.alert--dark {
  --alert-text-color: var(--dark-color);
  --alert-border-color: var(--dark-color);
  
  /* Hover Colors */
  --alert-bg-hover-color: var(--dark-color-hover);
  --alert-border-hover-color: var(--dark-color-hover);
}

/* Optional: Icon Styles */
.alert__icon {
  margin-right: var(--spacing-sm);
  font-size: 1.2em;
}

/* Optional: Close Button Styles */
.alert__close {
  margin-left: auto;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.2em;
}

/* Dismissible Modifier */
.alert--dismissible {
  padding-right: var(--spacing-md);
}

/* Keyframes for fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animation to alert */
.alert {
  animation: fadeIn 0.3s ease-out;
}
```

```jsx
// src/stories/Atoms/Alert/Alert.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css'; // Import the CSS styles

export const Alert = ({
  variant = 'primary', // 'primary', 'secondary'
  color, // 'info', 'warning', 'alert', 'success', 'neutral', 'dark'
  children,
  className = '',
  style = {},
  onClose, // Function to handle close action
  dismissible = false, // If true, show close button
  icon, // Optional icon element
  ...props
}) => {
  const variantClass = `alert--${variant}`;
  const colorClass = color ? `alert--${color}` : '';
  const dismissibleClass = dismissible ? 'alert--dismissible' : '';

  const combinedClassName = `alert ${variantClass} ${colorClass} ${dismissibleClass} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={style}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      {icon && <span className="alert__icon">{icon}</span>}
      <span className="alert__content">{children}</span>
      {dismissible && (
        <button
          className="alert__close"
          onClick={onClose}
          aria-label="Close Alert"
          tabIndex="0"
        >
          &times;
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  dismissible: PropTypes.bool,
  icon: PropTypes.node,
};
```

```jsx
// src/stories/Atoms/Alert/Alert.stories.jsx
import React from 'react';
import { Alert } from './Alert';
import './Alert.css'; // Import the CSS styles

export default {
  title: 'Atoms/Feedback/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      description: 'Variant of the alert.',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'alert', 'success', 'neutral', 'dark'],
      },
      description: 'Semantic color of the alert.',
      table: {
        type: { summary: `'info' | 'warning' | 'alert' | 'success' | 'neutral' | 'dark'` },
      },
    },
    children: {
      control: 'text',
      description: 'Content of the alert.',
      table: {
        type: { summary: 'node' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'If true, shows a close button to dismiss the alert.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the alert is dismissed.',
      table: {
        type: { summary: 'function' },
      },
    },
    icon: {
      control: 'none', // Typically, icons are not controlled via Storybook controls
      description: 'Optional icon to display in the alert.',
      table: {
        type: { summary: 'node' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/**
 * 
 * Shows default primary and secondary alerts without any semantic color.
 */
export const DefaultAlerts = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Alert variant="primary">Primary Default Alert</Alert>
    <Alert variant="secondary">Secondary Default Alert</Alert>
  </div>
);

/**
 * 
 * Demonstrates primary alerts with all semantic colors.
 */
export const PrimaryAlerts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Primary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert key={color} variant="primary" color={color}>
        This is a {color} primary alert.
      </Alert>
    ))}
  </div>
);

/**
 * 
 * Demonstrates secondary alerts with all semantic colors.
 */
export const SecondaryAlerts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Secondary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert key={color} variant="secondary" color={color}>
        This is a {color} secondary alert.
      </Alert>
    ))}
  </div>
);

/**
 * 
 * Demonstrates primary and secondary alerts that can be dismissed.
 */
export const DismissibleAlerts = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Dismissible Primary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert
        key={color}
        variant="primary"
        color={color}
        dismissible
        onClose={() => alert(`Closed ${color} primary alert`)}
      >
        This is a {color} primary alert that can be dismissed.
      </Alert>
    ))}

    <h3>Dismissible Secondary Alerts</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Alert
        key={color}
        variant="secondary"
        color={color}
        dismissible
        onClose={() => alert(`Closed ${color} secondary alert`)}
      >
        This is a {color} secondary alert that can be dismissed.
      </Alert>
    ))}
  </div>
);


/**
 * ### Interactive Playground
 * 
 * Allows dynamic interaction with the alert props via Storybook controls.
 */
const Template = (args) => <Alert {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  color: 'info',
  children: 'This is an interactive alert.',
  dismissible: false,
};
Playground.storyName = 'Interactive Playground';
```

----------------

# Audio Component

A customizable audio player component with play/pause controls, volume adjustment, and seek functionality.

## Usage

Import the `Audio` component into your React file:

```jsx
import { Audio } from './Audio';
```

Use it within your JSX to embed an audio player:

```jsx
<Audio src="https://www.example.com/path-to-audio-file.mp3" />
```

## Props

| Prop      | Type                         | Default          | Description                                |
| --------- | ---------------------------- | ---------------- | ------------------------------------------ |
| src       | `string`                     | **Required**     | Source URL of the audio file.              |
| autoPlay  | `boolean`                    | `false`          | Automatically play the audio on load.      |
| loop      | `boolean`                    | `false`          | Loop the audio playback continuously.      |
| muted     | `boolean`                    | `false`          | Mute the audio by default.                 |
| size      | `oneOf(['small', 'medium'])` | `medium`         | Size of the audio player.                  |
| color     | `oneOf([...])`               | `classy-color-1` | Color theme for the control icons.         |
| className | `string`                     | `''`             | Additional CSS classes for custom styling. |
| style     | `object`                     | `{}`             | Inline styles for custom styling.          |

### `color` Options

- `classy-color-1`
- `classy-color-2`
- `classy-color-3`
- `classy-color-4`
- `classy-color-5`
- `small-switch-color-1`
- `small-switch-color-2`
- `natural-color-1`
- `natural-color-2`
- `natural-color-3`
- `grey-friend-1`
- `grey-friend-2`
- `shade-1`
- `shade-2`
- `shade-3`
- `shade-4`

## Examples

### Basic Audio Player

```jsx
<Audio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
```

### Autoplay and Looping Audio

```jsx
<Audio
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  autoPlay
  loop
  color="classy-color-3"
/>
```

### Small Sized Muted Audio Player

```jsx
<Audio
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  size="small"
  muted
  color="classy-color-2"
/>
```

### Customized Audio Player with Styles

```jsx
<Audio
  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  size="medium"
  color="classy-color-1"
  style={{ border: '2px solid var(--classy-color-1)', borderRadius: '8px' }}
/>
```

### Interactive Audio Player

Use the interactive story in Storybook to dynamically adjust the `Audio` props and see real-time changes.

## Notes

- The `Audio` component utilizes [react-icons](https://react-icons.github.io/react-icons/) for control icons. Ensure you have `react-icons` installed in your project:

  ```bash
  npm install react-icons
  # or
  yarn add react-icons
  ```

- Combine props to achieve the desired appearance and functionality.

- Use the `className` and `style` props for additional customizations as needed.

- Refer to Storybook for interactive examples and detailed prop options.

```css
/* src/stories/Atoms/Audio/Audio.css */

/* Base Audio Player Styles */
.audio {
  display: flex;
  align-items: center;
  background-color: rgba(245, 245, 245, 0.3); /* Subtle grey with low opacity */
  padding: var(--spacing-sm, 8px);
  border-radius: var(--border-radius, 6px);
  gap: var(--spacing-sm, 8px);
  max-width: 300px; /* Default for medium size */
  border: 1px solid var(--border-color, #dddddd); /* Added border */
  position: relative;
  transition: background-color var(--transition-speed, 0.3s);
}

.audio:hover {
  background-color: rgba(245, 245, 245, 0.5);
}

/* Size Variants */
.audio--small {
  max-width: 200px;
}

.audio--medium {
  max-width: 300px;
}

/* Color Classes */
.audio--classy-color-1 {
  --icon-color: var(--classy-color-1);
}

.audio--classy-color-2 {
  --icon-color: var(--classy-color-2);
}

.audio--classy-color-3 {
  --icon-color: var(--classy-color-3);
}

.audio--classy-color-4 {
  --icon-color: var(--classy-color-4);
}

.audio--classy-color-5 {
  --icon-color: var(--classy-color-5);
}

.audio--small-switch-color-1 {
  --icon-color: var(--small-switch-color-1);
}

.audio--small-switch-color-2 {
  --icon-color: var(--small-switch-color-2);
}

.audio--natural-color-1 {
  --icon-color: var(--natural-color-1);
}

.audio--natural-color-2 {
  --icon-color: var(--natural-color-2);
}

.audio--natural-color-3 {
  --icon-color: var(--natural-color-3);
}

.audio--grey-friend-1 {
  --icon-color: var(--grey-friend-1);
}

.audio--grey-friend-2 {
  --icon-color: var(--grey-friend-2);
}

.audio--shade-1 {
  --icon-color: var(--shade-1);
}

.audio--shade-2 {
  --icon-color: var(--shade-2);
}

.audio--shade-3 {
  --icon-color: var(--shade-3);
}

.audio--shade-4 {
  --icon-color: var(--shade-4);
}

/* Play/Pause and Mute Buttons */
.audio__play-pause,
.audio__mute {
  background-color: rgba(128, 128, 128, 0.2); /* Slightly darker grey */
  border: none;
  border-radius: 50%;
  padding: var(--spacing-xs, 6px);
  cursor: pointer;
  transition: background-color var(--transition-speed, 0.3s);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color, #344b47); /* Default icon color */
}

.audio__play-pause:hover,
.audio__mute:hover {
  background-color: rgba(128, 128, 128, 0.4); /* Darker on hover */
}

/* Time Display and Seek Slider */
.audio__seek {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  flex: 1;
}

.audio__seek-slider {
  width: 100%;
  cursor: pointer;
  appearance: none;
  height: 4px;
  background: var(--grey-friend-2, #96b1ac);
  border-radius: 2px;
  outline: none;
  transition: background var(--transition-speed, 0.3s);
}

.audio__seek-slider::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  background: var(--icon-color, #344b47);
  border-radius: 50%;
  cursor: pointer;
  margin-top: -4px; /* Center the thumb */
  transition: background var(--transition-speed, 0.3s);
}

.audio__seek-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: var(--icon-color, #344b47);
  border-radius: 50%;
  cursor: pointer;
  transition: background var(--transition-speed, 0.3s);
}

.audio__seek-slider:hover {
  background: var(--grey-friend-1, #344b47);
}

.audio__seek-slider:hover::-webkit-slider-thumb,
.audio__seek-slider:hover::-moz-range-thumb {
  background: var(--icon-color, #344b47);
}

.audio__time {
  font-size: var(--font-size-small, 0.9em);
  color: var(--icon-color, #344b47); /* Inherit icon color */
  white-space: nowrap;
}

/* Volume Container */
.audio__volume-container {
  position: relative;
  display: flex;
  align-items: center;
}

/* Volume Slider */
.audio__volume-slider {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  cursor: pointer;
  appearance: none;
  height: 4px;
  background: var(--grey-friend-2, #96b1ac);
  border-radius: 2px;
  outline: none;
  transition: opacity var(--transition-speed, 0.3s);
  opacity: 0;
  pointer-events: none;
  z-index: 10;
}

.audio__volume-slider.visible {
  opacity: 1;
  pointer-events: auto;
}

.audio__volume-slider::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  background: var(--icon-color, #344b47);
  border-radius: 50%;
  cursor: pointer;
  transition: background var(--transition-speed, 0.3s);
}

.audio__volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background: var(--icon-color, #344b47);
  border-radius: 50%;
  cursor: pointer;
  transition: background var(--transition-speed, 0.3s);
}

.audio__volume-slider:hover {
  background: var(--grey-friend-1, #344b47);
}

.audio__volume-slider:hover::-webkit-slider-thumb,
.audio__volume-slider:hover::-moz-range-thumb {
  background: var(--icon-color, #344b47);
}

/* Show Volume Slider on Hover or When Toggled */
.audio:hover .audio__volume-slider,
.audio__volume-slider.visible {
  opacity: 1;
  pointer-events: auto;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .audio--small {
    max-width: 150px;
  }

  .audio--medium {
    max-width: 250px;
  }

  .audio {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs, 4px);
  }

  .audio__seek {
    width: 100%;
  }

  .audio__volume-slider {
    bottom: -35px;
    width: 80px;
  }
}
```

```jsx
// src/stories/Atoms/Audio/Audio.jsx
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './Audio.css';

export const Audio = ({
  src,
  autoPlay = false,
  loop = false,
  muted = false,
  size = 'medium',
  color = 'classy-color-1',
  className = '',
  style = {},
  ...props
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(muted ? 0 : 1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
      if (autoPlay) {
        audio.play().catch(() => setIsPlaying(false));
      }
    }
  }, [volume, isMuted, autoPlay]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setIsPlaying(false));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(audio.duration);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setVolume(!isMuted ? 0 : 1);
  };

  const handleSeekChange = (e) => {
    const seekTime = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${paddedSeconds}`;
  };

  // Combined handler to toggle mute and show volume slider
  const handleMuteAndShowSlider = (e) => {
    toggleMute();
    setShowVolumeSlider((prev) => !prev);
    e.stopPropagation();
  };

  // Close volume slider when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.audio__volume-container')) {
      setShowVolumeSlider(false);
    }
  };

  useEffect(() => {
    if (showVolumeSlider) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showVolumeSlider]);

  const variantClass = `audio--${size}`;
  const colorClass = `audio--${color}`;
  const combinedClassName = `audio ${variantClass} ${colorClass} ${className}`.trim();

  return (
    <div
      className={combinedClassName}
      style={style}
      {...props}
    >
      <audio
        ref={audioRef}
        src={src}
        loop={loop}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      >
        Your browser does not support the audio element.
      </audio>
      <button
        className="audio__play-pause"
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="audio__seek">
        <input
          type="range"
          className="audio__seek-slider"
          min="0"
          max={duration}
          step="0.1"
          value={currentTime}
          onChange={handleSeekChange}
          aria-label="Seek Slider"
        />
        <div className="audio__time">
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="audio__volume-container">
        <button
          className="audio__mute"
          onClick={handleMuteAndShowSlider}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          className={`audio__volume-slider ${showVolumeSlider ? 'visible' : ''}`}
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          aria-label="Volume Slider"
        />
      </div>
    </div>
  );
};

Audio.propTypes = {
  /** Source URL of the audio file */
  src: PropTypes.string.isRequired,
  /** Autoplay the audio on load */
  autoPlay: PropTypes.bool,
  /** Loop the audio playback */
  loop: PropTypes.bool,
  /** Mute the audio by default */
  muted: PropTypes.bool,
  /** Size of the audio player */
  size: PropTypes.oneOf(['small', 'medium']),
  /** Color from the global palettes */
  color: PropTypes.oneOf([
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};
```

```jsx
// src/stories/Atoms/Audio/Audio.stories.jsx
import React from 'react';
import { Audio } from './Audio';
import './Audio.css';

export default {
  title: 'Atoms/Media/Audio',
  component: Audio,
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL of the audio file.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'required' },
      },
    },
    autoPlay: {
      control: 'boolean',
      description: 'Autoplay the audio on load.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loop: {
      control: 'boolean',
      description: 'Loop the audio playback.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    muted: {
      control: 'boolean',
      description: 'Mute the audio by default.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
      description: 'Size of the audio player.',
      table: {
        type: { summary: 'small | medium' },
        defaultValue: { summary: 'medium' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Color from the global palettes for control icons.',
      table: {
        type: { summary: 'classy-color-1 | classy-color-2 | classy-color-3 | classy-color-4 | classy-color-5 | small-switch-color-1 | small-switch-color-2 | natural-color-1 | natural-color-2 | natural-color-3 | grey-friend-1 | grey-friend-2 | shade-1 | shade-2 | shade-3 | shade-4' },
        defaultValue: { summary: 'classy-color-1' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/**
 * 
 * Medium size with Classy Palette Color 1.
 */
export const DefaultAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    size="medium"
    color="classy-color-1"
  />
);

/**
 * 
 * Medium size, autoplay enabled with Classy Palette Color 3.
 */
export const AutoplayAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    autoPlay
    size="medium"
    color="classy-color-3"
  />
);

/**
 * 
 * Small size with Classy Palette Color 2.
 */
export const SmallAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    size="small"
    color="classy-color-2"
  />
);


/**
 * 
 * Medium size, looping enabled with Classy Palette Color 4.
 */
export const LoopingAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    loop
    size="medium"
    color="classy-color-4"
  />
);

/**
 * 
 * Medium size, muted by default with Classy Palette Color 5.
 */
export const MutedAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    muted
    size="medium"
    color="classy-color-5"
  />
);

/**
 * 
 * Medium size with custom styles and Classy Palette Color 1.
 */
export const CustomStyledAudio = () => (
  <Audio
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    size="medium"
    color="classy-color-1"
    style={{ border: '2px solid var(--classy-color-1)', borderRadius: '8px' }}
  />
);

/**
 * ### Interactive Playground
 * 
 * Allows dynamic interaction with the audio props via Storybook controls.
 */
const Template = (args) => <Audio {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  autoPlay: false,
  loop: false,
  muted: false,
  size: 'medium',
  color: 'classy-color-1',
};
Playground.storyName = 'Interactive Playground';
```

------

# Button Component

A versatile button component with customizable variants, colors, sizes, and styles. Ideal for triggering actions and navigating users within your application.

## Usage

Import the `Button` component into your React file:

```jsx
import { Button } from './Button';
```

Use it within your JSX:

```jsx
<Button label="Click Me" />
```

## Props

| Prop      | Type                                                         | Default     | Description                                                  |
| --------- | ------------------------------------------------------------ | ----------- | ------------------------------------------------------------ |
| variant   | `oneOf(['primary', 'secondary'])`                            | `primary`   | Style variant of the button. `primary` for main actions, `secondary` for secondary actions. |
| color     | `oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark'])` | `info`      | Color theme of the button based on global CSS variables.     |
| size      | `oneOf(['small', 'medium', 'large'])`                        | `medium`    | Size of the button. `small`, `medium`, or `large`.           |
| label     | `string`                                                     | `''`        | Text label displayed on the button.                          |
| noBorder  | `boolean`                                                    | `false`     | If `true`, the button will have no border.                   |
| children  | `node`                                                       | `undefined` | Content inside the button. Overrides the `label` prop if provided. |
| className | `string`                                                     | `''`        | Additional CSS classes for custom styling.                   |
| style     | `object`                                                     | `{}`        | Inline styles for custom styling.                            |

## Examples

### Primary Button

```jsx
<Button label="Submit" variant="primary" color="success" />
```

### Secondary Large Button with No Border

```jsx
<Button
  label="Cancel"
  variant="secondary"
  size="large"
  color="warning"
  noBorder
/>
```

### Small Info Button with Custom Content

```jsx
<Button size="small" color="info">
  <FaInfoCircle /> Info
</Button>
```

### Custom Styled Button

```jsx
<Button
  label="Custom"
  variant="primary"
  color="dark"
  style={{ backgroundColor: '#333', borderRadius: '8px' }}
/>
```

## Notes

- The `children` prop takes precedence over the `label` prop. Use `children` to include icons or other elements inside the button.
- Utilize the `className` and `style` props for additional customizations beyond the predefined variants and colors.
- Ensure that the global CSS variables for colors are defined to apply the correct color themes.
- Refer to Storybook for interactive examples and detailed prop options.

```jsx
/* src/stories/Atoms/Button/Button.css */

/* Base styles */
.button {
  display: inline-block;
  padding: var(--button-padding);
  border-radius: var(--border-radius);
  font-family: var(--font-family);
  font-size: var(--button-font-size);
  cursor: pointer;
  transition: background-color var(--transition-speed), color var(--transition-speed), border-color var(--transition-speed);
  text-align: center;
  border: 1px solid transparent;
  box-shadow: var(--box-shadow);
  margin-right: 10px;
  background-color: var(--button-bg-color, transparent);
  color: var(--button-text-color, var(--text-color));
  border-color: var(--button-border-color, transparent);
}

/* Hover Effects */
.button:hover {
  background-color: var(--button-bg-hover-color, var(--button-bg-color));
  color: var(--button-text-hover-color, var(--button-text-color));
  border-color: var(--button-border-hover-color, var(--button-border-color));
}

/* Primary Variant */
.button--primary {
  --button-bg-color: var(--primary-color);
  --button-text-color: var(--text-color-inverse);
  --button-border-color: var(--primary-color);
  --button-bg-hover-color: var(--primary-color-hover);
}

/* Secondary Variant */
.button--secondary {
  --button-bg-color: transparent;
  --button-text-color: var(--secondary-color);
  --button-border-color: var(--secondary-border-color);
  --button-text-hover-color: var(--primary-color-hover);
  --button-border-hover-color: var(--primary-color);
}

/* Semantic Color Modifiers */

/* For Primary Variant: Set background colors based on semantic colors */
.button--primary.button--info {
  --button-bg-color: var(--info-color);
  --button-border-color: var(--info-color);
  --button-bg-hover-color: var(--info-color-hover);
}

.button--primary.button--warning {
  --button-bg-color: var(--warning-color);
  --button-border-color: var(--warning-color);
  --button-bg-hover-color: var(--warning-color-hover);
}

.button--primary.button--alert {
  --button-bg-color: var(--alert-color);
  --button-border-color: var(--alert-color);
  --button-bg-hover-color: var(--alert-color-hover);
  --button-text-color: #2C2C2C; /* Dark text for better readability */
}

.button--primary.button--success {
  --button-bg-color: var(--success-color);
  --button-border-color: var(--success-color);
  --button-bg-hover-color: var(--success-color-hover);
}

.button--primary.button--neutral {
  --button-bg-color: var(--neutral-color);
  --button-border-color: var(--neutral-color);
  --button-bg-hover-color: var(--neutral-color-hover);
}

.button--primary.button--dark {
  --button-bg-color: var(--dark-color);
  --button-border-color: var(--dark-color);
  --button-bg-hover-color: var(--dark-color-hover);
}

/* For Secondary Variant: Set text and border colors based on semantic colors */
.button--secondary.button--info {
  --button-text-color: var(--info-color);
  --button-border-color: var(--info-color);
  --button-text-hover-color: var(--info-color-hover);
  --button-border-hover-color: var(--info-color-hover);
}

.button--secondary.button--warning {
  --button-text-color: var(--warning-color);
  --button-border-color: var(--warning-color);
  --button-text-hover-color: var(--warning-color-hover);
  --button-border-hover-color: var(--warning-color-hover);
}

.button--secondary.button--alert {
  --button-text-color: var(--alert-color);
  --button-border-color: var(--alert-color);
  --button-text-hover-color: var(--alert-color-hover);
  --button-border-hover-color: var(--alert-color-hover);
}

.button--secondary.button--success {
  --button-text-color: var(--success-color);
  --button-border-color: var(--success-color);
  --button-text-hover-color: var(--success-color-hover);
  --button-border-hover-color: var(--success-color-hover);
}

.button--secondary.button--neutral {
  --button-text-color: var(--neutral-color);
  --button-border-color: var(--neutral-color);
  --button-text-hover-color: var(--neutral-color-hover);
  --button-border-hover-color: var(--neutral-color-hover);
}

.button--secondary.button--dark {
  --button-text-color: var(--dark-color);
  --button-border-color: var(--dark-color);
  --button-text-hover-color: var(--dark-color-hover);
  --button-border-hover-color: var(--dark-color-hover);
}

/* No Border Modifier */
.button--no-border {
  border: none;
}
```

```jsx
// src/stories/Atoms/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Ensure styles are imported

export const Button = ({
  variant = 'primary', // 'primary', 'secondary'
  color, // 'info', 'warning', 'alert', 'success', 'neutral', 'dark'
  size = 'medium',
  label = '',
  noBorder = false,
  children,
  className = '',
  style = {},
  ...props
}) => {
  const variantClass = `button--${variant}`;
  const colorClass = color ? `button--${color}` : '';
  const sizeClass = `button--${size}`;
  const borderClass = noBorder ? 'button--no-border' : '';

  const combinedClassName = `button ${variantClass} ${colorClass} ${sizeClass} ${borderClass} ${className}`.trim();

  return (
    <button type="button" className={combinedClassName} style={style} {...props}>
      {children || label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  noBorder: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};
```

```jsx
// src/stories/Atoms/Button/Button.stories.jsx
import React from 'react';
import { Button } from './Button';
import './Button.css'; // Ensure styles are imported

export default {
  title: 'Atoms/Interactive/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      description: 'Variant of the button.',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
        ],
      },
      description: 'Semantic color accent of the button.',
      table: {
        type: { summary: `'info' | 'warning' | 'alert' | 'success' | 'neutral' | 'dark'` },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the button.',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'Text label of the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    noBorder: {
      control: 'boolean',
      description: 'Removes the border if set to true.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler.',
      table: {
        type: { summary: 'function' },
      },
    },
    children: {
      control: 'text',
      description: 'Button children elements.',
      table: {
        type: { summary: 'node' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/**
 * 
 * Shows the default primary and secondary buttons without any semantic color accent.
 */
export const DefaultButtons = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button variant="primary" size="medium">
      Primary Default
    </Button>
    <Button variant="secondary" size="medium">
      Secondary Default
    </Button>
    <Button variant="primary" size="medium" noBorder>
      Primary No Border
    </Button>
    <Button variant="secondary" size="medium" noBorder>
      Secondary No Border
    </Button>
  </div>
);

/**
 * 
 * Demonstrates primary buttons with all semantic colors and sizes.
 */
export const PrimaryButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Primary Buttons</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <div key={color} style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary" color={color} size="small">
          Primary {color} Small
        </Button>
        <Button variant="primary" color={color} size="medium">
          Primary {color} Medium
        </Button>
        <Button variant="primary" color={color} size="large">
          Primary {color} Large
        </Button>
        <Button variant="primary" color={color} size="medium" noBorder>
          Primary {color} No Border
        </Button>
      </div>
    ))}
  </div>
);

/**
 * 
 * Demonstrates secondary buttons with all semantic colors and sizes.
 */
export const SecondaryButtons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h3>Secondary Buttons</h3>
    {['info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <div key={color} style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="secondary" color={color} size="small">
          Secondary {color} Small
        </Button>
        <Button variant="secondary" color={color} size="medium">
          Secondary {color} Medium
        </Button>
        <Button variant="secondary" color={color} size="large">
          Secondary {color} Large
        </Button>
        <Button variant="secondary" color={color} size="medium" noBorder>
          Secondary {color} No Border
        </Button>
      </div>
    ))}
  </div>
);

/**
 * ### Interactive Playground
 * 
 * Allows dynamic interaction with the button props via Storybook controls.
 */
const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  color: 'info',
  size: 'medium',
  label: 'Click Me',
  noBorder: false,
  children: 'Click Me',
};
Playground.storyName = 'Interactive Playground';
```

------

# Caption Component

A versatile text component used to provide supplementary information, such as image captions, table descriptions, or form hints.

## Usage

Import the `Caption` component into your React file:

```jsx
import { Caption } from './Caption';
```

Use it within your JSX to display captions or descriptive text:

```jsx
<Caption text="This is a caption for the image." />
```

## Props

| Prop      | Type                                                         | Default      | Description                                        |
| --------- | ------------------------------------------------------------ | ------------ | -------------------------------------------------- |
| text      | `string`                                                     | **Required** | The caption text to display.                       |
| variant   | `oneOf(['image', 'table', 'form', 'chart', 'audio', 'content', 'interactive'])` | `image`      | Specifies the context or style of the caption.     |
| size      | `oneOf(['small', 'normal', 'large'])`                        | `normal`     | Controls the font size of the caption.             |
| color     | `oneOf(['info', 'warning', 'alert', 'success', 'neutral', 'dark', 'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5', 'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3', 'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'])` | `info`       | Sets the color of the caption text.                |
| round     | `boolean`                                                    | `false`      | If `true`, applies rounded styling to the caption. |
| className | `string`                                                     | `''`         | Additional CSS classes for custom styling.         |
| style     | `object`                                                     | `{}`         | Inline styles for custom styling.                  |

## Examples

### Basic Image Caption

```jsx
<Caption text="Figure 1: Overview of the project timeline." variant="image" />
```

### Small Warning Caption

```jsx
<Caption text="Please ensure all fields are filled out correctly." size="small" color="warning" />
```

### Large Success Caption with Rounded Corners

```jsx
<Caption text="Operation completed successfully!" size="large" color="success" round />
```

### Interactive Caption

Use the interactive story in Storybook to dynamically adjust the `Caption` props and see real-time changes.

## Notes

- The `Caption` component is primarily used for providing additional context or information related to other elements like images, tables, or forms.
- Combine props to achieve the desired appearance and functionality.
- Utilize the `className` and `style` props for further customizations as needed.
- Refer to Storybook for interactive examples and detailed prop options.

```jsx
/* src/stories/Atoms/Caption/Caption.css */

/* Base Caption Styles */
.caption {
  font-family: var(--font-family);
  font-size: var(--font-size-small, 14px);
  color: var(--text-color);
  margin-top: var(--spacing-xs, 4px);
  margin-bottom: var(--spacing-md, 16px);
  display: block;
}

/* Size Variants */
/* Size Variants */
.caption--small {
  font-size: var(--font-size-small);
}

.caption--large {
  font-size: var(--font-size-large);
}

/* Type Variants */

/* 1. Image or Video Captions */
.caption--image {
  font-style: italic;
  text-align: center;
}

/* 2. Table Captions */
.caption--table {
  caption-side: top; /* Ensures the caption appears above the table */
  font-weight: var(--font-weight-medium, 500);
}

/* 3. Form Element Captions */
.caption--form {
  font-size: var(--font-size-small, 14px);
  color: var(--text-color);
  margin-top: var(--spacing-xs, 4px);
}

/* 4. Chart or Graph Captions */
.caption--chart {
  font-weight: var(--font-weight-bold, 600);
  margin-top: var(--spacing-sm, 8px);
}

/* 5. Audio or Video Transcriptions (Subtitles or Captions) */
.caption--transcription {
  font-size: var(--font-size-small, 14px);
  color: var(--text-color);
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: var(--spacing-xs, 4px) var(--spacing-sm, 8px);
  border-radius: var(--border-radius, 4px);
  position: absolute;
  bottom: var(--spacing-xs, 4px);
  left: 50%;
  transform: translateX(-50%);
  max-width: 90%;
  text-align: center;
}

/* 6. Content Descriptions or Explanations */
.caption--description {
  font-size: var(--font-size-small, 14px);
  color: var(--text-color);
  margin-top: var(--spacing-xs, 4px);
}

/* 7. Captions for Interactive Elements */
.caption--interactive {
  font-size: var(--font-size-small, 14px);
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs, 4px);
}

/* Color Classes */
.caption--info {
  color: var(--info-color);
}

.caption--warning {
  color: var(--warning-color);
}

.caption--alert {
  color: var(--alert-color);
}

.caption--success {
  color: var(--success-color);
}

.caption--neutral {
  color: var(--neutral-color);
}

.caption--dark {
  color: var(--dark-color);
}

.caption--classy-color-1 {
  color: var(--classy-color-1);
}

.caption--classy-color-2 {
  color: var(--classy-color-2);
}

.caption--classy-color-3 {
  color: var(--classy-color-3);
}

.caption--classy-color-4 {
  color: var(--classy-color-4);
}

.caption--classy-color-5 {
  color: var(--classy-color-5);
}

.caption--small-switch-color-1 {
  color: var(--small-switch-color-1);
}

.caption--small-switch-color-2 {
  color: var(--small-switch-color-2);
}

.caption--natural-color-1 {
  color: var(--natural-color-1);
}

.caption--natural-color-2 {
  color: var(--natural-color-2);
}

.caption--natural-color-3 {
  color: var(--natural-color-3);
}

.caption--grey-friend-1 {
  color: var(--grey-friend-1);
}

.caption--grey-friend-2 {
  color: var(--grey-friend-2);
}

.caption--shade-1 {
  color: var(--shade-1);
}

.caption--shade-2 {
  color: var(--shade-2);
}

.caption--shade-3 {
  color: var(--shade-3);
}

.caption--shade-4 {
  color: var(--shade-4);
}

```

```jsx
// src/stories/Atoms/Caption/Caption.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Caption.css';

export const Caption = ({
  text,
  variant = 'image', // 'image', 'table', 'form', 'chart', 'transcription', 'description', 'interactive'
  size = 'normal', // 'small', 'normal', 'large'
  color,
  className = '',
  style = {},
}) => {
  const captionClasses = classNames('caption', {
    [`caption--${variant}`]: variant,
    [`caption--${size}`]: size !== 'normal',
    [`caption--${color}`]: color, // Apply color class if provided
  }, className);

  return (
    <span className={captionClasses} style={style}>
      {text}
    </span>
  );
};

Caption.propTypes = {
  /** Text content of the caption */
  text: PropTypes.string.isRequired,
  /** Variant/type of the caption */
  variant: PropTypes.oneOf([
    'image',
    'table',
    'form',
    'chart',
    'transcription',
    'description',
    'interactive',
  ]),
  /** Size of the caption */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Color of the caption (matches global theme colors) */
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Caption/Caption.stories.jsx
import React from 'react';
import { Caption } from './Caption';
import './Caption.css';

export default {
  title: 'Atoms/Text/Caption',
  component: Caption,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the caption.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'required' },
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'image',
          'table',
          'form',
          'chart',
          'transcription',
          'description',
          'interactive',
        ],
      },
      description: 'Variant/type of the caption.',
      table: {
        type: { summary: `'image' | 'table' | 'form' | 'chart' | 'transcription' | 'description' | 'interactive'` },
        defaultValue: { summary: 'image' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'large'],
      },
      description: 'Size of the caption.',
      table: {
        type: { summary: `'small' | 'normal' | 'large'` },
        defaultValue: { summary: 'normal' },
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Color of the caption (matches global theme colors).',
      table: {
        type: { summary: `'info' | 'warning' | 'alert' | 'success' | 'neutral' | 'dark' | 'classy-color-1' | 'classy-color-2' | 'classy-color-3' | 'classy-color-4' | 'classy-color-5' | 'small-switch-color-1' | 'small-switch-color-2' | 'natural-color-1' | 'natural-color-2' | 'natural-color-3' | 'grey-friend-1' | 'grey-friend-2' | 'shade-1' | 'shade-2' | 'shade-3' | 'shade-4'` },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
      table: {
        type: { summary: 'object' },
      },
    },
  },
};

/**
 * Image or Video Captions
 */
export const ImageCaption = () => (
  <figure style={{ textAlign: 'center' }}>
    <img src="https://via.placeholder.com/150" alt="Sample Image" />
    <Caption text="CEO delivering the keynote at the annual conference." variant="image" />
  </figure>
);

/**
 * Table Captions
 */
export const TableCaption = () => (
  <figure>
    <table>
      <caption>Quarterly financial results for Q3 2024</caption>
      <thead>
        <tr>
          <th>Revenue</th>
          <th>Expenses</th>
          <th>Profit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$1,000,000</td>
          <td>$750,000</td>
          <td>$250,000</td>
        </tr>
      </tbody>
    </table>
    {/* Alternatively, using Caption component */}
    {/* <Caption text="Quarterly financial results for Q3 2024" variant="table" /> */}
  </figure>
);

/**
 * Form Element Captions
 */
export const FormCaption = () => (
  <div>
    <label htmlFor="meeting-date">Meeting Date</label>
    <input type="date" id="meeting-date" name="meeting-date" />
    <Caption text="Select your preferred meeting date." variant="form" />
  </div>
);

/**
 * Chart or Graph Captions
 */
export const ChartCaption = () => (
  <div style={{ position: 'relative' }}>
    <img src="https://via.placeholder.com/300x200" alt="Sample Chart" />
    <Caption text="Annual growth rate comparison between 2020 and 2024." variant="chart" />
  </div>
);

/**
 * Audio or Video Transcriptions (Subtitles or Captions)
 */
export const TranscriptionCaption = () => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <video width="300" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <Caption
      text="[Music playing in the background]."
      variant="transcription"
      size="small"
      color="neutral"
      style={{ position: 'absolute', bottom: '10px', left: '50%' }}
    />
  </div>
);

/**
 * Content Descriptions or Explanations
 */
export const DescriptionCaption = () => (
  <div>
    <img src="https://via.placeholder.com/300x200" alt="Sample Data" />
    <Caption text="Data collected from a sample size of 1000 users." variant="description" />
  </div>
);

/**
 * Captions for Elements
 */
export const ElementCaption = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <button>🔊</button>
    <Caption text="Adjust volume level." variant="interactive" />
  </div>
);

/**
 * Interactive Playground
 */
const Template = (args) => <Caption {...args} />;

export const InteractiveCaptionStory = Template.bind({});
InteractiveCaptionStory.args = {
  text: 'Interactive Caption',
  variant: 'image',
  size: 'normal',
  color: 'info',
};
InteractiveCaptionStory.storyName = 'Interactive Caption';

```

------

# Checkbox Component

A customizable checkbox component for forms and interactive elements.

## Usage

Import the `Checkbox` component into your React file:

```jsx
import { Checkbox } from './Checkbox';
```

Use it within your JSX:

```jsx
<Checkbox
  label="Accept Terms and Conditions"
  checked={isChecked}
  onChange={handleCheckboxChange}
/>
```

## Props

| Prop      | Type                                  | Default      | Description                                              |
| --------- | ------------------------------------- | ------------ | -------------------------------------------------------- |
| label     | `string`                              | **Required** | Label text displayed next to the checkbox.               |
| checked   | `boolean`                             | `false`      | Controls the checked state of the checkbox.              |
| onChange  | `function`                            | `undefined`  | Handler function called when the checkbox state changes. |
| variant   | `oneOf(['primary', 'secondary'])`     | `primary`    | Style variant of the checkbox.                           |
| size      | `oneOf(['small', 'normal', 'large'])` | `normal`     | Size of the checkbox.                                    |
| color     | `oneOf([...])`                        | `info`       | Color of the checkbox, based on global CSS variables.    |
| rounded   | `boolean`                             | `false`      | If `true`, the checkbox will have rounded corners.       |
| disabled  | `boolean`                             | `false`      | If `true`, the checkbox is disabled.                     |
| className | `string`                              | `''`         | Additional CSS classes for custom styling.               |
| style     | `object`                              | `{}`         | Inline styles for custom styling.                        |

### `color` Options

- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`
- `classy-color-1`
- `classy-color-2`
- `classy-color-3`
- `classy-color-4`
- `classy-color-5`
- `small-switch-color-1`
- `small-switch-color-2`
- `natural-color-1`
- `natural-color-2`
- `natural-color-3`
- `grey-friend-1`
- `grey-friend-2`
- `shade-1`
- `shade-2`
- `shade-3`
- `shade-4`

## Examples

### Basic Checkbox

```jsx
<Checkbox
  label="Subscribe to newsletter"
  checked={isSubscribed}
  onChange={handleSubscriptionChange}
/>
```

### Small Secondary Rounded Checkbox

```jsx
<Checkbox
  label="Enable notifications"
  variant="secondary"
  size="small"
  color="success"
  rounded
  checked={isEnabled}
  onChange={handleEnableChange}
/>
```

### Large Disabled Checkbox

```jsx
<Checkbox
  label="I agree to the terms and conditions"
  size="large"
  color="warning"
  disabled
/>
```

### Interactive Checkbox

Use the interactive story in Storybook to dynamically adjust the `Checkbox` props.

## Notes

- Combine props to achieve the desired appearance and functionality.
- Utilize the `className` and `style` props for additional customizations as needed.
- Refer to Storybook for interactive examples and detailed prop options.

```css
/* src/stories/Atoms/Checkbox/Checkbox.css */

/* Base Checkbox Styles */
.checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size-base); /* Inherit base font size */
  color: var(--text-color);
  user-select: none;
}

/* Disabled State */
.checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Hidden Checkbox Input */
.checkbox input {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Custom Checkbox */
.checkbox::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  transition: background-color var(--transition-speed), border-color var(--transition-speed);
}

/* Checked State */
.checkbox input:checked + .checkbox__label::before {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

/* Checkmark */
.checkbox input:checked + .checkbox__label::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid var(--text-color-inverse);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Variants */
.checkbox--primary::before {
  border-color: var(--primary-color);
}

.checkbox--secondary::before {
  border-color: var(--secondary-color);
}

/* Sizes */
.checkbox--small {
  font-size: var(--font-size-small); /* Inherit small font size */
}

.checkbox--large {
  font-size: var(--font-size-large); /* Inherit large font size */
}

.checkbox--small::before {
  width: 12px;
  height: 12px;
}

.checkbox--large::before {
  width: 20px;
  height: 20px;
}

/* Rounded */
.checkbox--rounded::before {
  border-radius: 50%;
}

/* Color Classes */
.info {
  --primary-color: var(--info-color);
}

.warning {
  --primary-color: var(--warning-color);
}

.alert {
  --primary-color: var(--alert-color);
}

.success {
  --primary-color: var(--success-color);
}

.neutral {
  --primary-color: var(--neutral-color);
}

.dark {
  --primary-color: var(--dark-color);
}

.classy-color-1 {
  --primary-color: var(--classy-color-1);
}

.classy-color-2 {
  --primary-color: var(--classy-color-2);
}

.classy-color-3 {
  --primary-color: var(--classy-color-3);
}

.classy-color-4 {
  --primary-color: var(--classy-color-4);
}

.classy-color-5 {
  --primary-color: var(--classy-color-5);
}

.small-switch-color-1 {
  --primary-color: var(--small-switch-color-1);
}

.small-switch-color-2 {
  --primary-color: var(--small-switch-color-2);
}

.natural-color-1 {
  --primary-color: var(--natural-color-1);
}

.natural-color-2 {
  --primary-color: var(--natural-color-2);
}

.natural-color-3 {
  --primary-color: var(--natural-color-3);
}

.grey-friend-1 {
  --primary-color: var(--grey-friend-1);
}

.grey-friend-2 {
  --primary-color: var(--grey-friend-2);
}

.shade-1 {
  --primary-color: var(--shade-1);
}

.shade-2 {
  --primary-color: var(--shade-2);
}

.shade-3 {
  --primary-color: var(--shade-3);
}

.shade-4 {
  --primary-color: var(--shade-4);
}

```

```jsx
// src/stories/Atoms/Checkbox/Checkbox.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Checkbox.css';

export const Checkbox = ({
  label,
  checked = false,
  onChange,
  variant = 'primary',
  size = 'normal',
  color = 'info',
  rounded = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const checkboxClasses = classNames('checkbox', className, {
    [`checkbox--${variant}`]: variant,
    [`checkbox--${size}`]: size !== 'normal',
    [color]: color,
    'checkbox--rounded': rounded,
    'checkbox--disabled': disabled,
  });

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  /** Label text for the checkbox */
  label: PropTypes.string.isRequired,
  /** Checked state of the checkbox */
  checked: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
  /** Variant of the checkbox */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Size of the checkbox */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Color from the global palette */
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Rounded or Squared */
  rounded: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

```

```jsx
// src/stories/Atoms/Checkbox/Checkbox.stories.jsx
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import './Checkbox.css';

export default {
  title: 'Atoms/Interactive/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text', defaultValue: 'Checkbox Label' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'Checkbox variant.',
    },
    size: {
      control: { type: 'select', options: ['small', 'normal', 'large'] },
      description: 'Checkbox size.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Checkbox color.',
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded or squared checkbox.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox.',
    },
  },
};

/**
 * Primary Checkbox - Normal Size - Squared
 */
export const PrimaryNormal = () => (
  <Checkbox label="Primary Normal Checkbox" variant="primary" size="normal" color="info" />
);

/**
 * Secondary Checkbox - Large Size - Rounded
 */
export const SecondaryLargeRounded = () => (
  <Checkbox label="Secondary Large Rounded Checkbox" variant="secondary" size="large" color="warning" rounded />
);

/**
 * Primary Checkbox - Small Size - Rounded
 */
export const PrimarySmallRounded = () => (
  <Checkbox label="Primary Small Rounded Checkbox" variant="primary" size="small" color="success" rounded />
);

/**
 * Secondary Checkbox - Normal Size - Squared
 */
export const SecondaryNormal = () => (
  <Checkbox label="Secondary Normal Checkbox" variant="secondary" size="normal" color="neutral" />
);

/**
 * Interactive Checkbox
 */
const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (args.onChange) args.onChange(e);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const InteractiveCheckbox = Template.bind({});
InteractiveCheckbox.args = {
  label: 'Interactive Checkbox',
  variant: 'primary',
  size: 'normal',
  color: 'info',
  rounded: false,
  disabled: false,
  checked: false,
};
InteractiveCheckbox.storyName = 'Interactive Checkbox';

```

----------

# Container Component

A flexible wrapper that centers its content and controls its width. Ideal for structuring layouts by containing other components or HTML elements.

## Usage

Import the `Container` component into your React file:

```jsx
import { Container } from './Container';
```

Use it in your JSX to wrap content:

```jsx
<Container>
  <p>Your content goes here.</p>
</Container>
```

## Props

| Prop      | Type                                                         | Default  | Description                             |
| --------- | ------------------------------------------------------------ | -------- | --------------------------------------- |
| border    | `boolean`                                                    | `false`  | Adds a border to the container.         |
| size      | `oneOf(['small', 'medium', 'large'])`                        | `medium` | Controls the width of the container.    |
| rounded   | `boolean`                                                    | `false`  | Applies rounded corners.                |
| fluid     | `boolean`                                                    | `false`  | Makes the container full-width.         |
| align     | `oneOf(['left', 'center', 'right'])`                         | `left`   | Aligns the container within its parent. |
| position  | `oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky'])` | `static` | Sets the CSS position property.         |
| className | `string`                                                     | `''`     | Additional CSS classes.                 |
| style     | `object`                                                     | `{}`     | Inline styles.                          |

## Examples

### Basic Container

```jsx
<Container>
  <p>This is a basic container.</p>
</Container>
```

### Small Container with Border

```jsx
<Container size="small" border>
  <p>This is a small container with a border.</p>
</Container>
```

### Large Fluid Container Centered and Rounded

```jsx
<Container size="large" fluid align="center" rounded>
  <p>This is a large, fluid container with center alignment and rounded corners.</p>
</Container>
```

### Positioned Container

```jsx
<Container position="absolute" style={{ top: '20px', left: '20px' }}>
  <p>This container is absolutely positioned.</p>
</Container>
```

## Notes

- Combine props to achieve the desired layout and styling.
- Use the `className` and `style` props for additional customizations.
- Refer to Storybook for interactive examples and detailed prop options.

```css
/* src/stories/Atoms/Container/Container.css */

/* Base Container Styles */
.container {
  padding: var(--spacing-md);
  background-color: transparent;
  transition: all var(--transition-speed) ease;
  box-sizing: border-box;
  position: var(--position, static);
}

/* Border Variant */
.container--border {
  border: 1px solid var(--border-color);
}

/* Size Variants */
.container--small {
  width: 25%;
}

.container--medium {
  width: 50%;
}

.container--large {
  width: 75%;
}

/* Fluid Variant */
.container--fluid {
  width: 100%;
}

/* Rounded Corners */
.container--rounded {
  border-radius: var(--border-radius);
}

/* Alignment */
.container--align-left {
  margin-left: 0;
  margin-right: auto;
}

.container--align-center {
  margin-left: auto;
  margin-right: auto;
}

.container--align-right {
  margin-left: auto;
  margin-right: 0;
}

/* Positioning */
.container--position-static {
  position: static;
}

.container--position-relative {
  position: relative;
}

.container--position-absolute {
  position: absolute;
}

.container--position-fixed {
  position: fixed;
}

.container--position-sticky {
  position: sticky;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .container--small,
  .container--medium,
  .container--large {
    width: 100%;
    padding: var(--spacing-sm);
  }
  
  .container--fluid {
    padding: var(--spacing-xs);
  }
}

```

```jsx
// src/stories/Atoms/Container/Container.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.css';

export const Container = ({
  children,
  border = false,
  size = 'medium',
  rounded = false,
  fluid = false,
  align = 'left',
  position = 'static',
  className = '',
  style = {},
  ...props
}) => {
  const containerClasses = classNames('container', className, {
    'container--border': border,
    [`container--${size}`]: size,
    'container--rounded': rounded,
    'container--fluid': fluid,
    [`container--align-${align}`]: align,
    [`container--position-${position}`]: position,
  });

  return (
    <div className={containerClasses} style={style} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  /** Content to be wrapped inside the container */
  children: PropTypes.node.isRequired,
  /** Add a border to the container */
  border: PropTypes.bool,
  /** Size of the container */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Rounded corners */
  rounded: PropTypes.bool,
  /** Fluid container (full width) */
  fluid: PropTypes.bool,
  /** Text alignment within the container */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** CSS position property */
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Container/Container.stories.jsx
import React from 'react';
import { Container } from './Container';
import './Container.css';

export default {
  title: 'Atoms/Layout/Container',
  component: Container,
  argTypes: {
    border: {
      control: 'boolean',
      description: 'Add a border to the container.',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the container.',
    },
    rounded: {
      control: 'boolean',
      description: 'Apply rounded corners to the container.',
    },
    fluid: {
      control: 'boolean',
      description: 'Make the container full-width.',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Alignment of the container.',
    },
    position: {
      control: {
        type: 'select',
        options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
      },
      description: 'CSS position property of the container.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
  },
};

/**
 * Small Container with Border and Left Alignment
 */
export const SmallWithBorderLeft = () => (
  <Container border size="small" align="left">
    <p>This is a small container with a border and left alignment.</p>
  </Container>
);

/**
 * Medium Rounded Container with Center Alignment
 */
export const MediumRoundedCenter = () => (
  <Container rounded size="medium" align="center">
    <p>This is a medium-sized container with rounded corners and center alignment.</p>
  </Container>
);

/**
 * Large Fluid Container with Right Alignment
 */
export const LargeFluidRight = () => (
  <Container fluid size="large" align="right">
    <p>This is a large, fluid container without a border and right alignment.</p>
  </Container>
);

/**
 * Container with Absolute Positioning
 */
export const AbsolutePositioned = () => (
  <Container position="absolute" style={{ top: '20px', left: '20px' }}>
    <p>This container is absolutely positioned.</p>
  </Container>
);

/**
 * Interactive Playground
 */
const Template = (args) => <Container {...args}>This is an interactive container.</Container>;

export const InteractiveContainer = Template.bind({});
InteractiveContainer.args = {
  border: false,
  size: 'medium',
  rounded: false,
  fluid: false,
  align: 'left',
  position: 'static',
};
InteractiveContainer.storyName = 'Interactive Container';

```

---------

# Divider Component

A simple horizontal line used to separate content within your application.

## Installation

Ensure you have the `Divider` component files (`Divider.jsx`, `Divider.css`) in your project directory.

## Usage

Import the `Divider` component into your React component:

```jsx
import { Divider } from './Divider';
```

Then use it within your JSX:

```jsx
<Divider />
```

## Props

| Prop      | Type                                  | Default   | Description                                                  |
| --------- | ------------------------------------- | --------- | ------------------------------------------------------------ |
| thickness | `oneOf(['thin', 'normal', 'bold'])`   | `normal`  | Thickness of the divider line.                               |
| width     | `oneOf(['small', 'medium', 'large'])` | `medium`  | Width of the divider: `small` (25%), `medium` (50%), `large` (75%). |
| align     | `oneOf(['left', 'center', 'right'])`  | `center`  | Alignment of the divider within its container.               |
| color     | `oneOf([...])`                        | `neutral` | Color of the divider line. Uses global CSS variables.        |
| className | `string`                              | `''`      | Additional CSS classes for custom styling.                   |
| style     | `object`                              | `{}`      | Inline styles for custom styling.                            |

### `color` Options

- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`
- `classy-color-1`
- `classy-color-2`
- `classy-color-3`
- `classy-color-4`
- `classy-color-5`
- `small-switch-color-1`
- `small-switch-color-2`
- `natural-color-1`
- `natural-color-2`
- `natural-color-3`
- `grey-friend-1`
- `grey-friend-2`
- `shade-1`
- `shade-2`
- `shade-3`
- `shade-4`

## Examples

### Thin Small Left Aligned Divider

```jsx
<Divider thickness="thin" width="small" align="left" color="info" />
```

### Normal Medium Center Aligned Divider

```jsx
<Divider thickness="normal" width="medium" align="center" color="warning" />
```

### Bold Large Right Aligned Divider

```jsx
<Divider thickness="bold" width="large" align="right" color="success" />
```

### Interactive Divider

Use the interactive story in Storybook to dynamically adjust the `Divider` props.

## Styling

The `Divider` component utilizes global CSS variables for colors and spacing. Ensure that the following variables are defined in your global CSS (`light.css`):

```css
:root {
  --neutral-color: #a4a4a4;
  --info-color: #008699;
  --warning-color: #FF6F61;
  --alert-color: #ffcc00;
  --success-color: #00B4B8;
  --dark-color: #2C2C2C;
  /* Add other color variables as needed */
  
  --spacing-md: 16px;
  --spacing-sm: 8px;
  --spacing-xs: 4px;
  
  --transition-speed: 0.3s;
}
```

## Responsive Design

The `Divider` component is responsive and adjusts its width on smaller screens:

- **Small Screens (`max-width: 768px`):**
  - `small`, `medium`, and `large` widths change to `100%`.
  - Padding is reduced for better spacing.

## Notes

- The `Divider` is a self-closing component (`<Divider />`) and does not contain any children.
- Combine props to achieve the desired appearance and alignment.
- Use the `className` and `style` props for additional customizations as needed.

```css
/* src/stories/Atoms/Divider/Divider.css */

.divider {
  border: none;
  height: 1px;
  margin: var(--spacing-md) 0;
  background-color: var(--neutral-color);
  transition: background-color var(--transition-speed) ease, height var(--transition-speed) ease;
}

/* Thickness Variants */
.divider--thin {
  height: 1px;
}

.divider--normal {
  height: 2px;
}

.divider--bold {
  height: 3px;
}

/* Width Variants */
.divider--small {
  width: 25%;
}

.divider--medium {
  width: 50%;
}

.divider--large {
  width: 75%;
}

/* Alignment Variants */
.divider--align-left {
  margin-left: 0;
}

.divider--align-center {
  margin-left: auto;
  margin-right: auto;
}

.divider--align-right {
  margin-right: 0;
}

/* Color Classes */
.info {
  background-color: var(--info-color);
}

.warning {
  background-color: var(--warning-color);
}

.alert {
  background-color: var(--alert-color);
}

.success {
  background-color: var(--success-color);
}

.neutral {
  background-color: var(--neutral-color);
}

.dark {
  background-color: var(--dark-color);
}

.classy-color-1 {
  background-color: var(--classy-color-1);
}

.classy-color-2 {
  background-color: var(--classy-color-2);
}

.classy-color-3 {
  background-color: var(--classy-color-3);
}

.classy-color-4 {
  background-color: var(--classy-color-4);
}

.classy-color-5 {
  background-color: var(--classy-color-5);
}

.small-switch-color-1 {
  background-color: var(--small-switch-color-1);
}

.small-switch-color-2 {
  background-color: var(--small-switch-color-2);
}

.natural-color-1 {
  background-color: var(--natural-color-1);
}

.natural-color-2 {
  background-color: var(--natural-color-2);
}

.natural-color-3 {
  background-color: var(--natural-color-3);
}

.grey-friend-1 {
  background-color: var(--grey-friend-1);
}

.grey-friend-2 {
  background-color: var(--grey-friend-2);
}

.shade-1 {
  background-color: var(--shade-1);
}

.shade-2 {
  background-color: var(--shade-2);
}

.shade-3 {
  background-color: var(--shade-3);
}

.shade-4 {
  background-color: var(--shade-4);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .divider--small,
  .divider--medium,
  .divider--large {
    width: 100%;
  }
}

```

```jsx
// src/stories/Atoms/Divider/Divider.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Divider.css';

export const Divider = ({
  thickness = 'normal',
  width = 'medium',
  align = 'center',
  color = 'neutral',
  className = '',
  style = {},
  ...props
}) => {
  const dividerClasses = classNames('divider', className, {
    [`divider--${thickness}`]: thickness,
    [`divider--${width}`]: width,
    [`divider--align-${align}`]: align,
    [color]: color,
  });

  return <hr className={dividerClasses} style={style} {...props} />;
};

Divider.propTypes = {
  /** Thickness of the divider */
  thickness: PropTypes.oneOf(['thin', 'normal', 'bold']),
  /** Width of the divider */
  width: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Alignment of the divider */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Color of the divider */
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Divider/Divider.stories.jsx
import React from 'react';
import { Divider } from './Divider';
import './Divider.css';

export default {
  title: 'Atoms/Layout/Divider',
  component: Divider,
  argTypes: {
    thickness: {
      control: {
        type: 'select',
        options: ['thin', 'normal', 'bold'],
      },
      description: 'Thickness of the divider.',
    },
    width: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      description: 'Width of the divider.',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Alignment of the divider.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Color of the divider.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
  },
};

/**
 * Thin Small Left Aligned Divider
 */
export const ThinSmallLeft = () => (
  <Divider thickness="thin" width="small" align="left" color="info" />
);

/**
 * Normal Medium Center Aligned Divider
 */
export const NormalMediumCenter = () => (
  <Divider thickness="normal" width="medium" align="center" color="warning" />
);

/**
 * Bold Large Right Aligned Divider
 */
export const BoldLargeRight = () => (
  <Divider thickness="bold" width="large" align="right" color="success" />
);

/**
 * Interactive Divider
 */
const Template = (args) => <Divider {...args} />;

export const InteractiveDivider = Template.bind({});
InteractiveDivider.args = {
  thickness: 'normal',
  width: 'medium',
  align: 'center',
  color: 'neutral',
};
InteractiveDivider.storyName = 'Interactive Divider';

```

-----------

# **Grid Component Documentation**

The **Grid** component is a flexible layout component designed to organize content into responsive rows and columns. It automatically adapts to different screen sizes and can be customized using properties like gap, border, and color. It also provides support for various color variants from the theme.

### **Usage**

**Importing the Grid Component**

To use the **Grid** component in your project, import it as follows:

import { Grid } from 'your-library-path';

**Basic Example**

Here’s a simple example of how to use the **Grid** component to organize content:

```jsx
<Grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

This will render a grid with auto-adjusting columns and responsive behavior.

**Prop Usage Examples**

**Grid with Gap**

You can adjust the spacing between items by using the gap prop:

```jsx
<Grid gap="32px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```



**Grid with Border**

To add borders around each grid item, use the border prop:

```jsx
<Grid border={true} color="secondary">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

This will create a grid with borders around each item, and the border color will be set to the **secondary** theme color.



**Custom Colors**

You can choose different border colors by using the color prop in conjunction with the border prop:

```jsx
<Grid border={true} color="warning">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

This will apply a **warning** border color around the grid items.



**Color Variants**

The **Grid** component supports theme-based colors for borders. Here are the available colors:

​	•	**Primary**: primary-color

​	•	**Secondary**: secondary-color

​	•	**Info**: info-color

​	•	**Warning**: warning-color

​	•	**Alert**: alert-color

​	•	**Success**: success-color

​	•	**Neutral**: neutral-color

​	•	**Dark**: dark-color

​	•	**Classy Palette**: classy-color-1, classy-color-2, etc.

​	•	**Small Switch Palette**: small-switch-color-1, small-switch-color-2

​	•	**Natural Palette**: natural-color-1, natural-color-2, natural-color-3

​	•	**Grey Friends**: grey-friend-1, grey-friend-2

​	•	**Shades**: shade-1, shade-2, shade-3, shade-4



**Example Using Color Variants**

```jsx
<Grid border={true} color="info">
  <div>Info Item 1</div>
  <div>Info Item 2</div>
  <div>Info Item 3</div>
</Grid>

<Grid border={true} color="success">
  <div>Success Item 1</div>
  <div>Success Item 2</div>
  <div>Success Item 3</div>
</Grid>
```



**Responsive Behavior**

The **Grid** component automatically adjusts the number of columns based on the available width of the container, making it fully responsive. You can control the gap between items, but the layout will adapt dynamically without needing additional configuration.



For example

```jsx
<Grid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
  <div>Item 7</div>
</Grid>
```

This will render a responsive grid layout that automatically adjusts to the screen size, ensuring that the grid items fit properly.



**Advanced Example**

Here’s a more complex example with custom colors, borders, and gaps:

```jsx
<Grid border={true} gap="24px" color="alert">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>
```

In this example:

​	•	Each grid item has a **24px** gap between them.

​	•	The grid items have a **border**.

​	•	The border color is set to **alert** (yellow from the theme).

**Conclusion**

The **Grid** component is a powerful and flexible tool for creating responsive layouts in your application. With easy-to-use props like gap, border, and color, you can create dynamic grids that adapt to various screen sizes and provide a visually appealing structure for your content.



```css
/*this.GUI/src/stories/Atoms/Grid/Grid.css*/
/* Base Grid Styles */
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Auto-fit responsive columns */
  gap: 16px; /* Default gap between grid items */
  padding: 16px;
}

/* Grid item styling */
.grid > * {
  background-color: var(--background-color);
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Border Styles for Grid Items when the border prop is true */
.grid--border > * {
  border: 1px solid var(--border-color); /* Default border color */
}

/* Rounded corners */
.grid--rounded > * {
  border-radius: var(--border-radius, 8px); /* Apply rounded corners */
}

/* Shadow Depth Variants */
.grid--shadow-small > * {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2); /* Small shadow */
}

.grid--shadow-medium > * {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Medium shadow */
}

.grid--shadow-large > * {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4); /* Large shadow */
}

/* Responsive behavior: grid adjusts based on screen size */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* 2 columns on tablet */
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr; /* 1 column on mobile */
  }
}

/* Hover effect for visual feedback on grid items */
.grid > *:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
/* Border Color Variants (Using Theme Colors) */
.grid--primary > * {
  border-color: var(--primary-color);
}

.grid--secondary > * {
  border-color: var(--secondary-color);
}

.grid--info > * {
  border-color: var(--info-color);
}

.grid--warning > * {
  border-color: var(--warning-color);
}

.grid--alert > * {
  border-color: var(--alert-color);
}

.grid--success > * {
  border-color: var(--success-color);
}

.grid--neutral > * {
  border-color: var(--neutral-color);
}

.grid--dark > * {
  border-color: var(--dark-color);
}

/* Classy Palette Variants */
.grid--classy-color-1 > * {
  border-color: var(--classy-color-1);
}

.grid--classy-color-2 > * {
  border-color: var(--classy-color-2);
}

.grid--classy-color-3 > * {
  border-color: var(--classy-color-3);
}

.grid--classy-color-4 > * {
  border-color: var(--classy-color-4);
}

.grid--classy-color-5 > * {
  border-color: var(--classy-color-5);
}

/* Small Switch Palette */
.grid--small-switch-color-1 > * {
  border-color: var(--small-switch-color-1);
}

.grid--small-switch-color-2 > * {
  border-color: var(--small-switch-color-2);
}

/* Natural Palette */
.grid--natural-color-1 > * {
  border-color: var(--natural-color-1);
}

.grid--natural-color-2 > * {
  border-color: var(--natural-color-2);
}

.grid--natural-color-3 > * {
  border-color: var(--natural-color-3);
}

/* Grey Friends */
.grid--grey-friend-1 > * {
  border-color: var(--grey-friend-1);
}

.grid--grey-friend-2 > * {
  border-color: var(--grey-friend-2);
}

/* Shades */
.grid--shade-1 > * {
  border-color: var(--shade-1);
}

.grid--shade-2 > * {
  border-color: var(--shade-2);
}

.grid--shade-3 > * {
  border-color: var(--shade-3);
}

.grid--shade-4 > * {
  border-color: var(--shade-4);
}
```

```jsx
//this.GUI/src/stories/Atoms/Grid/Grid.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css'; // Import the revised grid styles

export const Grid = ({ gap, border, color, rounded, shadow, children }) => {
  const gridClasses = [
    'grid', // Base grid class
    border ? `grid--border grid--${color}` : '', // Conditionally apply border and color
    rounded ? 'grid--rounded' : '', // Conditionally apply rounded corners
    shadow ? `grid--shadow-${shadow}` : '', // Conditionally apply shadow depth
  ].join(' ').trim();

  return (
    <div className={gridClasses} style={{ gap }}>
      {children} {/* Grid items go here */}
    </div>
  );
};

Grid.propTypes = {
  gap: PropTypes.string,
  border: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  rounded: PropTypes.bool, // Boolean for rounded corners
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']), // Depth of shadow
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  gap: '16px', // Default gap between items
  border: false, // Default to no border
  color: 'primary', // Default border color
  rounded: false, // Default to no rounded corners
  shadow: 'none', // Default to no shadow
};
```

```jsx
//this.GUI/src/stories/Atoms/Grid/Grid.stories.jsx
import React from 'react';
import { Grid } from './Grid';

export default {
  title: 'Atoms/Layout/Grid',
  component: Grid,
  argTypes: {
    gap: { control: 'text', defaultValue: '16px' },
    border: { control: 'boolean', defaultValue: false },
    rounded: { control: 'boolean', defaultValue: false },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      defaultValue: 'none',
    },
    color: {
      control: 'select',
      options: [
        'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2',
        'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2',
        'shade-1', 'shade-2', 'shade-3', 'shade-4'
      ],
      defaultValue: 'primary',
    },
  },
};

export const ResponsiveGrid = (args) => (
  <Grid {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
  </Grid>
);

export const GridWithRoundedAndShadow = (args) => (
  <Grid {...args} border={true} rounded={true} shadow="medium" color="primary">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
  </Grid>
);

export const ColorfulGrid = (args) => (
  <Grid {...args} color="alert">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
    <div>Item 7</div>
    <div>Item 8</div>
    <div>Item 9</div>
    <div>Item 10</div>
    <div>Item 11</div>
    <div>Item 12</div>
    <div>Item 13</div>
    <div>Item 14</div>
    <div>Item 15</div>
    <div>Item 16</div>
    <div>Item 17</div>
    <div>Item 18</div>
    <div>Item 19</div>
    <div>Item 20</div>
    <div>Item 21</div>
  </Grid>
);
```

--------

# Heading Component

A flexible heading component that supports different levels, alignments, boldness, and colors. It inherits typography styles from the global theme to ensure consistency across your application.

## Usage

Import the `Heading` component into your React file:

```jsx
import { Heading } from './Heading';
```

Use it within your JSX to display headings:

```jsx
<Heading level={1} align="center" bold color="success">
  This is a Center Aligned Bold H1 Heading
</Heading>
```

## Props

| Prop      | Type                                 | Default      | Description                  |
| --------- | ------------------------------------ | ------------ | ---------------------------- |
| level     | `oneOf([1, 2, 3, 4, 5])`             | `1`          | Heading level from H1 to H5. |
| align     | `oneOf(['left', 'center', 'right'])` | `left`       | Text alignment.              |
| bold      | `bool`                               | `false`      | If `true`, text is bold.     |
| color     | `oneOf([...])`                       | `neutral`    | Color of the heading text.   |
| children  | `node`                               | **Required** | Content of the heading.      |
| className | `string`                             | `''`         | Additional CSS classes.      |
| style     | `object`                             | `{}`         | Inline styles.               |

### `color` Options

- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`
- `classy-color-1`
- `classy-color-2`
- `classy-color-3`
- `classy-color-4`
- `classy-color-5`
- `small-switch-color-1`
- `small-switch-color-2`
- `natural-color-1`
- `natural-color-2`
- `natural-color-3`
- `grey-friend-1`
- `grey-friend-2`
- `shade-1`
- `shade-2`
- `shade-3`
- `shade-4`

## Examples

### Basic Center Aligned Bold H1 Heading

```jsx
<Heading level={1} align="center" bold color="success">
  This is a Center Aligned Bold H1 Heading
</Heading>
```

### Left Aligned Normal H2 Heading

```jsx
<Heading level={2} align="left" color="info">
  This is a Left Aligned Normal H2 Heading
</Heading>
```

### Right Aligned Bold H3 Heading

```jsx
<Heading level={3} align="right" bold color="warning">
  This is a Right Aligned Bold H3 Heading
</Heading>
```

### Interactive Heading

Use the interactive story in Storybook to dynamically adjust the `Heading` props and see real-time changes.

## Notes

- The `Heading` component inherits typography styles from the global CSS, ensuring consistency with your design system.
- Combine props to achieve the desired heading level, alignment, boldness, and color.
- Utilize the `className` and `style` props for additional customizations as needed.
- Refer to Storybook for interactive examples and detailed prop options.

```css
/* src/stories/Atoms/Heading/Heading.css */

.heading {
  font-family: var(--font-family);
  color: var(--text-color);
  margin-bottom: var(--spacing-md);
  transition: color var(--transition-speed) ease;
}

.heading--align-left {
  text-align: left;
}

.heading--align-center {
  text-align: center;
}

.heading--align-right {
  text-align: right;
}

.heading--bold {
  font-weight: var(--font-weight-heavy);
}

.heading--info {
  color: var(--info-color);
}

.heading--warning {
  color: var(--warning-color);
}

.heading--alert {
  color: var(--alert-color);
}

.heading--success {
  color: var(--success-color);
}

.heading--neutral {
  color: var(--neutral-color);
}

.heading--dark {
  color: var(--dark-color);
}

.heading--classy-color-1 {
  color: var(--classy-color-1);
}

.heading--classy-color-2 {
  color: var(--classy-color-2);
}

.heading--classy-color-3 {
  color: var(--classy-color-3);
}

.heading--classy-color-4 {
  color: var(--classy-color-4);
}

.heading--classy-color-5 {
  color: var(--classy-color-5);
}

.heading--small-switch-color-1 {
  color: var(--small-switch-color-1);
}

.heading--small-switch-color-2 {
  color: var(--small-switch-color-2);
}

.heading--natural-color-1 {
  color: var(--natural-color-1);
}

.heading--natural-color-2 {
  color: var(--natural-color-2);
}

.heading--natural-color-3 {
  color: var(--natural-color-3);
}

.heading--grey-friend-1 {
  color: var(--grey-friend-1);
}

.heading--grey-friend-2 {
  color: var(--grey-friend-2);
}

.heading--shade-1 {
  color: var(--shade-1);
}

.heading--shade-2 {
  color: var(--shade-2);
}

.heading--shade-3 {
  color: var(--shade-3);
}

.heading--shade-4 {
  color: var(--shade-4);
}

```

```jsx
// src/stories/Atoms/Heading/Heading.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Heading.css';

export const Heading = ({
  level = 1, // 1 to 5
  align = 'left', // 'left', 'center', 'right'
  bold = false,
  color = 'neutral',
  children,
  className = '',
  style = {},
  ...props
}) => {
  const Tag = `h${level}`;
  const headingClasses = classNames('heading', className, {
    [`heading--align-${align}`]: align,
    'heading--bold': bold,
    [`heading--${color}`]: color,
  });

  return (
    <Tag className={headingClasses} style={style} {...props}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  /** Heading level (1 to 5) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /** Text alignment */
  align: PropTypes.oneOf(['left', 'center', 'right']),
  /** Bold text */
  bold: PropTypes.bool,
  /** Color of the heading text */
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Content of the heading */
  children: PropTypes.node.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Heading/Heading.stories.jsx
import React from 'react';
import { Heading } from './Heading';
import './Heading.css';

export default {
  title: 'Atoms/Text/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
      description: 'Heading level (1 to 5).',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'Text alignment.',
    },
    bold: {
      control: 'boolean',
      description: 'Make the text bold.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Color of the heading text.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
    children: {
      control: 'text',
      description: 'Content of the heading.',
    },
  },
};

/**
 * H1 Center Aligned Bold Heading
 */
export const H1CenterBold = () => (
  <Heading level={1} align="center" bold color="success">
    This is a Center Aligned Bold H1 Heading
  </Heading>
);

/**
 * H2 Left Aligned Normal Heading
 */
export const H2LeftNormal = () => (
  <Heading level={2} align="left" color="info">
    This is a Left Aligned Normal H2 Heading
  </Heading>
);

/**
 * H3 Right Aligned Bold Heading
 */
export const H3RightBold = () => (
  <Heading level={3} align="right" bold color="warning">
    This is a Right Aligned Bold H3 Heading
  </Heading>
);

/**
 * H4 Center Aligned Normal Heading
 */
export const H4CenterNormal = () => (
  <Heading level={4} align="center" color="neutral">
    This is a Center Aligned Normal H4 Heading
  </Heading>
);

/**
 * H5 Left Aligned Bold Heading
 */
export const H5LeftBold = () => (
  <Heading level={5} align="left" bold color="dark">
    This is a Left Aligned Bold H5 Heading
  </Heading>
);

/**
 * Interactive Heading
 */
const Template = (args) => <Heading {...args}>This is an interactive heading.</Heading>;

export const InteractiveHeading = Template.bind({});
InteractiveHeading.args = {
  level: 3,
  align: 'center',
  bold: false,
  color: 'info',
};
InteractiveHeading.storyName = 'Interactive Heading';

```

------------------

# Image Component

A versatile and adaptable image component designed for web and app design. It supports various use cases such as thumbnails, avatars, expandable images, and more. The component ensures flexibility, responsiveness, and accessibility, making it suitable for diverse scenarios.

## Usage

Import the `Image` component into your React file:

```jsx
import { Image } from './Image';
```

Use it within your JSX to display images:

```jsx
<Image
  src="https://via.placeholder.com/300x200"
  alt="Sample Image"
  variant="thumbnail"
  caption="This is a thumbnail image."
/>
```

## Props

| Prop          | Type                                         | Default           | Description                                                  |
| ------------- | -------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| src           | `string`                                     | **Required**      | Source URL of the image.                                     |
| alt           | `string`                                     | **Required**      | Alternative text for the image, crucial for accessibility and SEO. |
| width         | `string` \| `number`                         | `auto`            | Width of the image. Can be in pixels, percentages, or responsive units (e.g., `300`, `50%`, `10vw`). |
| height        | `string` \| `number`                         | `auto`            | Height of the image. Can be in pixels, percentages, or responsive units (e.g., `200`, `50%`, `10vh`). |
| loading       | `oneOf(['lazy', 'eager'])`                   | `'lazy'`          | Loading behavior. `'lazy'` defers loading until the image is near the viewport. `'eager'` loads immediately. |
| title         | `string`                                     | `undefined`       | Tooltip text that appears when hovering over the image.      |
| caption       | `string`                                     | `undefined`       | Caption text displayed below the image.                      |
| variant       | `oneOf(['thumbnail', 'avatar', 'expanded'])` | `'thumbnail'`     | Variant of the image. Determines styling and behavior.       |
| aspectRatio   | `oneOf(['16by9', '4by3', '1by1'])`           | `undefined`       | Aspect ratio of the image to maintain consistent dimensions. |
| crop          | `oneOf(['center', 'top', 'left'])`           | `'center'`        | Crop position of the image within its container.             |
| fallbackSrc   | `string`                                     | `'/fallback.jpg'` | Fallback image source if the main image fails to load.       |
| srcSet        | `string`                                     | `undefined`       | `srcSet` attribute for responsive images, allowing different image sizes for various screen resolutions. |
| sizes         | `string`                                     | `undefined`       | `sizes` attribute defining the display size of the image for different viewport conditions. |
| lazyLoad      | `bool`                                       | `true`            | Enables or disables lazy loading of the image.               |
| onClickExpand | `function`                                   | `undefined`       | Function to handle the expand action when the image is clicked. Useful for integrating with modals or lightboxes. |
| className     | `string`                                     | `''`              | Additional CSS classes for custom styling.                   |
| style         | `object`                                     | `{}`              | Inline styles for custom styling.                            |

## Examples

### Thumbnail Variant

```jsx
<Image
  src="https://via.placeholder.com/300x200"
  alt="Thumbnail Image"
  variant="thumbnail"
  caption="This is a thumbnail image."
/>
```

### Avatar Variant

```jsx
<Image
  src="https://via.placeholder.com/150"
  alt="User Avatar"
  variant="avatar"
  caption="User Avatar"
/>
```

### Expanded Variant

```jsx
<Image
  src="https://via.placeholder.com/800x600"
  alt="Expanded Image"
  variant="expanded"
  caption="This is an expanded image."
  onClickExpand={() => console.log('Image expanded')}
/>
```

### Image with Aspect Ratio

```jsx
<Image
  src="https://via.placeholder.com/400x300"
  alt="16 by 9 Image"
  variant="thumbnail"
  aspectRatio="16by9"
  caption="Image with 16:9 aspect ratio."
/>
```

### Image with Crop

```jsx
<Image
  src="https://via.placeholder.com/400x300"
  alt="Cropped Image"
  variant="thumbnail"
  crop="top"
  caption="Image cropped from the top."
/>
```

### Image with Fallback

```jsx
<Image
  src="https://invalid-url.com/image.jpg"
  alt="Image with fallback"
  variant="thumbnail"
  fallbackSrc="https://via.placeholder.com/300x200?text=Fallback+Image"
  caption="This image failed to load and shows a fallback."
/>
```

### Responsive Image

```jsx
<Image
  src="https://via.placeholder.com/800x600"
  alt="Responsive Image"
  variant="thumbnail"
  srcSet="
    https://via.placeholder.com/400x300 400w,
    https://via.placeholder.com/800x600 800w,
    https://via.placeholder.com/1200x900 1200w
  "
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
  caption="This image is responsive using srcSet and sizes."
/>
```

### Click to Expand Image

```jsx
<Image
  src="https://via.placeholder.com/600x400"
  alt="Clickable Image"
  variant="thumbnail"
  caption="Clicking this image will expand it."
  onClickExpand={() => alert('Image clicked to expand!')}
/>
```

## Notes

- **Variants**: The `variant` prop allows you to switch between different display modes such as `thumbnail`, `avatar`, and `expanded`, each catering to specific use cases.
- **Responsive Behavior**: Utilize the `srcSet` and `sizes` props to ensure images are optimized for various screen sizes and resolutions.
- **Loading States**: The component handles loading and error states gracefully, displaying placeholders or fallback images as needed.
- **Accessibility**: Always provide meaningful `alt` text for images to enhance accessibility and SEO. If the image is interactive, ensure it is focusable and operable via keyboard.
- **Interaction Effects**: The `onClickExpand` prop enables integration with modals or lightboxes, allowing users to view images in greater detail.
- **Customization**: Use the `className` and `style` props to apply additional custom styles beyond the predefined variants and colors.
- **Global Styles**: The component inherits typography and color styles from the global CSS variables defined in your theme, ensuring consistency across your application.



```css
/* src/stories/Atoms/Image/Image.css */

.image-figure {
  position: relative;
  display: inline-block;
  margin: 0;
}

.image__placeholder {
  width: 100%;
  height: 100%;
  background-color: var(--neutral-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background-color);
  position: absolute;
  top: 0;
  left: 0;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease, opacity var(--transition-speed) ease;
  opacity: 0;
}

.image--loaded {
  opacity: 1;
}

.image--error {
  opacity: 1;
}

.image--thumbnail {
  max-width: 100%;
  height: auto;
}

.image--avatar {
  border-radius: 50%;
  object-fit: cover;
  max-width: 100%;
  height: auto;
}

.image--expanded {
  cursor: default;
}

.image--flat {
  cursor: default;
  max-width: none;
}

.image--16by9 {
  aspect-ratio: 16 / 9;
}

.image--4by3 {
  aspect-ratio: 4 / 3;
}

.image--1by1 {
  aspect-ratio: 1 / 1;
}

.image--crop-center {
  object-position: center;
}

.image--crop-top {
  object-position: top;
}

.image--crop-left {
  object-position: left;
}

.image--size-xs {
  width: 30px;
  height: 30px;
}

.image--size-sm {
  width: 50px;
  height: 50px;
}

.image--size-md {
  width: 100px;
  height: 100px;
}

.image--size-lg {
  width: 150px;
  height: 150px;
}

.image--size-xl {
  width: 200px;
  height: 200px;
}

.image:hover {
  transform: scale(1.05);
  box-shadow: var(--box-shadow);
}

.image__caption {
  text-align: center;
  margin-top: var(--spacing-sm);
  font-size: var(--font-size-small);
  color: var(--muted-text-color);
}

/* Overlay Styles */
.image__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity var(--transition-speed) ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-figure:hover .image__overlay {
  opacity: 1;
}

.image__overlay-caption {
  color: #fff;
  font-size: var(--font-size-base);
  text-align: center;
}

.image__overlay-icons {
  display: flex;
  gap: 10px;
}

.image__overlay-icons--center {
  justify-content: center;
}

.image__overlay-icons--top-right {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
}

.image__overlay-icon {
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
}

/* Modal Styles */
.image__modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-index-modal);
}

.image__modal-content {
  position: relative;
  width: 90%;
  max-width: 700px;
  height: 90%;
  max-height: 500px;
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
}

.image__modal-img {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
}

.image__modal-caption {
  margin-top: var(--spacing-sm);
  text-align: center;
  color: var(--text-color);
  font-size: var(--font-size-small);
}

.image__modal-close {
  position: absolute;
  top: var(--spacing-xs);
  right: var(--spacing-xs);
  background: none;
  border: none;
  color: var(--dark-color);
  font-size: 2rem;
  cursor: pointer;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .image--avatar {
    width: 80px;
    height: 80px;
  }

  .image__modal-content {
    width: 95%;
    height: 80%;
    max-width: 90%;
    max-height: 400px;
  }

  .image__overlay-caption {
    font-size: var(--font-size-small);
  }

  .image__overlay-icon {
    font-size: 1.2em;
  }
}

/* Flat Image Styles */
.image--flat:hover {
  transform: none;
  box-shadow: none;
}

```

```jsx
// src/stories/Atoms/Image/Image.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Image.css';

export const Image = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  title,
  caption,
  variant = 'thumbnail', // 'thumbnail', 'avatar', 'expanded', 'flat'
  aspectRatio,
  crop = 'center', // 'center', 'top', 'left'
  fallbackSrc = '/fallback.jpg',
  srcSet,
  sizes,
  lazyLoad = true,
  onClickExpand,
  hoverIcons = [],
  hoverCaption,
  hoverIconPosition = 'center', // 'center', 'top-right'
  size = 'md', // 'xs', 'sm', 'md', 'lg', 'xl'
  className = '',
  style = {},
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setIsError(true);
  };

  const handleExpand = () => {
    if (variant !== 'expanded' && variant !== 'flat') {
      setIsExpanded(true);
    }
    if (onClickExpand) {
      onClickExpand();
    }
  };

  const handleCloseExpand = () => {
    setIsExpanded(false);
  };

  const imageClasses = classNames('image', className, {
    [`image--${variant}`]: variant,
    [`image--${aspectRatio}`]: aspectRatio,
    [`image--${crop}`]: crop,
    [`image--size-${size}`]: size,
    'image--loaded': isLoaded,
    'image--error': isError,
  });

  const showOverlay = variant !== 'flat' && (hoverIcons.length > 0 || hoverCaption);

  return (
    <>
      <figure className="image-figure" style={style} {...props}>
        {!isLoaded && !isError && <div className="image__placeholder">Loading...</div>}
        <img
          src={isError ? fallbackSrc : src}
          alt={alt}
          width={width}
          height={height}
          loading={lazyLoad ? loading : 'eager'}
          title={title}
          className={imageClasses}
          srcSet={srcSet}
          sizes={sizes}
          onLoad={handleImageLoad}
          onError={handleImageError}
          onClick={variant !== 'flat' ? handleExpand : undefined}
          role={variant === 'expanded' ? 'img' : 'button'}
          tabIndex={variant !== 'flat' ? '0' : undefined}
          onKeyPress={(e) => {
            if ((e.key === 'Enter' || e.key === ' ') && variant !== 'flat') {
              handleExpand();
            }
          }}
        />
        {caption && <figcaption className="image__caption">{caption}</figcaption>}

        {showOverlay && (
          <div className="image__overlay">
            {hoverCaption && (
              <div className="image__overlay-caption">
                {hoverCaption}
              </div>
            )}
            {hoverIcons.length > 0 && (
              <div
                className={classNames('image__overlay-icons', {
                  'image__overlay-icons--center': hoverIconPosition === 'center',
                  'image__overlay-icons--top-right': hoverIconPosition === 'top-right',
                })}
              >
                {hoverIcons.map((IconComponent, index) => (
                  <IconComponent key={index} className="image__overlay-icon" />
                ))}
              </div>
            )}
          </div>
        )}
      </figure>

      {isExpanded && (
        <div className="image__modal" onClick={handleCloseExpand} role="dialog" aria-modal="true">
          <div className="image__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image__modal-close" onClick={handleCloseExpand} aria-label="Close">
              &times;
            </button>
            <img src={src} alt={alt} className="image__modal-img" />
            {caption && <div className="image__modal-caption">{caption}</div>}
          </div>
        </div>
      )}
    </>
  );
};

Image.propTypes = {
  /** Source URL of the image */
  src: PropTypes.string.isRequired,
  /** Alternative text for the image */
  alt: PropTypes.string.isRequired,
  /** Width of the image */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Height of the image */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Loading behavior */
  loading: PropTypes.oneOf(['lazy', 'eager']),
  /** Tooltip text */
  title: PropTypes.string,
  /** Caption for the image */
  caption: PropTypes.string,
  /** Variant of the image */
  variant: PropTypes.oneOf(['thumbnail', 'avatar', 'expanded', 'flat']),
  /** Aspect ratio of the image */
  aspectRatio: PropTypes.oneOf(['16by9', '4by3', '1by1']),
  /** Crop position */
  crop: PropTypes.oneOf(['center', 'top', 'left']),
  /** Fallback image source */
  fallbackSrc: PropTypes.string,
  /** srcSet for responsive images */
  srcSet: PropTypes.string,
  /** sizes attribute for responsive images */
  sizes: PropTypes.string,
  /** Enable lazy loading */
  lazyLoad: PropTypes.bool,
  /** Function to handle expand action */
  onClickExpand: PropTypes.func,
  /** Icons to display on hover */
  hoverIcons: PropTypes.arrayOf(PropTypes.elementType),
  /** Caption to display on hover */
  hoverCaption: PropTypes.string,
  /** Position of hover icons */
  hoverIconPosition: PropTypes.oneOf(['center', 'top-right']),
  /** Size of the image */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Image/Image.stories.jsx
import React from 'react';
import { Image } from './Image';
import { FaHeart, FaShare, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import './Image.css';

export default {
  title: 'Atoms/Media/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL of the image.',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image.',
    },
    width: {
      control: 'text',
      description: 'Width of the image.',
    },
    height: {
      control: 'text',
      description: 'Height of the image.',
    },
    loading: {
      control: {
        type: 'select',
        options: ['lazy', 'eager'],
      },
      description: 'Loading behavior.',
    },
    title: {
      control: 'text',
      description: 'Tooltip text.',
    },
    caption: {
      control: 'text',
      description: 'Caption for the image.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['thumbnail', 'avatar', 'expanded', 'flat'],
      },
      description: 'Variant of the image.',
    },
    aspectRatio: {
      control: {
        type: 'select',
        options: ['16by9', '4by3', '1by1'],
      },
      description: 'Aspect ratio of the image.',
    },
    crop: {
      control: {
        type: 'select',
        options: ['center', 'top', 'left'],
      },
      description: 'Crop position of the image.',
    },
    fallbackSrc: {
      control: 'text',
      description: 'Fallback image source if the main image fails to load.',
    },
    srcSet: {
      control: 'text',
      description: 'srcSet for responsive images.',
    },
    sizes: {
      control: 'text',
      description: 'Sizes attribute for responsive images.',
    },
    lazyLoad: {
      control: 'boolean',
      description: 'Enable lazy loading.',
    },
    onClickExpand: {
      action: 'clicked',
      description: 'Function to handle expand action.',
    },
    hoverIcons: {
      control: 'object',
      description: 'Icons to display on hover.',
    },
    hoverCaption: {
      control: 'text',
      description: 'Caption to display on hover.',
    },
    hoverIconPosition: {
      control: {
        type: 'select',
        options: ['center', 'top-right'],
      },
      description: 'Position of hover icons.',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Size of the image.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
  },
};

/**
 * Thumbnail Variant
 */
export const Thumbnail = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Thumbnail Image"
    variant="thumbnail"
    caption="This is a thumbnail image."
    size="md"
  />
);

/**
 * Avatar Variant - 5 Sizes
 */
export const AvatarSizes = () => (
  <div className="avatar-sizes" style={{ display: 'flex', gap: '16px' }}>
    <Image
      src="https://via.placeholder.com/30"
      alt="Avatar XS"
      variant="avatar"
      size="xs"
      caption="XS Avatar"
    />
    <Image
      src="https://via.placeholder.com/50"
      alt="Avatar SM"
      variant="avatar"
      size="sm"
      caption="SM Avatar"
    />
    <Image
      src="https://via.placeholder.com/70"
      alt="Avatar MD"
      variant="avatar"
      size="md"
      caption="MD Avatar"
    />
    <Image
      src="https://via.placeholder.com/90"
      alt="Avatar LG"
      variant="avatar"
      size="lg"
      caption="LG Avatar"
    />
    <Image
      src="https://via.placeholder.com/110"
      alt="Avatar XL"
      variant="avatar"
      size="xl"
      caption="XL Avatar"
    />
  </div>
);

/**
 * Expanded Variant
 */
export const Expanded = () => (
  <Image
    src="https://via.placeholder.com/800x600"
    alt="Expanded Image"
    variant="expanded"
    caption="This is an expanded image."
    onClickExpand={() => console.log('Image expanded')}
  />
);

/**
 * Flat Variant
 */
export const Flat = () => (
  <Image
    src="https://via.placeholder.com/400x300"
    alt="Flat Image"
    variant="flat"
    caption="This is a flat image with no overlay."
  />
);

/**
 * Image with Aspect Ratio
 */
export const ImageWithAspectRatio = () => (
  <Image
    src="https://via.placeholder.com/400x300"
    alt="16 by 9 Image"
    variant="thumbnail"
    aspectRatio="16by9"
    caption="Image with 16:9 aspect ratio."
    size="lg"
  />
);

/**
 * Image with Crop
 */
export const ImageWithCrop = () => (
  <Image
    src="https://via.placeholder.com/400x300"
    alt="Cropped Image"
    variant="thumbnail"
    crop="top"
    caption="Image cropped from the top."
    size="md"
  />
);

/**
 * Image with Fallback
 */
export const ImageWithFallback = () => (
  <Image
    src="https://invalid-url.com/image.jpg"
    alt="Image with fallback"
    variant="thumbnail"
    fallbackSrc="https://via.placeholder.com/300x200?text=Fallback+Image"
    caption="This image failed to load and shows a fallback."
    size="md"
  />
);

/**
 * Responsive Image
 */
export const ResponsiveImage = () => (
  <Image
    src="https://via.placeholder.com/800x600"
    alt="Responsive Image"
    variant="thumbnail"
    srcSet="
      https://via.placeholder.com/400x300 400w,
      https://via.placeholder.com/800x600 800w,
      https://via.placeholder.com/1200x900 1200w
    "
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
    caption="This image is responsive using srcSet and sizes."
    size="lg"
  />
);

/**
 * Click to Expand Image
 */
export const ClickToExpand = () => (
  <Image
    src="https://via.placeholder.com/600x400"
    alt="Clickable Image"
    variant="thumbnail"
    caption="Clicking this image will expand it."
    onClickExpand={() => alert('Image clicked to expand!')}
    size="md"
  />
);

/**
 * On Hover Show Icons at Center
 */
export const HoverIconsCenter = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Hover Icons Center"
    variant="thumbnail"
    caption="Hover to see icons at center."
    hoverIcons={[FaHeart, FaShare]}
    hoverIconPosition="center"
    size="md"
  />
);

/**
 * On Hover Show Caption Overlay
 */
export const HoverCaptionOverlay = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Hover Caption"
    variant="thumbnail"
    hoverCaption="This is an overlay caption."
    size="md"
  />
);

/**
 * On Hover Show Icons at Top Right
 */
export const HoverIconsTopRight = () => (
  <Image
    src="https://via.placeholder.com/300x200"
    alt="Hover Icons Top Right"
    variant="thumbnail"
    hoverIcons={[FaEdit, FaTrash]}
    hoverIconPosition="top-right"
    caption="Hover to see icons at top right."
    size="md"
  />
);

/**
 * Interactive Image
 */
const Template = (args) => <Image {...args} />;

export const InteractiveImage = Template.bind({});
InteractiveImage.args = {
  src: 'https://via.placeholder.com/500x300',
  alt: 'Interactive Image',
  variant: 'thumbnail',
  caption: 'This is an interactive image.',
  aspectRatio: '4by3',
  crop: 'center',
  hoverIcons: [FaSearch],
  hoverCaption: 'Search this image',
  hoverIconPosition: 'center',
  size: 'md',
};

```

------------

# Label Component

The **Label** component is a versatile UI element designed to display categorized information with various styles and configurations. It supports different colors, shapes, sizes, and background options, making it suitable for tagging, status indicators, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Primary Label](#primary-label)
  - [Secondary Label](#secondary-label)
  - [Color Variations](#color-variations)
  - [Shape Variations](#shape-variations)
  - [Size Variations](#size-variations)
- [Props](#props)
- [Styling](#styling)
- [Examples](#examples)
- [Customization](#customization)
- [License](#license)

## Installation

Ensure you have the necessary dependencies installed. If you're using a component library setup, include the `Label` component files in your project.

```bash
# Example using npm
npm install react classnames prop-types
```

## Usage

Import the `Label` component and use it within your React application.

### Basic Usage

```jsx
import React from 'react';
import { Label } from './Label';

const App = () => (
  <div>
    <Label text="Default Label" />
  </div>
);

export default App;
```

### Primary Label

The primary label utilizes the primary color from the global theme and includes a background.

```jsx
<Label
  text="Primary Label"
  color="primary"
  background={true}
  shape="pill"
  size="md"
/>
```

### Secondary Label

The secondary label uses the secondary color, featuring only a border without a background.

```jsx
<Label
  text="Secondary Label"
  color="secondary"
  background={false}
  shape="rounded"
  size="md"
/>
```

### Color Variations

The `Label` component supports a wide range of colors. Here's how to apply different colors:

```jsx
<Label text="Info" color="info" background={true} />
<Label text="Warning" color="warning" background={true} />
<Label text="Alert" color="alert" background={true} />
<Label text="Success" color="success" background={true} />
<Label text="Neutral" color="neutral" background={true} />
<Label text="Dark" color="dark" background={true} />
```

### Shape Variations

You can adjust the shape of the label to be rounded, square, or pill-shaped.

```jsx
<Label text="Rounded" color="info" background={true} shape="rounded" />
<Label text="Square" color="warning" background={true} shape="square" />
<Label text="Pill" color="success" background={true} shape="pill" />
```

### Size Variations

The `Label` component comes in various sizes to fit different UI needs.

```jsx
<Label text="XS" color="neutral" background={true} size="xs" />
<Label text="SM" color="neutral" background={true} size="sm" />
<Label text="MD" color="neutral" background={true} size="md" />
<Label text="LG" color="neutral" background={true} size="lg" />
<Label text="XL" color="neutral" background={true} size="xl" />
```

## Props

| Prop         | Type                                    | Default      | Description                                                  |
| ------------ | --------------------------------------- | ------------ | ------------------------------------------------------------ |
| `text`       | `string`                                | **Required** | The text content displayed inside the label.                 |
| `color`      | `string`                                | `'neutral'`  | The color theme of the label. Options include `'primary'`, `'secondary'`, `'info'`, `'warning'`, `'alert'`, `'success'`, `'neutral'`, `'dark'`, and more custom colors. |
| `background` | `bool`                                  | `true`       | Determines if the label has a background color. If `false` and `color` is `'secondary'`, only a border is displayed. |
| `shape`      | `oneOf(['rounded', 'square', 'pill'])`  | `'rounded'`  | The shape of the label. `'rounded'` for slight curvature, `'square'` for sharp edges, and `'pill'` for fully rounded ends. |
| `size`       | `oneOf(['xs', 'sm', 'md', 'lg', 'xl'])` | `'md'`       | The size of the label, affecting font size and padding.      |
| `className`  | `string`                                | `''`         | Additional CSS classes for custom styling.                   |
| `style`      | `object`                                | `{}`         | Inline styles for additional customization.                  |

## Styling

The `Label` component is styled using CSS classes that correspond to its props. You can customize the appearance by modifying the `Label.css` file or by overriding the CSS variables in your global styles.

### CSS Variables

Ensure the following CSS variables are defined in your global stylesheet to control the colors and spacing:

```css
:root {
  --primary-color: #3490dc;
  --secondary-color: #ffed4a;
  --info-color: #17a2b8;
  --warning-color: #ffc107;
  --alert-color: #dc3545;
  --success-color: #28a745;
  --neutral-color: #6c757d;
  --dark-color: #343a40;
  /* Add other custom colors as needed */
  
  --spacing-md: 1rem;
  --spacing-sm: 0.5rem;
  --spacing-xs: 0.25rem;
  
  --rounded-box: 0.25rem;
  --rounded-btn: 0.25rem;
  
  --font-size-small: 0.875rem;
  --font-size-base: 1rem;
}
```

## Examples

### Primary and Secondary Labels

```jsx
import React from 'react';
import { Label } from './Label';

const App = () => (
  <div>
    <Label
      text="Primary Label"
      color="primary"
      background={true}
      shape="pill"
      size="md"
    />
    <Label
      text="Secondary Label"
      color="secondary"
      background={false}
      shape="rounded"
      size="md"
    />
  </div>
);

export default App;
```

### All Colors

```jsx
import React from 'react';
import { Label } from './Label';

const AllColorsExample = () => (
  <div className="label-colors">
    {[
      'primary',
      'secondary',
      'info',
      'warning',
      'alert',
      'success',
      'neutral',
      'dark',
      'classy-color-1',
      'classy-color-2',
      'classy-color-3',
      'classy-color-4',
      'classy-color-5',
      'small-switch-color-1',
      'small-switch-color-2',
      'natural-color-1',
      'natural-color-2',
      'natural-color-3',
      'grey-friend-1',
      'grey-friend-2',
      'shade-1',
      'shade-2',
      'shade-3',
      'shade-4',
    ].map((color) => (
      <Label
        key={color}
        text={color}
        color={color}
        background={color !== 'secondary'}
        shape="rounded"
        size="sm"
      />
    ))}
  </div>
);

export default AllColorsExample;
```

### Shape and Size Variations

```jsx
import React from 'react';
import { Label } from './Label';

const ShapeSizeExample = () => (
  <div>
    <div className="label-shapes">
      <Label text="Rounded" color="info" background={true} shape="rounded" size="md" />
      <Label text="Square" color="warning" background={true} shape="square" size="md" />
      <Label text="Pill" color="success" background={true} shape="pill" size="md" />
    </div>
    <div className="label-sizes">
      <Label text="XS" color="neutral" background={true} shape="rounded" size="xs" />
      <Label text="SM" color="neutral" background={true} shape="rounded" size="sm" />
      <Label text="MD" color="neutral" background={true} shape="rounded" size="md" />
      <Label text="LG" color="neutral" background={true} shape="rounded" size="lg" />
      <Label text="XL" color="neutral" background={true} shape="rounded" size="xl" />
    </div>
  </div>
);

export default ShapeSizeExample;
```

## Customization

You can further customize the `Label` component by overriding CSS variables or adding additional CSS classes.

### Overriding CSS Variables

```css
:root {
  --primary-color: #1c64f2;
  --secondary-color: #fbbf24;
  /* Customize other colors as needed */
}
```

### Adding Custom Classes

```jsx
<Label
  text="Custom Label"
  color="custom-color"
  background={true}
  shape="rounded"
  size="md"
  className="my-custom-class"
/>
```

```css
.my-custom-class {
  /* Custom styles */
  font-weight: bold;
}
```

## License

MIT License. See [LICENSE](LICENSE) for more information.



```css
/* src/stories/Atoms/Label/Label.css */

.label {
  display: inline-block;
  font-weight: 500;
  text-align: center;
  border-radius: 0.25rem;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;
  cursor: default;
}

.label--background {
  color: #fff;
}

.label--color-primary {
  background-color: var(--primary-color);
}

.label--color-secondary {
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  background-color: transparent;
}

.label--color-info {
  background-color: var(--info-color);
}

.label--color-warning {
  background-color: var(--warning-color);
}

.label--color-alert {
  background-color: var(--alert-color);
}

.label--color-success {
  background-color: var(--success-color);
}

.label--color-neutral {
  background-color: var(--neutral-color);
}

.label--color-dark {
  background-color: var(--dark-color);
}

.label--color-classy-color-1 {
  background-color: var(--classy-color-1);
}

.label--color-classy-color-2 {
  background-color: var(--classy-color-2);
}

.label--color-classy-color-3 {
  background-color: var(--classy-color-3);
}

.label--color-classy-color-4 {
  background-color: var(--classy-color-4);
}

.label--color-classy-color-5 {
  background-color: var(--classy-color-5);
}

.label--color-small-switch-color-1 {
  background-color: var(--small-switch-color-1);
}

.label--color-small-switch-color-2 {
  background-color: var(--small-switch-color-2);
}

.label--color-natural-color-1 {
  background-color: var(--natural-color-1);
}

.label--color-natural-color-2 {
  background-color: var(--natural-color-2);
}

.label--color-natural-color-3 {
  background-color: var(--natural-color-3);
}

.label--color-grey-friend-1 {
  background-color: var(--grey-friend-1);
}

.label--color-grey-friend-2 {
  background-color: var(--grey-friend-2);
}

.label--color-shade-1 {
  background-color: var(--shade-1);
}

.label--color-shade-2 {
  background-color: var(--shade-2);
}

.label--color-shade-3 {
  background-color: var(--shade-3);
}

.label--color-shade-4 {
  background-color: var(--shade-4);
}

/* Secondary Labels (no background) */
.label--color-secondary:not(.label--background) {
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  background-color: transparent;
}

/* Shape Variations */
.label--shape-rounded {
  border-radius: 0.25rem;
}

.label--shape-square {
  border-radius: 0;
}

.label--shape-pill {
  border-radius: 9999px;
}

/* Size Variations */
.label--size-xs {
  font-size: 0.6rem;
  padding: 0.2em 0.4em;
}

.label--size-sm {
  font-size: 0.75rem;
  padding: 0.25em 0.5em;
}

.label--size-md {
  font-size: 0.875rem;
  padding: 0.3em 0.6em;
}

.label--size-lg {
  font-size: 1rem;
  padding: 0.35em 0.7em;
}

.label--size-xl {
  font-size: 1.125rem;
  padding: 0.4em 0.8em;
}

/* Additional Styles */
.label-colors, .label-shapes, .label-sizes {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.label-sizes .label {
  margin-right: var(--spacing-sm);
}

```

```jsx
// src/stories/Atoms/Label/Label.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Label.css';

export const Label = ({
  text,
  color = 'neutral',
  background = true,
  shape = 'rounded', // 'rounded', 'square', 'pill'
  size = 'md', // 'xs', 'sm', 'md', 'lg', 'xl'
  className = '',
  style = {},
  ...props
}) => {
  const labelClasses = classNames('label', className, {
    [`label--color-${color}`]: color,
    [`label--background`]: background && color !== 'secondary',
    [`label--shape-${shape}`]: shape,
    [`label--size-${size}`]: size,
  });

  return (
    <span className={labelClasses} style={style} {...props}>
      {text}
    </span>
  );
};

Label.propTypes = {
  /** Text content of the label */
  text: PropTypes.string.isRequired,
  /** Color of the label */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Whether the label has a background */
  background: PropTypes.bool,
  /** Shape of the label */
  shape: PropTypes.oneOf(['rounded', 'square', 'pill']),
  /** Size of the label */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Label/Label.stories.jsx
import React from 'react';
import { Label } from './Label';
import './Label.css';

export default {
  title: 'Atoms/Text/Label',
  component: Label,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the label.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Color of the label.',
    },
    background: {
      control: 'boolean',
      description: 'Whether the label has a background.',
    },
    shape: {
      control: {
        type: 'select',
        options: ['rounded', 'square', 'pill'],
      },
      description: 'Shape of the label.',
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: 'Size of the label.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
  },
};

/**
 * Primary Label with Background
 */
export const PrimaryLabel = () => (
  <Label
    text="Primary Label"
    color="primary"
    background={true}
    shape="pill"
    size="md"
  />
);

/**
 * Secondary Label without Background
 */
export const SecondaryLabel = () => (
  <Label
    text="Secondary Label"
    color="secondary"
    background={false}
    shape="rounded"
    size="md"
  />
);

/**
 * All Color Variations
 */
export const AllColors = () => (
  <div className="label-colors">
    {[
      'primary',
      'secondary',
      'info',
      'warning',
      'alert',
      'success',
      'neutral',
      'dark',
      'classy-color-1',
      'classy-color-2',
      'classy-color-3',
      'classy-color-4',
      'classy-color-5',
      'small-switch-color-1',
      'small-switch-color-2',
      'natural-color-1',
      'natural-color-2',
      'natural-color-3',
      'grey-friend-1',
      'grey-friend-2',
      'shade-1',
      'shade-2',
      'shade-3',
      'shade-4',
    ].map((color) => (
      <Label
        key={color}
        text={color}
        color={color}
        background={color !== 'secondary'}
        shape="rounded"
        size="sm"
      />
    ))}
  </div>
);

/**
 * Label Shapes
 */
export const LabelShapes = () => (
  <div className="label-shapes">
    <Label text="Rounded" color="info" background={true} shape="rounded" size="md" />
    <Label text="Square" color="warning" background={true} shape="square" size="md" />
    <Label text="Pill" color="success" background={true} shape="pill" size="md" />
  </div>
);

/**
 * Label Sizes
 */
export const LabelSizes = () => (
  <div className="label-sizes">
    <Label text="XS" color="neutral" background={true} shape="rounded" size="xs" />
    <Label text="SM" color="neutral" background={true} shape="rounded" size="sm" />
    <Label text="MD" color="neutral" background={true} shape="rounded" size="md" />
    <Label text="LG" color="neutral" background={true} shape="rounded" size="lg" />
    <Label text="XL" color="neutral" background={true} shape="rounded" size="xl" />
  </div>
);

/**
 * Interactive Label
 */
const Template = (args) => <Label {...args} />;

export const InteractiveLabel = Template.bind({});
InteractiveLabel.args = {
  text: 'Interactive Label',
  color: 'primary',
  background: true,
  shape: 'pill',
  size: 'md',
};

```

-------

# Link Component

The **Link** component is a versatile and customizable element for navigating within and outside your application. It inherits its colors and font sizes from the global theme, ensuring consistency across your UI.

## Features

- **Underline Control**: Toggle underlined text for links.
- **Bold Control**: Toggle bold text for emphasis.
- **External Links**: Indicate external links with an icon.
- **Open in New Window**: Option to open links in a new browser tab.
- **Experimental Preview**: On press (mouse down), a preview of the link's content appears.

## Installation

Ensure you have the necessary dependencies installed. If you're using a component library setup, include the `Link` component files in your project.

```bash
# Example using npm
npm install react classnames prop-types
```

## Usage

Import the `Link` component and use it within your React application.

```jsx
import React from 'react';
import { Link } from './Link';

const App = () => (
  <div>
    <Link
      text="Visit Neurons.me"
      href="https://neurons.me"
      underline={true}
      bold={false}
      newWindow={false}
      external={false}
      experimentalPreview={false}
    />
  </div>
);

export default App;
```

### Props

| Prop                  | Type     | Default      | Description                                                  |
| --------------------- | -------- | ------------ | ------------------------------------------------------------ |
| `text`                | `string` | **Required** | The text content displayed inside the link.                  |
| `href`                | `string` | **Required** | The URL the link points to.                                  |
| `underline`           | `bool`   | `true`       | Whether the link is underlined.                              |
| `bold`                | `bool`   | `false`      | Whether the link text is bold.                               |
| `newWindow`           | `bool`   | `false`      | Whether the link opens in a new browser window/tab.          |
| `external`            | `bool`   | `false`      | Whether the link is external. Adds an external link icon if `true`. |
| `experimentalPreview` | `bool`   | `false`      | Enable experimental preview on press (mouse down). Shows a preview of the link's content. |
| `className`           | `string` | `''`         | Additional CSS classes for custom styling.                   |
| `style`               | `object` | `{}`         | Inline styles for additional customization.                  |

## Styling

The `Link` component inherits its colors and font sizes from the global theme defined in your CSS variables. Ensure the following CSS variables are defined in your global stylesheet to control the appearance:

```css
:root {
  --link-color: #1F877D; /* Neurons teal */
  --link-hover-color: #555555; /* Greyish color on hover */
  --font-family: 'Roboto', sans-serif;
  --font-size-base: 17px;
  --font-weight-bold: 600;
  --transition-speed: 0.3s;
  --box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  --z-index-modal: 1000;
}
```

### Link Styles

- **Underline**: Controlled via the `underline` prop.
- **Bold**: Controlled via the `bold` prop.
- **External Icon**: Displays an external link icon (`🔗`) when the `external` prop is `true`.
- **Hover Effects**: Changes color on hover based on CSS variables.

### Experimental Preview

When the `experimentalPreview` prop is enabled, pressing (mouse down) on the link will display a preview of the linked content in an iframe overlay. The preview is responsive and adapts to different screen sizes.

## Examples

### Underlined and Bold Link

```jsx
<Link
  text="Bold & Underlined Link"
  href="https://neurons.me"
  underline={true}
  bold={true}
  newWindow={false}
  external={false}
  experimentalPreview={false}
/>
```

### No Underline, Not Bold Link

```jsx
<Link
  text="Simple Link"
  href="https://neurons.me"
  underline={false}
  bold={false}
  newWindow={false}
  external={false}
  experimentalPreview={false}
/>
```

### Open in New Window Link

```jsx
<Link
  text="Open in New Window"
  href="https://neurons.me"
  underline={true}
  bold={false}
  newWindow={true}
  external={false}
  experimentalPreview={false}
/>
```

### External Link with Notification

```jsx
<Link
  text="External Link"
  href="https://external.com"
  underline={true}
  bold={false}
  newWindow={true}
  external={true}
  experimentalPreview={false}
/>
```

### Experimental Preview Link

```jsx
<Link
  text="Preview Link"
  href="https://neurons.me"
  underline={true}
  bold={false}
  newWindow={false}
  external={false}
  experimentalPreview={true}
/>
```

### Interactive Link

```jsx
<Link
  text="Interactive Link"
  href="https://neurons.me"
  underline={true}
  bold={true}
  newWindow={true}
  external={true}
  experimentalPreview={true}
/>
```

## Customization

You can further customize the `Link` component by overriding CSS variables or adding additional CSS classes.

### Overriding CSS Variables

```css
:root {
  --link-color: #FF5733; /* Custom link color */
  --link-hover-color: #C70039; /* Custom hover color */
}
```

### Adding Custom Classes

```jsx
<Link
  text="Custom Styled Link"
  href="https://neurons.me"
  underline={true}
  bold={false}
  newWindow={false}
  external={false}
  experimentalPreview={false}
  className="my-custom-link"
/>
```

```css
.my-custom-link {
  font-style: italic;
}
```



## License

MIT License. See LICENSE for more information.



```css
/* src/stories/Atoms/Link/Link.css */

.link {
  color: var(--link-color);
  font-size: var(--font-size-base);
  font-family: var(--font-family);
  transition: color var(--transition-speed) ease, text-decoration var(--transition-speed) ease;
}

.link--underline {
  text-decoration: underline;
}

.link--no-underline {
  text-decoration: none;
}

.link--bold {
  font-weight: var(--font-weight-bold);
}

.link--external {
  display: inline-flex;
  align-items: center;
}

.link__external-icon {
  margin-left: 0.25em;
  font-size: 0.8em;
}

.link:hover {
  color: var(--link-hover-color);
}

.link:hover.text-decoration {
  text-decoration: underline;
}

/* Experimental Preview Styles */
.link__preview {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 700px;
  height: 90%;
  max-height: 500px;
  background-color: #fff;
  border: 2px solid var(--primary-color);
  box-shadow: var(--box-shadow);
  z-index: var(--z-index-modal);
  overflow: hidden;
}

.link__preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive */
@media (max-width: 768px) {
  .link__preview {
    width: 95%;
    height: 80%;
    max-width: 90%;
    max-height: 400px;
  }
}

```

```jsx
// src/stories/Atoms/Link/Link.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Link.css';

export const Link = ({
  text,
  href,
  underline = true,
  bold = false,
  newWindow = false,
  external = false,
  experimentalPreview = false,
  className = '',
  style = {},
  ...props
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleMouseDown = () => {
    if (experimentalPreview) {
      setShowPreview(true);
    }
  };

  const handleMouseUp = () => {
    if (experimentalPreview) {
      setShowPreview(false);
    }
  };

  const linkClasses = classNames('link', className, {
    'link--underline': underline,
    'link--no-underline': !underline,
    'link--bold': bold,
    'link--external': external,
  });

  return (
    <>
      <a
        href={href}
        className={linkClasses}
        target={newWindow ? '_blank' : '_self'}
        rel={newWindow ? 'noopener noreferrer' : undefined}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onBlur={() => setShowPreview(false)}
        {...props}
      >
        {text} {external && <span className="link__external-icon">🔗</span>}
      </a>
      {showPreview && (
        <div className="link__preview">
          <iframe src={href} title="Preview" className="link__preview-iframe" />
        </div>
      )}
    </>
  );
};

Link.propTypes = {
  /** Text content of the link */
  text: PropTypes.string.isRequired,
  /** URL the link points to */
  href: PropTypes.string.isRequired,
  /** Whether the link is underlined */
  underline: PropTypes.bool,
  /** Whether the link text is bold */
  bold: PropTypes.bool,
  /** Whether the link opens in a new window */
  newWindow: PropTypes.bool,
  /** Whether the link is external */
  external: PropTypes.bool,
  /** Enable experimental preview on press */
  experimentalPreview: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Inline styles */
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Link/Link.stories.jsx
import React from 'react';
import { Link } from './Link';
import './Link.css';

export default {
  title: 'Atoms/Text/Link',
  component: Link,
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the link.',
    },
    href: {
      control: 'text',
      description: 'URL the link points to.',
    },
    underline: {
      control: 'boolean',
      description: 'Whether the link is underlined.',
    },
    bold: {
      control: 'boolean',
      description: 'Whether the link text is bold.',
    },
    newWindow: {
      control: 'boolean',
      description: 'Whether the link opens in a new window.',
    },
    external: {
      control: 'boolean',
      description: 'Whether the link is external.',
    },
    experimentalPreview: {
      control: 'boolean',
      description: 'Enable experimental preview on press.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
    style: {
      control: 'object',
      description: 'Inline styles.',
    },
  },
};

/**
 * Default Link
 */
export const DefaultLink = () => (
  <Link
    text="Visit Neurons.me"
    href="https://neurons.me"
    underline={true}
    bold={false}
    newWindow={false}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * Underlined and Bold Link
 */
export const UnderlinedBoldLink = () => (
  <Link
    text="Bold & Underlined Link"
    href="https://neurons.me"
    underline={true}
    bold={true}
    newWindow={false}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * No Underline, Not Bold Link
 */
export const NoUnderlineNotBoldLink = () => (
  <Link
    text="Simple Link"
    href="https://neurons.me"
    underline={false}
    bold={false}
    newWindow={false}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * Open in New Window Link
 */
export const OpenInNewWindow = () => (
  <Link
    text="Open in New Window"
    href="https://neurons.me"
    underline={true}
    bold={false}
    newWindow={true}
    external={false}
    experimentalPreview={false}
  />
);

/**
 * External Link with Notification
 */
export const ExternalLink = () => (
  <Link
    text="External Link"
    href="https://external.com"
    underline={true}
    bold={false}
    newWindow={true}
    external={true}
    experimentalPreview={false}
  />
);

/**
 * Experimental Preview Link
 */
export const ExperimentalPreview = () => (
  <Link
    text="Preview Link"
    href="https://neurons.me"
    underline={true}
    bold={false}
    newWindow={false}
    external={false}
    experimentalPreview={true}
  />
);

/**
 * Interactive Link
 */
const Template = (args) => <Link {...args} />;

export const InteractiveLink = Template.bind({});
InteractiveLink.args = {
  text: 'Interactive Link',
  href: 'https://neurons.me',
  underline: true,
  bold: true,
  newWindow: true,
  external: true,
  experimentalPreview: true,
};

```

--------

# ProgressBar Component Guide

The `ProgressBar` component is a flexible UI element used to visually represent progress or completion of a task. It is fully customizable with options for color, progress percentage, and labels, making it suitable for various use cases such as task completion, file uploads, and process tracking.

### Props

- `progress`: The percentage of progress (0-100).
- `color`: The color of the progress bar, supports a wide range of design tokens like `primary`, `secondary`, `info`, etc.
- `label`: Optional label displayed within the progress bar.
- `showLabel`: Boolean to control whether the label is displayed.
- `className`: Additional custom CSS classes.
- `style`: Inline style overrides.

---

## Use Cases for Progress Bars

### 1. **Task Completion**

The progress bar is ideal for indicating the completion percentage of a task. This is particularly useful in project management or user onboarding scenarios, where visual feedback is required.

#### Example: Task Progress

```jsx
import React from 'react';
import { ProgressBar } from './ProgressBar';

const TaskProgress = () => {
  return (
    <div>
      <h3>Task Completion</h3>
      <ProgressBar progress={70} color="success" label="70% Complete" />
    </div>
  );
};

export default TaskProgress;
```

In this example, the progress bar shows that a task is 70% complete with a green `success` color, providing immediate visual feedback to the user.

---

### 2. **File Upload Progress**

Use the progress bar to display the progress of file uploads or downloads, giving users real-time feedback on how much of the upload or download is complete.

#### Example: File Upload Progress

```jsx
import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';

const FileUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(50);

  return (
    <div>
      <h3>File Upload Progress</h3>
      <ProgressBar progress={uploadProgress} color="info" label={`${uploadProgress}%`} />
    </div>
  );
};

export default FileUpload;
```

In this example, the `ProgressBar` shows the percentage of a file upload, starting at 50%, and can be dynamically updated as the upload progresses.

---

### 3. **Process Completion**

Progress bars are often used to show the stages of a multi-step process, such as checkout processes, form completion, or wizard-style interfaces.

#### Example: Multi-Step Process

```jsx
import React from 'react';
import { ProgressBar } from './ProgressBar';

const MultiStepProcess = () => {
  return (
    <div>
      <h3>Process Completion</h3>
      <ProgressBar progress={40} color="warning" label="Step 2 of 5" />
    </div>
  );
};

export default MultiStepProcess;
```

In this scenario, the progress bar indicates that the user is in the second step of a five-step process, with 40% completion.

---

## Customizing the ProgressBar

The `ProgressBar` component can be customized using various props to control its appearance and behavior:

- **Colors**: You can use design token-based colors such as `primary`, `secondary`, `info`, `success`, `warning`, `alert`, etc.
- **Labels**: Labels can display specific information inside the progress bar, such as a percentage, step number, or custom text.
- **Progress**: The progress can be dynamically updated as tasks or processes are completed.

### Example: Dynamic Color and Label

```jsx
import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';

const DynamicProgressBar = () => {
  const [progress, setProgress] = useState(30);

  const updateProgress = () => {
    setProgress(prev => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div>
      <h3>Dynamic ProgressBar</h3>
      <ProgressBar progress={progress} color={progress >= 100 ? 'success' : 'info'} label={`${progress}%`} />
      <button onClick={updateProgress}>Increase Progress</button>
    </div>
  );
};

export default DynamicProgressBar;
```

In this example, the progress bar starts at 30%, and each time the button is clicked, the progress increases by 10%. The color changes to `success` when the progress reaches 100%.

---

## Key Considerations for ProgressBar

### 1. **Visual Feedback**

Progress bars are effective tools for providing real-time visual feedback on task completion or process status. Ensure the progress percentage is accurate and that visual cues (like color changes) are used to indicate completion states.

### 2. **Accessibility**

Consider accessibility by providing text labels and clear descriptions of progress. Use `aria-valuenow` for dynamically updating the progress percentage for screen readers.

### 3. **Customization**

The `ProgressBar` component supports a wide variety of customization options, including colors, labels, and dynamic updates. Ensure that the progress bar fits the overall design and functionality of your application.

---

## Conclusion

The `ProgressBar` component is a highly versatile tool for visually representing progress across various use cases, including task completion, file uploads, and multi-step processes. By leveraging the flexibility of color schemes, labels, and progress updates, you can create an interactive and engaging user experience.

---

### Example Usage in a Dashboard:

```jsx
const DashboardProgress = () => {
  const [taskProgress, setTaskProgress] = useState(65);

  return (
    <div>
      <h3>Dashboard Progress Overview</h3>
      <ProgressBar progress={taskProgress} color="primary" label={`${taskProgress}% Complete`} />
    </div>
  );
};
```

This example shows how a `ProgressBar` can be integrated into a dashboard to track task completion.



```css
/* this.GUI/src/stories/Atoms/ProgressBar/ProgressBar.css */

.progress-bar-container {
  width: 100%;
  height: 20px;
  background-color: var(--neutral-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  transition: width var(--transition-speed);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  color: var(--text-color-inverse); /* White text for better contrast */
}

.progress-label {
  font-size: 12px;
  font-weight: bold;
}

/* Color Variants */
.progress-bar--primary {
  background-color: var(--primary-color);
}

.progress-bar--secondary {
  background-color: var(--secondary-color);
}

.progress-bar--info {
  background-color: var(--info-color);
}

.progress-bar--warning {
  background-color: var(--warning-color);
}

.progress-bar--alert {
  background-color: var(--alert-color);
}

.progress-bar--success {
  background-color: var(--success-color);
}

.progress-bar--neutral {
  background-color: var(--neutral-color);
}

.progress-bar--dark {
  background-color: var(--dark-color);
}

/* Classy Palette */
.progress-bar--classy-1 {
  background-color: var(--classy-color-1);
}

.progress-bar--classy-2 {
  background-color: var(--classy-color-2);
}

.progress-bar--classy-3 {
  background-color: var(--classy-color-3);
}

.progress-bar--classy-4 {
  background-color: var(--classy-color-4);
}

.progress-bar--classy-5 {
  background-color: var(--classy-color-5);
}

/* Small Switch Palette */
.progress-bar--small-switch-1 {
  background-color: var(--small-switch-color-1);
}

.progress-bar--small-switch-2 {
  background-color: var(--small-switch-color-2);
}

/* Natural Palette */
.progress-bar--natural-1 {
  background-color: var(--natural-color-1);
}

.progress-bar--natural-2 {
  background-color: var(--natural-color-2);
}

.progress-bar--natural-3 {
  background-color: var(--natural-color-3);
}

/* Grey Friends */
.progress-bar--grey-friend-1 {
  background-color: var(--grey-friend-1);
}

.progress-bar--grey-friend-2 {
  background-color: var(--grey-friend-2);
}

/* Shades */
.progress-bar--shade-1 {
  background-color: var(--shade-1);
}

.progress-bar--shade-2 {
  background-color: var(--shade-2);
}

.progress-bar--shade-3 {
  background-color: var(--shade-3);
}

.progress-bar--shade-4 {
  background-color: var(--shade-4);
}

```

```jsx
// this.GUI/src/stories/Atoms/ProgressBar/ProgressBar.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css'; // Import the CSS styles

export const ProgressBar = ({
  progress = 0, // Default to 0% progress
  color = 'primary', // Can be 'primary', 'secondary', 'info', 'warning', etc.
  label = '', // Optional label text
  showLabel = true, // Show or hide the label
  className = '',
  style = {},
  ...props
}) => {
  const colorClass = `progress-bar--${color}`;

  return (
    <div className={`progress-bar-container ${className}`} style={style} {...props}>
      <div className={`progress-bar ${colorClass}`} style={{ width: `${progress}%` }}>
        {showLabel && <span className="progress-label">{label}</span>}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-1', 'classy-2', 'classy-3', 'classy-4', 'classy-5',
    'small-switch-1', 'small-switch-2',
    'natural-1', 'natural-2', 'natural-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

```

```jsx
// this.GUI/src/stories/Atoms/ProgressBar/ProgressBar.stories.jsx
import React from 'react';
import { ProgressBar } from './ProgressBar';
import './ProgressBar.css'; // Import the CSS styles

export default {
  title: 'Atoms/Feedback/ProgressBar',
  component: ProgressBar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-1', 'classy-2', 'classy-3', 'classy-4', 'classy-5',
          'small-switch-1', 'small-switch-2',
          'natural-1', 'natural-2', 'natural-3',
          'grey-friend-1', 'grey-friend-2',
          'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ],
      },
      description: 'Semantic color of the progress bar.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    progress: {
      control: {
        type: 'number',
      },
      description: 'Percentage of progress completed.',
      table: {
        type: { summary: 'number' },
      },
    },
    label: {
      control: 'text',
      description: 'Optional label text displayed within the progress bar.',
      table: {
        type: { summary: 'string' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to display the label within the progress bar.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  color: 'primary',
  label: '50% Complete',
  showLabel: true,
};

export const WithDifferentColors = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    {[
      'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
      'classy-1', 'classy-2', 'classy-3', 'classy-4', 'classy-5',
      'small-switch-1', 'small-switch-2',
      'natural-1', 'natural-2', 'natural-3',
      'grey-friend-1', 'grey-friend-2',
      'shade-1', 'shade-2', 'shade-3', 'shade-4'
    ].map((color) => (
      <ProgressBar key={color} progress={75} color={color} label={`${color} bar`} />
    ))}
  </div>
);

export const InteractivePlayground = Template.bind({});
InteractivePlayground.args = {
  progress: 60,
  color: 'info',
  label: 'Interactive Progress',
  showLabel: true,
};

```

-------

# RadioButton Component Guide

The `RadioButton` component is a flexible and customizable radio input element that allows users to select one option from a group of predefined choices. It supports various design tokens and styling options for use in different contexts, including forms, settings, and configuration panels.

### Props

- `label`: The text label for the radio button.
- `checked`: The boolean state for whether the radio button is selected or not.
- `onChange`: A function that triggers when the state changes.
- `variant`: Choose between `primary` and `secondary` variants for different visual styles.
- `size`: The size of the radio button, can be `small`, `normal`, or `large`.
- `color`: Supports a wide range of semantic colors from the design system.
- `rounded`: Boolean prop for rendering a rounded or square radio button.
- `disabled`: Boolean to disable the radio button interaction.
- `name`: The name attribute to group radio buttons together.
- `className`: Additional custom CSS classes.

------

## Use Cases for Radio Buttons

### 1. **Multiple Choice Questions**

Radio buttons are commonly used in forms to select one option from several. For example, choosing a payment method where only one option can be selected (e.g., Credit Card or PayPal).

#### Example: Choosing a Payment Method

```jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

const PaymentMethodSelection = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <div>
      <h3>Select Payment Method</h3>
      <RadioButton
        label="Credit Card"
        name="payment"
        checked={selectedMethod === 'Credit Card'}
        onChange={() => setSelectedMethod('Credit Card')}
      />
      <RadioButton
        label="PayPal"
        name="payment"
        checked={selectedMethod === 'PayPal'}
        onChange={() => setSelectedMethod('PayPal')}
      />
    </div>
  );
};

export default PaymentMethodSelection;
```

In this example, the user selects one payment method from "Credit Card" or "PayPal". The `name` prop ensures that both buttons are grouped, so only one can be selected at a time.

------

### 2. **Settings or Preferences**

Radio buttons are great for settings where a user must choose between options, such as selecting a language, theme, or other configuration options.

#### Example: Choosing a Language Option

```jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <div>
      <h3>Select Language</h3>
      <RadioButton
        label="English"
        name="language"
        checked={selectedLanguage === 'English'}
        onChange={() => setSelectedLanguage('English')}
      />
      <RadioButton
        label="Spanish"
        name="language"
        checked={selectedLanguage === 'Spanish'}
        onChange={() => setSelectedLanguage('Spanish')}
      />
      <RadioButton
        label="French"
        name="language"
        checked={selectedLanguage === 'French'}
        onChange={() => setSelectedLanguage('French')}
      />
    </div>
  );
};

export default LanguageSelection;
```

In this example, the user selects one language option from a list. Radio buttons ensure that only one language can be selected at a time.

------

### 3. **Single-Option Selectors**

When only one answer is allowed for a question, radio buttons are ideal. For example, selecting a subscription plan (e.g., Basic, Standard, or Premium).

#### Example: Selecting a Subscription Plan

```jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

const SubscriptionPlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');

  return (
    <div>
      <h3>Select Subscription Plan</h3>
      <RadioButton
        label="Basic Plan"
        name="subscription"
        checked={selectedPlan === 'Basic'}
        onChange={() => setSelectedPlan('Basic')}
      />
      <RadioButton
        label="Standard Plan"
        name="subscription"
        checked={selectedPlan === 'Standard'}
        onChange={() => setSelectedPlan('Standard')}
      />
      <RadioButton
        label="Premium Plan"
        name="subscription"
        checked={selectedPlan === 'Premium'}
        onChange={() => setSelectedPlan('Premium')}
      />
    </div>
  );
};

export default SubscriptionPlanSelection;
```

In this example, the user selects one subscription plan. The radio button ensures only one plan is chosen at any given time.

------

## Radio Button in User Interface Design

### Key Considerations:

1. **Single Selection**: Radio buttons are perfect for situations where users need to select only one option from a group.
2. **Clear Labeling**: Each radio button should have a clearly labeled description to ensure the user understands the choices.
3. **Grouping**: Radio buttons with the same `name` will behave as a group, allowing only one selection at a time.
4. **Accessibility**: Always ensure that radio buttons are accessible by using descriptive labels and considering screen reader users.

### Customization:

- **Variants and Sizes**: Use `primary` or `secondary` variants and adjust the size (`small`, `normal`, `large`) for visual differentiation.
- **Colors**: Radio buttons can inherit any color from your design system, such as `info`, `warning`, `alert`, etc.
- **Rounded/Squared**: Control whether the radio button is rounded or squared using the `rounded` prop.

------

## Conclusion

The `RadioButton` component is versatile and can be used in a wide range of use cases where only one option should be selected. It’s customizable with colors, sizes, and styles to match the look and feel of your application. Use it for multiple choice questions, settings, single-option selectors, and more.

------

### Example Usage in a Form:

```jsx
const ExampleForm = () => {
  const [selection, setSelection] = useState('');

  return (
    <form>
      <h3>Example Form</h3>
      <RadioButton
        label="Option 1"
        name="example"
        checked={selection === 'Option 1'}
        onChange={() => setSelection('Option 1')}
      />
      <RadioButton
        label="Option 2"
        name="example"
        checked={selection === 'Option 2'}
        onChange={() => setSelection('Option 2')}
      />
    </form>
  );
};
```

This guide provides several use cases and examples to get started with the `RadioButton` component.

------

In web and app development design, a **radio button** is a form element that allows users to **select one option from a group of predefined choices**. It is a type of input element that visually presents a set of mutually exclusive options, where only one selection is possible at any given time within a group.

#### **Key Characteristics of Radio Buttons:**

1. **Single Selection**:

​	• Radio buttons are grouped together, and **only one button in the group can be selected** at a time. When a user selects a radio button, any previously selected button in the group is automatically deselected.

2. **Mutually Exclusive Options**:

​	• They are used when you want users to choose **only one option from a list of two or more** choices.

​	• If multiple selections are needed, checkboxes (not radio buttons) should be used instead.

3. **Visual Representation**:

​	• Radio buttons typically appear as **small circles** next to each option. When selected, the circle is filled with a dot or another visual indicator.

4. **Grouped by** name **Attribute**:

​	• In HTML, radio buttons that belong to the same group (where only one can be selected) must have the same name attribute. This groups the radio buttons together, ensuring only one can be selected.

#### **Use Cases for Radio Buttons:**

1.**Multiple Choice Questions**: Used in forms where a user needs to select one answer from several.

**Example:** Choosing a payment method (credit card, PayPal, etc.).

2. **Settings or Preferences**: For selecting a single configuration option, like choosing a language or theme (light/dark mode).

**Example:** Selecting a gender option (Male, Female, Other).

3. **Single-Option Selectors**: When only one answer is allowed for a question, radio buttons are used instead of checkboxes.

**Example:** Subscription plan selection (Basic, Standard, Premium).

```css
/* src/stories/Atoms/RadioButton/RadioButton.css */

/* Base RadioButton Styles */
.radio-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size-base); /* Inherit base font size */
  color: var(--text-color);
  user-select: none;
}

/* Disabled State */
.radio-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Hidden RadioButton Input */
.radio-button input {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Custom RadioButton */
.radio-button::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  background-color: var(--background-color);
  transition: background-color var(--transition-speed), border-color var(--transition-speed);
}

/* Checked State */
.radio-button input:checked + .radio-button__label::before {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

/* Dot inside radio button */
.radio-button input:checked + .radio-button__label::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 6px;
  width: 6px;
  height: 6px;
  background-color: var(--text-color-inverse);
  border-radius: 50%;
}

/* Variants */
.radio-button--primary::before {
  border-color: var(--primary-color);
}

.radio-button--secondary::before {
  border-color: var(--secondary-color);
}

/* Sizes */
.radio-button--small {
  font-size: var(--font-size-small); /* Inherit small font size */
}

.radio-button--large {
  font-size: var(--font-size-large); /* Inherit large font size */
}

.radio-button--small::before {
  width: 12px;
  height: 12px;
}

.radio-button--large::before {
  width: 20px;
  height: 20px;
}

/* Color Classes */
.info {
  --primary-color: var(--info-color);
}

.warning {
  --primary-color: var(--warning-color);
}

.alert {
  --primary-color: var(--alert-color);
}

.success {
  --primary-color: var(--success-color);
}

.neutral {
  --primary-color: var(--neutral-color);
}

.dark {
  --primary-color: var(--dark-color);
}

/* Additional color classes for customization */
.classy-color-1 { --primary-color: var(--classy-color-1); }
.classy-color-2 { --primary-color: var(--classy-color-2); }
.classy-color-3 { --primary-color: var(--classy-color-3); }
.classy-color-4 { --primary-color: var(--classy-color-4); }
.classy-color-5 { --primary-color: var(--classy-color-5); }
.small-switch-color-1 { --primary-color: var(--small-switch-color-1); }
.small-switch-color-2 { --primary-color: var(--small-switch-color-2); }
.natural-color-1 { --primary-color: var(--natural-color-1); }
.natural-color-2 { --primary-color: var(--natural-color-2); }
.natural-color-3 { --primary-color: var(--natural-color-3); }
.grey-friend-1 { --primary-color: var(--grey-friend-1); }
.grey-friend-2 { --primary-color: var(--grey-friend-2); }
.shade-1 { --primary-color: var(--shade-1); }
.shade-2 { --primary-color: var(--shade-2); }
.shade-3 { --primary-color: var(--shade-3); }
.shade-4 { --primary-color: var(--shade-4); }

```

```jsx
// src/stories/Atoms/RadioButton/RadioButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RadioButton.css';

export const RadioButton = ({
  label,
  checked = false,
  onChange,
  variant = 'primary',
  size = 'normal',
  color = 'info',
  rounded = false,
  disabled = false,
  name = '',
  className = '',
  ...props
}) => {
  const radioButtonClasses = classNames('radio-button', className, {
    [`radio-button--${variant}`]: variant,
    [`radio-button--${size}`]: size !== 'normal',
    [color]: color,
    'radio-button--rounded': rounded,
    'radio-button--disabled': disabled,
  });

  return (
    <label className={radioButtonClasses}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        {...props}
      />
      <span className="radio-button__label">{label}</span>
    </label>
  );
};

RadioButton.propTypes = {
  /** Label text for the radio button */
  label: PropTypes.string.isRequired,
  /** Checked state of the radio button */
  checked: PropTypes.bool,
  /** Change handler */
  onChange: PropTypes.func,
  /** Radio button variant */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Size of the radio button */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Color from the global palette */
  color: PropTypes.oneOf([
    'info',
    'warning',
    'alert',
    'success',
    'neutral',
    'dark',
    'classy-color-1',
    'classy-color-2',
    'classy-color-3',
    'classy-color-4',
    'classy-color-5',
    'small-switch-color-1',
    'small-switch-color-2',
    'natural-color-1',
    'natural-color-2',
    'natural-color-3',
    'grey-friend-1',
    'grey-friend-2',
    'shade-1',
    'shade-2',
    'shade-3',
    'shade-4',
  ]),
  /** Rounded or squared */
  rounded: PropTypes.bool,
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Name of the radio button group */
  name: PropTypes.string.isRequired,
  /** Additional CSS classes */
  className: PropTypes.string,
};

```

```jsx
// src/stories/Atoms/RadioButton/RadioButton.stories.jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';
import './RadioButton.css';

export default {
  title: 'Atoms/Interactive/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text', defaultValue: 'Radio Button Label' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'Radio button variant.',
    },
    size: {
      control: { type: 'select', options: ['small', 'normal', 'large'] },
      description: 'Radio button size.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'info',
          'warning',
          'alert',
          'success',
          'neutral',
          'dark',
          'classy-color-1',
          'classy-color-2',
          'classy-color-3',
          'classy-color-4',
          'classy-color-5',
          'small-switch-color-1',
          'small-switch-color-2',
          'natural-color-1',
          'natural-color-2',
          'natural-color-3',
          'grey-friend-1',
          'grey-friend-2',
          'shade-1',
          'shade-2',
          'shade-3',
          'shade-4',
        ],
      },
      description: 'Radio button color.',
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded or squared radio button.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the radio button.',
    },
  },
};

/**
 * Primary RadioButton - Normal Size
 */
export const PrimaryNormal = () => (
  <RadioButton label="Primary Normal RadioButton" variant="primary" size="normal" color="info" name="group1" />
);

/**
 * Secondary RadioButton - Large Size - Rounded
 */
export const SecondaryLargeRounded = () => (
  <RadioButton label="Secondary Large Rounded RadioButton" variant="secondary" size="large" color="warning" rounded name="group2" />
);

/**
 * Primary RadioButton - Small Size - Rounded
 */
export const PrimarySmallRounded = () => (
  <RadioButton label="Primary Small Rounded RadioButton" variant="primary" size="small" color="success" rounded name="group3" />
);

/**
 * Secondary RadioButton - Normal Size
 */
export const SecondaryNormal = () => (
  <RadioButton label="Secondary Normal RadioButton" variant="secondary" size="normal" color="neutral" name="group4" />
);

/**
 * Interactive RadioButton
 */
const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (args.onChange) args.onChange(e);
  };

  return <RadioButton {...args} checked={checked} onChange={handleChange} />;
};

export const InteractiveRadioButton = Template.bind({});
InteractiveRadioButton.args = {
  label: 'Interactive RadioButton',
  variant: 'primary',
  size: 'normal',
  color: 'info',
  rounded: false,
  disabled: false,
  checked: false,
  name: 'interactive',
};
InteractiveRadioButton.storyName = 'Interactive RadioButton';

```

--------

# Range Component Guide

The `Range` component allows users to select a numeric value within a specified range by dragging a slider. It is customizable in terms of appearance, colors, and functionality, making it suitable for different use cases like adjusting volume, brightness, or selecting a price range.

### Key Props

- **`min`**: Minimum value (default: `0`).
- **`max`**: Maximum value (default: `100`).
- **`step`**: Incremental step between values (default: `1`).
- **`value`**: Current value of the slider (default: `50`).
- **`onChange`**: Function triggered when the value changes.
- **`color`**: Color of the filled part of the range track (default: `primary`).
- **`thumbColor`**: Color of the thumb (controller) (default: `primary`).
- **`showValue`**: Whether to display the current value next to the slider (default: `true`).
- **`label`**: Label to describe the slider (default: `''`).
- **`disabled`**: Disable the slider (default: `false`).
- **`width`**: Custom width of the range component (default: `100%`).

---

## Basic Usage

### Example 1: Simple Volume Control

```jsx
import React, { useState } from 'react';
import { Range } from './Range';

const VolumeControl = () => {
  const [volume, setVolume] = useState(50);

  return (
    <div>
      <h3>Volume Control</h3>
      <Range
        min={0}
        max={100}
        step={1}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        color="primary"
        thumbColor="info"
        showValue={true}
        label="Volume"
      />
    </div>
  );
};

export default VolumeControl;
```

**Key points**:

- Sets the volume between `0` and `100`.
- Displays the value beside the slider (`showValue` is `true`).
- Uses the `primary` color for the filled range and `info` color for the thumb.

---

### Example 2: Custom Width and Disabled State

```jsx
import React, { useState } from 'react';
import { Range } from './Range';

const BrightnessControl = () => {
  const [brightness, setBrightness] = useState(30);

  return (
    <div>
      <h3>Brightness Control</h3>
      <Range
        min={0}
        max={100}
        step={5}
        value={brightness}
        onChange={(e) => setBrightness(Number(e.target.value))}
        color="success"
        thumbColor="warning"
        showValue={true}
        label="Brightness"
        disabled={false}
        width="300px"  // Custom width
      />
    </div>
  );
};

export default BrightnessControl;
```

**Key points**:

- Custom width set to `300px`.
- Uses `success` color for the range and `warning` for the thumb.
- Step size set to `5` for more granular control.

---

### Example 3: Interactive Range in a Form

```jsx
import React, { useState } from 'react';
import { Range } from './Range';

const PriceRangeSelector = () => {
  const [price, setPrice] = useState(250);

  return (
    <div>
      <h3>Price Range</h3>
      <Range
        min={100}
        max={500}
        step={10}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        color="alert"
        thumbColor="dark"
        showValue={true}
        label="Select Price"
      />
      <p>Selected Price: ${price}</p>
    </div>
  );
};

export default PriceRangeSelector;
```

**Key points**:

- A price range between `100` and `500` with a step of `10`.
- The filled part of the range is `alert` color and the thumb is `dark`.
- Dynamically displays the selected price.

---

## Prop Summary

| Prop         | Type       | Default   | Description                                              |
| ------------ | ---------- | --------- | -------------------------------------------------------- |
| `min`        | `number`   | `0`       | Minimum value of the range.                              |
| `max`        | `number`   | `100`     | Maximum value of the range.                              |
| `step`       | `number`   | `1`       | Step size between values.                                |
| `value`      | `number`   | `50`      | Current value of the range.                              |
| `onChange`   | `function` | `null`    | Function triggered on value change.                      |
| `color`      | `string`   | `primary` | Color of the filled portion of the range.                |
| `thumbColor` | `string`   | `primary` | Color of the thumb (controller).                         |
| `showValue`  | `boolean`  | `true`    | Whether to display the current value next to the slider. |
| `label`      | `string`   | `''`      | Label to describe the range input.                       |
| `disabled`   | `boolean`  | `false`   | Whether the slider is disabled.                          |
| `width`      | `string`   | `100%`    | Custom width for the range component.                    |

---

## Responsive Design

The `Range` component is fully responsive, adapting to its container's width. You can further customize its width using the `width` prop or CSS.

### Example: Responsive Behavior

```jsx
<Range width="100%" />
```

By default, the width of the range will be `100%`, but you can adjust it with CSS or directly via the `width` prop.

---

A **range input** is a type of user interface element in web and app development that allows users to select a value or range of values by **moving a slider along a track**. The input element represents a numeric value, and it typically shows a continuous or discrete range of values. It’s commonly used for setting values like volume, brightness, price ranges, or other parameters where users need to choose a value within a specified range.

Here’s a brief markdown guide on how to use the `Range` component, including usage examples with key props like `color`, `thumbColor`, `width`, and more.

```css
/* src/stories/Atoms/Range/Range.css */

/* Base Range Styles */
.range {
  display: flex;
  align-items: center;
  width: 100%;
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--text-color);
}

.range__label {
  margin-right: var(--spacing-md);
  font-weight: var(--font-weight-medium);
}

.range__wrapper {
  flex-grow: 1;
  position: relative;
}

/* The range input */
.range__input {
  appearance: none;
  width: 100%;
  height: 8px;
  background: linear-gradient(
    to right,
    var(--primary-color) 0%,
    var(--primary-color) 0%,
    var(--neutral-color) 0%
  );
  border-radius: 5px;
  outline: none;
  transition: background-size var(--transition-speed);
}

/* Thumb Style */
.range__input::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--thumb-color); /* Thumb color */
  border-radius: 50%;
  cursor: pointer;
  transition: background-color var(--transition-speed);
}

.range__input::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background-color: var(--thumb-color); /* Thumb color */
  border-radius: 50%;
  cursor: pointer;
}

/* Value Display */
.range__value {
  margin-left: var(--spacing-md);
  font-weight: var(--font-weight-medium);
}

/* Disabled State */
.range--disabled .range__input {
  background-color: var(--neutral-color-hover);
}

.range--disabled .range__input::-webkit-slider-thumb {
  background-color: var(--neutral-color-hover);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .range__input {
    height: 6px;
  }

  .range__input::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
  }

  .range__input::-moz-range-thumb {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .range__input {
    height: 4px;
  }

  .range__input::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
  }

  .range__input::-moz-range-thumb {
    width: 12px;
    height: 12px;
  }
}

/* Color Variants (Track) */
.range--primary .range__input {
  background: linear-gradient(
    to right,
    var(--primary-color) 0%,
    var(--neutral-color) 0%
  );
}

.range--secondary .range__input {
  background: linear-gradient(
    to right,
    var(--secondary-color) 0%,
    var(--neutral-color) 0%
  );
}

.range--info .range__input {
  background: linear-gradient(
    to right,
    var(--info-color) 0%,
    var(--neutral-color) 0%
  );
}

.range--warning .range__input {
  background: linear-gradient(
    to right,
    var(--warning-color) 0%,
    var(--neutral-color) 0%
  );
}

.range--alert .range__input {
  background: linear-gradient(
    to right,
    var(--alert-color) 0%,
    var(--neutral-color) 0%
  );
}

.range--success .range__input {
  background: linear-gradient(
    to right,
    var(--success-color) 0%,
    var(--neutral-color) 0%
  );
}

.range--neutral .range__input {
  background: linear-gradient(
    to right,
    var(--neutral-color) 0%,
    var(--neutral-color) 0%
  );
}

.range--dark .range__input {
  background: linear-gradient(
    to right,
    var(--dark-color) 0%,
    var(--neutral-color) 0%
  );
}

```

```jsx
// src/stories/Atoms/Range/Range.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Range.css';

export const Range = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange,
  color = 'primary', // Color of the filled range
  thumbColor = 'primary', // Color of the thumb (controller)
  showValue = true,
  label = '',
  disabled = false,
  className = '',
  ...props
}) => {
  const rangeClasses = classNames('range', className, {
    [`range--${color}`]: color,
    'range--disabled': disabled,
  });

  // Calculate the percentage of the range that has been covered
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={rangeClasses}>
      {label && <label className="range__label">{label}</label>}
      <div className="range__wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="range__input"
          {...props}
          style={{
            background: `linear-gradient(to right, var(--${color}-color) ${percentage}%, var(--neutral-color) ${percentage}%)`,
            '--thumb-color': `var(--${thumbColor}-color)`, // Setting the thumb color dynamically
          }} // Set the background gradient dynamically and thumb color
        />
      </div>
      {showValue && <span className="range__value">{value}</span>}
    </div>
  );
};

Range.propTypes = {
  /** Minimum value for the range */
  min: PropTypes.number,
  /** Maximum value for the range */
  max: PropTypes.number,
  /** Step value */
  step: PropTypes.number,
  /** Current value of the range */
  value: PropTypes.number,
  /** Change handler */
  onChange: PropTypes.func.isRequired,
  /** Color for the filled portion of the range */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Color for the thumb (controller) */
  thumbColor: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Whether to display the current value next to the slider */
  showValue: PropTypes.bool,
  /** Label for the range input */
  label: PropTypes.string,
  /** Whether the range input is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

```

```jsx
// src/stories/Atoms/Range/Range.stories.jsx
import React, { useState } from 'react';
import { Range } from './Range';
import './Range.css';

export default {
  title: 'Atoms/Interactive/Range',
  component: Range,
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value of the range input.',
    },
    min: {
      control: 'number',
      description: 'Minimum value for the range.',
    },
    max: {
      control: 'number',
      description: 'Maximum value for the range.',
    },
    step: {
      control: 'number',
      description: 'Step size for the range input.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color of the range component.',
    },
    thumbColor: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color of the thumb (controller).',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to display the current value.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the range input.',
    },
    label: {
      control: 'text',
      description: 'Label for the range input.',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Range
      {...args}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};

export const DefaultRange = Template.bind({});
DefaultRange.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  color: 'primary',
  thumbColor: 'primary',
  showValue: true,
  label: 'Volume',
  disabled: false,
};

export const WithDifferentThumbColors = () => (
  <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
    <Range min={0} max={100} value={75} color="info" thumbColor="warning" label="Brightness" />
    <Range min={0} max={100} value={40} color="warning" thumbColor="alert" label="Contrast" />
    <Range min={0} max={100} value={25} color="success" thumbColor="dark" label="Volume" />
  </div>
);

export const InteractiveRange = Template.bind({});
InteractiveRange.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  color: 'primary',
  thumbColor: 'info',
  showValue: true,
  label: 'Volume Control',
  disabled: false,
};
InteractiveRange.storyName = 'Interactive Range';

```

--------

**Section Component Documentation**

The **Section** component is a basic layout component designed to organize and structure content within an application. It provides an easy way to create sections with customizable margins, paddings, and other layout properties. Additionally, you can customize the appearance with background colors, borders, shadows, and more.


 <h2>Section Title</h2>

  <p>This is the content inside the section.</p>

This will render a section with default margins, paddings, and a simple content layout.

**Props**

The **Section** component comes with several props that allow you to customize its appearance and behavior.

**Background Color**

You can apply a background color using the color prop and set background to true:

```jsx
<Section color="primary" background={true}>
 <h2>Section with Primary Background</h2>
  <p>This section has a primary background color.</p>
</Section>
```

**Full Width Section**

To create a full-width section, set the fullWidth prop to true:

```jsx
<Section fullWidth={true} color="secondary" background={true}>
 <h2>Full Width Section</h2>
  <p>This section spans the full width of the viewport.</p>
</Section>
```



**Section with a Title**

You can pass a title prop to provide a heading for the section:

```jsx
<Section title="Section Title" border={true}>
  <p>This section has a title for easy navigation and structure.</p>
</Section>
```

**Color Variants**

The **Section** component supports all theme-based colors for both borders and backgrounds. The following colors are available:

​	•	**Primary**: primary-color

​	•	**Secondary**: secondary-color

​	•	**Info**: info-color

​	•	**Warning**: warning-color

​	•	**Alert**: alert-color

​	•	**Success**: success-color

​	•	**Neutral**: neutral-color

​	•	**Dark**: dark-color

​	•	**Classy Palette**: classy-color-1, classy-color-2, etc.

​	•	**Small Switch Palette**: small-switch-color-1, small-switch-color-2

​	•	**Natural Palette**: natural-color-1, natural-color-2, natural-color-3

​	•	**Grey Friends**: grey-friend-1, grey-friend-2

​	•	**Shades**: shade-1, shade-2, shade-3, shade-4

**Example Using Color Variants**

```jsx
<Section border={true} color="warning">
 <h2>Warning Section</h2>
  <p>This section has a warning border color.</p>
</Section>

<Section background={true} color="success">
 <h2>Success Section</h2>
  <p>This section has a success background color.</p>
</Section>
```

**Conclusion**

The **Section** component is highly customizable and serves as an essential building block for organizing layouts and content within an application. You can use it to create well-structured, responsive sections that adapt to various screen sizes and layout requirements.



```css
/* this.GUI/src/stories/Atoms/Section/Section.css */
/* Base Section Styles */
.section {
  margin: var(--spacing-md) 0;
  padding: var(--spacing-md);
  background-color: var(--background-color);
  transition: all var(--transition-speed) ease;
}

/* Border Styles for Section */
.section--border {
  border: 1px solid var(--border-color); /* Default border color */
}

.section--full-width {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: var(--spacing-lg);
}

/* Shadow Variants */
.section--shadow-small {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.section--shadow-medium {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.section--shadow-large {
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
}

/* Title Styling */
.section__title {
  margin-bottom: var(--spacing-md);
  color: var(--text-color);
  font-weight: var(--font-weight-bold);
}

/* Border Color Variants - Primary and Secondary Colors */
.section--border-primary {
  border-color: var(--primary-color);
}

.section--border-secondary {
  border-color: var(--secondary-color);
}

/* Semantic Colors for Border */
.section--border-info {
  border-color: var(--info-color);
}

.section--border-warning {
  border-color: var(--warning-color);
}

.section--border-alert {
  border-color: var(--alert-color);
}

.section--border-success {
  border-color: var(--success-color);
}

.section--border-neutral {
  border-color: var(--neutral-color);
}

.section--border-dark {
  border-color: var(--dark-color);
}

/* Classy Palette Variants */
.section--border-classy-color-1 {
  border-color: var(--classy-color-1);
}

.section--border-classy-color-2 {
  border-color: var(--classy-color-2);
}

.section--border-classy-color-3 {
  border-color: var(--classy-color-3);
}

.section--border-classy-color-4 {
  border-color: var(--classy-color-4);
}

.section--border-classy-color-5 {
  border-color: var(--classy-color-5);
}

/* Small Switch Palette Variants */
.section--border-small-switch-color-1 {
  border-color: var(--small-switch-color-1);
}

.section--border-small-switch-color-2 {
  border-color: var(--small-switch-color-2);
}

/* Natural Palette Variants */
.section--border-natural-color-1 {
  border-color: var(--natural-color-1);
}

.section--border-natural-color-2 {
  border-color: var(--natural-color-2);
}

.section--border-natural-color-3 {
  border-color: var(--natural-color-3);
}

/* Grey Friends Palette Variants */
.section--border-grey-friend-1 {
  border-color: var(--grey-friend-1);
}

.section--border-grey-friend-2 {
  border-color: var(--grey-friend-2);
}

/* Shades Variants */
.section--border-shade-1 {
  border-color: var(--shade-1);
}

.section--border-shade-2 {
  border-color: var(--shade-2);
}

.section--border-shade-3 {
  border-color: var(--shade-3);
}

.section--border-shade-4 {
  border-color: var(--shade-4);
}

/* Background Color Variants */
.section--background-primary {
  background-color: var(--primary-color);
  color: var(--text-color-inverse);
}

.section--background-secondary {
  background-color: var(--secondary-color);
  color: var(--text-color-inverse);
}

.section--background-info {
  background-color: var(--info-color);
  color: var(--text-color-inverse);
}

.section--background-warning {
  background-color: var(--warning-color);
  color: var(--text-color-inverse);
}

.section--background-alert {
  background-color: var(--alert-color);
  color: var(--text-color);
}

.section--background-success {
  background-color: var(--success-color);
  color: var(--text-color-inverse);
}

.section--background-neutral {
  background-color: var(--neutral-color);
  color: var(--text-color);
}

.section--background-dark {
  background-color: var(--dark-color);
  color: var(--text-color-inverse);
}

/* Classy Palette Background Variants */
.section--background-classy-color-1 {
  background-color: var(--classy-color-1);
  color: var(--text-color-inverse);
}

.section--background-classy-color-2 {
  background-color: var(--classy-color-2);
  color: var(--text-color-inverse);
}

.section--background-classy-color-3 {
  background-color: var(--classy-color-3);
  color: var(--text-color-inverse);
}

.section--background-classy-color-4 {
  background-color: var(--classy-color-4);
  color: var(--text-color-inverse);
}

.section--background-classy-color-5 {
  background-color: var(--classy-color-5);
  color: var(--text-color-inverse);
}

/* Small Switch Palette Background Variants */
.section--background-small-switch-color-1 {
  background-color: var(--small-switch-color-1);
  color: var(--text-color);
}

.section--background-small-switch-color-2 {
  background-color: var(--small-switch-color-2);
  color: var(--text-color-inverse);
}

/* Natural Palette Background Variants */
.section--background-natural-color-1 {
  background-color: var(--natural-color-1);
  color: var(--text-color-inverse);
}

.section--background-natural-color-2 {
  background-color: var(--natural-color-2);
  color: var(--text-color);
}

.section--background-natural-color-3 {
  background-color: var(--natural-color-3);
  color: var(--text-color);
}

/* Grey Friends Background Variants */
.section--background-grey-friend-1 {
  background-color: var(--grey-friend-1);
  color: var(--text-color-inverse);
}

.section--background-grey-friend-2 {
  background-color: var(--grey-friend-2);
  color: var(--text-color-inverse);
}

/* Shades Background Variants */
.section--background-shade-1 {
  background-color: var(--shade-1);
  color: var(--text-color-inverse);
}

.section--background-shade-2 {
  background-color: var(--shade-2);
  color: var(--text-color-inverse);
}

.section--background-shade-3 {
  background-color: var(--shade-3);
  color: var(--text-color-inverse);
}

.section--background-shade-4 {
  background-color: var(--shade-4);
  color: var(--text-color-inverse);
}
```

```jsx
//this.GUI/src/stories/Atoms/Section/Section.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

export const Section = ({
  title,
  margin,
  padding,
  backgroundColor,
  border,
  borderColor,
  fullWidth,
  shadow,
  id,
  ariaLabel,
  children,
}) => {
  const sectionClasses = [
    'section',
    border ? `section--border section--border-${borderColor}` : '',
    fullWidth ? 'section--full-width' : '',
    shadow ? `section--shadow-${shadow}` : '',
  ].join(' ').trim();

  return (
    <section id={id} className={sectionClasses} style={{ margin, padding, backgroundColor }} aria-label={ariaLabel}>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2',
    'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2',
    'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  fullWidth: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  margin: '20px 0',
  padding: '20px',
  backgroundColor: 'transparent',
  border: false,
  borderColor: 'neutral',
  fullWidth: false,
  shadow: 'none',
};
```

```jsx
//this.GUI/src/stories/Atoms/Section/Section.stories.jsx
import React from 'react';
import { Section } from './Section';

export default {
  title: 'Atoms/Layout/Section',
  component: Section,
  argTypes: {
    title: { control: 'text', defaultValue: 'Section Title' },
    margin: { control: 'text', defaultValue: '20px 0' },
    padding: { control: 'text', defaultValue: '20px' },
    backgroundColor: { control: 'color', defaultValue: 'transparent' },
    border: { control: 'boolean', defaultValue: false },
    borderColor: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'],
      defaultValue: 'neutral',
    },
    fullWidth: { control: 'boolean', defaultValue: false },
    shadow: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      defaultValue: 'none',
    },
    id: { control: 'text', defaultValue: 'section-1' },
    ariaLabel: { control: 'text', defaultValue: 'Main Section' },
  },
};

export const DefaultSection = (args) => (
  <Section {...args}>
    <p>This is a section with some default content.</p>
  </Section>
);

export const SectionWithBorder = (args) => (
  <Section {...args} border={true} borderColor="primary">
    <p>This section has a border.</p>
  </Section>
);

export const FullWidthSection = (args) => (
  <Section {...args} fullWidth={true} shadow="medium">
    <p>This is a full-width section with a medium shadow.</p>
  </Section>
);
```

--------------

# Select Component Guide

Here’s the **interactive example** for the `Select` component in Storybook. This will allow you to dynamically control the props such as `value`, `options`, `color`, and others from the Storybook interface.

---

### **Interactive Example for `Select.stories.jsx`**

```jsx
import React, { useState } from 'react';
import { Select } from './Select';

const MySelectComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h3>Select Your Favorite Color</h3>
      <Select
        options={[
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Blue', value: 'blue' },
        ]}
        value={selectedValue}
        onChange={handleChange}
        placeholder="Choose a color"
        label="Favorite Color"
        color="info" // Dynamic color usage
        disabled={false}
      />
    </div>
  );
};

export default MySelectComponent;
```

### Key Features:

- **Fully Interactive**: You can adjust the `value`, `options`, `color`, `disabled`, and other props directly from the Storybook controls.
- **Dynamic Updates**: The `value` updates in real time when the user selects a new option from the dropdown.

---

### Example Usage in Storybook:

You can use the interactive example to:

1. Change the list of options dynamically.
2. Select different colors for the `Select` dropdown (e.g., `primary`, `secondary`, `warning`).
3. Test the disabled state by toggling the `disabled` prop.
4. Customize the placeholder text and the label.

This setup will give you a great playground for testing the `Select` component with various configurations and seeing the results in real time.

Let me know if you need further modifications!



```css
/* src/stories/Atoms/Select/Select.css */

/* Base Select Styles */
.select {
  display: flex;
  flex-direction: column;
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--text-color);
  width: 100%; /* Responsive to container */
}

.select__label {
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-medium);
}

.select__input {
  appearance: none;
  width: 100%; /* Responsive to container */
  padding: var(--spacing-sm);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-speed), box-shadow var(--transition-speed);
  cursor: pointer;
}

.select__input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px var(--primary-color-hover);
  outline: none;
}

.select--disabled .select__input {
  background-color: var(--neutral-color-hover);
  cursor: not-allowed;
}

/* Color Variants */
.select--primary .select__input {
  border-color: var(--primary-color);
}

.select--secondary .select__input {
  border-color: var(--secondary-color);
}

.select--info .select__input {
  border-color: var(--info-color);
}

.select--warning .select__input {
  border-color: var(--warning-color);
}

.select--alert .select__input {
  border-color: var(--alert-color);
}

.select--success .select__input {
  border-color: var(--success-color);
}

.select--neutral .select__input {
  border-color: var(--neutral-color);
}

.select--dark .select__input {
  border-color: var(--dark-color);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .select__input {
    font-size: var(--font-size-small);
  }
}

@media (max-width: 480px) {
  .select__input {
    font-size: var(--font-size-small);
    padding: var(--spacing-xs);
  }
}

```

```jsx
// src/stories/Atoms/Select/Select.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Select.css';

export const Select = ({
  options,
  value,
  onChange,
  disabled = false,
  label = '',
  placeholder = 'Select an option',
  color = 'primary', // Default to primary color
  className = '',
  ...props
}) => {
  const selectClasses = classNames('select', className, {
    [`select--${color}`]: color, // Dynamically apply color class
    'select--disabled': disabled,
  });

  return (
    <div className={selectClasses}>
      {label && <label className="select__label">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="select__input"
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  /** List of options to choose from */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Selected value */
  value: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func.isRequired,
  /** Whether the select is disabled */
  disabled: PropTypes.bool,
  /** Label for the select component */
  label: PropTypes.string,
  /** Placeholder for the select dropdown */
  placeholder: PropTypes.string,
  /** Color of the select component */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
};

```

```jsx
// src/stories/Atoms/Select/Select.stories.jsx
import React, { useState } from 'react';
import { Select } from './Select';
import './Select.css';

export default {
  title: 'Atoms/Interactive/Select',
  component: Select,
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently selected value.',
    },
    options: {
      control: 'array',
      description: 'List of options available for selection.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed before selecting an option.',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color variant for the select component.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select input is disabled.',
    },
    label: {
      control: 'text',
      description: 'Label for the select input.',
    },
  },
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.value);

  return (
    <Select
      {...args}
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    />
  );
};

export const WithDifferentColors = () => (
  <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
    <Select
      value=""
      onChange={(e) => {}}
      options={[
        { label: 'Option A', value: 'A' },
        { label: 'Option B', value: 'B' },
      ]}
      placeholder="Select an option"
      label="Primary"
      color="primary"
    />
    <Select
      value=""
      onChange={(e) => {}}
      options={[
        { label: 'Option C', value: 'C' },
        { label: 'Option D', value: 'D' },
      ]}
      placeholder="Select an option"
      label="Warning"
      color="warning"
    />
    <Select
      value=""
      onChange={(e) => {}}
      options={[
        { label: 'Option E', value: 'E' },
        { label: 'Option F', value: 'F' },
      ]}
      placeholder="Select an option"
      label="Success"
      color="success"
    />
  </div>
);

export const InteractiveSelect = Template.bind({});
InteractiveSelect.args = {
  value: '',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option',
  label: 'Interactive Select',
  color: 'primary',
  disabled: false,
};
InteractiveSelect.storyName = 'Interactive Select';


```

-------

Documentation for the Slider component. This will describe the component's functionality, usage, and examples for integrating it into projects.

NOT STABLE

---

# Slider Component

The `Slider` component is a customizable slider that allows users to select a single value or a range of values by moving a thumb (or thumbs) along a track. It supports single and dual handle sliders, color customization, and dynamic display of values.

## Key Features

- **Customizable Colors**: The `Slider` component supports custom colors for both the track and thumb using the `color` and `thumbColor` props.
- **Dual Handle Support**: The component supports dual handles for selecting a range of values, useful for scenarios like price range filters.
- **Dynamic Value Display**: It can display the current value(s) above the slider for better user feedback.
- **Step, Min, and Max Values**: The `Slider` allows customization of the minimum, maximum, and step values.
- **Responsive Design**: The component is responsive and adjusts the size of the thumbs on smaller screens.
- **Disabled State**: The slider can be disabled to prevent user interaction.

## Props

| Prop         | Type           | Default   | Description                                                  |
| ------------ | -------------- | --------- | ------------------------------------------------------------ |
| `min`        | `number`       | `0`       | The minimum value the slider can have.                       |
| `max`        | `number`       | `100`     | The maximum value the slider can have.                       |
| `step`       | `number`       | `1`       | The interval between selectable values.                      |
| `value`      | `array/number` | `[20,80]` | The current value(s) of the slider. If dual is true, provide an array of two values. |
| `onChange`   | `function`     | `null`    | Function called when the slider value changes. Passes the new value(s) as an argument. |
| `color`      | `string`       | `primary` | The color of the slider track. Can be any of the available color options from the design system. |
| `thumbColor` | `string`       | `primary` | The color of the thumb(s). Can be any of the available color options from the design system. |
| `showValue`  | `bool`         | `true`    | Whether to show the current value(s) above the slider.       |
| `label`      | `string`       | `''`      | Label for the slider, displayed above it.                    |
| `dual`       | `bool`         | `false`   | Enables dual handles for selecting a range of values.        |
| `disabled`   | `bool`         | `false`   | Disables the slider, making it non-interactive.              |
| `className`  | `string`       | `''`      | Additional CSS class names for custom styling.               |

## Color Options

The following color options are available for the `color` and `thumbColor` props:

- `primary`
- `secondary`
- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`
- `classy-color-1`
- `classy-color-2`
- `classy-color-3`
- `classy-color-4`
- `classy-color-5`
- `small-switch-color-1`
- `small-switch-color-2`
- `natural-color-1`
- `natural-color-2`
- `natural-color-3`
- `grey-friend-1`
- `grey-friend-2`
- `shade-1`
- `shade-2`
- `shade-3`
- `shade-4`

## Usage

### Basic Slider

```jsx
import React, { useState } from 'react';
import { Slider } from './Slider'; // Import the slider component

const BasicSliderExample = () => {
  const [value, setValue] = useState(50);

  return (
    <Slider
      value={value}
      onChange={(val) => setValue(val)}
      min={0}
      max={100}
      step={1}
      color="primary"
      thumbColor="secondary"
      label="Volume"
      showValue
    />
  );
};

export default BasicSliderExample;
```

### Dual Handle Slider (Range Slider)

```jsx
import React, { useState } from 'react';
import { Slider } from './Slider';

const RangeSliderExample = () => {
  const [range, setRange] = useState([20, 80]);

  return (
    <Slider
      value={range}
      onChange={(val) => setRange(val)}
      min={0}
      max={100}
      step={5}
      dual={true}
      color="success"
      thumbColor="warning"
      label="Select Price Range"
      showValue
    />
  );
};

export default RangeSliderExample;
```

### Disabled Slider

```jsx
import React from 'react';
import { Slider } from './Slider';

const DisabledSliderExample = () => {
  return (
    <Slider
      value={50}
      min={0}
      max={100}
      step={1}
      color="neutral"
      thumbColor="neutral"
      label="Brightness"
      disabled
    />
  );
};

export default DisabledSliderExample;
```

### Customizing with Colors

```jsx
import React, { useState } from 'react';
import { Slider } from './Slider';

const CustomColorSliderExample = () => {
  const [value, setValue] = useState(30);

  return (
    <Slider
      value={value}
      onChange={(val) => setValue(val)}
      min={0}
      max={100}
      step={1}
      color="shade-3" // Custom track color
      thumbColor="shade-1" // Custom thumb color
      label="Custom Styled Slider"
      showValue
    />
  );
};

export default CustomColorSliderExample;
```

## Notes on Usage

- **Dual Handle Slider**: If you need a slider that allows selecting a range of values, set the `dual` prop to `true` and pass an array of two numbers as the `value` prop.
- **Color Customization**: Use the `color` and `thumbColor` props to adjust the slider’s appearance. These props accept any of the available color options listed above.
- **Responsiveness**: The slider automatically adjusts the size of the thumbs on smaller screens, making it mobile-friendly.
- **Disabled State**: You can disable the slider by setting the `disabled` prop to `true`, making it non-interactive while retaining the visual state.

---

This markdown provides an overview of the `Slider` component, how it works, and how to implement it with different configurations and use cases. 





```css
/* src/stories/Atoms/Slider/Slider.css */

/* Base Slider Styles */
.slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: var(--font-family);
  color: var(--text-color);
}

.slider__label {
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-medium);
}

.slider__wrapper {
  position: relative;
  width: 100%;
  height: 8px;
  background-color: var(--neutral-color-hover);
  border-radius: 4px;
}

.slider__track {
  position: absolute;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: var(--neutral-color-hover);
}

.slider__filled {
  position: absolute;
  height: 8px;
  border-radius: 4px;
  transition: background-color var(--transition-speed);
}

.slider__thumb {
  appearance: none;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--thumb-color);
  border-radius: 50%;
  top: -6px; /* Adjust for thumb size */
  cursor: pointer;
  transition: background-color var(--transition-speed);
}

.slider__thumb:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--primary-color-hover);
}

.slider__values {
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-sm);
}

.slider--disabled .slider__thumb {
  cursor: not-allowed;
  background-color: var(--neutral-color-hover);
}

/* Color Variants */
.slider--primary .slider__filled {
  background-color: var(--primary-color);
}

.slider--secondary .slider__filled {
  background-color: var(--secondary-color);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .slider__thumb {
    width: 15px;
    height: 15px;
  }
}

@media (max-width: 480px) {
  .slider__thumb {
    width: 12px;
    height: 12px;
  }
}

```

```jsx
// src/stories/Atoms/Slider/Slider.jsx
//NOTSTABLE 
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Slider.css';

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value = [20, 80], // Default for dual handle
  onChange,
  color = 'primary', // Track color
  thumbColor = 'primary', // Thumb color
  showValue = true, // Show current value above the slider
  label = '',
  dual = false, // Single or dual handle slider
  disabled = false,
  className = '',
  ...props
}) => {
  const [sliderValue, setSliderValue] = useState(value);

  // Sync with external value changes
  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  // Handle thumb value changes
  const handleSliderChange = (e, index) => {
    const newValue = [...sliderValue];
    newValue[index] = Number(e.target.value);

    // Ensure correct ordering for dual sliders (min <= max)
    if (dual && newValue[0] > newValue[1]) return;

    setSliderValue(newValue);
    onChange && onChange(newValue);
  };

  // Calculate thumb position percentages
  const percentage1 = ((sliderValue[0] - min) / (max - min)) * 100;
  const percentage2 = dual ? ((sliderValue[1] - min) / (max - min)) * 100 : percentage1;

  const sliderClasses = classNames('slider', className, {
    [`slider--${color}`]: color,
    'slider--disabled': disabled,
  });

  return (
    <div className={sliderClasses}>
      {label && <label className="slider__label">{label}</label>}
      <div className="slider__wrapper">
        <div className="slider__track" />
        <div
          className="slider__filled"
          style={{
            left: `${percentage1}%`,
            right: `${100 - percentage2}%`,
            background: `var(--${color}-color)`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={sliderValue[0]}
          onChange={(e) => handleSliderChange(e, 0)}
          disabled={disabled}
          className="slider__thumb"
          style={{ left: `${percentage1}%`, '--thumb-color': `var(--${thumbColor}-color)` }}
          {...props}
        />
        {dual && (
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={sliderValue[1]}
            onChange={(e) => handleSliderChange(e, 1)}
            disabled={disabled}
            className="slider__thumb"
            style={{ left: `${percentage2}%`, '--thumb-color': `var(--${thumbColor}-color)` }}
            {...props}
          />
        )}
      </div>
      {showValue && (
        <div className="slider__values">
          {dual ? (
            <>
              <span>{sliderValue[0]}</span> - <span>{sliderValue[1]}</span>
            </>
          ) : (
            <span>{sliderValue[0]}</span>
          )}
        </div>
      )}
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  onChange: PropTypes.func,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  thumbColor: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  showValue: PropTypes.bool,
  label: PropTypes.string,
  dual: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

```

```jsx
// src/stories/Atoms/Slider/Slider.stories.jsx
import React, { useState } from 'react';
import { Slider } from './Slider';
import './Slider.css';

export default {
  title: 'Atoms/Interactive/Slider',
  component: Slider,
  argTypes: {
    value: {
      control: 'array',
      description: 'Current value(s) of the slider',
    },
    min: {
      control: 'number',
      description: 'Minimum value for the slider',
    },
    max: {
      control: 'number',
      description: 'Maximum value for the slider',
    },
    step: {
      control: 'number',
      description: 'Step size for the slider',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color of the slider track',
    },
    thumbColor: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color of the slider thumb',
    },
    dual: {
      control: 'boolean',
      description: 'Enable dual handle for range selection',
    },
    showValue: {
      control: 'boolean',
      description: 'Display the current value(s) above the slider',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the slider',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || [20, 80]);

  return (
    <Slider
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const InteractiveSlider = Template.bind({});
InteractiveSlider.args = {
  value: [20, 80],
  min: 0,
  max: 100,
  step: 1,
  color: 'primary',
  thumbColor: 'info',
  showValue: true,
  dual: true,
  label: 'Select Range',
  disabled: false,
};
InteractiveSlider.storyName = 'Interactive Slider';

```

-------

# Snackbars Guide

### **How to Use the Snackbar**

```jsx
import React from 'react';
import { Snackbar } from './Snackbar';

const MyComponent = () => {
  const handleClose = () => {
    console.log('Snackbar closed');
  };

  return (
    <div>
      <Snackbar
        message="File uploaded successfully."
        duration={3000}
        actionLabel="Undo"
        onActionClick={() => console.log('Undo clicked')}
        onClose={handleClose}
        variant="primary"
        color="success" // Custom color for the primary variant
      />
    </div>
  );
};

export default MyComponent;

```

A **Snackbar** in web development is a **brief notification** that appears at the bottom of the screen to provide **feedback** to users about an operation or event. Snackbars are typically non-intrusive, meaning they don’t block the user from interacting with the rest of the page or application, and they automatically disappear after a short period.

Snackbars are commonly used in **Material Design**, and they are a widely adopted UI pattern in modern web and mobile applications.

### **Key Features of a Snackbar:**

1. **Temporary**:

​	• Snackbars are meant to display **short, concise messages** for a limited duration (usually a few seconds) and then disappear automatically.

​	• Users can continue interacting with the app while the snackbar is displayed.

2. **Position**:

​	• **Bottom of the screen** is the most common position, though it can appear at the top or center depen**Snackbar vs. Toast Notifications:**



While similar, **snackbars** are typically more specific to **Material Design** and often include an action, while **toasts** are more general notifications and may not always provide actions. Toasts tend to be more passive, providing simple feedback without interaction.



**Conclusion:**



Snackbars are effective for showing **brief, non-intrusive notifications** that provide feedback or confirmation to users in web applications. They are typically used in scenarios where the message can be acknowledged without requiring user action, but they can also offer simple actions like “Undo”. When building a snackbar component, it’s important to prioritize **accessibility**, **design consistency**, and **clarity** in the message.ding on the design. It’s typically shown as a bar or small container that slides in and out.

3. **Content**:

​	• **Simple text** that provides feedback about an operation (e.g., “Message sent”, “File uploaded successfully”).

​	• Snackbars can include an **optional action** like “Undo” or “Retry”, which the user can interact with before it disappears.

4. **Non-intrusive**:

​	• Unlike modal dialogs or alerts, snackbars don’t interrupt the user’s flow. They fade in, provide feedback, and fade out automatically without requiring interaction unless a user action is needed (e.g., an undo button).

5. **Short-Lived**:

​	• Snackbars typically disappear after a short duration, usually between 2 and 5 seconds.

6. **Actions**:

​	• Snackbars can have **one action button** (e.g., “Dismiss”, “Undo”). The action must be something simple and optional, not critical to the core functionality.

#### **Example Use Cases:**

​	• Confirming an action: “File uploaded successfully.”

​	• Error feedback: “Failed to send the message. Try again.”

​	• Warnings or notifications: “Your connection is unstable.”

​	• Success feedback: “Settings have been saved.”

### **Key Considerations for Snackbar Design:**

​	1. **Message Length**:

​	• Keep snackbar messages **short and actionable** (e.g., “File uploaded”, “Message sent”, or “Failed to save settings”).

​	2. **Accessibility**:

​	• Snackbars should be **accessible** to screen readers. Use appropriate **ARIA roles** (e.g., role="alert" for important messages).

​	• Ensure that any actions within the snackbar (like “Undo”) are keyboard navigable.

​	3. **Duration**:

​	• Snackbars should be shown long enough to read but short enough not to interrupt the user’s flow.

​	• Avoid showing snackbars for more than 5 seconds unless the user needs to take action.

​	4. **Interactivity**:

​	• If a snackbar includes an action (like “Undo”), make sure the button is easy to interact with and disappears only after the action or a timeout.

​	5. **Responsiveness**:

​	• Snackbars should be responsive and well-positioned on different screen sizes (desktop, tablet, mobile). They often appear at the bottom of the screen on mobile and web apps but can be adjusted based on the design needs.

​	6. **Color and Contrast**:

​	• Ensure snackbars are **visually distinct** from the rest of the UI. Use contrasting colors for the background and text to ensure visibility.

​	7. **Interaction Guidelines**:

​	• Avoid using snackbars for **high-priority actions** (like critical warnings or confirmations), where a more prominent UI element like a dialog or toast is more appropriate.



### **Snackbar vs. Toast Notifications:**

While similar, **snackbars** are typically more specific to **Material Design** and often include an action, while **toasts** are more general notifications and may not always provide actions. Toasts tend to be more passive, providing simple feedback without interaction.

### **Conclusion:**

Snackbars are effective for showing **brief, non-intrusive notifications** that provide feedback or confirmation to users in web applications. They are typically used in scenarios where the message can be acknowledged without requiring user action, but they can also offer simple actions like “Undo”. When building a snackbar component, it’s important to prioritize **accessibility**, **design consistency**, and **clarity** in the message.



```css
/* src/stories/Atoms/Snackbar/Snackbar.css */

/* Base Snackbar Styles */
.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: var(--border-radius);
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  box-shadow: var(--box-shadow);
  transition: opacity 0.3s ease, bottom 0.3s ease;
  opacity: 0;
  z-index: var(--z-index-modal);
}

.snackbar--visible {
  opacity: 1;
  bottom: 40px;
}

.snackbar--hidden {
  opacity: 0;
  bottom: 20px;
}

/* Snackbar Variants */
.snackbar--primary {
  background-color: var(--primary-color);
  color: var(--text-color-inverse);
}

.snackbar--secondary {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

/* Dynamic Color Classes */
.snackbar--primary.snackbar--info {
  background-color: var(--info-color);
}

.snackbar--secondary.snackbar--info {
  border-color: var(--info-color);
  color: var(--info-color);
}

/* Add all the color classes in the same pattern as above for 'warning', 'alert', 'success', etc. 
  'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',*/
/* Primary Snackbar (with background) */
.snackbar--primary.snackbar--info {
  background-color: var(--info-color);
}

.snackbar--primary.snackbar--warning {
  background-color: var(--warning-color);
}

.snackbar--primary.snackbar--alert {
  background-color: var(--alert-color);
}

.snackbar--primary.snackbar--success {
  background-color: var(--success-color);
}

.snackbar--primary.snackbar--neutral {
  background-color: var(--neutral-color);
}

.snackbar--primary.snackbar--dark {
  background-color: var(--dark-color);
}

/* Classy Palette Colors for Primary Variant */
.snackbar--primary.snackbar--classy-color-1 {
  background-color: var(--classy-color-1);
}

.snackbar--primary.snackbar--classy-color-2 {
  background-color: var(--classy-color-2);
}

.snackbar--primary.snackbar--classy-color-3 {
  background-color: var(--classy-color-3);
}

.snackbar--primary.snackbar--classy-color-4 {
  background-color: var(--classy-color-4);
}

.snackbar--primary.snackbar--classy-color-5 {
  background-color: var(--classy-color-5);
}

/* Small Switch Palette Colors for Primary Variant */
.snackbar--primary.snackbar--small-switch-color-1 {
  background-color: var(--small-switch-color-1);
}

.snackbar--primary.snackbar--small-switch-color-2 {
  background-color: var(--small-switch-color-2);
}

/* Natural Palette Colors for Primary Variant */
.snackbar--primary.snackbar--natural-color-1 {
  background-color: var(--natural-color-1);
}

.snackbar--primary.snackbar--natural-color-2 {
  background-color: var(--natural-color-2);
}

.snackbar--primary.snackbar--natural-color-3 {
  background-color: var(--natural-color-3);
}

/* Grey Friends for Primary Variant */
.snackbar--primary.snackbar--grey-friend-1 {
  background-color: var(--grey-friend-1);
}

.snackbar--primary.snackbar--grey-friend-2 {
  background-color: var(--grey-friend-2);
}

/* Shades for Primary Variant */
.snackbar--primary.snackbar--shade-1 {
  background-color: var(--shade-1);
}

.snackbar--primary.snackbar--shade-2 {
  background-color: var(--shade-2);
}

.snackbar--primary.snackbar--shade-3 {
  background-color: var(--shade-3);
}

.snackbar--primary.snackbar--shade-4 {
  background-color: var(--shade-4);
}

/* Secondary Snackbar (border only) */
.snackbar--secondary.snackbar--info {
  border-color: var(--info-color);
  color: var(--info-color);
}

.snackbar--secondary.snackbar--warning {
  border-color: var(--warning-color);
  color: var(--warning-color);
}

.snackbar--secondary.snackbar--alert {
  border-color: var(--alert-color);
  color: var(--alert-color);
}

.snackbar--secondary.snackbar--success {
  border-color: var(--success-color);
  color: var(--success-color);
}

.snackbar--secondary.snackbar--neutral {
  border-color: var(--neutral-color);
  color: var(--neutral-color);
}

.snackbar--secondary.snackbar--dark {
  border-color: var(--dark-color);
  color: var(--dark-color);
}

/* Classy Palette Colors for Secondary Variant */
.snackbar--secondary.snackbar--classy-color-1 {
  border-color: var(--classy-color-1);
  color: var(--classy-color-1);
}

.snackbar--secondary.snackbar--classy-color-2 {
  border-color: var(--classy-color-2);
  color: var(--classy-color-2);
}

.snackbar--secondary.snackbar--classy-color-3 {
  border-color: var(--classy-color-3);
  color: var(--classy-color-3);
}

.snackbar--secondary.snackbar--classy-color-4 {
  border-color: var(--classy-color-4);
  color: var(--classy-color-4);
}

.snackbar--secondary.snackbar--classy-color-5 {
  border-color: var(--classy-color-5);
  color: var(--classy-color-5);
}

/* Small Switch Palette Colors for Secondary Variant */
.snackbar--secondary.snackbar--small-switch-color-1 {
  border-color: var(--small-switch-color-1);
  color: var(--small-switch-color-1);
}

.snackbar--secondary.snackbar--small-switch-color-2 {
  border-color: var(--small-switch-color-2);
  color: var(--small-switch-color-2);
}

/* Natural Palette Colors for Secondary Variant */
.snackbar--secondary.snackbar--natural-color-1 {
  border-color: var(--natural-color-1);
  color: var(--natural-color-1);
}

.snackbar--secondary.snackbar--natural-color-2 {
  border-color: var(--natural-color-2);
  color: var(--natural-color-2);
}

.snackbar--secondary.snackbar--natural-color-3 {
  border-color: var(--natural-color-3);
  color: var(--natural-color-3);
}

/* Grey Friends for Secondary Variant */
.snackbar--secondary.snackbar--grey-friend-1 {
  border-color: var(--grey-friend-1);
  color: var(--grey-friend-1);
}

.snackbar--secondary.snackbar--grey-friend-2 {
  border-color: var(--grey-friend-2);
  color: var(--grey-friend-2);
}

/* Shades for Secondary Variant */
.snackbar--secondary.snackbar--shade-1 {
  border-color: var(--shade-1);
  color: var(--shade-1);
}

.snackbar--secondary.snackbar--shade-2 {
  border-color: var(--shade-2);
  color: var(--shade-2);
}

.snackbar--secondary.snackbar--shade-3 {
  border-color: var(--shade-3);
  color: var(--shade-3);
}

.snackbar--secondary.snackbar--shade-4 {
  border-color: var(--shade-4);
  color: var(--shade-4);
}


.snackbar__message {
  flex-grow: 1;
  margin-right: 16px;
}

.snackbar__action {
  background: none;
  border: none;
  color: var(--text-color-inverse);
  cursor: pointer;
  font-weight: bold;
  margin-right: 16px;
}

.snackbar__action:hover {
  text-decoration: underline;
}

.snackbar__close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--text-color-inverse);
}

.snackbar__close:hover {
  color: var(--text-color-inverse);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .snackbar {
    width: 90%;
    left: 5%;
    transform: none;
  }
}

@media (max-width: 480px) {
  .snackbar {
    padding: 12px;
  }
}

```

```jsx
// src/stories/Atoms/Snackbar/Snackbar.jsx
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Snackbar.css';

export const Snackbar = ({
  message,
  duration = 3000,
  actionLabel = '',
  onActionClick = null,
  onClose,
  variant = 'primary', // 'primary' (with background) or 'secondary' (border only)
  color = 'primary', // Global theme color for background/border/text
  className = '',
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const snackbarClasses = classNames('snackbar', className, {
    [`snackbar--${variant}`]: variant,
    [`snackbar--${color}`]: color,
    'snackbar--visible': visible,
    'snackbar--hidden': !visible,
  });

  return (
    <div className={snackbarClasses}>
      <span className="snackbar__message">{message}</span>
      {actionLabel && (
        <button className="snackbar__action" onClick={onActionClick}>
          {actionLabel}
        </button>
      )}
      <button className="snackbar__close" onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

Snackbar.propTypes = {
  /** Message to be displayed in the snackbar */
  message: PropTypes.string.isRequired,
  /** Duration before the snackbar disappears */
  duration: PropTypes.number,
  /** Label for the action button */
  actionLabel: PropTypes.string,
  /** Function to be called when action button is clicked */
  onActionClick: PropTypes.func,
  /** Function to be called when the snackbar is closed */
  onClose: PropTypes.func,
  /** Variant of the snackbar: 'primary' (background) or 'secondary' (border only) */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Color for background, border, and text */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Additional CSS classes */
  className: PropTypes.string,
};

```

```jsx
// src/stories/Atoms/Snackbar/Snackbar.stories.jsx
import React from 'react';
import { Snackbar } from './Snackbar';

export default {
  title: 'Atoms/Feedback/Snackbar',
  component: Snackbar,
  argTypes: {
    message: {
      control: 'text',
      defaultValue: 'This is a snackbar message.',
    },
    duration: {
      control: 'number',
      defaultValue: 3000,
    },
    actionLabel: {
      control: 'text',
      defaultValue: 'Undo',
    },
    onActionClick: {
      action: 'action clicked',
    },
    onClose: {
      action: 'closed',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
    },
  },
};

const Template = (args) => <Snackbar {...args} />;

export const PrimarySnackbar = Template.bind({});
PrimarySnackbar.args = {
  message: 'This is a primary snackbar.',
  duration: 3000,
  actionLabel: 'Undo',
  variant: 'primary',
  color: 'primary',
};

export const SecondarySnackbar = Template.bind({});
SecondarySnackbar.args = {
  message: 'This is a secondary snackbar with border.',
  duration: 3000,
  actionLabel: 'Dismiss',
  variant: 'secondary',
  color: 'success',
};

// Interactive Snackbar Example
export const InteractiveSnackbar = Template.bind({});
InteractiveSnackbar.args = {
  message: 'This is a customizable snackbar.',
  duration: 3000,
  actionLabel: 'Dismiss',
  variant: 'primary',
  color: 'primary',
  onActionClick: () => alert('Action clicked!'),
  onClose: () => alert('Snackbar closed!'),
};
InteractiveSnackbar.storyName = 'Interactive Snackbar';
```

-------

# Spacer Guide

A **Spacer** in web and app design is an **empty, often invisible element** used to create consistent **spacing between elements** on a page or screen. It’s a utility component or a layout tool designed to help maintain a clean and well-structured layout by adding space where needed without requiring direct manipulation of margins or padding in each component.

## **How to Use the Spacer**

```jsx
import React from 'react';
import { Spacer } from './Spacer';

const MyComponent = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
        First Section
      </div>

      {/* Add a medium-sized vertical space between sections */}
      <Spacer size="md" direction="vertical" />

      <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
        Second Section
      </div>

      {/* Add a large horizontal space between sections */}
      <Spacer size="lg" direction="horizontal" />

      <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
        Third Section
      </div>
    </div>
  );
};

export default MyComponent;

```

Spacers help to standardize the layout structure across various elements of an interface and can contribute to maintaining consistent design patterns, such as spacing between buttons, sections, or other UI components.

### **Key Features of the Spacer**

- **Sizes**: Available in five sizes (`xs`, `sm`, `md`, `lg`, `xl`) that map to specific pixel values.
- **Direction**: Supports both vertical and horizontal spacing, ensuring it can be used in multiple layout contexts.
- **Responsive**: The spacer can dynamically adjust its size based on screen width.
- **Customizable**: Developers can apply custom classes and additional styles as needed.

------

### **Interactive Example in Storybook**

In the interactive Storybook example, you can:

- Adjust the size of the spacer (from `xs` to `xl`).

- Toggle between vertical and horizontal spacing.

- Enable or disable responsiveness to see how the spacer behaves on smaller screens.

- Add custom class names for additional styling or integration with other CSS frameworks.

  

### **Common Use Cases for a Spacer:**

​	•	Adding **space between buttons**, cards, or text blocks.

​	•	Creating **vertical or horizontal gaps** in a grid layout.

​	•	Maintaining consistent spacing between **sections** of a page or different UI elements.

​	•	Adding spacing to **list items** in a navigation bar, footer, or toolbar.



### **Key Considerations When Creating a Spacer Component:**

​	1.	**Consistency**:

​	•	Make sure the spacer applies consistent spacing across components, so the design language remains uniform.

​	2.	**Reusability**:

​	•	The component should be easy to reuse and versatile enough to apply in various contexts (horizontal/vertical layouts, grids, etc.).

​	3.	**Responsiveness**:

​	•	Ensure that the spacer adjusts dynamically based on screen size, ensuring consistent appearance across devices.

​	4.	**Integration**:

​	•	A spacer should integrate seamlessly with grid and flexbox layouts and be responsive to the needs of the design system (aligning with defined spacings, margins, and paddings).

​	5.	**Theming**:

​	•	Allow the spacer to inherit or adapt to the overall theme’s spacing scale (e.g., based on design tokens or global CSS variables).



**Conclusion:**

A **spacer** is a simple yet crucial component in web and app design. It helps developers manage consistent spacing across elements and layouts without hardcoding margins or padding for each individual component. A well-designed spacer component should be **flexible, responsive, reusable**, and **theming-friendly**, contributing to a clean and organized UI structure.



```css
/* src/stories/Atoms/Spacer/Spacer.css */

/* Base Styles for Spacer */
.spacer {
  display: block;
  flex-shrink: 0;
}

/* Vertical Spacers (Height) */
.spacer--vertical {
  width: 100%;
}

.spacer--xs.spacer--vertical {
  height: 4px;
}

.spacer--sm.spacer--vertical {
  height: 8px;
}

.spacer--md.spacer--vertical {
  height: 16px;
}

.spacer--lg.spacer--vertical {
  height: 32px;
}

.spacer--xl.spacer--vertical {
  height: 64px;
}

/* Horizontal Spacers (Width) */
.spacer--horizontal {
  height: 100%;
}

.spacer--xs.spacer--horizontal {
  width: 4px;
}

.spacer--sm.spacer--horizontal {
  width: 8px;
}

.spacer--md.spacer--horizontal {
  width: 16px;
}

.spacer--lg.spacer--horizontal {
  width: 32px;
}

.spacer--xl.spacer--horizontal {
  width: 64px;
}

/* Responsive Spacers (adjust size on different screen sizes) */
.spacer--responsive {
  @media (max-width: 768px) {
    .spacer--xs {
      height: 2px;
      width: 2px;
    }

    .spacer--sm {
      height: 4px;
      width: 4px;
    }

    .spacer--md {
      height: 8px;
      width: 8px;
    }

    .spacer--lg {
      height: 16px;
      width: 16px;
    }

    .spacer--xl {
      height: 32px;
      width: 32px;
    }
  }

  @media (max-width: 480px) {
    .spacer--xs {
      height: 1px;
      width: 1px;
    }

    .spacer--sm {
      height: 2px;
      width: 2px;
    }

    .spacer--md {
      height: 4px;
      width: 4px;
    }

    .spacer--lg {
      height: 8px;
      width: 8px;
    }

    .spacer--xl {
      height: 16px;
      width: 16px;
    }
  }
}

```

```jsx
// src/stories/Atoms/Spacer/Spacer.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Spacer.css';

export const Spacer = ({
  size = 'md',       // Default size is medium (16px)
  direction = 'vertical', // Can be 'vertical' or 'horizontal'
  className = '',
  responsive = true, // Responsive spacer
}) => {
  const spacerClasses = classNames(
    'spacer',
    `spacer--${size}`,
    `spacer--${direction}`,
    {
      'spacer--responsive': responsive,
    },
    className
  );

  return <div className={spacerClasses} aria-hidden="true" />;
};

Spacer.propTypes = {
  /** Spacer size: 'xs', 'sm', 'md', 'lg', 'xl' */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Direction of the space: 'vertical' or 'horizontal' */
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Custom class name for the spacer */
  className: PropTypes.string,
  /** Whether the spacer should adjust responsively */
  responsive: PropTypes.bool,
};

```

```jsx
// src/stories/Atoms/Spacer/Spacer.stories.jsx
import React from 'react';
import { Spacer } from './Spacer';

export default {
  title: 'Atoms/Layout/Spacer',
  component: Spacer,
  argTypes: {
    size: {
      control: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
      description: 'Controls the size of the space (width or height)',
      defaultValue: 'md',
    },
    direction: {
      control: { type: 'select', options: ['vertical', 'horizontal'] },
      description: 'Direction of the spacer (vertical or horizontal)',
      defaultValue: 'vertical',
    },
    responsive: {
      control: { type: 'boolean' },
      description: 'Make the spacer responsive to screen sizes',
      defaultValue: true,
    },
    className: {
      control: 'text',
      description: 'Custom CSS class for additional styling',
    },
  },
};

const Template = (args) => (
  <div>
    {/* Vertical Spacer Example */}
    <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
      Content Before Vertical Spacer
    </div>
    <Spacer {...args} />
    <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
      Content After Vertical Spacer
    </div>

    {/* Horizontal Spacer Example */}
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
        Left Content
      </div>
      <Spacer {...args} direction="horizontal" />
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px' }}>
        Right Content
      </div>
    </div>
  </div>
);

export const InteractiveSpacer = Template.bind({});
InteractiveSpacer.args = {
  size: 'md',
  direction: 'vertical',
  responsive: true,
};
InteractiveSpacer.storyName = 'Interactive Spacer';

```

-----

# Spinner Guide

A **Spinner** (or loader) in web and app development is a **visual indicator** used to represent the **loading state** of an application or component. It informs users that a task is in progress (like data loading or processing), and they need to wait for completion. Spinners are commonly used in forms, API requests, image or file loading, and various other asynchronous operations.

### **How to Use the Spinner Component**

```jsx
import React from 'react';
import { Spinner } from './Spinner';

const ExampleComponent = () => {
  return (
    <div>
      <Spinner
        size="large"
        color="primary"
        text="Loading data..."
        speed="2s"
        fullScreen={true}
      />
    </div>
  );
};

export default ExampleComponent;
```

------

### **Key Features of the Spinner Component**:

- **Size**: Choose between `small`, `medium`, and `large`.
- **Color**: Select from a variety of colors based on the available design tokens (e.g., `primary`, `success`, `warning`).
- **Variant**: Supports different types of spinners like `circle`, `dots`, and `bars`.
- **Speed**: Customize the speed of the spinner animation (e.g., "1s" or "2s").
- **Full-Screen**: Toggle full-screen mode, useful for loading screens.
- **Text**: Display an optional loading message below the spinner.

This setup allows for maximum flexibility, responsiveness, and customization, making the `Spinner` component adaptable to various use cases in your application.

**Characteristics of a Spinner:**

1. **Indicates Progress**: A spinner is typically a circular animation that rotates continuously, signaling that a process is ongoing.

2. **Asynchronous Indicator**: It’s used in situations where an action (e.g., form submission, content fetching) takes time, letting users know that the app is responsive and working.

3. **Non-blocking UI**: While the spinner is visible, users are still aware that their action is being processed without freezing the interface.

4. **Common UI Pattern**: Spinners are often implemented in loading screens, data-fetching scenarios, or inline components where loading is needed.



**Types of Spinners:**

1. **Indeterminate Spinner**: Spins indefinitely without indicating how much time is left (e.g., a circle loader). It’s commonly used when the time to completion is unknown.

2. **Determinate Progress Indicator**: Shows specific progress completion (e.g., a progress bar or ring showing percentage), usually for file uploads or downloads.

**Conclusion:**

A well-designed **Spinner component** should be **customizable**, **responsive**, and **theming-friendly**. By providing props for size, color, speed, and more, the spinner can be adapted for different scenarios like loading screens, inline components, or form submissions. Accessibility and performance are also crucial for making



```css
/* src/stories/Atoms/Spinner/Spinner.css */

.spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spinner__icon {
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--spinner-color, var(--primary-color));
  animation: spin var(--spinner-speed, 1s) linear infinite;
}

.spinner--small .spinner__icon {
  width: 24px;
  height: 24px;
}

.spinner--medium .spinner__icon {
  width: 40px;
  height: 40px;
}

.spinner--large .spinner__icon {
  width: 64px;
  height: 64px;
}

.spinner--full-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
}

.spinner__text {
  margin-top: 10px;
  text-align: center;
  color: var(--text-color, #000);
}

/* Colors */
.spinner--primary .spinner__icon {
  border-top-color: var(--primary-color);
}

.spinner--secondary .spinner__icon {
  border-top-color: var(--secondary-color);
}

.spinner--info .spinner__icon {
  border-top-color: var(--info-color);
}

.spinner--warning .spinner__icon {
  border-top-color: var(--warning-color);
}

.spinner--alert .spinner__icon {
  border-top-color: var(--alert-color);
}

.spinner--success .spinner__icon {
  border-top-color: var(--success-color);
}

.spinner--neutral .spinner__icon {
  border-top-color: var(--neutral-color);
}

.spinner--dark .spinner__icon {
  border-top-color: var(--dark-color);
}

/* Additional colors from design tokens */
.spinner--classy-color-1 .spinner__icon { border-top-color: var(--classy-color-1); }
.spinner--classy-color-2 .spinner__icon { border-top-color: var(--classy-color-2); }
.spinner--classy-color-3 .spinner__icon { border-top-color: var(--classy-color-3); }
.spinner--classy-color-4 .spinner__icon { border-top-color: var(--classy-color-4); }
.spinner--classy-color-5 .spinner__icon { border-top-color: var(--classy-color-5); }

.spinner--small-switch-color-1 .spinner__icon { border-top-color: var(--small-switch-color-1); }
.spinner--small-switch-color-2 .spinner__icon { border-top-color: var(--small-switch-color-2); }

.spinner--natural-color-1 .spinner__icon { border-top-color: var(--natural-color-1); }
.spinner--natural-color-2 .spinner__icon { border-top-color: var(--natural-color-2); }
.spinner--natural-color-3 .spinner__icon { border-top-color: var(--natural-color-3); }

.spinner--grey-friend-1 .spinner__icon { border-top-color: var(--grey-friend-1); }
.spinner--grey-friend-2 .spinner__icon { border-top-color: var(--grey-friend-2); }

.spinner--shade-1 .spinner__icon { border-top-color: var(--shade-1); }
.spinner--shade-2 .spinner__icon { border-top-color: var(--shade-2); }
.spinner--shade-3 .spinner__icon { border-top-color: var(--shade-3); }
.spinner--shade-4 .spinner__icon { border-top-color: var(--shade-4); }

/* Keyframes */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

```jsx
// src/stories/Atoms/Spinner/Spinner.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Spinner.css';

export const Spinner = ({
  size = 'medium',
  color = 'primary', // Ensure this prop is passed correctly
  loading = true,
  label = 'Loading...',
  speed = '1s',
  thickness = '4px',
  variant = 'circle',
  fullScreen = false,
  text = '',
  className = '',
  style = {},
  ...props
}) => {
  if (!loading) return null;

  const spinnerClasses = classNames(
    'spinner',
    `spinner--${variant}`,
    `spinner--${color}`, // This maps the color prop to the correct CSS class
    {
      'spinner--full-screen': fullScreen,
      [`spinner--${size}`]: size,
    },
    className
  );

  return (
    <div
      className={spinnerClasses}
      style={{ animationDuration: speed, borderWidth: thickness, ...style }}
      role="status"
      aria-label={label}
      {...props}
    >
      <div className="spinner__icon"></div>
      {text && <span className="spinner__text">{text}</span>}
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  loading: PropTypes.bool,
  label: PropTypes.string,
  speed: PropTypes.string,
  thickness: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'dots', 'bars']),
  fullScreen: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

```

```jsx
// src/stories/Atoms/Spinner/Spinner.stories.jsx
import React from 'react';
import { Spinner } from './Spinner';

export default {
  title: 'Atoms/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Size of the spinner',
      defaultValue: 'medium',
    },
    color: {
      control: { type: 'select', options: [
        'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
      ]},
      description: 'Spinner color',
      defaultValue: 'primary',
    },
    variant: {
      control: { type: 'select', options: ['circle', 'dots', 'bars'] },
      description: 'Spinner variant',
      defaultValue: 'circle',
    },
    speed: {
      control: { type: 'text' },
      description: 'Speed of the spinner animation (e.g., "1s")',
      defaultValue: '1s',
    },
    text: {
      control: 'text',
      description: 'Optional loading text',
      defaultValue: 'Loading...',
    },
    fullScreen: {
      control: 'boolean',
      description: 'Display spinner in full-screen mode',
      defaultValue: false,
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const InteractiveSpinner = Template.bind({});
InteractiveSpinner.args = {
  size: 'medium',
  color: 'primary',
  variant: 'circle',
  speed: '1s',
  text: 'Loading...',
  fullScreen: false,
};
InteractiveSpinner.storyName = 'Interactive Spinner';

```

-----

# Tag Component Usage Guide

The **Tag** component is a versatile UI element used for labeling, categorizing, or displaying statuses in your web application. It supports various customization options such as color, size, interactivity, and removability. The Tag component is designed to be simple and reusable across your app while maintaining consistency in style and behavior.

## Installation

To use the Tag component, ensure that you have the necessary dependencies installed:

```bash
npm install # or yarn install
```

## Importing the Tag Component

To use the **Tag** component in your project, import it from its source:

```javascript
import { Tag } from './path/to/Tag'; // Adjust the path based on your project structure
```

## Basic Usage

You can use the **Tag** component by providing a label and optionally setting its color, size, and variant:

```jsx
<Tag label="Design" />
```

## Props

| Prop        | Type     | Default   | Description                                                  |
| ----------- | -------- | --------- | ------------------------------------------------------------ |
| `label`     | `string` | Required  | The text or content of the tag.                              |
| `color`     | `string` | `primary` | The color scheme of the tag. (See available colors below)    |
| `size`      | `string` | `medium`  | The size of the tag: `small`, `medium`, or `large`.          |
| `variant`   | `string` | `filled`  | The visual style of the tag: `filled` (background) or `outlined` (border). |
| `removable` | `bool`   | `false`   | If true, the tag will display a close icon to make it removable. |
| `onRemove`  | `func`   | -         | Function triggered when the tag is removed. Required if `removable` is true. |
| `onClick`   | `func`   | -         | Function triggered when the tag is clicked, making the tag interactive. |
| `icon`      | `node`   | -         | Adds an optional icon to the tag, useful for statuses or categories. |
| `disabled`  | `bool`   | `false`   | If true, disables the tag from being clickable or interactive. |
| `className` | `string` | -         | Adds custom CSS classes for additional styling.              |
| `style`     | `object` | -         | Inline styles for custom visual tweaks.                      |

## Available Colors

You can pass the following colors as the `color` prop:

- `primary`
- `secondary`
- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`

Additionally, these extra color palettes are available:

- `classy-color-1`, `classy-color-2`, `classy-color-3`, `classy-color-4`, `classy-color-5`
- `small-switch-color-1`, `small-switch-color-2`
- `natural-color-1`, `natural-color-2`, `natural-color-3`
- `grey-friend-1`, `grey-friend-2`
- `shade-1`, `shade-2`, `shade-3`, `shade-4`

## Example Usages

### **1. Primary Filled Tag**

This will render a Tag with the primary color and filled background:

```jsx
<Tag label="Technology" color="primary" variant="filled" />
```

### **2. Secondary Outlined Tag**

This will render a Tag with an outlined border and text colored with the secondary color:

```jsx
<Tag label="Design" color="secondary" variant="outlined" />
```

### **3. Removable Tag**

The following tag is removable. You can handle the removal with the `onRemove` callback function:

```jsx
<Tag
  label="React"
  color="info"
  removable
  onRemove={() => console.log("Tag removed!")}
/>
```

### **4. Tag with Icon**

You can add an icon to the tag to provide additional context or visual appeal:

```jsx
<Tag
  label="Document"
  color="success"
  icon={<DocumentIcon />} // Your custom icon component
/>
```

### **5. Disabled Tag**

Tags can be disabled to prevent interactivity:

```jsx
<Tag label="Inactive" color="neutral" disabled />
```

### **6. Interactive Tag with Click Handler**

Make tags interactive by adding an `onClick` event handler:

```jsx
<Tag
  label="JavaScript"
  color="warning"
  onClick={() => console.log("Tag clicked!")}
/>
```

## Storybook Examples

### **1. Primary Tags with All Colors**

This example shows all available colors for the primary variant (filled background):

```jsx
<>
  {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
    <Tag key={color} label={`Tag ${color}`} color={color} variant="filled" style={{ marginRight: '8px' }} />
  ))}
</>
```

### **2. Secondary Tags with All Colors**

This example shows all available colors for the secondary variant (outlined):

```jsx
<>
  {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
    <Tag key={color} label={`Tag ${color}`} color={color} variant="outlined" style={{ marginRight: '8px' }} />
  ))}
</>
```

### **3. Interactive Tag Example**

An interactive tag that can be clicked and removed:

```jsx
<Tag
  label="Interactive Tag"
  color="primary"
  size="medium"
  variant="filled"
  removable
  onRemove={() => alert('Tag removed!')}
  onClick={() => alert('Tag clicked!')}
/>
```

## Customization

The Tag component provides full flexibility for customization using props like `size`, `variant`, `color`, and `style`. Additionally, you can add custom CSS classes through the `className` prop or inline styles with the `style` prop.

## Accessibility

- For removable tags, ensure you include an accessible label on the remove button using `aria-label` or similar attributes.
- Interactive tags should include `role="button"` and appropriate focus states for keyboard navigation.

This Markdown document provides a comprehensive guide on how to use the **Tag** component in your project with various customization options and usage examples.



```css
/* src/stories/Atoms/Tag/Tag.css */

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.tag--small {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.tag--large {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
}

.tag--filled {
  background-color: var(--tag-bg-color, #1F877D);
  color: #fff;
}

.tag--outlined {
  background-color: transparent;
  border: 1px solid var(--tag-border-color, #1F877D);
  color: var(--tag-border-color, #1F877D);
}

.tag--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.tag__remove {
  background: none;
  border: none;
  font-size: 1rem;
  color: inherit;
  cursor: pointer;
  margin-left: 0.5rem;
}

.tag__icon {
  margin-right: 0.5rem;
}

.tag--primary {
  --tag-bg-color: var(--primary-color);
  --tag-border-color: var(--primary-color);
}

.tag--secondary {
  --tag-bg-color: var(--secondary-color);
  --tag-border-color: var(--secondary-color);
}

.tag--info {
  --tag-bg-color: var(--info-color);
  --tag-border-color: var(--info-color);
}

.tag--warning {
  --tag-bg-color: var(--warning-color);
  --tag-border-color: var(--warning-color);
}

.tag--alert {
  --tag-bg-color: var(--alert-color);
  --tag-border-color: var(--alert-color);
}

.tag--success {
  --tag-bg-color: var(--success-color);
  --tag-border-color: var(--success-color);
}

.tag--neutral {
  --tag-bg-color: var(--neutral-color);
  --tag-border-color: var(--neutral-color);
}

.tag--dark {
  --tag-bg-color: var(--dark-color);
  --tag-border-color: var(--dark-color);
}

/* Additional colors */
.tag--classy-color-1 { --tag-bg-color: var(--classy-color-1); --tag-border-color: var(--classy-color-1); }
.tag--classy-color-2 { --tag-bg-color: var(--classy-color-2); --tag-border-color: var(--classy-color-2); }
.tag--classy-color-3 { --tag-bg-color: var(--classy-color-3); --tag-border-color: var(--classy-color-3); }
.tag--classy-color-4 { --tag-bg-color: var(--classy-color-4); --tag-border-color: var(--classy-color-4); }
.tag--classy-color-5 { --tag-bg-color: var(--classy-color-5); --tag-border-color: var(--classy-color-5); }

.tag--small-switch-color-1 { --tag-bg-color: var(--small-switch-color-1); --tag-border-color: var(--small-switch-color-1); }
.tag--small-switch-color-2 { --tag-bg-color: var(--small-switch-color-2); --tag-border-color: var(--small-switch-color-2); }

.tag--natural-color-1 { --tag-bg-color: var(--natural-color-1); --tag-border-color: var(--natural-color-1); }
.tag--natural-color-2 { --tag-bg-color: var(--natural-color-2); --tag-border-color: var(--natural-color-2); }
.tag--natural-color-3 { --tag-bg-color: var(--natural-color-3); --tag-border-color: var(--natural-color-3); }

.tag--grey-friend-1 { --tag-bg-color: var(--grey-friend-1); --tag-border-color: var(--grey-friend-1); }
.tag--grey-friend-2 { --tag-bg-color: var(--grey-friend-2); --tag-border-color: var(--grey-friend-2); }

.tag--shade-1 { --tag-bg-color: var(--shade-1); --tag-border-color: var(--shade-1); }
.tag--shade-2 { --tag-bg-color: var(--shade-2); --tag-border-color: var(--shade-2); }
.tag--shade-3 { --tag-bg-color: var(--shade-3); --tag-border-color: var(--shade-3); }
.tag--shade-4 { --tag-bg-color: var(--shade-4); --tag-border-color: var(--shade-4); }

```

```jsx
// src/stories/Atoms/Tag/Tag.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Tag.css';

export const Tag = ({
  label,
  color = 'primary', // Default color scheme
  variant = 'filled', // 'filled' for primary and 'outlined' for secondary
  size = 'medium', // small, medium, large
  removable = false,
  onRemove,
  onClick,
  icon,
  disabled = false,
  className = '',
  style = {},
  ...props
}) => {
  const handleRemove = (e) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  const tagClasses = classNames(
    'tag',
    `tag--${variant}`,
    `tag--${color}`,
    `tag--${size}`,
    {
      'tag--removable': removable,
      'tag--disabled': disabled,
    },
    className
  );

  return (
    <div
      className={tagClasses}
      style={style}
      onClick={!disabled ? onClick : null}
      {...props}
    >
      {icon && <span className="tag__icon">{icon}</span>}
      <span className="tag__label">{label}</span>
      {removable && !disabled && (
        <button className="tag__remove" onClick={handleRemove} aria-label="Remove tag">
          &times;
        </button>
      )}
    </div>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Tag;

```

```jsx
// src/stories/Atoms/Tag/Tag.stories.jsx
import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Atoms/Interactive/Tag',
  component: Tag,
  argTypes: {
    label: { control: 'text', defaultValue: 'Tag Label' },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
        ],
      },
      description: 'Color of the tag.',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Size of the tag.',
    },
    variant: {
      control: { type: 'select', options: ['filled', 'outlined'] },
      description: 'Variant of the tag.',
    },
    removable: {
      control: 'boolean',
      description: 'Makes the tag removable.',
    },
    onRemove: { action: 'removed', description: 'Called when tag is removed.' },
    onClick: { action: 'clicked', description: 'Called when the tag is clicked.' },
  },
};

/** Primary Tags with all colors */
export const PrimaryTags = () => (
  <>
    {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Tag key={color} label={`Tag ${color}`} color={color} variant="filled" style={{ marginRight: '8px' }} />
    ))}
  </>
);

/** Secondary Tags with all colors */
export const SecondaryTags = () => (
  <>
    {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Tag key={color} label={`Tag ${color}`} color={color} variant="outlined" style={{ marginRight: '8px' }} />
    ))}
  </>
);

/** Interactive Tag */
const Template = (args) => <Tag {...args} />;

export const InteractiveTag = Template.bind({});
InteractiveTag.args = {
  label: 'Interactive Tag',
  color: 'primary',
  size: 'medium',
  variant: 'filled',
  removable: true,
};

```

-------

A **TextArea component** is a multi-line text input field that allows users to input longer pieces of text, such as comments, descriptions, or feedback. To be **complete** and **versatile**, a TextArea component should support a variety of props and features that cater to both functionality and customization needs.

---

# TextArea Component Guide

The `TextArea` component is a customizable multi-line text input field that supports various styling, behavior, and validation options. This component is perfect for use in forms, comment sections, feedback areas, or any interface requiring longer text inputs.

## Installation

To use the `TextArea` component in your project, import it as follows:

```jsx
import { TextArea } from './TextArea';
```

## Basic Usage

```jsx
<TextArea
  value={textValue}
  placeholder="Enter your comments..."
  onChange={(e) => setTextValue(e.target.value)}
/>
```

## Props

### Core Props

- `value` (string): The current value of the TextArea (controlled component).
  - **Example:** `<TextArea value={textValue} onChange={handleChange} />`

- `defaultValue` (string): The default value of the TextArea (uncontrolled component).
  - **Example:** `<TextArea defaultValue="Enter your comment..." />`

- `placeholder` (string): Placeholder text when the TextArea is empty.
  - **Default:** `"Enter text here..."`

- `onChange` (function): Callback function triggered when the text changes.
  - **Example:** `<TextArea onChange={(e) => setText(e.target.value)} />`

- `name` (string): Name attribute for form handling.
  - **Example:** `<TextArea name="comment" />`

### Size and Dimensions

- `rows` (number): Specifies the visible number of text lines.
  - **Default:** `4`

- `cols` (number): Specifies the visible width of the TextArea in characters.
  - **Default:** `50`

- `resize` (string): Controls resizing behavior. Options are `'none'`, `'vertical'`, `'horizontal'`, or `'both'`.
  - **Default:** `"vertical"`

- `width` & `height` (string or number): Inline width and height styling.
  - **Example:** `<TextArea width="300px" height="150px" />`

### Styling and Text Formatting

- `bold` (boolean): Toggles bold text.
  - **Default:** `false`

- `italic` (boolean): Toggles italic text.
  - **Default:** `false`

- `underline` (boolean): Toggles underlined text.
  - **Default:** `false`

- `fontSize` (string): Sets the font size.
  - **Default:** `"16px"`

- `color` (string): The text color. Options include:
  - `'primary'`, `'info'`, `'warning'`, `'alert'`, `'success'`, `'neutral'`, `'dark'`
  - **Default:** `'primary'`

- `backgroundColor` (string): Sets the background color of the TextArea.
  - **Default:** `"transparent"`

### States and Validation

- `disabled` (boolean): Disables the TextArea.
  - **Default:** `false`

- `readOnly` (boolean): Makes the TextArea read-only.
  - **Default:** `false`

- `required` (boolean): Marks the field as required.
  - **Default:** `false`

- `maxLength` (number): Maximum number of characters allowed.
  - **Example:** `<TextArea maxLength={500} />`

- `error` (boolean): Displays the error state.
  - **Default:** `false`

- `errorMessage` (string): Text to display when there's an error.
  - **Example:** `<TextArea error={true} errorMessage="This field is required." />`

### Collapsible Feature

- `collapsible` (boolean): Enables the collapsible TextArea, which collapses after a certain character count.

  - **Default:** `false`

- `collapseAt` (number): The number of characters after which the TextArea collapses.

  - **Default:** `100`

- **Example:**

  ```jsx
  <TextArea
    value={longText}
    collapsible={true}
    collapseAt={200}
  />
  ```

### Helper Text and Accessibility

- `helperText` (string): Displays helper text below the TextArea.
  - **Example:** `<TextArea helperText="Max 500 characters" />`

- `aria-label` (string): ARIA label for accessibility.
  - **Example:** `<TextArea aria-label="Comment input field" />`

### Customization

- `className` (string): Adds custom CSS classes.
  - **Example:** `<TextArea className="custom-textarea" />`

- `style` (object): Inline styles for additional control.
  - **Example:** `<TextArea style={{ border: '2px solid #1F877D' }} />`

## Interactive Example

Here's an interactive example of the `TextArea` component with various customization options:

```jsx
<TextArea
  value="Type here..."
  placeholder="Enter your text..."
  rows={4}
  cols={50}
  bold={true}
  italic={false}
  underline={false}
  color="primary"
  collapsible={true}
  collapseAt={100}
  maxLength={500}
  onChange={(e) => console.log(e.target.value)}
  error={false}
  helperText="Max 500 characters"
/>
```

## Features

- **Text Formatting:** Easily toggle bold, italic, and underlined text.
- **Collapsible:** Collapse the TextArea after a certain character count for better UX on large text inputs.
- **Error Handling:** Visual feedback for errors with custom error messages.
- **Helper Text:** Add instructional or contextual helper text below the TextArea.

## Conclusion

The `TextArea` component is highly flexible and customizable, offering all the core features necessary for a rich text input field, along with additional props for controlling appearance, size, and behavior. It can be easily integrated into any form or user input area, ensuring a smooth and responsive experience.

---

This document provides clear examples and usage instructions for your **TextArea** component with all its customizable props and behavior.



```css
/*this.GUI/src/stories/Atoms/TextArea/TextArea.css */
.textarea-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.textarea {
  padding: 10px;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 5px;
  font-family: var(--font-family, sans-serif);
  font-size: var(--font-size, 16px);
  width: 100%;
  transition: border-color 0.3s ease;
}

.textarea:focus {
  border-color: var(--primary-color);
  outline: none;
}

/* Font Styles */
.textarea--bold {
  font-weight: bold;
}

.textarea--italic {
  font-style: italic;
}

.textarea--underline {
  text-decoration: underline;
}

/* Colors */
.textarea--primary {
  color: var(--primary-color);
}

.textarea--info {
  color: var(--info-color);
}

.textarea--warning {
  color: var(--warning-color);
}

.textarea--alert {
  color: var(--alert-color);
}

.textarea--success {
  color: var(--success-color);
}

.textarea--neutral {
  color: var(--neutral-color);
}

.textarea--dark {
  color: var(--dark-color);
}

/* Error State */
.textarea--error {
  border-color: var(--error-color, red);
}

.textarea-error {
  color: red;
  margin-top: 5px;
}

.textarea-helper {
  color: var(--muted-text-color, #777);
  margin-top: 5px;
}

/* Disabled */
.textarea--disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

/* Collapsible */
.textarea--collapsible {
  display: none;
}

.textarea-wrapper button {
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

```

```jsx
//this.GUI/src/stories/Atoms/TextArea/TextArea.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TextArea.css';

export const TextArea = ({
  value,
  defaultValue,
  placeholder = "Enter text here...",
  rows = 4,
  cols = 50,
  resize = "vertical",
  bold = false,
  italic = false,
  underline = false,
  fontSize = "16px",
  color = "primary",
  backgroundColor = "transparent",
  collapsible = false,
  collapseAt = 100,
  maxLength,
  disabled = false,
  readOnly = false,
  required = false,
  onChange,
  onBlur,
  onFocus,
  autoResize = false,
  error = false,
  errorMessage = "",
  helperText = "",
  className = "",
  style = {},
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(collapsible && value?.length > collapseAt);

  const handleChange = (e) => {
    if (collapsible && e.target.value.length > collapseAt) {
      setCollapsed(false);
    }
    if (onChange) onChange(e);
  };

  const textareaClasses = classNames('textarea', className, {
    [`textarea--${color}`]: color,
    'textarea--bold': bold,
    'textarea--italic': italic,
    'textarea--underline': underline,
    'textarea--disabled': disabled,
    'textarea--error': error,
    'textarea--collapsible': collapsible && collapsed,
  });

  const customStyles = {
    ...style,
    fontSize,
    backgroundColor,
    resize,
    display: collapsed ? 'none' : 'block',
  };

  return (
    <div className="textarea-wrapper">
      <textarea
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        className={textareaClasses}
        style={customStyles}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...props}
      />
      {error && errorMessage && <div className="textarea-error">{errorMessage}</div>}
      {helperText && <div className="textarea-helper">{helperText}</div>}
      {collapsed && <button onClick={() => setCollapsed(false)}>Expand</button>}
    </div>
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  resize: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  fontSize: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark']),
  backgroundColor: PropTypes.string,
  collapsible: PropTypes.bool,
  collapseAt: PropTypes.number,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  autoResize: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

```

```jsx
//this.GUI/src/stories/Atoms/TextArea/TextArea.stories.jsx
import React from 'react';
import { TextArea } from './TextArea';

export default {
  title: 'Atoms/Interactive/TextArea',
  component: TextArea,
  argTypes: {
    bold: { control: 'boolean', description: 'Bold text' },
    italic: { control: 'boolean', description: 'Italic text' },
    underline: { control: 'boolean', description: 'Underlined text' },
    color: {
      control: { type: 'select', options: ['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'] },
      description: 'Text color',
    },
    collapsible: { control: 'boolean', description: 'Enable collapsible text area' },
    collapseAt: { control: 'number', description: 'Collapse after N characters' },
  },
};

/** Interactive TextArea */
const Template = (args) => <TextArea {...args} />;

export const InteractiveTextArea = Template.bind({});
InteractiveTextArea.args = {
  value: 'Type here...',
  placeholder: 'Enter your text...',
  rows: 4,
  cols: 50,
  bold: false,
  italic: false,
  underline: false,
  color: 'primary',
  collapsible: false,
  collapseAt: 100,
};

```

-----



A **TextInput component** in web and app development is a fundamental UI element that allows users to input and edit text. A complete and versatile **TextInput component** should offer several key features to accommodate different use cases, from simple single-line inputs to more complex scenarios like validation, accessibility, and customizability.

# TextInput Component Guide

### TextInput Component Usage Guide

The **TextInput** component is a versatile and customizable input field designed for various use cases in web applications. It allows users to input and edit text, with support for customization, validation, accessibility, and interactive features.

### Importing the Component

Before you can use the `TextInput` component, you need to import it into your React application:

```jsx
import { TextInput } from './TextInput'; // Adjust the path based on your file structure
```

### Basic Usage

To render a simple **TextInput**, you can use the following example:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  placeholder="Enter text here..."
/>
```

In this example:

- `value`: The current value of the input (controlled component).
- `onChange`: A function to handle value changes.
- `placeholder`: Placeholder text when the input is empty.

### Customizing Size and Color

You can customize the size and color of the **TextInput** using the `size` and `color` props.

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  size="large"  // Options: 'small', 'medium', 'large'
  color="info"  // Available color options: 'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark', and others
  placeholder="Enter your info..."
/>
```

### Handling Clearable Input

If you want the **TextInput** to be clearable (with a button to remove the input), set the `clearable` prop to `true` and handle the `onClear` callback:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  clearable={true}
  onClear={() => setInputValue('')}  // Function to clear the input value
  placeholder="Enter text..."
/>
```

### Disabled and Read-Only States

You can disable the **TextInput** or set it as read-only using the `disabled` and `readOnly` props:

```jsx
<TextInput
  value="This field is disabled"
  disabled={true}
/>

<TextInput
  value="This field is read-only"
  readOnly={true}
/>
```

- `disabled`: Prevents any interaction with the input.
- `readOnly`: Allows the user to view but not edit the input.

### Customizing Styles

You can pass custom inline styles or use CSS classes to further customize the appearance of the **TextInput**:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  style={{ border: '2px solid #1F877D', borderRadius: '8px', fontSize: '18px' }}
  placeholder="Custom styled input"
/>
```

### Loading State

If you want to show a spinner to indicate that the input is loading (e.g., during async validation or data fetching), use the `loading` prop:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  loading={true}
  placeholder="Loading..."
/>
```

### Validation and Error States

The **TextInput** supports validation and error states. You can show helper text or error messages using the `helperText`, `error`, and `errorMessage` props:

```jsx
<TextInput
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={isEmailInvalid}
  errorMessage="Invalid email address"
  helperText="Please enter a valid email."
  placeholder="Enter your email..."
/>
```

- `error`: Boolean indicating whether the input has an error.
- `errorMessage`: Message displayed when an error occurs.
- `helperText`: Additional helper text displayed below the input.

### Accessibility Features

To improve accessibility, the **TextInput** includes support for ARIA attributes:

```jsx
<TextInput
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  aria-label="Enter your username"
  aria-describedby="helper-text"
/>
```

### Advanced Props

- **maxLength**: Limits the maximum number of characters.
- **minLength**: Enforces a minimum character length.
- **autoFocus**: Automatically focuses the input when it is rendered.
- **required**: Marks the input as required in a form.
- **spellCheck**: Enables or disables the browser's spell check feature.
- **autoComplete**: Controls browser auto-completion.

### Example: Interactive Usage in a Form

```jsx
const MyForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your name"
        size="medium"
        color="primary"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

In this example, the **TextInput** is used in a form where the user is required to input their name. The form validates the input and prevents submission if the field is empty.

### Available Color Options

The **TextInput** supports a wide range of color options, allowing it to fit seamlessly into your theme:

- `primary`
- `secondary`
- `info`
- `warning`
- `alert`
- `success`
- `neutral`
- `dark`
- Custom colors: 'classy-color-1', 'classy-color-2', 'classy-color-3', and more.

### Conclusion

The **TextInput** component provides a flexible and customizable input field that can be adapted to various use cases. With support for custom colors, sizes, validation, error handling, and accessibility features, it can be used effectively in forms and other input-related components.



```jsx
/*this.GUI/src/stories/Atoms/TextInput/TextInput.css */
.text-input {
  display: flex;
  align-items: center;
  font-family: var(--font-family);
  width: 100%;
  padding: var(--spacing-sm);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-speed), box-shadow var(--transition-speed);
}

.text-input__input {
  width: 100%;
  padding: var(--spacing-sm);
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  outline: none;
}

.text-input--small .text-input__input {
  font-size: var(--font-size-small);
}

.text-input--large .text-input__input {
  font-size: var(--font-size-large);
}

.text-input--disabled {
  background-color: var(--neutral-color-hover);
  cursor: not-allowed;
}

.text-input--primary {
  border-color: var(--primary-color);
}

.text-input--secondary {
  border-color: var(--secondary-color);
}

/* Additional Colors */
.text-input--info {
  border-color: var(--info-color);
}

.text-input--warning {
  border-color: var(--warning-color);
}

.text-input--alert {
  border-color: var(--alert-color);
}

.text-input--success {
  border-color: var(--success-color);
}

.text-input--neutral {
  border-color: var(--neutral-color);
}

.text-input--dark {
  border-color: var(--dark-color);
}

.text-input__clear-button {
  background: none;
  border: none;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
}

.text-input--loading {
  background-color: #f0f0f0;
}

.text-input__spinner {
  margin-left: var(--spacing-sm);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

```

```jsx
//this.GUI/src/stories/Atoms/TextInput/TextInput.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

export const TextInput = ({
  value,
  defaultValue,
  onChange,
  placeholder = 'Enter text here...',
  type = 'text',
  size = 'medium',
  color = 'primary',
  fontFamily,
  fontSize,
  backgroundColor,
  borderColor,
  borderRadius,
  disabled = false,
  readOnly = false,
  required = false,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  isValid,
  error,
  helperText,
  errorMessage,
  clearable = false,
  onClear,
  loading = false,
  ariaLabel,
  ariaDescribedBy,
  tabIndex,
  spellCheck = true,
  autoComplete = 'on',
  inputMode,
  step,
  className = '',
  style = {},
  ...props
}) => {
  const inputClasses = [
    'text-input',
    `text-input--${size}`,
    `text-input--${color}`,
    error ? 'text-input--error' : '',
    loading ? 'text-input--loading' : '',
    className,
  ].join(' ').trim();

  return (
    <div className={inputClasses} style={{ backgroundColor, borderColor, borderRadius, fontFamily, fontSize, ...style }}>
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex={tabIndex}
        spellCheck={spellCheck}
        autoComplete={autoComplete}
        inputMode={inputMode}
        step={step}
        className="text-input__input"
        autoFocus={autoFocus}
        {...props}
      />
      {clearable && value && (
        <button className="text-input__clear-button" onClick={onClear} aria-label="Clear input">
          &times;
        </button>
      )}
      {loading && <div className="text-input__spinner" />}
      {helperText && <div className="text-input__helper-text">{helperText}</div>}
      {error && errorMessage && <div className="text-input__error-message">{errorMessage}</div>}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  autoFocus: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  isValid: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  clearable: PropTypes.bool,
  onClear: PropTypes.func,
  loading: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaDescribedBy: PropTypes.string,
  tabIndex: PropTypes.number,
  spellCheck: PropTypes.bool,
  autoComplete: PropTypes.string,
  inputMode: PropTypes.string,
  step: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TextInput;

```

```jsx
//this.GUI/src/stories/Atoms/TextInput/TextInput.stories.jsx
import React, { useState } from 'react';
import { TextInput } from './TextInput';

export default {
  title: 'Atoms/Interactive/TextInput',
  component: TextInput,
  argTypes: {
    value: { control: 'text', defaultValue: '' },
    placeholder: { control: 'text', defaultValue: 'Enter text...' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    color: {
      control: {
        type: 'select',
        options: [
          'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
          'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
          'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
          'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
        ]
      }
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    clearable: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export const DefaultTextInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <TextInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type something..."
    />
  );
};

export const WithClear = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <TextInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter text..."
      clearable={true}
      onClear={() => setInputValue('')}
    />
  );
};

export const InteractiveTextInput = (args) => {
  return <TextInput {...args} />;
};

InteractiveTextInput.args = {
  placeholder: 'Enter text...',
  size: 'medium',
  color: 'primary',
  disabled: false,
  readOnly: false,
  clearable: true,
  loading: false,
};

```

-------

### How to Use the **Toggle** Component:

### Usage Example

```jsx
import { Toggle } from './Toggle';

const App = () => (
  <div>
    <Toggle 
      checked={true}
      label="Enable Feature"
      size="large"
      color="primary"
      onChange={(newState) => console.log('Toggled to:', newState)}
    />

    <Toggle 
      label="Toggle Notifications" 
      size="medium" 
      color="info" 
      onChange={(newState) => console.log('Toggled to:', newState)} 
    />

    <Toggle 
      label="Switch Mode" 
      size="small" 
      color="dark" 
      onChange={(newState) => console.log('Toggled to:', newState)} 
    />
  </div>
);
```

**Basic Usage**:

```jsx
<Toggle
  checked={isToggled}
  onChange={(newState) => setToggled(newState)}
  label="Dark Mode"
/>
```

**Custom Colors**:

```jsx
<Toggle
  checked={isToggled}
  onChange={(newState) => setToggled(newState)}
  color="#1F877D"  // On state color
  offColor="#CCCCCC"  // Off state color
  knobColor="#FFFFFF"  // Knob color
/>
```

**Disabled Toggle**:

```jsx
<Toggle
  label="Disabled Feature"
  disabled={true}
/>
```

**Loading State**:

```jsx
<Toggle
  label="Loading"
  loading={true}
/>
```

**Error State with Validation**:

```jsx
<Toggle
  label="Enable Notifications"
  error={true}
  errorMessage="You must enable this option."
/>
```

```css
/*this.GUI/src/stories/Atoms/Toggle/Toggle.css*/
/* Base Toggle Styles */
.toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.toggle__switch {
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: var(--border-radius);
  background-color: var(--off-color, var(--neutral-color));
  transition: background-color var(--transition-speed);
}

.toggle__knob {
  position: absolute;
  top: 50%;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: var(--knob-color, var(--text-color-inverse));
  border-radius: 50%;
  transform: translateY(-50%);
  transition: left var(--transition-speed);
}

.toggle--checked .toggle__switch {
  background-color: var(--on-color, var(--primary-color));
}

.toggle--checked .toggle__knob {
  left: calc(100% - 18px);
}

/* Disabled state */
.toggle--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Size Variants */
.toggle--small .toggle__switch {
  width: 30px;
  height: 16px;
}

.toggle--small .toggle__knob {
  width: 12px;
  height: 12px;
}

.toggle--large .toggle__switch {
  width: 60px;
  height: 30px;
}

.toggle--large .toggle__knob {
  width: 26px;
  height: 26px;
}

/* Color Variants */
.toggle--primary .toggle__switch {
  background-color: var(--primary-color);
}

.toggle--secondary .toggle__switch {
  background-color: var(--secondary-color);
}

.toggle--info .toggle__switch {
  background-color: var(--info-color);
}

.toggle--warning .toggle__switch {
  background-color: var(--warning-color);
}

.toggle--alert .toggle__switch {
  background-color: var(--alert-color);
}

.toggle--success .toggle__switch {
  background-color: var(--success-color);
}

.toggle--neutral .toggle__switch {
  background-color: var(--neutral-color);
}

.toggle--dark .toggle__switch {
  background-color: var(--dark-color);
}

/* Additional colors from design tokens */
.toggle--classy-color-1 { background-color: var(--classy-color-1); }
.toggle--classy-color-2 { background-color: var(--classy-color-2); }
.toggle--classy-color-3 { background-color: var(--classy-color-3); }
.toggle--classy-color-4 { background-color: var(--classy-color-4); }
.toggle--classy-color-5 { background-color: var(--classy-color-5); }

.toggle--small-switch-color-1 { background-color: var(--small-switch-color-1); }
.toggle--small-switch-color-2 { background-color: var(--small-switch-color-2); }

.toggle--natural-color-1 { background-color: var(--natural-color-1); }
.toggle--natural-color-2 { background-color: var(--natural-color-2); }
.toggle--natural-color-3 { background-color: var(--natural-color-3); }

.toggle--grey-friend-1 { background-color: var(--grey-friend-1); }
.toggle--grey-friend-2 { background-color: var(--grey-friend-2); }

.toggle--shade-1 { background-color: var(--shade-1); }
.toggle--shade-2 { background-color: var(--shade-2); }
.toggle--shade-3 { background-color: var(--shade-3); }
.toggle--shade-4 { background-color: var(--shade-4); }

```

```jsx
//this.GUI/src/stories/Atoms/Toggle/Toggle.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

export const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  size = 'medium',
  color = 'primary', // Color variant from the theme
  label = '',
  labelPosition = 'right', // 'left', 'right', 'top', 'bottom'
  className = '',
  ...props
}) => {
  const toggleClasses = `
    toggle 
    toggle--${size} 
    toggle--${color} 
    ${checked ? 'toggle--checked' : ''} 
    ${disabled ? 'toggle--disabled' : ''} 
    ${className}
  `.trim();

  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={`toggle__label toggle__label--${labelPosition}`}>
      {label && labelPosition === 'left' && <span>{label}</span>}
      <div className={toggleClasses} onClick={handleChange} {...props}>
        <div className="toggle__switch">
          <div className="toggle__knob" />
        </div>
      </div>
      {label && labelPosition !== 'left' && <span>{label}</span>}
    </label>
  );
};

Toggle.propTypes = {
  /** Whether the toggle is checked (on/off state) */
  checked: PropTypes.bool,
  /** Callback when the toggle changes */
  onChange: PropTypes.func.isRequired,
  /** Whether the toggle is disabled */
  disabled: PropTypes.bool,
  /** Size of the toggle */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color variant for the toggle */
  color: PropTypes.oneOf([
    'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  /** Label for the toggle */
  label: PropTypes.string,
  /** Position of the label relative to the toggle */
  labelPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  /** Additional custom CSS classes */
  className: PropTypes.string,
};

export default Toggle;

```

```jsx
//this.GUI/src/stories/Atoms/Toggle/Toggle.stories.jsx
import React, { useState } from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Atoms/Interactive/Toggle',
  component: Toggle,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      defaultValue: 'medium',
    },
    color: {
      control: { type: 'select', options: [
        'primary', 'secondary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
        'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
        'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
      ]},
      defaultValue: 'primary',
    },
    label: { control: 'text', defaultValue: 'Toggle label' },
    labelPosition: {
      control: { type: 'select', options: ['left', 'right', 'top', 'bottom'] },
      defaultValue: 'right',
    },
  },
};

export const InteractiveToggle = (args) => {
  const [checked, setChecked] = useState(args.checked);

  return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

```

------



## Tooltip Component Guide

The `Tooltip` component is an interactive UI element that provides contextual information or guidance when users hover, click, or focus on a target element. It is highly customizable in terms of content, appearance, and behavior.

### Importing the Tooltip Component

```jsx
import { Tooltip } from './Tooltip';
```

### Basic Usage

To create a simple tooltip, wrap the target element (such as a button or icon) with the `Tooltip` component, passing in the `content` prop.

```jsx
<Tooltip content="This is a tooltip">
  <button>Hover me</button>
</Tooltip>
```

### Props

| Prop        | Type      | Default     | Description                                                  |
| ----------- | --------- | ----------- | ------------------------------------------------------------ |
| `content`   | `node`    | (required)  | The content that will be displayed inside the tooltip (text, HTML, or a React component). |
| `position`  | `string`  | `'top'`     | The position of the tooltip relative to the target. Options: `top`, `bottom`, `left`, `right`, `north`, `south`, `east`, `west`. |
| `variant`   | `string`  | `'primary'` | Determines the style of the tooltip: `'primary'` (solid background) or `'secondary'` (outlined). |
| `color`     | `string`  | `'primary'` | Specifies the color scheme from the theme. Available options are listed below. |
| `showArrow` | `boolean` | `true`      | Whether to show an arrow connecting the tooltip to the target element. |
| `children`  | `node`    | (required)  | The target element that will trigger the tooltip when hovered or clicked. |

### Available Colors

You can choose from the following colors for both `primary` and `secondary` variants:

- **Primary Colors**:
  - `primary`, `secondary`, `info`, `warning`, `alert`, `success`, `neutral`, `dark`

- **Classy Palette**:
  - `classy-color-1`, `classy-color-2`, `classy-color-3`, `classy-color-4`, `classy-color-5`

- **Small Switch Palette**:
  - `small-switch-color-1`, `small-switch-color-2`

- **Natural Palette**:
  - `natural-color-1`, `natural-color-2`, `natural-color-3`

- **Grey Friends**:
  - `grey-friend-1`, `grey-friend-2`

- **Shades**:
  - `shade-1`, `shade-2`, `shade-3`, `shade-4`

### Example with Custom Position and Color

```jsx
<Tooltip content="This is an info tooltip" position="bottom" color="info">
  <button>Hover me</button>
</Tooltip>
```

### Secondary Variant (Outlined Tooltip)

For a tooltip with only a colored border and text, use the `variant="secondary"` prop.

```jsx
<Tooltip content="Outlined Tooltip" variant="secondary" color="warning">
  <button>Hover me</button>
</Tooltip>
```

### Tooltip with Arrow and Custom Delay

You can delay when the tooltip appears or hides by customizing the `delayShow` and `delayHide` props (available in the `stories` but not directly in the base component in this example).

```jsx
<Tooltip content="This is a delayed tooltip" delayShow={300} delayHide={200}>
  <button>Hover me (delayed)</button>
</Tooltip>
```

### Positioning Examples

The `position` prop allows you to control where the tooltip will appear relative to the target element.

```jsx
<Tooltip content="Top Tooltip" position="top">
  <button>Top</button>
</Tooltip>

<Tooltip content="Bottom Tooltip" position="bottom">
  <button>Bottom</button>
</Tooltip>

<Tooltip content="Left Tooltip" position="left">
  <button>Left</button>
</Tooltip>

<Tooltip content="Right Tooltip" position="right">
  <button>Right</button>
</Tooltip>
```

### Full Example: Customizing Tooltip with Variants and Colors

```jsx
<div style={{ padding: '50px', display: 'grid', gap: '20px' }}>
  <Tooltip content="Primary Success Tooltip" variant="primary" color="success">
    <button>Hover for Success</button>
  </Tooltip>
  
  <Tooltip content="Secondary Warning Tooltip" variant="secondary" color="warning">
    <button>Hover for Warning</button>
  </Tooltip>
  
  <Tooltip content="Classy Tooltip" variant="primary" color="classy-color-3">
    <button>Hover for Classy Color</button>
  </Tooltip>
</div>
```

### Advanced Customization Options

- **Arrow Visibility**: You can toggle the visibility of the arrow by setting `showArrow` to `true` or `false`.
- **Manual Triggering**: The tooltip can be manually triggered by programmatically controlling its visibility (e.g., on click or focus).

This guide provides all the necessary information to effectively use the `Tooltip` component, customize it with different color themes, position it, and apply different variants.

```css
/*this.GUI/src/stories/Atoms/Tooltip/Tooltip.css*/
/* Base Tooltip Styles */
.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  visibility: hidden;
  opacity: 0;
  background-color: var(--tooltip-background-color, #333);
  color: var(--tooltip-text-color, #fff);
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
  font-size: var(--font-size-base, 14px);
}

.tooltip--visible {
  visibility: visible;
  opacity: 1;
}

/* Arrow */
.tooltip__arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Tooltip Position Variants */
.tooltip--top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip--top .tooltip__arrow {
  top: 100%;
  left: 50%;
  border-width: 6px 6px 0 6px;
  border-color: var(--tooltip-background-color) transparent transparent transparent;
}

.tooltip--bottom {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip--bottom .tooltip__arrow {
  bottom: 100%;
  left: 50%;
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent var(--tooltip-background-color) transparent;
}

.tooltip--left {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.tooltip--left .tooltip__arrow {
  right: -6px;
  top: 50%;
  border-width: 6px 6px 6px 0;
  border-color: transparent var(--tooltip-background-color) transparent transparent;
}

.tooltip--right {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.tooltip--right .tooltip__arrow {
  left: -6px;
  top: 50%;
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent var(--tooltip-background-color);
}

/* Custom Variants: North, South, East, West */
.tooltip--north {
  top: -120%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip--south {
  bottom: -120%;
  left: 50%;
  transform: translateX(-50%);
}

.tooltip--east {
  left: 120%;
  top: 50%;
  transform: translateY(-50%);
}

.tooltip--west {
  right: 120%;
  top: 50%;
  transform: translateY(-50%);
}

/* Colors for Primary and Secondary Variants */
.tooltip--primary {
  background-color: var(--primary-color, #1F877D);
  color: #fff;
}

.tooltip--secondary {
  background-color: transparent;
  border: 2px solid var(--primary-color, #1F877D);
  color: var(--primary-color, #1F877D);
}

/* Primary Colors (Background) */
.tooltip--primary-primary {
  background-color: var(--primary-color, #1F877D);
  color: #fff;
}

.tooltip--primary-secondary {
  background-color: var(--secondary-color, #39a182);
  color: #fff;
}

.tooltip--primary-info {
  background-color: var(--info-color, #008699);
  color: #fff;
}

.tooltip--primary-warning {
  background-color: var(--warning-color, #FF6F61);
  color: #fff;
}

.tooltip--primary-alert {
  background-color: var(--alert-color, #ffcc00);
  color: #fff;
}

.tooltip--primary-success {
  background-color: var(--success-color, #00B4B8);
  color: #fff;
}

.tooltip--primary-neutral {
  background-color: var(--neutral-color, #a4a4a4);
  color: #fff;
}

.tooltip--primary-dark {
  background-color: var(--dark-color, #2C2C2C);
  color: #fff;
}

/* Classy Palette */
.tooltip--primary-classy-color-1 {
  background-color: var(--classy-color-1, #16655c);
  color: #fff;
}

.tooltip--primary-classy-color-2 {
  background-color: var(--classy-color-2, #96b1ac);
  color: #fff;
}

.tooltip--primary-classy-color-3 {
  background-color: var(--classy-color-3, #637c78);
  color: #fff;
}

.tooltip--primary-classy-color-4 {
  background-color: var(--classy-color-4, #405b83);
  color: #fff;
}

.tooltip--primary-classy-color-5 {
  background-color: var(--classy-color-5, #738db8);
  color: #fff;
}

/* Small Switch Colors */
.tooltip--primary-small-switch-color-1 {
  background-color: var(--small-switch-color-1, #deefe6);
  color: #000;
}

.tooltip--primary-small-switch-color-2 {
  background-color: var(--small-switch-color-2, #4e8a6e);
  color: #fff;
}

/* Natural Palette */
.tooltip--primary-natural-color-1 {
  background-color: var(--natural-color-1, #00aa96);
  color: #fff;
}

.tooltip--primary-natural-color-2 {
  background-color: var(--natural-color-2, #e8fefa);
  color: #000;
}

.tooltip--primary-natural-color-3 {
  background-color: var(--natural-color-3, #e7fefe);
  color: #000;
}

/* Grey Friends */
.tooltip--primary-grey-friend-1 {
  background-color: var(--grey-friend-1, #344b47);
  color: #fff;
}

.tooltip--primary-grey-friend-2 {
  background-color: var(--grey-friend-2, #96b1ac);
  color: #fff;
}

/* Shades */
.tooltip--primary-shade-1 {
  background-color: var(--shade-1, #3b847a);
  color: #fff;
}

.tooltip--primary-shade-2 {
  background-color: var(--shade-2, #5da59a);
  color: #fff;
}

.tooltip--primary-shade-3 {
  background-color: var(--shade-3, #7ec7bc);
  color: #fff;
}

.tooltip--primary-shade-4 {
  background-color: var(--shade-4, #a0eade);
  color: #fff;
}

/* Secondary Colors (Outlined with Text Colored) */
.tooltip--secondary {
  background-color: transparent;
  border: 2px solid var(--primary-color, #1F877D);
  color: var(--primary-color, #1F877D);
}

.tooltip--secondary-secondary {
  border-color: var(--secondary-color, #39a182);
  color: var(--secondary-color, #39a182);
}

.tooltip--secondary-info {
  border-color: var(--info-color, #008699);
  color: var(--info-color, #008699);
}

.tooltip--secondary-warning {
  border-color: var(--warning-color, #FF6F61);
  color: var(--warning-color, #FF6F61);
}

.tooltip--secondary-alert {
  border-color: var(--alert-color, #ffcc00);
  color: var(--alert-color, #ffcc00);
}

.tooltip--secondary-success {
  border-color: var(--success-color, #00B4B8);
  color: var(--success-color, #00B4B8);
}

.tooltip--secondary-neutral {
  border-color: var(--neutral-color, #a4a4a4);
  color: var(--neutral-color, #a4a4a4);
}

.tooltip--secondary-dark {
  border-color: var(--dark-color, #2C2C2C);
  color: var(--dark-color, #2C2C2C);
}

/* Classy Palette (Outlined) */
.tooltip--secondary-classy-color-1 {
  border-color: var(--classy-color-1, #16655c);
  color: var(--classy-color-1, #16655c);
}

.tooltip--secondary-classy-color-2 {
  border-color: var(--classy-color-2, #96b1ac);
  color: var(--classy-color-2, #96b1ac);
}

.tooltip--secondary-classy-color-3 {
  border-color: var(--classy-color-3, #637c78);
  color: var(--classy-color-3, #637c78);
}

.tooltip--secondary-classy-color-4 {
  border-color: var(--classy-color-4, #405b83);
  color: var(--classy-color-4, #405b83);
}

.tooltip--secondary-classy-color-5 {
  border-color: var(--classy-color-5, #738db8);
  color: var(--classy-color-5, #738db8);
}

/* Small Switch Palette (Outlined) */
.tooltip--secondary-small-switch-color-1 {
  border-color: var(--small-switch-color-1, #deefe6);
  color: var(--small-switch-color-1, #deefe6);
}

.tooltip--secondary-small-switch-color-2 {
  border-color: var(--small-switch-color-2, #4e8a6e);
  color: var(--small-switch-color-2, #4e8a6e);
}

/* Natural Palette (Outlined) */
.tooltip--secondary-natural-color-1 {
  border-color: var(--natural-color-1, #00aa96);
  color: var(--natural-color-1, #00aa96);
}

.tooltip--secondary-natural-color-2 {
  border-color: var(--natural-color-2, #e8fefa);
  color: var(--natural-color-2, #e8fefa);
}

.tooltip--secondary-natural-color-3 {
  border-color: var(--natural-color-3, #e7fefe);
  color: var(--natural-color-3, #e7fefe);
}

/* Grey Friends (Outlined) */
.tooltip--secondary-grey-friend-1 {
  border-color: var(--grey-friend-1, #344b47);
  color: var(--grey-friend-1, #344b47);
}

.tooltip--secondary-grey-friend-2 {
  border-color: var(--grey-friend-2, #96b1ac);
  color: var(--grey-friend-2, #96b1ac);
}

/* Shades (Outlined) */
.tooltip--secondary-shade-1 {
  border-color: var(--shade-1, #3b847a);
  color: var(--shade-1, #3b847a);
}

.tooltip--secondary-shade-2 {
  border-color: var(--shade-2, #5da59a);
  color: var(--shade-2, #5da59a);
}

.tooltip--secondary-shade-3 {
  border-color: var(--shade-3, #7ec7bc);
  color: var(--shade-3, #7ec7bc);
}

.tooltip--secondary-shade-4 {
  border-color: var(--shade-4, #a0eade);
  color: var(--shade-4, #a0eade);
}


/* Hover Behavior */
.tooltip-wrapper:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

```

```jsx
//this.GUI/src/stories/Atoms/Tooltip/Tooltip.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

export const Tooltip = ({
  content,
  position = 'top',
  variant = 'primary',
  color = 'primary',  // Ensure default color is "primary"
  showArrow = true,
  children,
  ...props
}) => {
  const tooltipClasses = `
    tooltip
    tooltip--${position}
    tooltip--${variant}
    tooltip--primary-${color}
    ${variant === 'secondary' ? `tooltip--secondary-${color}` : ''}
  `.trim(); // Ensuring the correct color class is applied

  return (
    <div className="tooltip-wrapper" {...props}>
      {children}
      <div className={tooltipClasses}>
        {content}
        {showArrow && <div className="tooltip__arrow"></div>}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'north', 'south', 'east', 'west']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  color: PropTypes.oneOf([
    'primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4'
  ]),
  showArrow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

```

```jsx
//this.GUI/src/stories/Atoms/Tooltip/Tooltip.stories.jsx
import React from 'react';
import { Tooltip } from './Tooltip';

export default {
  title: 'Atoms/Interactive/Tooltip',
  component: Tooltip,
  argTypes: {
    content: { control: 'text', defaultValue: 'Tooltip Content' },
    position: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right', 'north', 'south', 'east', 'west'] },
      defaultValue: 'top'
    },
    color: {
      control: { type: 'select', options: [
        'primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark',
        'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5'
      ]},
      defaultValue: 'primary'
    },
    variant: { control: { type: 'select', options: ['primary', 'secondary'] }, defaultValue: 'primary' },
    showArrow: { control: 'boolean', defaultValue: true },
  },
};


export const ColorVariants = () => (
  <div style={{ padding: '50px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
    {['primary', 'info', 'warning', 'alert', 'success', 'neutral', 'dark'].map((color) => (
      <Tooltip key={color} content={`This is ${color}`} color={color}>
        <button>Hover for {color}</button>
      </Tooltip>
    ))}
  </div>
);

export const InteractiveTooltip = (args) => (
  <div style={{ padding: '100px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <Tooltip {...args} position="top">
      <button>Hover Top</button>
    </Tooltip>
    <Tooltip {...args} position="bottom">
      <button>Hover Bottom</button>
    </Tooltip>
    <Tooltip {...args} position="left">
      <button>Hover Left</button>
    </Tooltip>
    <Tooltip {...args} position="right">
      <button>Hover Right</button>
    </Tooltip>
  </div>
);
```

-----

### How to Use the Video Component

The `Video` component is a highly customizable atomic-level element designed for basic video playback. It provides essential controls such as play/pause, volume adjustment, and video progress management. Here's how you can use the component:

### Basic Usage

```jsx
<Video src="path-to-your-video.mp4" />
```

### Props

| Prop                  | Type       | Default    | Description                                                  |
| --------------------- | ---------- | ---------- | ------------------------------------------------------------ |
| `src`                 | `string`   | (required) | The URL of the video to be played.                           |
| `poster`              | `string`   | `null`     | URL of the poster image to be shown before the video starts playing. |
| `autoplay`            | `boolean`  | `false`    | Determines whether the video should autoplay when loaded.    |
| `loop`                | `boolean`  | `false`    | When `true`, the video will loop after it ends.              |
| `muted`               | `boolean`  | `false`    | If `true`, the video will be muted by default.               |
| `controls`            | `boolean`  | `true`     | Shows the default browser video controls if set to `true`.   |
| `width`               | `string`   | `'100%'`   | The width of the video player, responsive by default.        |
| `height`              | `string`   | `'auto'`   | The height of the video player.                              |
| `onPlay`              | `function` | `null`     | Function to be called when the video is played.              |
| `onPause`             | `function` | `null`     | Function to be called when the video is paused.              |
| `onEnd`               | `function` | `null`     | Function to be called when the video ends.                   |
| `showControlsOnHover` | `boolean`  | `true`     | If `true`, the controls will appear only on hover.           |

### Example: Video with Custom Dimensions

```jsx
<Video
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  width="640px"
  height="360px"
/>
```

### Example: Autoplay and Loop

```jsx
<Video
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  autoplay
  loop
  muted
/>
```

### Responsive Video

The `Video` component is responsive by default. It will scale based on the container's width, ensuring that it adjusts gracefully on different screen sizes (desktop, tablet, mobile).

```jsx
<Video src="https://www.w3schools.com/html/mov_bbb.mp4" />
```

------

This setup ensures a complete atomic `Video` component with essential playback controls, responsive design, and customizable properties for different use cases.



```css
/*this.GUI/src/stories/Atoms/Video/Video.css */
.video-container {
  position: relative;
  overflow: hidden;
  background-color: #000;
  display: inline-block;
}

video {
  width: 100%;
  height: 100%;
}

.video-controls {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 10;
  display: none;
  transition: opacity 0.3s ease;
}

.video-container.show-controls .video-controls {
  display: block;
}

.video-controls button {
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.video-controls button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

```

```jsx
//this.GUI/src/stories/Atoms/Video/Video.jsx
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Video.css';

export const Video = ({
  src,
  poster,
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  width = '100%',
  height = 'auto',
  onPlay,
  onPause,
  onEnd,
  showControlsOnHover = true,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoHover = () => setIsHovering(true);
  const handleVideoLeave = () => setIsHovering(false);

  return (
    <div
      className={`video-container ${showControlsOnHover && isHovering ? 'show-controls' : ''}`}
      onMouseEnter={handleVideoHover}
      onMouseLeave={handleVideoLeave}
      style={{ width, height }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        controls={controls}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnd}
        style={{ width: '100%', height: '100%' }}
      />
      <div className="video-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  showControlsOnHover: PropTypes.bool,
};

```

```jsx
//this.GUI/src/stories/Atoms/Video/Video.stories.jsx
import React from 'react';
import { Video } from './Video';

export default {
  title: 'Atoms/Media/Video',
  component: Video,
  argTypes: {
    src: { control: 'text', defaultValue: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    poster: { control: 'text', defaultValue: 'https://www.w3schools.com/html/pic_trulli.jpg' },
    autoplay: { control: 'boolean', defaultValue: false },
    loop: { control: 'boolean', defaultValue: false },
    muted: { control: 'boolean', defaultValue: false },
    controls: { control: 'boolean', defaultValue: true },
    width: { control: 'text', defaultValue: '100%' },
    height: { control: 'text', defaultValue: 'auto' },
    showControlsOnHover: { control: 'boolean', defaultValue: true },
  },
};

export const DefaultVideo = (args) => (
  <Video {...args} />
);

export const VideoWithCustomDimensions = () => (
  <Video
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    poster="https://www.w3schools.com/html/pic_trulli.jpg"
    width="640px"
    height="360px"
  />
);

export const VideoAutoplayLoop = () => (
  <Video
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    autoplay
    loop
    muted
  />
);

```


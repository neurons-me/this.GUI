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

---

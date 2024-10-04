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
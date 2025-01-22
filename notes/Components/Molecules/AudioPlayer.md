# **Quickstart Guide: How to Use the AudioPlayer Component**

The AudioPlayer component is a versatile, fully customizable audio player with features such as track control, volume adjustment, playlist navigation, and support for images and metadata. It includes options for autoplay, muting, looping, and more.



**Basic Usage**

​	1.	**Import the** AudioPlayer **component:**

```jsx
import { AudioPlayer } from './AudioPlayer';
```

​	2.	**Set up your playlist:**

You need to pass an array of track objects (playlist) to the AudioPlayer. Each track object should contain the src (URL of the audio file), title, and optionally an image (album cover or media thumbnail).

```jsx
const playlist = [
 { src: 'song1.mp3', title: 'Track 1', image: 'cover1.jpg' },
 { src: 'song2.mp3', title: 'Track 2', image: 'cover2.jpg' },
 { src: 'song3.mp3', title: 'Track 3', image: 'cover3.jpg' }
];
```

​	3.	**Create the audio player:**

You can render the AudioPlayer with the playlist and customize its behavior using available props.

```jsx
<AudioPlayer playlist={playlist} />
```

**Customization Options**

**1. AutoPlay (autoPlay)**

Automatically start playing the audio when the component is loaded.

```jsx
<AudioPlayer playlist={playlist} autoPlay={true} />
```

**2. Loop (loop)**

Play the current track on loop until manually changed.

```jsx
<AudioPlayer playlist={playlist} loop={true} />
```

**3. Muted (muted)**

Start the player in a muted state.

```jsx
<AudioPlayer playlist={playlist} muted={true} />
```

**4. Size (size)**

You can change the size of the audio player by setting the size prop to either small or medium (default).

```jsx
<AudioPlayer playlist={playlist} size="small" />
```

**5. Color (color)**

Choose from a predefined set of colors to style the player. This color will be applied to elements like the progress bar, buttons, and playlist highlights.

```jsx
<AudioPlayer playlist={playlist} color="classy-color-1" />
```

**6. Show Media (showMedia)**

By default, media (album cover) is shown if provided. You can hide this by setting showMedia to false.

```jsx
<AudioPlayer playlist={playlist} showMedia={false} />
```

**Example:**

```jsx
const playlist = [
 { src: 'song1.mp3', title: 'Track 1', image: 'cover1.jpg' },
 { src: 'song2.mp3', title: 'Track 2', image: 'cover2.jpg' },
 { src: 'song3.mp3', title: 'Track 3', image: 'cover3.jpg' }
];

<AudioPlayer
 playlist={playlist}
 autoPlay={false}
 loop={false}
 muted={false}
 size="medium"
 color="classy-color-1"
 showMedia={true}
/>
```



**Props Overview:**



​	•	playlist: An array of track objects, each containing src, title, and optionally image.

​	•	autoPlay: Automatically play the audio on load (true or false).

​	•	loop: Loop the current track.

​	•	muted: Start the audio player in a muted state.

​	•	size: The size of the player, either small or medium.

​	•	color: Color theme for the player.

​	•	showMedia: Show or hide media (album covers or images).



This quickstart guide helps you easily integrate and customize the AudioPlayer component in your project. For more advanced configurations, feel free to explore the Storybook UI for all the available options.






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
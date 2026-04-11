

<img src="https://res.cloudinary.com/dkwnxf6gm/image/upload/w_320/v1761281165/geometry_shapes-removebg-preview_anrdke.png" alt="Geometry shapes" width="244" />

---

# **Quick Start .GUI**

**.GUI** lets you build user interfaces by **describing what you want to see**, instead of writing imperative code.

You define your **screen as data (a spec)**, connect it to dynamic data with [.me](https://www.npmjs.com/package/this.me), and let the runtime handle the rest.

## Install

```bash
npm install this.gui
```

### Try it in 30 seconds

```tsx
import { mount } from 'this.gui';

const spec = {
  type: 'Page',
  props: { title: 'My First Screen' },
  children: [
    {
      type: 'Typography',
      props: { variant: 'h4', children: 'Hello .GUI' }
    },
    {
      type: 'Button',
      props: { label: 'Click me', variant: 'contained' }
    }
  ]
};

mount(spec, '#root');
```

You now have a clean page with a title and a working button.

### Make it dynamic with .me

Connect live data and actions using [.me](https://www.npmjs.com/package/this.me) as your single source of truth:

```tsx
import { mount } from 'this.gui';
import ME from 'this.me';

const me = new ME();

me.profile.name("Ana");
me.profile.status("online");

const spec = {
  type: 'Page',
  props: { title: 'Profile' },
  children: [
    {
      type: 'Typography',
      props: { 
        variant: 'h5', 
        children: { read: 'me.profile.name' }        // live data
      }
    },
    {
      type: 'Typography',
      props: { 
        variant: 'body1', 
        children: { read: 'me.profile.status' }
      }
    },
    {
      type: 'Button',
      props: { 
        label: 'Set Offline',
        onClick: { write: "me.profile.status = 'offline'" }   // live action
      }
    }
  ]
};

mount(spec, '#root', { runtime: me });
```

- The UI now updates automatically when you change values in [.me.](https://www.npmjs.com/package/this.me)

  ### Why .GUI + .me feels different

  - You describe **what** to render **(UI spec)**
  - **[.me](https://www.npmjs.com/package/this.me)** is the single source of truth for data and logic
  - read pulls live values, write triggers changes — no manual state management needed
  - Everything stays reactive and consistent

  ### Next steps

  Once your static **UI** works, you can:

  - Replace static values with read tokens
  - Add actions with write tokens
  - Use powerful selectors and derivations from [.me](https://www.npmjs.com/package/this.me)
  - Switch from local state to full data-driven mode without rewriting components

  **.GUI** handles the **UI layer** -  [**.me**](https://www.npmjs.com/package/this.me) handles the data and business logic.

  Clean separation. Real power.



<img src="https://suign.github.io/assets/imgs/neurons_me_logo.png" alt="neurons.me logo" width="89">

###### [neurons.me](https://neurons.me)
**MIT License.**
###### suiGn

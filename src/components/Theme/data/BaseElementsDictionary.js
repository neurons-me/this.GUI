// components/BaseElementsDictionary.js
const BaseElementsDictionary = {
    typography: {
        h1: { component: 'Typography', variant: 'h1' },
        h2: { component: 'Typography', variant: 'h2' },
        h3: { component: 'Typography', variant: 'h3' },
        body: { component: 'Typography', variant: 'body1' },
        caption: { component: 'Typography', variant: 'caption' },
    },
    containers: {
        section: { component: 'Box', props: { component: 'section', sx: { py: 4 } } },
        article: { component: 'Box', props: { component: 'article', sx: { py: 2 } } },
        div: { component: 'Box', props: {} }
    },
    buttons: {
        primary: { component: 'Button', props: { variant: 'contained', color: 'primary' } },
        secondary: { component: 'Button', props: { variant: 'outlined', color: 'secondary' } }
    },
    links: {
        default: { component: 'Link', props: { underline: 'hover', color: 'primary' } }
    }
};

export default BaseElementsDictionary;
const parameters = {
    typography: {
        h1: { 
            description: "Main page heading", 
            fontSize: '', 
            fontWeight: '', 
            required: true 
        },
        h2: { 
            description: "Section heading", 
            fontSize: '', 
            fontWeight: '', 
            required: true 
        },
        body1: { 
            description: "Default body text", 
            fontSize: '', 
            required: true 
        },
        caption: { 
            description: "Small caption text", 
            fontSize: '', 
            required: false 
        }
    },
    palette: {
        common: {
            black: '#000000',
            white: '#ffffff'
        },
        primary: { 
            description: "Primary brand color", 
            main: '', 
            required: true 
        },
        secondary: { 
            description: "Secondary brand color", 
            main: '', 
            required: true 
        },
        background: { 
            description: "Background colors", 
            default: '', 
            paper: '', 
            required: true 
        },
        text: { 
            description: "Text colors", 
            primary: '', 
            secondary: '', 
            required: true 
        }
    },
    components: {
        Button: { 
            description: "Standard button component", 
            borderRadius: '', 
            textTransform: '', 
            required: true 
        },
        Link: { 
            description: "Hyperlink component", 
            underline: '', 
            required: true 
        }
    }
};

export default parameters;
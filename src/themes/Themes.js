// src/themes/Themes.js

const lightTheme = {
    buttonPadding: '12px 24px',
    buttonBorderRadius: '8px',
    buttonFontFamily: "'Roboto', sans-serif",
    buttonFontSize: '16px',
    buttonBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  
    buttonPrimaryBgColor: '#00695c',
    buttonPrimaryTextColor: '#ffffff',
    buttonPrimaryBorderColor: '#004d40',
    buttonPrimaryHoverBgColor: '#004d40',
    buttonPrimaryHoverBoxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  
    buttonSecondaryBgColor: '#ffffff',
    buttonSecondaryTextColor: '#00695c',
    buttonSecondaryBorderColor: '#00695c',
    buttonSecondaryHoverBgColor: '#f0f0f0',
    buttonSecondaryHoverBoxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };
  
  const darkTheme = {
    // Similar structure with dark-themed values
    buttonPadding: '12px 24px',
    buttonBorderRadius: '8px',
    buttonFontFamily: "'Roboto', sans-serif",
    buttonFontSize: '16px',
    buttonBoxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  
    buttonPrimaryBgColor: '#1b5e20',
    buttonPrimaryTextColor: '#e0e0e0',
    buttonPrimaryBorderColor: '#004d40',
    buttonPrimaryHoverBgColor: '#004d40',
    buttonPrimaryHoverBoxShadow: '0 6px 10px rgba(0, 0, 0, 0.4)',
  
    buttonSecondaryBgColor: '#333',
    buttonSecondaryTextColor: '#e0e0e0',
    buttonSecondaryBorderColor: '#004d40',
    buttonSecondaryHoverBgColor: '#444',
    buttonSecondaryHoverBoxShadow: '0 6px 10px rgba(0, 0, 0, 0.4)',
  };
  
  export const themes = { light: lightTheme, dark: darkTheme };
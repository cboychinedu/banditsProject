/**
 * @fileoverview Defines a basic black and white color palette 
 * for both Light and Dark modes in a React Native/Expo application.
 */

const tintColorLight = '#000000'; // Black
const tintColorDark = '#ffffff'; // White

const Colors = {
  // --- General Palette ---
  black: '#000000',
  white: '#ffffff',
  gray: '#808080',
  lightGray: '#D3D3D3',
  darkGray: '#333333',
  primary: "#6849a7", 
  warning: "#cc475a", 
  
  // --- Light Mode Theme ---
  light: {
    // Backgrounds
    background: '#ffffff', // Primary screen background (White)
    card: '#f0f0f0',      // Background for cards/containers (Off-White)
    
    // Text and Tints
    text: '#000000',      // Primary text color (Black)
    tint: tintColorLight, // Primary interactive color/icon tint (Black)
    tabIconDefault: '#808080', // Default icon color (Gray)
    tabIconSelected: tintColorLight, // Selected icon color (Black)
    
    // Borders and Separators
    border: '#d0d0d0',    // Light gray border
    
    // System Colors (Example: Buttons)
    primaryButton: '#000000', // Black button background
    secondaryButton: '#D3D3D3', // Light gray button background
  },

  // --- Dark Mode Theme ---
  dark: {
    // Backgrounds
    background: '#000000', // Primary screen background (Black)
    card: '#1e1e1e',       // Background for cards/containers (Dark Gray)
    
    // Text and Tints
    text: '#ffffff',       // Primary text color (White)
    tint: tintColorDark,  // Primary interactive color/icon tint (White)
    tabIconDefault: '#a8a8a8', // Default icon color (Light Gray)
    tabIconSelected: tintColorDark, // Selected icon color (White)
    
    // Borders and Separators
    border: '#333333',     // Dark border
    
    // System Colors (Example: Buttons)
    primaryButton: '#ffffff', // White button background
    secondaryButton: '#333333', // Dark gray button background
  },
};

export default Colors;
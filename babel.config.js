module.exports = function(api) {
  api.cache(true); 
  
  // The configuration must be wrapped in a 'return' statement.
  return { 
    // FIX 1: Add the essential preset for Expo and React/JSX support.
    presets: ['babel-preset-expo'],
    
    // Your existing plugins are correctly placed inside the 'plugins' array.
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          blacklist: null, // DEPRECATED
          whitelist: null, // DEPRECATED
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};
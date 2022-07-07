module.exports = {
  // A list of paths that Jest should use to search for test files in.
  roots: ['<rootDir>/tests'],
  // Which file's coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  // Configure or set up the testing framework, after the test framework has been installed in the environment
  setupFilesAfterEnv: ['<rootDir>/tests/config/setup.js'],
  // Which files will be test file
  testMatch: [
    '<rootDir>/tests/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/tests/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // A transformer is a module that provides a synchronous function for transforming source files.
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': '<rootDir>/tests/config/babelTransform.js',
    '^.+\\.css$': '<rootDir>/tests/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/tests/config/fileTransform.js',
  },
  // Those file will not be transformed
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  // An array of directory names to be searched recursively up from the requiring module's location.
  moduleDirectories: ['<rootDir>', 'src', 'node_modules'],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  resetMocks: true,
};

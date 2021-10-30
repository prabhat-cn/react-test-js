// Handling Static Assets from https://jestjs.io/docs/webpack

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'custom-transformer',
  },
  verbose: true,
  // coverageReporters: ['jest-junit'],
  // testResultsProcessor: 'jest-junit',
  // testResultsProcessor: './node_modules/jest-junit',
  // transform: {
  //   '\\.js$': 'babel-jest',
  //   '\\.css$': 'custom-transformer',
  // },
  // transform: {
  //   '^.+\\.(js|jsx)$': 'babel-jest',
  // },
};

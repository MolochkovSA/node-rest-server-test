export default {
  testEnvironment: 'jest-environment-node',
  transform: {},
  verbose: true,
  detectOpenHandles: true,
  forceExit: false,
  collectCoverage: true,
  collectCoverageFrom: ['./app.js', './users/*.js'],
}

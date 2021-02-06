module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>'
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setup.tsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.test.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  globals: {
    'ts-jest': {
      'tsconfig': '<rootDir>/test/tsconfig.jest.json'
    }
  }
};

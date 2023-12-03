import nextJest from 'next/jest'
import type { Config } from 'jest'

// Providing the path to your Next.js app which will enable loading next.config.js and .env files
const createJestConfig = nextJest({ dir: './' })

// Any custom config you want to pass to Jest
const customJestConfig: Config = {
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/@types/**/*.{ts,tsx}'
  ],
  testPathIgnorePatterns: ['node_modules', '\\.cache', '.next', 'coverage']
}

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
export default createJestConfig(customJestConfig)

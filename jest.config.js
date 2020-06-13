module.exports = {
    "rootDir": "./",
    "preset": "ts-jest",
    "testEnvironment": "node",
    "setupFilesAfterEnv": ["./build/tests/config/dotenv-config.js"],
    "coverageThreshold": {
      "global": {
        "branches": 5,
        "functions": 5,
        "lines": 5,
        "statements": 5
      }
    },
    "collectCoverageFrom": [
      "src/**/*.{ts,js}",
      "!<rootDir>/src/services/**/*.{ts,js}",
      "!<rootDir>/src/security/**/*.{ts,js}",
      "!<rootDir>/src/errors/**/*.{ts,js}",
      "!<rootDir>/src/endpoints/**/*.{ts,js}",
      "!<rootDir>/src/utils/*.{ts,js}",
      "!<rootDir>/src/setup/*.{ts,js}",
      "!<rootDir>/src/repositories/*.{ts,js}",
    ],
  };
  
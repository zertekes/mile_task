module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'jest.e2e.config.js',
    },
    jest: {
      setupTimeout: 180000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/Mile.app',
      build:
        'xcodebuild -workspace ios/Mile.xcworkspace -scheme Mile -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
  },
};

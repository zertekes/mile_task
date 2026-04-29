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
      binaryPath: '/Users/zoltanertekes/Desktop/Workspace/Mile_App/Mile.app',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 17 Pro',
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

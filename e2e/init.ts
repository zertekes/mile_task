beforeAll(async () => {
  await device.launchApp({
    delete: true,
    newInstance: true,
    permissions: {
      notifications: 'YES',
    },
  });
});

beforeEach(async () => {
  await device.reloadReactNative();
});

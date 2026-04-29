export class AuthPage {
  private async waitForPasswordStep(): Promise<void> {
    const loginFailedMessage = element(
      by.label('Login attempt failed. Please recheck your email and try again.'),
    );

    try {
      await waitFor(loginFailedMessage).toBeVisible().withTimeout(2500);
      throw new Error(
        'Email was rejected by the app. Set a valid E2E_EMAIL and rerun the test.',
      );
    } catch (e) {
      if (e instanceof Error && e.message.includes('Email was rejected')) {
        throw e;
      }
    }

    // The prompt text can vary by build/version, so try common variants.
    const candidates = [
      element(by.label('What’s your password?')),
      element(by.label("What's your password?")),
      element(by.label('Enter your password')),
      element(by.label('Password')),
    ];

    for (const candidate of candidates) {
      try {
        await waitFor(candidate).toBeVisible().withTimeout(4000);
        return;
      } catch (e) {}
    }

    throw new Error('Could not detect password step after tapping CONTINUE on email step.');
  }

  async dismissDialogs(): Promise<void> {
    try {
      await waitFor(element(by.label('OKAY'))).toBeVisible().withTimeout(6000);
      await element(by.label('OKAY')).tap();
      await waitFor(element(by.label('OKAY'))).not.toBeVisible().withTimeout(4000);
    } catch (e) {}

    try {
      await waitFor(element(by.label('UPDATE NOW'))).toBeVisible().withTimeout(4000);
      await element(by.label('UPDATE NOW')).tap();
      await waitFor(element(by.label('UPDATE NOW'))).not.toBeVisible().withTimeout(4000);
    } catch (e) {}
  }

  async login(email: string, password: string): Promise<void> {
    await this.dismissDialogs();

    await waitFor(element(by.label('LOG IN'))).toBeVisible().withTimeout(8000);
    await element(by.label('LOG IN')).tap();

    await waitFor(element(by.label('EMAIL'))).toBeVisible().withTimeout(6000);
    await element(by.label('EMAIL')).tap();

    // Email step
    const input = element(by.type('RCTSinglelineTextInputView'));

    await waitFor(element(by.label('What’s your email?'))).toBeVisible().withTimeout(10000);
    await waitFor(input).toExist().withTimeout(10000);
    await input.replaceText(email);
    await element(by.label('CONTINUE')).tap();

    // Password step
    await this.waitForPasswordStep();
    await waitFor(input).toExist().withTimeout(10000);
    await input.replaceText(password);
    await element(by.label('CONTINUE')).tap();
  }

  async assertLoggedIn(): Promise<void> {
    await waitFor(element(by.label('Profile'))).toBeVisible().withTimeout(30000);
  }
}

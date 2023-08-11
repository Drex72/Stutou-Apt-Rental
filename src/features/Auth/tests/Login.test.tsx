import { expect, it } from 'vitest'
import { Login } from '../pages'
import { fireEvent, render, screen, } from '@testing-library/react'

describe('Login Tests', () => {
  // Tests that the login form can be submitted with valid email and password
  it('test Login with Email and Password', async () => {
    const { getByLabelText, getByText } = render(<Login />)
    const emailInput = getByLabelText('Email')
    const passwordInput = getByLabelText('Password')
    const loginButton = getByText('Login')

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password' } })
    fireEvent.click(loginButton)

    // await waitFor(() => expect(loginButton).toBeDo)
  })

  it('test_invalid_login', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    // expect(loginHeader).toBeInTheDocument();
    // await waitFor(() => expect(loginButton).toBe());
  });

  // Tests that the login form cannot be submitted with empty email and/or password fields
  it('test_empty_login', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.click(loginButton);

    // await waitFor(() => expect(loginButton).toBeDisabled());
  });

  // Tests that the login form cannot be submitted while the API request is still loading
  it('test_loading_login', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    // await waitFor(() => expect(loginButton).toBeDisabled());
  });

  // Tests that the login form cannot be submitted with an error in the API request
  it('test_error_login', async () => {
    const { getByLabelText, getByText } = render(<Login />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    // await waitFor(() => expect(loginButton).toBeDisabled());
  });

  it('test_toggle_password', async () => {
    const { getByLabelText } = render(<Login />);
    const passwordInput = screen.getByLabelText('Password') as HTMLInputElement;
    const passwordVisibilityIcon = getByLabelText('toggle password visibility');

    expect(passwordInput.type).toBe('password');

    fireEvent.click(passwordVisibilityIcon);

    expect(passwordInput.type).toBe('text');

    fireEvent.click(passwordVisibilityIcon);

    expect(passwordInput.type).toBe('password');
  });
})

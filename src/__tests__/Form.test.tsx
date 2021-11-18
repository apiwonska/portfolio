import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import Form from '../sections/Contact/Form';

jest.mock('../utilities/useIntersection', () => () => ({ current: null }));
const originalFetch = window.fetch;

describe('Form', () => {
  beforeEach(() => {
    const mockFetch = jest.fn();
    mockFetch.mockReturnValue(
      Promise.resolve({
        ok: true,
      })
    );
    window.fetch = mockFetch;
  });

  afterAll(() => {
    window.fetch = originalFetch;
  });

  const setup = () => {
    const utils = render(<Form />);
    const form = screen.getByTestId('contact-form');
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const messageInput = screen.getByRole('textbox', { name: /message/i });
    const submitButton = screen.getByRole('button', { name: /send/i });
    return {
      ...utils,
      nameInput,
      emailInput,
      messageInput,
      submitButton,
      form,
    };
  };

  describe('initial state', () => {
    it('render all fields and submit button, fields have labels and no initial values', () => {
      const { nameInput, emailInput, messageInput, submitButton } = setup();

      expect(nameInput).toBeInTheDocument();
      expect(nameInput).toHaveValue('');
      expect(nameInput.closest('label')).toHaveTextContent('Name:');
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveValue('');
      expect(emailInput.closest('label')).toHaveTextContent('Email:');
      expect(messageInput).toBeInTheDocument();
      expect(messageInput).toHaveValue('');
      expect(messageInput.closest('label')).toHaveTextContent('Message:');
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe('with valid input', () => {
    it('submit data and render success message', async () => {
      const { nameInput, emailInput, messageInput, submitButton, form } =
        setup();

      user.type(nameInput, 'Ted');
      user.type(emailInput, 'ted@smith.eu');
      user.type(messageInput, 'Just want to say hello!');

      expect(form).toHaveFormValues({
        name: 'Ted',
        email: 'ted@smith.eu',
        message: 'Just want to say hello!',
      });
      expect(form).toBeValid();

      user.click(submitButton);

      expect(
        await screen.findByText(/Your message was sent!/i)
      ).toBeInTheDocument();
      expect(nameInput).toHaveValue('');
      expect(emailInput).toHaveValue('');
      expect(messageInput).toHaveValue('');
    });
  });

  describe('with invalid input', () => {
    it('throw error if an input is missing', async () => {
      const { submitButton } = setup();

      user.click(submitButton);
      expect(
        await screen.findByText(/name is a required field/i)
      ).toBeInTheDocument();
      expect(
        await screen.findByText(/email is a required field/i)
      ).toBeInTheDocument();
      expect(
        await screen.findByText(/message is a required field/i)
      ).toBeInTheDocument();
    });

    it('throw error when email is incorrect', async () => {
      const { submitButton, emailInput } = setup();

      user.type(emailInput, 'invalid.email');
      user.click(submitButton);
      expect(
        await screen.findByText(/email must be a valid email/i)
      ).toBeInTheDocument();
    });
    it('throw error when message is less than 20 characters', async () => {
      const { messageInput, submitButton } = setup();
      user.type(messageInput, 'short message');
      user.click(submitButton);

      expect(
        await screen.findByText(/message must be at least 20 characters/i)
      ).toBeInTheDocument();
    });
  });
});

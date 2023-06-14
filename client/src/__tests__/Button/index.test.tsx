import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '@/components';
import { PAGE_URL_SUBMIT_BUTTON_TEST_ID } from '@/constants/Button';

describe('Button Component', () => {
  it('render', () => {
    const text = 'SUBMIT';
    const testId = PAGE_URL_SUBMIT_BUTTON_TEST_ID;

    render(<Button testId={testId}>{text}</Button>);

    const button = screen.getByTestId(testId);

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(text);
  });

  it('is the onClick function called', async () => {
    const testId = PAGE_URL_SUBMIT_BUTTON_TEST_ID;
    const onClick = jest.fn();

    render(
      <Button testId={testId} onClick={onClick}>
        BUTTON
      </Button>,
    );

    const container = screen.getByTestId(PAGE_URL_SUBMIT_BUTTON_TEST_ID);

    await userEvent.click(container);

    expect(onClick).toBeCalled();
  });
});

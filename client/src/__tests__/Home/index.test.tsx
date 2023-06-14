import { render, screen } from '@testing-library/react';

import { PAGE_URL_INPUT_TEST_ID } from '@/constants/Input';
import { PAGE_URL_SUBMIT_BUTTON_TEST_ID } from '@/constants/Button';
import { Input, Button } from '@/components';

describe('Home', () => {
  it('render', () => {
    const inputTestId = PAGE_URL_INPUT_TEST_ID;
    const buttonTestId = PAGE_URL_SUBMIT_BUTTON_TEST_ID;

    render(<Input testId={inputTestId} />);
    render(<Button testId={buttonTestId}>SUBMIT</Button>);

    const input = screen.getByTestId(inputTestId);
    const button = screen.getByTestId(buttonTestId);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

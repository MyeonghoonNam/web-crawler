import { render, screen } from '@testing-library/react';

import { Input } from '@/components';
import { PAGE_URL_INPUT_TEST_ID } from '@/constants/Input';

describe('Input Component', () => {
  it('render', () => {
    const testId = 'Test';

    render(<Input testId={testId} />);

    const input = screen.getByTestId(testId);

    expect(input).toBeInTheDocument();
  });

  it('is input have value ', async () => {
    const testId = PAGE_URL_INPUT_TEST_ID;
    const value = 'Test Value';
    const onChange = jest.fn();

    render(<Input value={value} onChange={onChange} testId={testId} />);

    const input = screen.getByTestId(testId);

    expect(input).toHaveValue(value);
  });
});

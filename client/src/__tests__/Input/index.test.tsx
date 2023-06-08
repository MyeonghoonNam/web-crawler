import { render, screen } from '@testing-library/react';

import { Input } from '@/components';

describe('Input Component', () => {
  it('render', () => {
    const testId = 'Test';

    render(<Input testId={testId} />);

    const input = screen.getByTestId(testId);

    expect(input).toBeInTheDocument();
  });

  it('is input have value ', async () => {
    const testId = 'Test';
    const value = 'Test Value';
    const onChange = jest.fn();

    render(<Input value={value} onChange={onChange} testId={testId} />);

    const input: HTMLInputElement = screen.getByTestId(testId);

    expect(input).toHaveValue(value);
  });
});

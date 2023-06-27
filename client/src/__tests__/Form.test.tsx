import { render, screen } from '@testing-library/react';
import { Form } from '@/components';
import userEvent from '@testing-library/user-event';

describe('Form Component', () => {
  it('input value onChange works correctly', async () => {
    render(<Form />);

    const urlInputLabelText = 'URL';
    const urlInput = screen.getByLabelText(urlInputLabelText);
    const urlInputvalue = 'changedValue';

    await userEvent.type(urlInput, urlInputvalue);

    expect(urlInput).toHaveValue(urlInputvalue);
  });
});

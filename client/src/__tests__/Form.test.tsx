import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '@/components';
import { FORM_URL_INPUT_EMPTY_VALUE } from '@/constants/errors';

describe('Form Component', () => {
  it('input 값 변경이 제대로 이루어지는가?', async () => {
    render(<Form />);

    const urlInputLabelText = 'URL';
    const urlInput = screen.getByLabelText(urlInputLabelText);
    const urlInputvalue = 'changedValue';

    await userEvent.type(urlInput, urlInputvalue);

    expect(urlInput).toHaveValue(urlInputvalue);
  });

  it('input 값이 비었을 때 폼 제출 버튼을 클릭하였을 경우 오류 텍스트가 표시되는가?', async () => {
    render(<Form />);

    const submitButtonText = 'SUBMIT';
    const submitButton = screen.getByText(submitButtonText);

    await userEvent.click(submitButton);

    const urlErrorText = screen.getByText(FORM_URL_INPUT_EMPTY_VALUE);

    expect(urlErrorText).toBeInTheDocument();
  });
});

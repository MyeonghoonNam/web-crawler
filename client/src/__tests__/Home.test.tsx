import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/pages';

describe('Home test', () => {
  it('초기 input 값 변경이 제대로 이루어진다', async () => {
    render(<Home />);

    const urlLabel = 'URL';
    const containerLabel = 'Container';
    const keyLabel = 'Key';
    const valueLabel = 'Value';

    const urlInput = screen.getByLabelText(urlLabel);
    const containerInput = screen.getByLabelText(containerLabel);
    const keyInput = screen.getByLabelText(keyLabel);
    const valueInput = screen.getByLabelText(valueLabel);

    const changeUrlValue = 'After URL Value';
    const changeContainerValue = 'After Container Value';
    const changeKeyValue = 'After Key Value';
    const changeValueValue = 'After Value Value';

    await userEvent.type(urlInput, changeUrlValue);
    await userEvent.type(containerInput, changeContainerValue);
    await userEvent.type(keyInput, changeKeyValue);
    await userEvent.type(valueInput, changeValueValue);

    expect(urlInput).toHaveValue(changeUrlValue);
    expect(containerInput).toHaveValue(changeContainerValue);
    expect(keyInput).toHaveValue(changeKeyValue);
    expect(valueInput).toHaveValue(changeValueValue);
  });
});

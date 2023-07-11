import { Input } from '@/components';
import { useState, useCallback, useRef, FormEvent } from 'react';

import uuid from 'react-uuid';

const Home = () => {
  const [formFiled, setFormFiled] = useState([
    { label: 'URL', name: 'url', value: '' },
    { label: 'Container', name: 'container', value: '' },
    { label: 'Key', name: 'key', value: '' },
    { label: 'Value', name: 'value', value: '' },
  ]);

  const inputRefArr = useRef<(HTMLInputElement | null)[]>([]);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValues = [];

    for (let i = 0; i < inputRefArr.current.length; i += 1) {
      const target = inputRefArr.current[i];
      const value = {
        key: target?.name,
        value: target?.value,
      };

      inputValues.push(value);
    }

    console.log(inputValues);
  }, []);

  const handleAddButtonClick = useCallback(() => {
    setFormFiled((state) => {
      const formFiled = [...state];

      for (let i = 0; i < inputRefArr.current.length; i += 1) {
        const target = inputRefArr.current[i];
        if (!target) return formFiled;
        formFiled[i].value = target.value;
      }

      return formFiled.concat([
        { label: 'Key', name: 'key', value: '' },
        { label: 'Value', name: 'value', value: '' },
      ]);
    });
  }, []);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {formFiled.map(({ label, name, value }, index) => (
          <Input label={label} key={uuid()}>
            <Input.TextField
              type="text"
              name={name}
              defaultValue={value}
              ref={(el) => {
                inputRefArr.current[index] = el;
              }}
            />
          </Input>
        ))}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleAddButtonClick}>
          AddKeyValue
        </button>
      </form>
    </main>
  );
};

export default Home;

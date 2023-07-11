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

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {formFiled.map(({ label, name }, index) => (
          <Input label={label} key={uuid()}>
            <Input.TextField
              type="text"
              name={name}
              ref={(el) => {
                inputRefArr.current[index] = el;
              }}
            />
          </Input>
        ))}

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Home;

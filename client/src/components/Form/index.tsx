import { ChangeEvent, useState, useCallback } from 'react';
import { useForm } from '@/hooks';
import { FORM_URL_INPUT_EMPTY_VALUE } from '@/constants/errors';

type FormState = {
  url: string;
  container: string;
  dictionary: {
    [key: string]: string;
  }[];
};

const Form = () => {
  const [initialState, setInitialState] = useState<FormState>({
    url: '',
    container: '',
    dictionary: [{ key0: '', value0: '' }],
  });

  const [nextKeyValueIndex, setNextKeyValueIndex] = useState(1);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index?: number) => {
      const { name, value } = e.target;

      if (index) {
        setInitialState((state) => {
          const newState = { ...state };

          newState.dictionary[index][name] = value;

          return newState;
        });
      } else {
        setInitialState((state) => ({ ...state, [name]: value }));
      }
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    console.log('submit');
  }, []);

  const handleAddButtonClick = useCallback(() => {
    setInitialState((state) => {
      const dictionary = [
        ...state.dictionary,
        {
          [`key${nextKeyValueIndex}`]: '',
          [`value${nextKeyValueIndex}`]: '',
        },
      ];

      const newState = { ...state, dictionary };

      return newState;
    });

    setNextKeyValueIndex((state) => state + 1);
  }, [nextKeyValueIndex]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          onChange={handleChange}
          className="w-[250px] h-[30px] text-[14px] border-[1px] border-[grey] px-[4px] py-[2px] rounded-[2px] outline-none"
        />
      </div>

      <div>
        <label htmlFor="container">Container</label>
        <input
          type="text"
          id="container"
          name="container"
          onChange={handleChange}
          className="w-[250px] h-[30px] text-[14px] border-[1px] border-[grey] px-[4px] py-[2px] rounded-[2px] outline-none"
        />
      </div>

      {initialState.dictionary.map((filed, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <label htmlFor={`key${index}`}>Key</label>
          <input
            type="text"
            id={`key${index}`}
            name={`key${index}`}
            onChange={(e) => handleChange(e, index)}
            className="w-[250px] h-[30px] text-[14px] border-[1px] border-[grey] px-[4px] py-[2px] rounded-[2px] outline-none"
          />

          <label htmlFor={`value${index}`}>Value</label>
          <input
            type="text"
            id={`value${index}`}
            name={`value${index}`}
            onChange={(e) => handleChange(e, index)}
            className="w-[250px] h-[30px] text-[14px] border-[1px] border-[grey] px-[4px] py-[2px] rounded-[2px] outline-none"
          />
        </div>
      ))}

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-[100px] h-[40px] text-[white] bg-[black] rounded-[5px]"
      >
        SUBMIT
      </button>

      <button
        type="button"
        onClick={handleAddButtonClick}
        className="w-[100px] h-[40px] text-[white] bg-[black] rounded-[5px]"
      >
        Add
      </button>
    </form>
  );
};

export default Form;

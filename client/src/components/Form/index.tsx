import { ChangeEvent, useState, useCallback } from 'react';

const Form = () => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value);
  }, []);

  return (
    <form>
      <div>
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          value={value}
          onChange={handleChange}
          className="w-[250px] h-[30px] text-[14px] border-[1px] border-[grey] px-[4px] py-[2px] rounded-[2px] outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-[100px] h-[40px] text-[white] bg-[black] rounded-[5px]"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;

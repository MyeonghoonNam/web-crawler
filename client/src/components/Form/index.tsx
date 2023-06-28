import { useForm } from '@/hooks';
import { FORM_URL_INPUT_EMPTY_VALUE } from '@/constants/errors';

const Form = () => {
  const { errors, handleChange, handleSubmit } = useForm({
    initialState: {
      url: '',
    },
    validate: ({ url }) => {
      let urlError = '';

      if (!url) {
        urlError = FORM_URL_INPUT_EMPTY_VALUE;
      }

      return {
        url: urlError,
      };
    },
    onSubmit: async () => {
      //
    },
  });

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
        <span>{errors?.url}</span>
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

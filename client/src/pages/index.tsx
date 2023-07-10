import { Input } from '@/components';

const Home = () => {
  return (
    <main>
      <form>
        <Input label="URL">
          <Input.TextField />
        </Input>

        <Input label="Container">
          <Input.TextField />
        </Input>
      </form>
    </main>
  );
};

export default Home;

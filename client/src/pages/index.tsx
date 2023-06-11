import { Input, Button } from '@/components';
import { ChangeEvent, useCallback, useState } from 'react';

const Home = () => {
  const [urlValue, setUrlValue] = useState('');

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUrlValue(e.target.value);
  }, []);

  return (
    <main>
      <Input value={urlValue} onChange={handleInputChange} />
      <Button>SUBMIT</Button>
    </main>
  );
};

export default Home;

import { Spinner } from '@nextui-org/spinner';

const Loading = () => (
  <div className='flex items-center justify-center'>
    <Spinner label='Loading...' color='default' />
  </div>
);

export default Loading;

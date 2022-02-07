import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <nav className='m-4'>
        <ul className='space-y-2'>
          <li className='flex items-center rounded bg-cyan-100 py-1 pl-4 text-sm text-neutral-600'>
            <HiChevronRight />
            <Link to='/component'>Component Practices</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;

import { HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const listStyle =
    'flex items-center rounded bg-cyan-100 py-1 pl-4 text-sm text-neutral-600';
  return (
    <header>
      <nav className='m-4'>
        <ul className='space-y-2'>
          <li className={listStyle}>
            <HiChevronRight />
            <Link to='/component'>Component Practices</Link>
          </li>
          <li className={listStyle}>
            <HiChevronRight />
            <Link to='/state'>States Management</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;

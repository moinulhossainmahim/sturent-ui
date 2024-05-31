'use client';

import { Dispatch, SetStateAction } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

interface ListingHeaderProps {
  layout: string;
  setLayout: Dispatch<SetStateAction<string>>;
}

const ListingHeader = ({ layout, setLayout } : ListingHeaderProps) => {
  const setActiveStyles = (pattern: string) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'border border-card-foreground rounded-sm p-1 bg-card-foreground text-muted'
        : 'border border-card-foreground rounded-sm p-1'
    }`;
  };

  return (
    <div className='flex items-center justify-between pb-5 mt-8'>
      <div className='flex gap-x-2'>
        <button
          type='button'
          onClick={() => setLayout('grid')}
          className={setActiveStyles('grid')}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          onClick={() => setLayout('list')}
          className={setActiveStyles('list')}
        >
          <BsList />
        </button>
      </div>
      <h4 className='font-medium text-md'>
        12 Properties Found
      </h4>
    </div>
  )
}

export default ListingHeader
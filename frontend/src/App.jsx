import { useState } from 'react';
import './App.css';

function App() {
  const [nav, showNav] = useState(false);

  return (
    <>
      {
        nav ? (
          <div className='flex flex-col w-1/12 bg-black text-white rounded-lg'>
            <ul className='space-y-4 p-2 text-xl font-semibold'>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
              <li>List 4</li>
            </ul>
          </div>
        ) : (
          <div className=' hidden z-1 w-auto bg-black text-white rounded-lg'>
            <ul className='flex flex-row space-x-4 p-2 text-xl font-semibold'>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
              <li>List 4</li>
            </ul>
          </div>
        )
      }

      <button 
        className='text-xl font-semibold bg-neutral-200 p-2 rounded-xl'
        onClick={() => showNav(!nav)}
      >
        Click here
      </button>

      <h1 className='text-black'>{nav}</h1>
    </>
  );
}

export default App;

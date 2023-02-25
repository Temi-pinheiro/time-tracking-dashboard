import { useState } from 'react';
import data from './data.json';

function App() {
  const [activePane, setActivePane] = useState('Daily');
  const pageData = data;

  const timeFrames = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className='grid place-items-center bg-[#0E1323] w-full h-screen'>
      <div className='flex flex-col md:flex-row items-center md:justify-center w-full'>
        <aside className='w-[327px] md:w-[255px] bg-[#1C204B] rounded-[15px] flex flex-col'>
          <div className='bg-[#5747EA] flex items-center justify-center gap-x-5 md:items-start md:justify-start md:flex-col gap-y-[43px] rounded-[15px] h-[133px] md:h-[354px] md:pl-8 md:pt-[37px]'>
            <img
              className=' w-16 h-16 md:w-[78px] md:h-[78px] rounded-full border-[3px] border-white drop-shadow-md'
              src='/images/image-jeremy.png'
            />

            <div className='flex flex-col'>
              <p className='text-[#BBC0FF] text-[15px]'>Report for</p>
              <h1 className='font-light text-white md:max-w-[13px] mt-1 text-2xl md:text-[40px] md:leading-[47px]'>
                Jeremy Robson
              </h1>
            </div>
          </div>
          <ul className='p-6 md:pl-6 md:pb-8 md:pt-6 text-[#7078C9] text-lg gap-y-5 flex justify-between md:flex-col'>
            {timeFrames.map((frame, index) => (
              <li key={index}>
                <button
                  className='transition duration-300 ease-in-out hover:text-white'
                  onClick={() => setActivePane(frame)}
                >
                  {frame}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main></main>
      </div>
    </div>
  );
}

export default App;

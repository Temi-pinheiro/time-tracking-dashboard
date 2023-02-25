import { useState } from 'react';
import data from './data.json';

function App() {
  const [activeTimeframe, setActiveTimeframe] = useState('Daily');
  const pageData = data;

  const timeFrames = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div className='grid place-items-center w-full h-screen px-6'>
      <div className='flex py-3 flex-col md:flex-row items-center md:justify-center w-full gap-x-6 gap-y-[30px] max-w-[1112px]'>
        <aside className='w-[327px] md:w-[255px] bg-[#1C204B] rounded-[15px] flex flex-col shrink-0'>
          <div className='bg-[#5747EA] flex items-center justify-center gap-x-5 md:items-start md:justify-start md:flex-col gap-y-[43px] rounded-[15px] h-[133px] md:h-[354px] md:pl-8 md:pt-[37px]'>
            <img
              className=' w-16 h-16 md:w-[78px] md:h-[78px] rounded-full border-[3px] border-white drop-shadow-md'
              src='/images/image-jeremy.png'
              alt='Jeremy robson image'
            />

            <div className='flex flex-col'>
              <p className='text-[#BBC0FF] text-[15px]'>Report for</p>
              <h1 className='font-light text-white md:max-w-[13px] mt-1 text-2xl md:text-[40px] md:leading-[47px]'>
                Jeremy Robson
              </h1>
            </div>
          </div>
          <ul className='p-6 md:pl-6 md:pb-8 md:pt-6 text-lg gap-y-5 flex justify-between md:flex-col'>
            {timeFrames.map((frame, index) => (
              <li key={index}>
                <button
                  className={`transition duration-300 ease-in-out ${
                    activeTimeframe == frame ? 'text-white' : 'text-[#7078C9]'
                  }  hover:text-white`}
                  onClick={() => setActiveTimeframe(frame)}
                >
                  {frame}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[30px] w-full'>
          {pageData.map((card) => (
            <div
              className='relative place-self-center border-0 outline-none overflow-clip rounded-[15px] w-full max-w-[327px] md:max-w-[255px] px-0 pt-[38px] md:pt-[45px]'
              style={{ backgroundColor: card.bgColor }}
              key={card.title}
            >
              <img
                src={card.iconPath}
                className='absolute top-[-10px] right-4'
                alt={`${card.title} icon`}
              />
              <div className='cursor-pointer text-white relative flex flex-col rounded-t-[15px] bg-[#1C204B]  transition duration-300 ease-in-out hover:bg-[#33397A] w-full px-6 py-8 md:pl-[30px] pr-[35x] pt-[29px] pb-8'>
                <div className='flex w-full justify-between items-center'>
                  <h2 className='font-medium text-lg'>{card.title}</h2>
                  <button>
                    <img src='/images/icon-ellipsis.svg' />
                  </button>
                </div>
                <div className='flex md:flex-col mt-[6px] md:mt-6 gap-y-2 items-center w-full justify-between md:justify-start md:items-start'>
                  <h1 className='font-light text-[32px] leading-[37.92px] md:text-[56px] md:leading-[66px]'>
                    {card.timeframes[activeTimeframe.toLowerCase()].current}hrs
                  </h1>
                  <span className='text-[#BBC0FF] text-[15px]'>
                    {activeTimeframe == 'Daily'
                      ? 'Yesterday '
                      : `Last 
                       ${activeTimeframe
                         .substring(0, activeTimeframe.length - 2)
                         .toLowerCase()} `}
                    - {card.timeframes[activeTimeframe.toLowerCase()].previous}
                    hrs
                  </span>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

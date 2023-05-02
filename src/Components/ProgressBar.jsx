import React from 'react';

const ProgressBar = ({progress}) => {
    return (
        <div className='relative h-2 w-64 rounded-full overflow-hidden bg-gray-500'>
            <div
                className='absolute top-0 left-0 h-2 bg-green-500'
                style={{width: `${progress}%`, animation: 'progress 1s linear infinite'}}
            ></div>
            <style>
                {`
          @keyframes progress {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
            </style>
        </div>
    );
};

export default ProgressBar;

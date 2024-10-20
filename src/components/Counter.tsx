import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex gap-4 p-5 justify-center items-center text-center">
      <button
        className="bg-blue-600 py-2 px-4 text-white font-semibold rounded-md"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
      {count}
      <button
        className="bg-blue-600 py-2 px-4 text-white font-semibold rounded-md"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

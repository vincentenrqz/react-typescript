import { useRef, useEffect } from 'react';

function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!);

  // " null! " focus without optional chaining
  // useRef hook for dom references

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input
        type='text'
        ref={inputRef}
        className='border-2 border-gray-900 rounded-md px-2 py-1'
      />
    </div>
  );
}

export default DomRef;

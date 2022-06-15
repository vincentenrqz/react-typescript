import { useState, useRef, useEffect } from 'react';

function MutableRef() {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
    }
    // or change null to undefined
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <div>
        HookTimer - {timer} -{' '}
        <button
          onClick={() => {
            stopTimer();
          }}
        >
          Stop Timer
        </button>
      </div>
    </div>
  );
}

export default MutableRef;

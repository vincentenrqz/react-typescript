type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

function Status(props: StatusProps) {
  const { status } = props;
  let message;

  if (status === 'loading') {
    message = <div className='text-blue-500 font-bold'>Loading...</div>;
  } else if (status === 'success') {
    message = (
      <div className='text-green-500 font-bold'>Data fetched successfully!</div>
    );
  } else if (status === 'error') {
    message = (
      <div className='text-red-500 font-bold'>Error fetching data.</div>
    );
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
}

export default Status;

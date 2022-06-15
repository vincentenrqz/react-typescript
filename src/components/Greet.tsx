type GreetProps = {
  fname: string;
  mname?: string;
  lname?: string;
  age?: number;
  isLoggedIn: boolean;
  messageCount?: number;
};

function Greet(props: GreetProps) {
  let { messageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.fname} ${props.lname}, you have ${messageCount} unread messages`
          : `Not logged in`}
      </h2>
    </div>
  );
}

export default Greet;

// export const Greet = (props: Name) => {
//   const { name } = props;
//   return (
//     <div>
//       <h2>Welcome {name}</h2>
//     </div>
//   );
// };

import { PersonProps } from './Person.Types';

// Prop Types

function Person(props: PersonProps) {
  const { name } = props;
  return (
    <div>
      <h3>
        {name.fname} {name.lname}
      </h3>
    </div>
  );
}

export default Person;

import { Name } from './Person.Types';

type PersonsListProps = {
  // names: {
  //   fname: string;
  //   lname: string;
  // }[];
  names: Name[];
};

function PersonList(props: PersonsListProps) {
  return (
    <div>
      {props.names.map(name => {
        return (
          <h2 key={name.fname}>
            {name.fname} {name.lname}
          </h2>
        );
      })}
    </div>
  );
}
export default PersonList;

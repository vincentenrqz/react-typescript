export type ProfileProps = {
  name: string;
};

function Profile({ name }: ProfileProps) {
  return (
    <div>
      <div>Private profile component. Name is {name}</div>
    </div>
  );
}

export default Profile;

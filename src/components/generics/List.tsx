type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// any label can be named in the argument

export const List = <T extends { id: number; first: string; last: string }>({
  items,
  onClick
}: ListProps<T>) => {
  return (
    <div>
      <div>List of items</div>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {/* {item} */}
            {item.id} {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};

// export default List;

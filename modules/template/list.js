import React from "react";

const CreateList = (items) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};
export default CreateList;

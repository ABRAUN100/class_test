import React from 'react'


const PictureId = ({ item}) => {
    return (
      <div className="todo-item-container">
        <span>
          {item.name} {item.age} {item.type}
        </span>
      
      </div>
    );
  };
  
export default PictureId;
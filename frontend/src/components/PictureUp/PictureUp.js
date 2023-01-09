import React from 'react'

import PictureId from "../PictureId/PictureId"

const PictureUP = ({list}) => {
    return (
      <div className="picture-container">
      {list.map((picture) => (
        <PictureId item={picture} key={picture.id} />
      ))}
    </div>
      );
    };

export default PictureUP
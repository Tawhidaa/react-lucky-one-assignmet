import React from 'react';
import"./SelectedBaking.css"
const SelectedBaking = ({select}) => {
    const {name,img}=select;
    return (
        <div className='select-item'>
      <img src={img} alt="" />
      <h5>{name}</h5>
    </div>
    );
};

export default SelectedBaking;
import React from 'react';
import"./SelectedBaking.css"
const SelectedBaking = ({select}) => {
    const {name,img}=select;
    return (
        <div className='select-item'>
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
    );
};

export default SelectedBaking;
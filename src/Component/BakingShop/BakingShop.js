import React, { useEffect, useState } from 'react';
import BakingCart from '../BakingCart/BakingCart';
import "./BakingShop.css"
import SelectedBaking from '../SelectedBaking/SelectedBaking';
import BakingModal from '../BakingModal/BakingModal';
import Modal from "react-modal";

const BakingShop = () => {
    const [baking, setBaking] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setBaking(data));
    },[])

    const [selected, setSelected] = useState([]);
    const handleAddToCart = (Item) => {
        let newCart;    
    
        if(selected.length===0)
        {
          newCart = [...selected, Item];
          setSelected(newCart);
        }
        else if(selected.find(o=>o.id===Item.id))
        {
          alert("This item is already added.");
        }
        else if(selected.length<4)
        {
          newCart = [...selected, Item];
          setSelected(newCart);
        }
        else
        {
          alert("You can't add more than four items");
        }
      };
      const [modal, setModal] = useState(false);
      const toggleModal = () => {
        setModal(true);
      };
    
      const closeModal = () => {
        setModal(false);
      };
    
      const resetItem = () => {
        if (selected.length === 0) {
          alert("Selected Baking Item is empty");
        } else {
          const set = setSelected([]);
          return set;
        }
      };
      const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          height: "130px",
          width: "300px",
          overflow: "auto",
        },
      };
    return (
     
             <div className="bakingshop-container">
              <div id="bakingcart" className="bakingcart-container">
              {baking.map((baking) => (
              <BakingCart baking={baking}
              key={baking.id}
              handleAddToCart={handleAddToCart}
              ></BakingCart>
          ))}
        </div>
        <div id="selected-cart" className="selected-container">
          <h4>Selected Baking Item</h4>
          {selected.map((select) => (
           <SelectedBaking select={select} key={select.id}
           ></SelectedBaking>
          ))}
          <button onClick={toggleModal} className="choose-1-button">
            Choose one for me
          </button>
          <button onClick={resetItem} className="reset-item">
            {" "}
            Reset Item
          </button>
        </div>

        <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
          <button className="modal-close-button" onClick={closeModal}>

          </button>
          {selected.length === 0 && (
            <div className="cart-warning">
              <p>Please add to cart minimum two item's</p>
            </div>
          )}
          <BakingModal key={selected.id} selected={selected}></BakingModal>
        </Modal>
      </div>
   
    );
};

export default BakingShop;
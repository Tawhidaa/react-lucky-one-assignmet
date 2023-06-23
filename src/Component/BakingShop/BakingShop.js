import React, { useEffect, useState } from 'react';
import BakingCart from '../BakingCart/BakingCart';
import "./BakingShop.css"
import SelectedBaking from '../SelectedBaking/SelectedBaking';



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
          alert("This Book is already added.");
        }
        else if(selected.length<4)
        {
          newCart = [...selected, Item];
          setSelected(newCart);
        }
        else
        {
          alert("You can't add more than 4 item");
        }
      };
      const [modal, setModal] = useState(false);
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
            CHOOSE 1 FOR ME
          </button>
          <button onClick={resetItem} className="choose-again">
            {" "}
            RESET ITEM
          </button>
        </div>

        <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
          <button className="modal-close-button" onClick={closeModal}>
            <CgCloseR size={25} />
          </button>
          {selected.length === 0 && (
            <div className="cart-warning">
              <p> Select Book Item Empty </p>
            </div>
          )}
          <BookModel key={selected.id} selected={selected}></BookModel>
        </Modal>
      </div>
        // </div>
    );
};

export default BakingShop;
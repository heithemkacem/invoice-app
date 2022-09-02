import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const EditInvoice = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  //Add product item
  const addItem = () => {
    setItems([...items, { name: "", quantity: 0, price: 0, total: 0 }]);
    console.log(items);
  };
  //handler change input
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...items];
    list[i][name] = value;
    list[i]["total"] = list[i]["quantity"] * list[i]["price"];

    setItems(list);
  };
  //delete product item
  const deleteItem = (i) => {
    const list = [...items];
    list.splice(i, 1);
    setItems(list);
  };

  return (
    <div className="main__container">
      <div className="new__invoice">
        <div className="new__invoice-header">
          <h3>Edit Invoice</h3>
        </div>
        <div className="new__invoice-body">
          {/* Bill From */}
          <div className="bill__from">
            <p className="bill__title">Bill From</p>
            <div className="form__group">
              <p>Street Adresse</p>
              <input type="text" placeholder="123, Sunny Street" />
            </div>
            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text" />
              </div>
              <div>
                <p>Postal Code</p>
                <input type="text" />
              </div>
              <div>
                <p>Country</p>
                <input type="text" />
              </div>
            </div>
          </div>
          {/* Bill To */}
          <div className="bill__to">
            <p className="bill__title">Bill To</p>
            <div className="form__group">
              <p>Client Name</p>
              <input type="text" />
            </div>
            <div className="form__group">
              <p>Client Email</p>
              <input type="email" />
            </div>
            <div className="form__group">
              <p>Street Adresse</p>
              <input type="text" />
            </div>
            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text" />
              </div>
              <div>
                <p>Postal Code</p>
                <input type="text" />
              </div>
              <div>
                <p>Country</p>
                <input type="text" />
              </div>
            </div>

            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Invoice Date</p>
                <input type="date" />
              </div>
              <div className="inline__group">
                <p>Payment Terms</p>
                <input type="text" />
              </div>
            </div>
            <div className="form__group">
              <p>Project Description </p>
              <input type="text" />
            </div>
          </div>
          {/*   invoice product items    */}
          <div className="invoice__items">
            <h3>Item List</h3>
            {items?.map((item, i) => (
              <div className="item" key={i}>
                <div className="form__group inline__form-group">
                  <div>
                    <p>Item Name</p>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => handleChange(e, i)}
                    />
                  </div>

                  <div>
                    <p>Qty</p>
                    <input
                      type="number"
                      name="quantity"
                      onChange={(e) => handleChange(e, i)}
                    />
                  </div>

                  <div>
                    <p>Price</p>
                    <input
                      type="number"
                      name="price"
                      onChange={(e) => handleChange(e, i)}
                    />
                  </div>
                  <div>
                    <p>Total</p>
                    <h4>{item.total}</h4>
                  </div>

                  <button className="edit__btn" onClick={() => deleteItem()}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Add  Item */}
          <button className="add__item-btn" onClick={addItem}>
            Add New Item
          </button>

          <div className="new__invoice__btns" style={{ justifyContent: "end" }}>
            <div>
              <button className="draft__btn" onClick={`invoices/id`}>
                Cancel
              </button>

              <button className="mark__as-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInvoice;

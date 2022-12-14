import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
const addNewInvoice = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const senderStreet = useRef("");
  const senderCity = useRef("");
  const senderPostal = useRef("");
  const senderCountry = useRef("");
  const clientName = useRef("");
  const clientEmail = useRef("");
  const clientStreet = useRef("");
  const clientCity = useRef("");
  const clientPostalCode = useRef("");
  const clientCountry = useRef("");
  const description = useRef("");
  const createdAt = useRef("");
  const paymentTerms = useRef("");

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

  //total ammount of all products
  const totalAmount = items.reduce((acc, cur) => acc + cur.total, 0);
  //submit data to the database
  const createInvoice = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/add-new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderStreet: senderStreet.current.value,
          senderCity: senderCity.current.value,
          senderPostal: senderPostal.current.value,
          senderCountry: senderCountry.current.value,
          clientName: clientName.current.value,
          clientEmail: clientEmail.current.value,
          clientStreet: clientStreet.current.value,
          clientCity: clientCity.current.value,
          clientPostalCode: clientPostalCode.current.value,
          clientCountry: clientCountry.current.value,
          description: description.current.value,
          createdAt: createdAt.current.value,
          paymentTerms: paymentTerms.current.value,
          status: status,
          items: items,
          totalAmount: totalAmount,
        }),
      });
      const data = await res.json();
      console.log(data);
      router.push("/");
      toast.success(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="main__container">
      <div className="new__invoice">
        <div className="new__invoice-header">
          <h3>New Invoice</h3>
        </div>
        <div className="new__invoice-body">
          {/* Bill From */}
          <div className="bill__from">
            <p className="bill__title">Bill From</p>
            <div className="form__group">
              <p>Street Adresse</p>
              <input type="text" ref={senderStreet} />
            </div>
            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text" ref={senderCity} />
              </div>
              <div>
                <p>Postal Code</p>
                <input type="text" ref={senderPostal} />
              </div>
              <div>
                <p>Country</p>
                <input type="text" ref={senderCountry} />
              </div>
            </div>
          </div>
          {/* Bill To */}
          <div className="bill__to">
            <p className="bill__title">Bill To</p>
            <div className="form__group">
              <p>Client Name</p>
              <input type="text" ref={clientName} />
            </div>
            <div className="form__group">
              <p>Client Email</p>
              <input type="email" ref={clientEmail} />
            </div>
            <div className="form__group">
              <p>Street Adresse</p>
              <input type="text" ref={clientStreet} />
            </div>
            <div className="form__group inline__form-group">
              <div>
                <p>City</p>
                <input type="text" ref={clientCity} />
              </div>
              <div>
                <p>Postal Code</p>
                <input type="text" ref={clientPostalCode} />
              </div>
              <div>
                <p>Country</p>
                <input type="text" ref={clientCountry} />
              </div>
            </div>

            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Invoice Date</p>
                <input type="date" ref={createdAt} />
              </div>
              <div className="inline__group">
                <p>Payment Terms</p>
                <input type="text" ref={paymentTerms} />
              </div>
            </div>
            <div className="form__group">
              <p>Project Description </p>
              <input type="text" ref={description} />
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

          <div className="new__invoice__btns">
            <button className="edit__btn" onClick={() => router.push("/")}>
              Discard
            </button>
            <div>
              <button
                className="draft__btn"
                onClick={() => createInvoice("draft")}
              >
                Save as Draft
              </button>

              <button
                className="mark__as-btn"
                onClick={() => createInvoice("pending")}
              >
                Send & Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addNewInvoice;

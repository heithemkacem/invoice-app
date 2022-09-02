import React from "react";
import { useRouter } from "next/router";

const InvoiceIdPage = () => {
  const router = useRouter();
  const { invoiceId } = router.query;
  const goBack = () => router.push("/");
  return (
    <div className="main__container">
      <h1>Invoice {invoiceId}</h1>
      <div className="back__btn">
        <h6 onClick={goBack}>Go Back</h6>
      </div>

      <div className="invoice__details-header">
        <div className="details__status">
          <p>Status</p>
          <button className="pending__status">Pending</button>
        </div>
        <div className="details__btns">
          {" "}
          <button className="edit__btn">Edit</button>
          <button className="delete__btn">Delete</button>
          <button className="mark__as-btn">Mark as paid</button>
        </div>
      </div>
      <div className="invoice__details">
        <div className="details__box">
          <div>
            <h4>Td4DKd</h4>
            <p>Re-branding</p>
          </div>
          <div>
            <p>Block - B Road Chebba mahdia</p>
            <p>Sousse</p>
            <p>51710</p>
            <p>122587RZIO</p>
          </div>
        </div>
        <div className="details__box">
          <div>
            <div className="invoice__created-date">
              <p>Invoice Date</p>
              <h4>29-07-2022</h4>
            </div>
            <div>
              <p className="invoice__payment">Payment Due</p>
              <h4>29-07-2022</h4>
            </div>
          </div>
          <div className="invoice__leint-adress">
            <p>Bill</p>
            <h4>Heithem </h4>
            <div>
              <p>Block - B Road Chebba mahdia</p>
              <p>Sousse</p>
              <p>51710</p>
              <p>122587RZIO</p>
            </div>
          </div>
          <div>
            <p>Send To</p>
            <h4>heithemkacem@20165.com</h4>
          </div>
        </div>
        <div className="invoice__item-box">
          <ul className="list">
            <li className="list__item">
              <p className="item__name-box">Item Name</p>
              <p className="list__item-box">Qty</p>
              <p className="list__item-box">Price</p>
              <p className="list__item-box">Total</p>
            </li>
            <li className="list__item">
              <div className="item__name-box">
                <h5>Ecommercer Website </h5>
              </div>
              <div className="list__item-box">
                <p>$285</p>
              </div>
              <div className="list__item-box">
                <p>$245</p>
              </div>
              <div className="list__item-box">
                <p>$221</p>
              </div>
            </li>
            <li className="list__item">
              <div className="item__name-box">
                <h5>Personel Website </h5>
              </div>
              <div className="list__item-box">
                <p>$285</p>
              </div>
              <div className="list__item-box">
                <p>$245</p>
              </div>
              <div className="list__item-box">
                <p>$221</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="grand__total">
          <h5>Grand Total</h5>
          <h2>450$</h2>
        </div>
      </div>
    </div>
  );
};

export default InvoiceIdPage;

import { useState, useEffect } from "react";

export const CheckoutStep3 = () => {
  const [reservedDate, setReservedDate] = useState("");
  const [loadingDate, setLoadingDate] = useState("");

  useEffect(() => {
    const formatDate = (daysFromToday) => {
      const date = new Date();
      date.setDate(date.getDate() + daysFromToday); 
      return date.toLocaleDateString("en-GB"); 
    };

    setReservedDate(formatDate(7)); 
    setLoadingDate(formatDate(5)); 
  }, []);

  return (
    <>
      {/* <!-- BEGIN CHECKOUT STEP THREE --> */}
      <div className="checkout-purchase checkout-form">
        <h4>
          Xytiles Studio thanks
          <br />
          you for your purchase!
        </h4>
        <p>
        Beauty begins the moment you decide to be yourself. Thank you for letting us be a part of your journey!"
        </p>
        <ul className="checkout-purchase__list">
          <li>
            <span>Order number</span> B-125724_75
          </li>
          <li>
            <span>Order status</span> Awaiting payment
          </li>
          <li>
            <span>Reserved for</span> {reservedDate}
          </li>
          <li>
            <span>Expected loading date</span> {loadingDate}
          </li>
        </ul>
        <a href="#" className="checkout-purchase__link">
          print a document -
        </a>
      </div>
      {/* <!-- CHECKOUT STEP THREE EOF --> */}
    </>
  );
};


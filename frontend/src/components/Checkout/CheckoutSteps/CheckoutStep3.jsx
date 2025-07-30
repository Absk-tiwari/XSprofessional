import axios from "axios";
import { CartContext } from "pages/_app";
import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import api from "utils/api";

export const CheckoutStep3 = () => {
    const { orderDetails, setOrderDetails } = useContext(CartContext);
  const [loadingDate, setLoadingDate] = useState("");

  const downloadReceipt = async e => {
    try {

        const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL+ '/download-receipt/'+ orderDetails.order.orderNumber, {
            responseType:"blob"
        });
        const url = window.URL.createObjectURL(new Blob([data]))
        const link = document.createElement('a')
        a.href = link;
        a.download = "orderDetails.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();

        window.URL.revokeObjectURL(url)

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const formatDate = (daysFromToday) => {
      const date = new Date();
      date.setDate(date.getDate() + daysFromToday);
      return date.toLocaleDateString("en-GB");
    };
    setLoadingDate(formatDate(orderDetails?.delivery??7));
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
            <span>Order number</span> {orderDetails.order?.orderNumber??'#'}
          </li>
          <li>
            <span>Order status</span> Awaiting payment
          </li>
          <li>
            <span>Expected delivery date</span> {loadingDate}
          </li>
        </ul>
        <a href="#" className="checkout-purchase__link" onClick={downloadReceipt}>
          print a document -
        </a>
      </div>
      {/* <!-- CHECKOUT STEP THREE EOF --> */}
    </>
  );
};


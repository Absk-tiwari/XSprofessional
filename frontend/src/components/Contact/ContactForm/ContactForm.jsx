import { useState } from "react";
import toast from "react-hot-toast";
import api from "utils/api";

export const ContactFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject:"",
  });
  const [status, setStatus] = useState(""); // Success/Error message
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        for (let key in formData) {
            if (formData[key]=== ""){
                return toast.error(capitalFirst(key) + " is empty");
            }
            if(key ==='email') {
                const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData[key])
                if(!isValid) return toast.error("Invalid email!")
            }
        }
      const response = await api.post('/contact', formData);
      if (response.data.status) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.log(error.message)
      setStatus("An error occurred. Please try again.");
    }
  };
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-contacts js-img'
        style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH}/assets/img/discount-bg3.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>write to us</span>
            <span className='main-text'>leave a message</span>
            <p>
              Write to us if you have any questions, we will definitely contact
              you and find a solution.
            </p>
            <form onSubmit={handleSubmit}>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  name="email"
                  className='form-control'
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='box-field box-field__textarea'>
                <textarea
                  className='form-control'
                  placeholder='Enter your message'
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type='submit' className='btn'>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};

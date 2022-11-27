
import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const BuyingModal = ({ options, setOptions }) => {
  const {user} = useContext(AuthContext)
  const { title, resale_price } = options;
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const buying = {
      productName: title,
      buyer: name,
      email: email,
      price: price,
      phone: phone,
      location: location,
    }
    console.log(buying)
    setOptions(null)

  }
  return (
    <>
      <input type="checkbox" id="buying-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-3xl font-bold text-center">{title}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 my-5">
              <input type="text" name="name" value={user.displayName} disabled className="input input-bordered w-full" />
              <input type="text" name="email" value={user.email} disabled className="input input-bordered w-full" />
              <input type="text" name="price" value={resale_price} disabled className="input input-bordered w-full" />
              <input type="text" name="phone" placeholder="Your Phone"  className="input input-bordered w-full" required/>
              <input type="text" name="location" placeholder="Your Location" className="input input-bordered w-full" required/>
            <input className="btn btn-primary w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyingModal;

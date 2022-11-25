import React from "react";

const BuyingModal = ({ options }) => {
  const { title, location, seller, original_price, resale_price, post_time, year_of_use } = options;
  return (
    <>
      <input type="checkbox" id="buying-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="buying-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form className="grid grid-cols-1 gap-3 my-5">
              <input type="text" value={seller} disabled className="input input-bordered w-full" />
              <input type="text" value={location} disabled className="input input-bordered w-full" />
              <input type="text" value={resale_price} disabled className="input input-bordered w-full" />
              <input type="text" placeholder="Your Phone"  className="input input-bordered w-full" />
              <input type="text" placeholder="Your Location" className="input input-bordered w-full" />
            
            <input className="btn btn-primary w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BuyingModal;

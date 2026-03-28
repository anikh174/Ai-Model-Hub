import React, { useState } from 'react';

const ModelCard = ({model}) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleSubscription = ()=>{
        setIsSubscribed(true)
    }
    return (
        <div>
            <div className="shadow-lg rounded-lg border border-zinc-300 overflow-hidden">
              <div className="flex justify-center items-center h-56 bg-zinc-200">
                <img className="h-40 w-40 object-contain" src={model.image} alt="" />
              </div>

              <div className="p-4 space-y-3">
                <h2 className="text-2xl font-bold">{model.title}</h2>
                <p>{model.description}</p>

                <div className="text-2xl font-bold">${model.price}/month</div>

                <button onClick={handleSubscription} className="btn bg-red-500 w-full text-white rounded-lg mt-5">{isSubscribed ? "Subscribed" : "Subscribe Now"}</button>
              </div>
            </div>
          </div>
    );
};

export default ModelCard;
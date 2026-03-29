import React, { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);
  console.log(models);
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Choose Your Ai Model</h2>
        <p className="font-semibold text-gray-400">
          One subscription gives you access to all frontier Ai models
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 container mx-auto">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Models;

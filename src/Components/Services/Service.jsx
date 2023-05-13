import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-store-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-8">
      <div className="max-w-lg mx-auto text-center space-y-3">
        <h3 className="text-2xl text-red-500 font-bold">Service</h3>
        <h1 className="text-4xl font-bold">Our Services Area</h1>
        <p className="text-gray-700">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      {/* Services items  */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard {...service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Service;

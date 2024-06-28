export const  getServices = async () => {
  const res = await fetch("http://localhost:3000/services/api/get-all");
  const services = await res.json();
  return services;
};
export const getSingleServices = async (id) => {
    const res = await fetch(`http://localhost:3000/services/api/${id}`);
    const services = await res.json();
    return services;
  };
  
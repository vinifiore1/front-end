import { useState } from "react";
import { FullPageMain } from "../../components/FullPageMain/FullPageMain";

const Services = () => {
  const token = sessionStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  return <FullPageMain loading={loading}></FullPageMain>;
};

export default Services;

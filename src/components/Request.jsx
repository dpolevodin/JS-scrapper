import axios from "axios";
import { useState } from "react";

export const Request = () => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  axios.get(url).then((data) => setData(data.data));

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.url;
    setUrl(value);
  };
  return (
    <div onSubmit={handleInputSubmit}>
      <form>
        <input name="url" />
      </form>
      {data}
    </div>
  );
};

import axios from "axios";

export const connect = async (
  value: string,
  method: string,
  body?: object,
  token?: string
) => {
  if (method === "post") {
    return await axios
      .post(`https://api-de-agenda.herokuapp.com/${value}`, body)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });
  } else if (method === "get") {
    return await axios
      .get(`https://api-de-agenda.herokuapp.com/${value}`, body)
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return err;
      });
  }
};

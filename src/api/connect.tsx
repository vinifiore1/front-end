import axios from "axios";

export const connect = async (value: string, body?: object) => {
  return await axios
    .post(`https://api-de-agenda.herokuapp.com/${value}`, body)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return err;
    });
};

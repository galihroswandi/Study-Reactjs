import { OnlinePath, RootPath } from "./Config";
import axios from "axios";

const Delete = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${root ? OnlinePath : RootPath}/${path}`).then((response) => {
      resolve(response);
    }, err => {
        reject(err)
    })
  })
  return promise;
}

export default Delete;
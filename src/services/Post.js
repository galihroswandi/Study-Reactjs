import axios from 'axios';
import { OnlinePath, RootPath } from './Config';

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${root ? OnlinePath : RootPath}/${path}`, data).then(
      (respose) => {
        resolve(respose)
      },
      (err) => {
        reject(err)
      },
    )
  })

  return promise;
}

export default Post;
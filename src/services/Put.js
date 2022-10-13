import axios from 'axios'
import { OnlinePath, RootPath } from './Config'

const Put = (path, root, data) => {
  const promise = new Promise((respolve, reject) => {
    axios.put(`${root ? OnlinePath : RootPath}/${path}`, data).then(
      (response) => {
        respolve(respolve)
      },
      (err) => {
        reject(err)
      },
    )
  })

  return promise
}

export default Put

/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve, rejact) => {
    setTimeout(() => {
      return resolve('');
    }, millis)
  })
}


let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100

// Private API
let post = (payload) => {
  console.log(payload);
}

// Public API
const helloWorld = () => {
  let payload = 'HelloWorld'

  post(payload)
}

// Export API
export const Api = {
  helloWorld
}
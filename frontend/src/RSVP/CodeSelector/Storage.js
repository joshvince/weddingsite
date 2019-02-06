const storageKey = "boshWeddingCode";

const Storage = {
  set: (code) => {
    localStorage.setItem(storageKey, code)
    return { success: true, code: "code"}
  },
  get: () => {
    let payload = {success: false, code: "" }
    if (localStorage.hasOwnProperty(storageKey) ) {
      payload.success = true;
      payload.code = localStorage.getItem(storageKey)
    }
    return payload
  }
}

export default Storage;
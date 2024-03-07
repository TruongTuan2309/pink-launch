export const validateUrl = (url: string) => {
  const regExp = /^(http|https):\/\/[^ "]+$/
  return regExp.test(url)
}

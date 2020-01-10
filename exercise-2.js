function balikString(string) {
  let balik = ''
  for(i = 1; i <= string.length; i++) {
    balik += string[string.length -i]
  }

  return balik
}

console.log(balikString('hello world!'))



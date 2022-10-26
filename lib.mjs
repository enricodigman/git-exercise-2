export const square = (n) => n ** 2

export const fahrenheit = (celsius) => celsius * 1.8 + 32

export const rectangleArea = (a, b) => a * b

export const isPalindrome = (str) => {
  const str2 = str.length - 1

  for (let i = 0; i < str.length / 2; i += 1) {
    if (str.charAt(i).toUpperCase() === str.charAt(str2 - i).toUpperCase()) {
      return true
    }
  }

  return false
}

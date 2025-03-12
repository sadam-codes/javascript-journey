const firstString = (string) => {
    const Storeresult = string.find(newstring => newstring.length >= 5)
    return Storeresult ? Storeresult : "No matching string"
}
const words = ['Sadam', 'Ali', 'Ahmad']
console.log(firstString(words))


// Find the longest name in an array of names.
let arr = [2, 2, 3, 5, 5, 3, 4]
const removeDuplocate = () => {
    return [...new Set(arr)]
}
console.log(removeDuplocate())
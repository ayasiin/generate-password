function generatePassword(length,includeLowercase,includeNumber,includeUppercase){
    const lowercaseChars ='abcdefghijklmnopqrstuvwxyz '
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersChars = `0123456789`
    const symbolChars = '@!#€¢∞¶&*()_+='
    let allowedChars =''
    let password = ''
    allowedChars += includeLowercase ? lowercaseChars : ''
    allowedChars += includeUppercase ? uppercaseChars : ''
    allowedChars += includeNumber ? numbersChars :''
    allowedChars += includeSymbols ? symbolChars : ''

    if(length <= 0){
        return `(password length must be at least 1)`
    }
    if(allowedChars.length ===0){
        return `(at least 1 set of charactor need to be selected)`
    }
    for( let i = 0; i < length;i++){
        const randomindex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomindex]
    }
    console.log(allowedChars)
    return password
}

const PasswordLength = 12
const includeLowercase = true
const includeUppercase = true
const includeNumber = true
const includeSymbols = true
const Password = generatePassword(PasswordLength,includeLowercase,includeNumber,includeSymbols,includeUppercase)
console.log(`Generated password:${Password}`)
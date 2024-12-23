/*
Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’, otherwise false. Make sure
'@' must come before '.' and there must be some characters between '@' and '.'
The function must be case-insensitive: */

const isNotString = str => typeof str !== "string";

const str1 = "abc@gmail.com";
const str2 = ".@";
const str3 = "abc";
const str4 = 12345;

const checkEmailId = (str) => {
  if (isNotString(str)) {
    console.log(`{str} is not string`);
    return false;
  }

  str = str.toLowerCase();

  const atIndex = str.indexOf("@");
  const dotIndex = str.indexOf(".", atIndex + 1);

  if (atIndex > -1 && dotIndex > atIndex + 1) {
    return true;
  }

  return false;
};

console.log(checkEmailId(str1)); 
console.log(checkEmailId(str2)); 
console.log(checkEmailId(str3)); 
console.log(checkEmailId(str4));

/*Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength
– replaces the end of str with the ellipsis character "...", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te..."
truncate("Hi everyone!", 20) = "Hi everyone!"
5. Let’s try 5 array operations.
Create an array styles with items “James” and “Brennie”.
Append “Robert” to the end.
 */


const truncate = (str, maxLength) => {
    if (str.length > maxLength)
        return str.slice(0,maxLength - 3) + '...'

    return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
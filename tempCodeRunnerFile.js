const truncate = (str, maxLength) => {
    if (str.length > maxLength)
        return str.slice(0,maxLength - 3) + '...'

    return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
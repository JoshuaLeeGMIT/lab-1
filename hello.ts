function strlen(s: string): number {
    return s.length;
}

function nchars(s: string): number {
    return s.replace(' ', '').length;
}

function strlenb(s: string, b: boolean): number {
    if (b)
        return strlen(s);
    else
        return nchars(s);
}

let s: string = "Hello, world!";

console.log(strlen(s));
console.log(nchars(s));
console.log(strlenb(s, false));
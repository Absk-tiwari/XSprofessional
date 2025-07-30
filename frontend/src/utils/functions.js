export const capitalFirst = (string) => {
    if (!string) return string; // Handle empty or null strings
    if(string.includes(' ')){
        let str= '';
        string.split(' ').forEach( part => {
           str+=' '+ part.charAt(0).toUpperCase() + part.slice(1);
        })
        return str;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function chunk(array, size, uncategorized = false) {
    const result = [];
    if(!array) return []
    if(uncategorized) array.unshift({})
    for (let i = 0; i < array.length; i += size) {
        // Use slice to get a chunk of the specified size and push it to the result array
        result.push(array.slice(i, i + size));
    }
    return result;
}

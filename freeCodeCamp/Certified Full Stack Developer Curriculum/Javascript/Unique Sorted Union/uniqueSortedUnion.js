function uniteUnique(...arrays) {
  const uniqueValues = [];
    for (let arr of arrays) {
        for (let value of arr) {
            if (!uniqueValues.includes(value)) {
                uniqueValues.push(value);
            }
        }
    }
    return uniqueValues;
}
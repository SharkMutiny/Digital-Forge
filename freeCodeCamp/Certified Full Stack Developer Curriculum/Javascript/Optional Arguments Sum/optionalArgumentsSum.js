function addTogether(...args) {
  const first  = args[0]
  const second = args[1]

    if ([...args].includes(undefined)) {
        return undefined;
    }

    if (typeof first !== 'number') { 
        return undefined;
    }


    if (second === undefined) {
        return function(second) {
            if (typeof second !== 'number') {
                return undefined;
            }
            return first + second;
        };
    }
    
    if (typeof second !== 'number') {
        return undefined;
    }
    return first + second;
}
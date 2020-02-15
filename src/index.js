export const localeIncludes = (string, searchString, {position = 0, locales, ...options} = {}) => {
    if (string === undefined || 
        string === null || 
        searchString === undefined ||
        searchString === null
    ) {
        throw new Error('localeIncludes requires at least 2 parameters');
    }
    
    const stringLength = string.length;
    const searchStringLength = searchString.length;
    const lengthDiff = stringLength - searchStringLength;

    for (let i = position; i <= lengthDiff; i++) {
        if (string.substring(i, i + searchStringLength).localeCompare(searchString, locales, options) === 0) {
            return true;
        }
    }

    return false;
};

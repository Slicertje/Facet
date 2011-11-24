$.gsub = function (str, pattern, replacement) {
    var idx = str.indexOf(pattern);
    while (idx >= 0) {
        str = str.replace(pattern, replacement);
        idx = str.indexOf(pattern);
    }
    return str;
};
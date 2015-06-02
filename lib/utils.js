// Convert int to string with leading zeroes
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

// Format a date to 'YYYYMMDD'
function formatDate(d) {
    d = new Date(d);
    return pad(d.getFullYear(), 4)+pad(d.getMonth()+1, 2)+pad(d.getDate(), 2);
}

module.exports = {
    formatDate: formatDate
};

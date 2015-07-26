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

// Unformat a date
function unformatDate(d) {
    return (new Date(d.slice(0, 4), Number(d.slice(4, 6)) - 1, d.slice(6, 8)));
}

module.exports = {
    pad: pad,
    formatDate: formatDate,
    unformatDate: unformatDate
};

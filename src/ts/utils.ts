//maths i do not want to do
function random(min, max) {
    return Math.random() * (max - min) + min;
}
// map a number from 1 range to another
function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
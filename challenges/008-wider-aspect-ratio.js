/*
Problem: Wider Aspect Ratio

Given two image dimensions in the format "WxH", determine which image has
the greater width-to-height ratio.

Return the aspect ratio of that image reduced to its simplest form as "W:H".

Example:
Input: "1920x1080", "800x600"
Output: "16:9"

Concepts:
- Strings
- String Splitting
- Arrays
- Math Operations
- Ratios
- Greatest Common Divisor (GCD)
- Functions

Source: FreeCodeCamp
*/



function getWiderAspectRatio(dim1, dim2) {
    const [w1, h1] = dim1.split('x').map(Number);
    const [w2, h2] = dim2.split('x').map(Number);

    const ratio1 = w1 / h1;
    const ratio2 = w2 / h2;

    let w, h;

    if (ratio1 >= ratio2) {
        w = w1;
        h = h1;
    } else {
        w = w2;
        h = h2;
    }

    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    const g = gcd(w, h);

    return `${w / g}:${h / g}`;
}
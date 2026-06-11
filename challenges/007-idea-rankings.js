/* Given a list of ideas with optimistic, realistic, and pessimistic completion estimates, calculate the expected completion time for each idea.

Formula:
expected = ((optimistic + 4 × realistic + pessimistic) / 6) × ideaNameLength

Return the idea names sorted by expected completion time, shortest first.
*/


function analyzeIdeas(ideas) {
    return ideas
        .sort((a, b) => {
            const expectedA = ((a[1] + 4 * a[2] + a[3]) / 6) * a[0].length;
            const expectedB = ((b[1] + 4 * b[2] + b[3]) / 6) * b[0].length;
            return expectedA - expectedB;
        })
        .map(idea => idea[0]);
}

/*
Concepts Used:
- 2D Arrays
- Array Sorting
- Custom Compare Functions
- Mathematical Calculations
- String Length
- Array Mapping
- Functions
*/
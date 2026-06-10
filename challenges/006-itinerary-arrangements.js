/* Problem: Itinerary Arrangements
Given a list of optional trip stops, count the number of valid itinerary arrangements.

The itinerary always includes:
- breakfast
- lunch
- dinner

Rules:
- breakfast is always first.
- At least one stop must appear before lunch.
- Lunch must come before dinner with at least one stop between them.
- At most one optional stop may appear after dinner.

Return the total number of valid arrangements. */


function getItineraryCount(stops) {
    const n = stops.length;

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial * (2 * n - 3);
}

/*
Concepts Used:
- Arrays
- Permutations
- Combinatorics
- Counting Arrangements
- Constraints Handling
- Mathematical Reasoning
- Functions
*/
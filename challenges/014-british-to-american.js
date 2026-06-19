/*
Problem: British to American

Given a sentence, replace British English spellings with their American
English equivalents using a lookup table.

Requirements:
- Replacements must be case-insensitive.
- Also replace words derived from the listed root words
  (e.g., "colouring" → "coloring").

Example:
Input: "I love the colour blue."
Output: "I love the color blue."

Concepts:
- Strings
- Objects (Lookup Table)
- Regular Expressions
- String Replacement
- Case-Insensitive Matching

Source: FreeCodeCamp
*/


function britishToAmerican(sentence) {
  const dictionary = {
    colour: "color",
    flavour: "flavor",
    honour: "honor",
    neighbour: "neighbor",
    labour: "labor",
    humour: "humor",
    centre: "center",
    fibre: "fiber",
    defence: "defense",
    offence: "offense",
    organise: "organize",
    recognise: "recognize",
    analyse: "analyze"
  };

  const regex = new RegExp(Object.keys(dictionary).join("|"), "gi");

  return sentence.replace(regex, match => {
    let replacement = dictionary[match.toLowerCase()];

    // Preserve first-letter capitalization
    if (match[0] === match[0].toUpperCase()) {
      replacement = replacement[0].toUpperCase() + replacement.slice(1);
    }

    return replacement;
  });
}
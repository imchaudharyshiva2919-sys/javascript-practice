/*
Problem: Schema Validator Part 6
Source: freeCodeCamp

Task:
Validate an object with the schema:

{
  users: UserProfile[]
}

UserProfile:
- username → string
- posts → number
- verified → boolean
- role → user | creator | moderator | staff | admin
- supporter → optional boolean
- badges → string[]

Extra properties are allowed.
The users array may be empty.

Return true if the object matches the schema, otherwise false.

Key Concepts:
Nested Object Validation, Arrays of Objects, Type Checking, Optional Properties
*/

function isValidSchema(data) {
  const roles = ["user", "creator", "moderator", "staff", "admin"];

  if (!data || !Array.isArray(data.users)) {
    return false;
  }

  return data.users.every(user => {
    if (typeof user !== "object" || user === null) {
      return false;
    }

    if (typeof user.username !== "string") {
      return false;
    }

    if (typeof user.posts !== "number") {
      return false;
    }

    if (typeof user.verified !== "boolean") {
      return false;
    }

    if (!roles.includes(user.role)) {
      return false;
    }

    if (
      user.hasOwnProperty("supporter") &&
      typeof user.supporter !== "boolean"
    ) {
      return false;
    }

    if (
      !Array.isArray(user.badges) ||
      !user.badges.every(badge => typeof badge === "string")
    ) {
      return false;
    }

    return true;
  });
}


/*
Learned:
- Validating nested data structures
- Validating arrays of objects
- Array.isArray()
- Array.prototype.every()
- Reusing validation logic
*/
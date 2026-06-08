/*
Problem: Schema Validator Part 5
Source: freeCodeCamp

Task:
Validate an object against the following rules:
- username → string
- posts → number
- verified → boolean
- role → user | creator | moderator | staff | admin
- supporter → optional boolean
- badges → array of strings

Extra properties are allowed.

Return true if the object matches the schema, otherwise false.

Key Concepts:
Object Validation, Type Checking, Arrays, Optional Properties
*/




function isValidSchema(obj) {
    const roles = ["user", "creator", "moderator", "staff", "admin"];

    if (typeof obj.username !== "string") return false;
    if (typeof obj.posts !== "number") return false;
    if (typeof obj.verified !== "boolean") return false;
    if (!roles.includes(obj.role)) return false;

    if ("supporter" in obj && typeof obj.supporter !== "boolean") {
        return false;
    }

    if (!Array.isArray(obj.badges)) return false;

    if (!obj.badges.every(badge => typeof badge === "string")) {
        return false;
    }

    return true;
}


/*
Learned:
- typeof operator
- Array.isArray()
- Array.prototype.every()
- Array.prototype.includes()
- Optional property validation
*/
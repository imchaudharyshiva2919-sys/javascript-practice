/*Given a departure city, arrival city, flight duration, and travel direction (east/west), calculate the traveller's jet lag hours.

Rules:
- Find the timezone difference between the cities.
- Use a direction multiplier:
  - East: 1.5
  - West: 1.0
- Formula:
  timezoneDifference + (flightDuration × 0.1 × multiplier)
- Return the result rounded to one decimal place. */


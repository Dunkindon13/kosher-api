# Kosher API
This is a teaching api built to work with the kosher Angular app. It can work for anything though.

## End Points
 By default, the API launches to port 3000.
 
 **GET**
 - */api/restaurants* returns all of the restaurants.
 
 - */api/restaurant/:id*  returns restaurant with its ID. Empty JSON if no restaurant by with that ID.
 
 - */api/reviews/:rest_id* returns all available reviews for the restaurant with a given ID.
 
 - */api/review/:rev_id* returns the review with the given ID. Empty JSON if no review with that ID.
 
 - */api/location/:loc_id* returns the location of that ID. The ID can be found as part of the restaurant object.

**POST**
- */api/review* expects a JSON object with: 
  - restaurant ID (int)
  - author (string)
  - rating (int)
  - title (string)
  - body (string)

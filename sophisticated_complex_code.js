/*
 * Filename: sophisticated_complex_code.js
 * Content: A complex JavaScript code that performs multi-level sorting and filtering on an array of objects.
 */
 
// Array of objects to be sorted and filtered
var data = [
  { id: 1, name: "John", age: 25, city: "New York" },
  { id: 2, name: "Alice", age: 32, city: "London" },
  { id: 3, name: "Bob", age: 38, city: "Paris" },
  { id: 4, name: "David", age: 22, city: "Tokyo" },
  // ... more objects ...
];

// Custom sorting function for sorting by name length in ascending order
function sortByStringLength(a, b) {
  return a.name.length - b.name.length;
}

// Custom filtering function for filtering names starting with a specific letter
function filterByNameStartsWith(letter) {
  return function(obj) {
    return obj.name.charAt(0).toUpperCase() === letter.toUpperCase();
  };
}

// Perform multi-level sorting and filtering
var filteredData = data
  .filter(filterByNameStartsWith("J")) // Filter names starting with letter 'J'
  .sort(sortByStringLength) // Sort by name length
  .slice(0, 5) // Take first 5 elements
  .map(function(obj) {
    return {
      // Extract desired properties from filtered data
      name: obj.name,
      age: obj.age
    };
  })
  .reduce(function(acc, obj) {
    // Group by age and count occurrences
    if (acc[obj.age]) {
      acc[obj.age]++;
    } else {
      acc[obj.age] = 1;
    }
    return acc;
  }, {});

// Print the resulting filtered and grouped data
console.log(filteredData);

// ... More lines of code ...
// ... More complex operations on data ...
// ... More sophisticated algorithms ...
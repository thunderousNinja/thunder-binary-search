# Binary search

Performs a binary search on a sorted array, returning the index of the found
item.  If the item was not found in the array then a ```-1``` is returned.

## Installation

```
npm install --save thunder-binary-search
```

## Usage

* If an item isn't found then ```-1``` is found.
* The input array must be sorted.

### Searching a primitive array.

```
import binarySearch from 'thunder-binary-search';

let arr = [1, 3, 4, 5, 6, 7];

// Get the index of 6.
binarySearch(arr, (item) => {
  if (item === 6) {
    return 0; // found
  } else if (item > 6) {
    return 1; // greater than
  } else {
    return -1; // less than
  }
}); // 5

```

### Searching an array of complex objects.

```
import binarySearch from 'thunder-binary-search';

let arr = [
  {score: 1}, 
  {score: 2}, 
  {score: 3}, 
  {score: 14}, 
  {score: 15}, 
  {score: 20},
  {score: 29}
];

// Get the index of the object with a score of 3.
binarySearch(arr, (item) => {
  if (item.score === 3) {
    return 0; // found
  } else if (item.score > 3) {
    return 1; // greater than
  } else {
    return -1; // less than
  }
}); // returns 2

```

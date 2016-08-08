export default function binarySearch(arr, sort) {
  if (!sort) {
    throw new Error('Sort function missing.');
  }
  if (!arr || !arr.length) {
    return -1;
  }

  let min = 0;
  let max = arr.length;

  while (min <= max) {
    let index = Math.floor((max + min) / 2);
    let itemScore = sort(arr[index]);
    if (itemScore > 0) {
      max = index - 1;
    } else if (itemScore < 0) {
      min = index + 1;
    } else {
      return index;
    }
  }
  return -1;
}

let nums = [2, 7, 11, 15];
let target = 9;

function sumTwo() {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    // cur + x = target
    // x = target - cur
    let x = target - current;
    if (map.has(x)) {
      return [map.get(x), i];
    } else {
      map.set(current, i);
    }
  }
}

console.log(sumTwo());

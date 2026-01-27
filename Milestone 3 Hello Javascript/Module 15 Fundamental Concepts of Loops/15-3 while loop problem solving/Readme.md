# Two Sum Problem — Interview Notes (JavaScript)

এই নোটগুলো **Interview POV** থেকে লেখা। সরাসরি `README.md` ফাইলে copy–paste করা
যাবে ✅

---

## 1️⃣ Problem Statement

Given an array, find the **indices of two numbers** such that their sum is
**100**.

---

## 2️⃣ Brute Force Approach

- Nested loop ব্যবহার করা হয়
- সব possible pair চেক করা হয়

**Time Complexity:** `O(n²)`

👉 Works, but not efficient for large arrays.

---

## 3️⃣ Why Brute Force is Not Ideal

- Large array হলে performance slow হয়ে যায়
- Duplicate pair আসে (e.g. `[0,1]` and `[1,0]`)

---

## 4️⃣ Optimized Approach (Hash Map)

- Object / Map ব্যবহার করে single loop এ solve করা যায়
- Complement (100 − current value) আগে আছে কিনা চেক করা হয়

---

## 5️⃣ Core Logic (One Line)

> For each element, check if its complement already exists in the map.

---

## 6️⃣ Optimized Code Example

```js
const twoSum = arr => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const need = 100 - arr[i];

    if (map[need] !== undefined) {
      return [map[need], i];
    }

    map[arr[i]] = i;
  }
};
```

---

## 7️⃣ Why Check Before Storing in Map?

- Same index দুইবার ব্যবহার না করার জন্য
- Correct index pair পাওয়ার জন্য

---

## 8️⃣ Time & Space Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`

👉 We trade extra space for better performance.

---

## 9️⃣ Common Interview Questions & Answers

- **Q:** Why not use `map()` or `forEach()`?
  - **A:** They are still loops and don’t reduce time complexity.

- **Q:** Can this handle large inputs?
  - **A:** Yes, because it runs in linear time.

---

## 🔟 Interview Killer Line (Use This!)

> “The brute force solution works, but to improve performance I used a hash map
> which reduces time complexity from O(n²) to O(n).”

---

### ✅ Tip

এই problem টা interview-এ এলে আগে **brute force explain করো**, তারপর **optimized
solution বলো** — selection chance অনেক বেড়ে যায় 🔥

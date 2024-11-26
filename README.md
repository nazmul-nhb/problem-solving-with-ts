# Problems

## From Ravi Bhai

### **1. Reverse a String**

**Problem:**

Write a function that takes a string as input and returns the string reversed.

For example:

```jsx
reverseString("hello");  // "olleh"

```

---

### **2. Palindrome Check**

**Problem:**

Write a function that checks if a string is a palindrome.

A palindrome is a word that reads the same forward and backward.

For example:

```jsx
isPalindrome("madam");  // true
isPalindrome("hello");  // false

```

---

### **3. Find the Largest Number in an Array**

**Problem:**

Write a function that finds the largest number in an array.

For example:

```jsx
findLargest([3, 1, 4, 1, 5, 9]);  // 9

```

---

### **4. Remove Duplicates from an Array**

**Problem:**

Write a function that removes duplicate values from an array.

For example:

```jsx
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);  // [1, 2, 3, 4, 5]

```

---

### **5. Count Vowels in a String**

**Problem:**

Write a function that counts the number of vowels (a, e, i, o, u) in a given string.

For example:

```jsx
countVowels("hello");  // 2
countVowels("world");  // 1

```

---

### **6. Sum of Digits of a Number**

**Problem:**

Write a function that calculates the sum of digits of a number.

For example:

```jsx
sumOfDigits(1234);  // 10
sumOfDigits(567);   // 18

```

---

### **7. Find the Second Largest Number in an Array**

**Problem:**

Write a function that finds the second largest number in an array.

For example:

```jsx
findSecondLargest([3, 1, 4, 1, 5, 9]);  // 5

```

---

### **8. Factorial of a Number**

**Problem:**

Write a function that calculates the factorial of a number.

The factorial of a number `n` is the product of all positive integers less than or equal to `n`.

For example:

```jsx
factorial(5);  // 120
factorial(3);  // 6

```

---

### **9. FizzBuzz Problem**

**Problem:**

Write a function that prints the numbers from 1 to `n`, but for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

For example:

```jsx
fizzBuzz(10);
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz

```

---

### **10. Count Occurrences of a Character in a String**

**Problem:**

Write a function that takes a string and a character as input and returns the number of times the character appears in the string.

For example:

```jsx

countCharacter("hello world", "o");  // 2
countCharacter("javascript", "a");   // 2

```

---

## From Shamim

### **Problem 1**: Message Processing System

You are developing a message processing system that needs to handle messages with embedded timestamps. Each message contains words separated by spaces, and some words have timestamps enclosed in square brackets at the end (e.g., `hello[12:30]`). Write a function that processes a string message and returns all words with timestamps, sorted by their timestamp values. Words without timestamps should be ignored. The timestamps are in 24-hour format (HH:MM).

#### Example 1.1

**Input:**

```text
meeting[09:00] coffee[08:30] lunch[13:00] report[09:00]

```

**Output:**

```text
coffee[08:30], meeting[09:00], report[09:00], lunch[13:00]

```

**Explanation:**
Words are sorted by timestamps, with `meeting` and `report` maintaining their relative order for `09:00`.

#### Example 1.2

**Input:**

```text
hello world coffee[25:00] meeting[09:15] chat[09:00]

```

**Output:**

```text
chat[09:00], meeting[09:15]

```

**Explanation:**
Invalid timestamp `[25:00]` is ignored, and words without timestamps are ignored.

---

### **Problem 2**: Printer Queue Management

You are developing a system to manage tasks in a printer queue. Each task has a priority level (1–5, where 5 is the highest) and a document size in KB. The printer can only process one task at a time. Write a function that rearranges the print queue such that:

1. Higher priority tasks are processed first.
2. If priorities are equal, smaller documents are processed first (to optimize printing time).
3. If both priority and size are equal, maintain the original order.

Return the sequence of task IDs in their final processing order.

#### Example 2.1

**Input:**

```javascript
[
  { id: "T1", priority: 3, size: 300 },
  { id: "T2", priority: 3, size: 200 },
  { id: "T3", priority: 5, size: 400 }
]
```

**Output:**

```javascript
["T3", "T2", "T1"]
```

**Explanation:**

- T3 has the highest priority (5), so it comes first.
- T1 and T2 have the same priority (3), but T2 has a smaller size, so T2 comes before T1.

---

#### Example 2.2

**Input:**

```javascript
[
  { id: "A1", priority: 4, size: 100 },
  { id: "A2", priority: 4, size: 100 },
  { id: "A3", priority: 4, size: 100 }
]
```

**Output:**

```javascript
["A1", "A2", "A3"]
```

**Explanation:**
All tasks have equal priority and size, so the original order is maintained.

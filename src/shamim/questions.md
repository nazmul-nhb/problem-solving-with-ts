# Questions From Shamim

## **Problem 1**: Message Processing System

You are developing a message processing system that needs to handle messages with embedded timestamps. Each message contains words separated by spaces, and some words have timestamps enclosed in square brackets at the end (e.g., `hello[12:30]`). Write a function that processes a string message and returns all words with timestamps, sorted by their timestamp values. Words without timestamps should be ignored. The timestamps are in 24-hour format (HH:MM).

### Example 1.1

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

### Example 1.2

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

## **Problem 2**: Printer Queue Management

You are developing a system to manage tasks in a printer queue. Each task has a priority level (1–5, where 5 is the highest) and a document size in KB. The printer can only process one task at a time. Write a function that rearranges the print queue such that:

1. Higher priority tasks are processed first.
2. If priorities are equal, smaller documents are processed first (to optimize printing time).
3. If both priority and size are equal, maintain the original order.

Return the sequence of task IDs in their final processing order.

### Example 2.1

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

### Example 2.2

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

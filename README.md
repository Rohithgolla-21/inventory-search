# Inventory Search Project

## 📌 Overview
This project is a simple inventory search system where users can filter products based on name, category, and price range.

---

## 🚀 Features
- Search by product name (case-insensitive)
- Filter by category
- Filter by price range (min & max)
- Combine multiple filters
- Handles edge cases (invalid price, no results)

---

## ⚙️ Tech Stack
- Frontend: HTML, JavaScript
- Backend: Node.js, Express
- Data: In-memory array

---

## 🔍 Search Logic
The search API works by applying filters step-by-step:

1. Start with all inventory data  
2. Apply product name filter (`q`) using case-insensitive matching  
3. Apply category filter  
4. Apply minimum and maximum price filters  

Each filter narrows down the results.

---

## ⚠️ Edge Cases Handled
- Empty search → returns all products  
- Invalid price range → returns error  
- No matching results → shows “No results found”  

---

## 📈 Performance Improvement
For large datasets:
- Use database instead of in-memory array  
- Add indexing on product name, category, and price  
- Implement pagination  

---

## ▶️ How to Run

### Backend
1. Open terminal
2. Run:

### Frontend
1. Open `index.html` in browser
2. Use search filters

---

## 💡 Future Improvements
- Add live search (auto search while typing)
- Add sorting (price low to high)
- Use database (MongoDB / SQL)

---
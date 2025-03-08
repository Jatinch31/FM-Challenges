# FM-Challenge - Web Development

- **Name**: Jatin
- **Student Number**: 041122970
- **GitHub Username**: Jatinch31
- Challenge Name- To-Do List app
Here are some **challenges** you faced while developing your **To-Do List app** and their solutions. 
---

## **Challenges Faced & Solutions**

### **1. Buttons Not Working**
- **Problem:** Initially, the ✔ (complete) and ✖ (delete) buttons did not respond when clicked.
- **Reason:** Event listeners were not properly attached to dynamically created elements.
- **Solution:** Used `addEventListener` inside `renderTasks()` instead of `onclick` in HTML.

### **2. Tasks Not Updating Properly**
- **Problem:** When adding, deleting, or marking tasks as completed, the UI was not updating.
- **Reason:** The task list (`tasks`) was modifying the data but not re-rendering the UI.
- **Solution:** Called `renderTasks()` after every action to reflect changes.

### **3. Filtering (All, Active, Completed) Not Working**
- **Problem:** Clicking "Active" or "Completed" didn't show the correct tasks.
- **Reason:** The filtering logic was not properly handling completed and active tasks.
- **Solution:** Used `filter()` method inside `renderTasks()` to display tasks based on status.

### **4. Clearing Completed Tasks**
- **Problem:** Clicking "Clear Completed" button was not removing completed tasks.
- **Reason:** The code didn't correctly filter out completed tasks from the `tasks` array.
- **Solution:** Used `tasks = tasks.filter(task => !task.completed);` and re-rendered the UI.

### **5. Pressing Enter Key Not Adding Task**
- **Problem:** Users had to manually click the "Add" button to add a task.
- **Reason:** No event listener was set up for the Enter key.
- **Solution:** Added an event listener for `keypress` to detect when the Enter key (`e.key === "Enter"`) is pressed.

---

## **Final Thoughts**
These challenges helped improve JavaScript skills, especially in **event handling, dynamic UI updates, and state management**. The fixes ensured that the To-Do list works **smoothly and efficiently**.

---

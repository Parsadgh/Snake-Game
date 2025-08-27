# 🐍 Snake Game

A classic **Snake game** built with **HTML, CSS, and pure JavaScript (no Canvas, no frameworks)**.  
The snake moves continuously, grows when it eats apples, and wraps around the edges.

---

## 🚀 Demo
👉 [Live Demo](https://parsadgh.github.io/Snake-Game/)  

---

## ✨ Features
- 🎮 Control with **W A S D** keys  
- 🔁 Edge wrapping (goes through walls)  
- 🍎 Apples spawn randomly (never on the snake’s body)  
- ➕ Snake grows longer when it eats an apple  
- ⚡ Simple & lightweight DOM-based rendering  
- 📱 Works directly in any modern browser  

---

## 🛠 How it Works
- The board is a **20×20 CSS Grid** of cells  
- The snake is stored as an array of `{x, y}` segments  
- Each game tick:  
  - A new head is added at the front  
  - If no apple is eaten, the tail is removed → length stays the same  
  - If apple is eaten, tail is kept → length increases  
- Apples respawn in random safe positions  

---

## 🔗 Connect with me
- [GitHub](https://github.com/Parsadgh)  
- [Instagram](https://instagram.com/parsa.sdgh.dev)  
- [LinkedIn](https://www.linkedin.com/in/parsa-sadegh-440a572a2)  

---

💡 Built with ❤️ by [Parsa Sadegh](https://github.com/Parsadgh)

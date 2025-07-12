# ✍️ Blog-Creator Website

A fully functional and stylish frontend-only blog creator and viewer, built using **HTML**, **CSS**, and **JavaScript**. It uses `localStorage` to persist data in the browser — no backend required.

---

## 🔥 Features

- Create new blog posts
- View all blog posts on homepage
- Read full blog post on a separate page
- View only your blogs
- Delete individual blogs
- Delete all blogs not authored by you
- Auto-loads 3 beautiful sample blogs on first use
- Glassmorphism & dark-themed UI for a modern look
- Responsive layout for all devices

---

## 📁 Project Structure

blog-creator/
├── index.html # Homepage showing all blogs
├── create.html # Form to write new blog
├── view.html # View a single full blog
├── myblogs.html # Shows only current user's blogs
├── styles/
│ └── style.css # Full custom styling (dark + glass)
└── scripts/
├── main.js # Logic for homepage
├── create.js # Blog creation logic
├── view.js # View blog by ID
└── myblogs.js # Shows & deletes user blogs

---

## ⚙️ How It Works

- Blog data is stored in the browser using `localStorage`
- The blog viewer (`view.html`) loads content via query string ID
- The author's name is stored in `localStorage` when a blog is created
- Only blogs with matching author names are shown in `myblogs.html`
- Sample blogs load only once when the app runs the first time

---

## 🚀 Getting Started

1. Clone the repository or download the files
2. Open `index.html` in your browser
3. Start writing and viewing blogs — everything works in-browser!

---

## ✅ Requirements

- Modern web browser (Chrome, Edge, Firefox, etc.)
- No server or database needed

---

## 🧑‍💻 Author

**Neeraj Devagiri**  
CSE Student @ NIT Delhi  
Frontend & Full Stack Developer

---

## 📄 License

This project is open-source and free to use for learning or inspiration.
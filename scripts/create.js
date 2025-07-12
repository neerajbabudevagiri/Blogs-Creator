const form = document.getElementById('blogForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !author || !content) return;

  const blog = {
    title,
    author,
    content,
    date: new Date().toLocaleString()
  };

  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  blogs.push(blog);
  localStorage.setItem('blogs', JSON.stringify(blogs));

  window.location.href = 'index.html';
});

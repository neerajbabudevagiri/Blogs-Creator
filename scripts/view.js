const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

if (id !== null && blogs[id]) {
  const blog = blogs[id];
  document.getElementById('blog-title').textContent = blog.title;
  document.getElementById('blog-author-date').textContent = `By ${blog.author} on ${blog.date}`;
  document.getElementById('blog-content').textContent = blog.content;
} else {
  document.getElementById('blog-title').textContent = 'Blog not found';
  document.getElementById('blog-author-date').textContent = '';
  document.getElementById('blog-content').textContent = '';
}

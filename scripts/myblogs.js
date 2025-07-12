const blogList = document.getElementById('my-blog-list');
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
const currentUser = localStorage.getItem("currentUser") || "Neeraj Devagiri";

blogs.forEach((blog, index) => {
  if (blog.author === currentUser) {
    const card = document.createElement('div');
    card.className = 'blog-card';

    const title = document.createElement('h3');
    title.textContent = blog.title;

    const author = document.createElement('p');
    author.textContent = `By ${blog.author} on ${blog.date}`;

    const preview = document.createElement('p');
    preview.textContent = blog.content.substring(0, 200) + '...';

    const readLink = document.createElement('a');
    readLink.href = `view.html?id=${index}`;
    readLink.textContent = 'Read More';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '15px';
    deleteBtn.style.backgroundColor = '#e53935';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.padding = '8px 12px';
    deleteBtn.style.borderRadius = '6px';
    deleteBtn.style.cursor = 'pointer';

    deleteBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this blog?')) {
        blogs.splice(index, 1);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        location.reload();
      }
    });

    const actions = document.createElement('div');
    actions.appendChild(readLink);
    actions.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(preview);
    card.appendChild(actions);

    blogList.appendChild(card);
  }
});

document.getElementById("delete-others").addEventListener("click", () => {
  const confirmDelete = confirm("Are you sure you want to delete all blogs except yours?");
  if (!confirmDelete) return;

  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const myBlogs = blogs.filter(blog => blog.author === currentUser);
  localStorage.setItem("blogs", JSON.stringify(myBlogs));
  location.reload();
});

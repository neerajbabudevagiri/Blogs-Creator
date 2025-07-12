if (!localStorage.getItem('blogs')) {
  const sampleBlogs = [
    {
      title: "The Future of Web Development",
      author: "Neeraj Devagiri",
      content: "Web development is evolving rapidly with frameworks like React, Vue, and Svelte. Modern developers now focus on performance, SEO, and clean UI/UX. Static site generation, serverless functions, and AI integrations are becoming part of the stack.",
      date: new Date().toLocaleString()
    },
    {
      title: "Mastering JavaScript in 30 Days",
      author: "CodeWithNeeraj",
      content: "Learning JavaScript isn't just about memorizing syntax. Build projects, understand closures, master the DOM, and learn async programming. Daily practice and reading the documentation is key to becoming proficient.",
      date: new Date().toLocaleString()
    },
    {
      title: "Why Everyone Loves Dark Mode",
      author: "Neeraj Babu",
      content: "Dark mode reduces eye strain, saves battery, and just looks cool. It's now a standard in UX design. With CSS media queries, implementing it has never been easier. Let users toggle themes based on preference.",
      date: new Date().toLocaleString()
    }
  ];
  localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
}

const blogList = document.getElementById('blog-list');
const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

blogs.reverse().forEach((blog, index) => {
  const card = document.createElement('div');
  card.className = 'blog-card';

  const title = document.createElement('h3');
  title.textContent = blog.title;

  const author = document.createElement('p');
  author.textContent = `By ${blog.author} on ${blog.date}`;

  const preview = document.createElement('p');
  preview.textContent = blog.content.length > 200 
    ? blog.content.substring(0, 200) + '...'
    : blog.content;

  const link = document.createElement('a');
  link.href = `view.html?id=${blogs.length - 1 - index}`;
  link.textContent = 'Read More';

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(preview);
  card.appendChild(link);

  blogList.appendChild(card);
});

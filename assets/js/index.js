const renderBlogs = async () => {
    let url = "http://localhost:3000/posts";
    const res = await fetch(url);
    const blogs = await res.json();
    console.log(blogs)
}

window.addEventListener('DOMContentLoaded', () => renderBlogs())
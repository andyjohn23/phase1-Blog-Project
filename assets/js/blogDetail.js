const id = new URLSearchParams(window.location.search).get('id');
const containerBlog = document.querySelector('.read-modal');
const deleteButton = document.querySelector('.delete-blog');

const renderBlogDetail = async () => {
    const response = await fetch("http://localhost:3000/posts/" + id);
    const blog = await response.json();

    const blogDetailTemplate =
        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${blog.title}</h5>
                <hr />
                <p class="card-text">${blog.body}</p>
                <div class="card-buttons">
                    <a href="/"><i class="material-icons delete-blog" title="Back">arrow_back</i></a>
                    <i class="material-icons delete-blog" title="Delete">delete</i>
                </div>
            </div>
          </div>`;
    containerBlog.innerHTML = blogDetailTemplate;
}

window.addEventListener('DOMContentLoaded', () => renderBlogDetail())


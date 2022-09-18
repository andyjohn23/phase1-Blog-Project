const id = new URLSearchParams(window.location.search).get('id');
const containerBlog = document.querySelector('.read-modal');
const deleteButton = document.querySelector('.delete-blog, .read-modal');

const renderBlogDetail = async () => {
    const response = await fetch("https://phase1-blog.herokuapp.com/posts/" + id);
    const blog = await response.json();

    const blogDetailTemplate =
        `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${blog.title}</h5>
                <hr />
                <p class="card-text">${blog.body}</p>
                <div class="card-buttons">
                    <i class="material-icons delete-blog" title="Delete">delete</i>
                </div>
            </div>
          </div>`;
    containerBlog.innerHTML = blogDetailTemplate;

    deleteButton.addEventListener('click', async (e) => {
        const response = await fetch("https://phase1-blog.herokuapp.com/posts/" + id, {
            method: "DELETE"
        });
        window.location.replace('/');
    })
}

window.addEventListener('DOMContentLoaded', () => renderBlogDetail())


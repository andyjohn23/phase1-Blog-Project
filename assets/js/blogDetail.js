const id = new URLSearchParams(window.location.search).get('id');
const containerBlog = document.querySelector('.read-modal');
const deleteButton = document.querySelector('.delete-blog');

const renderBlogDetail = async () => {
    const response = await fetch("http://localhost:3000/posts/" + id);
    const blog = await response.json();

    const blogDetailTemplate =
        `<div class="modal fade" id="readBlog" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-labelledby="image" aria-hidden="true">
    <div class="modal-dialog">
        <div class="container modal-content read-modal-content">
            <div class="modal-header">
                <h1>${blog.title}</h1>
                <i data-dismiss="modal" class="material-icons">clear</i>
            </div>

            <div class="modal-body">${blog.body}</div>
            <div class="modal-footer ">
                <i class="material-icons delete-blog">delete</i>
            </div>
        </div>
    </div>
</div>`;
    containerBlog.innerHTML = blogDetailTemplate;
}

window.addEventListener('DOMContentLoaded', () => renderBlogDetail())


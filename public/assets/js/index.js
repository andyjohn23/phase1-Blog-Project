const container = document.querySelector('.row')
const renderBlogs = async () => {
    let url = "https://phase1-blog.herokuapp.com/posts?_sort=id&_order=desc";
    const res = await fetch(url);
    const blogs = await res.json();
    console.log(blogs)

    let blogsTemplate = '';
    blogs.forEach(blog => {
        blogsTemplate += 
        `<div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    ${blog.title}
                </div>
                <div class="card-body">
                    <p class="card-text">${blog.body.slice(0, 150)}</p>
                    <div class="card-buttons">
                        <a href="/blogDetail.html?id=${blog.id}/" class="btn btn-primary">Read more</a>
                        <div class="likeButton">
                            <i class="material-icons outlined">thumb_up</i>
                            <span>${blog.likes}</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>`;
    })
    container.innerHTML = blogsTemplate;
}

window.addEventListener('DOMContentLoaded', () => renderBlogs())
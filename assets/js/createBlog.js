const form = document.querySelector('form');

const createBlog = async (e) => {
    e.preventDefault();

    const blogBody = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(blogBody),
        headers: {'Content-Type': 'application/json'}
    })

    window.location.replace('/');
}


form.addEventListener('submit', createBlog);
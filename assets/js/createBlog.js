const form = document.querySelector('form');

const createBlog = async (e) => {
    e.preventDefault();

    const blogBody = {
        title: form.title.value,
        content: form.content.value,
        likes: 0
    }

    await fetch('https://expressify-sinatra.herokuapp.com/posts', {
        method: 'POST',
        body: JSON.stringify(blogBody),
        headers: { 'Content-Type': 'application/json' }
    })

    // Swal.fire(
    //     'Blog Posted Successfully!'
    // )

    window.location.replace('/');
}


form.addEventListener('submit', createBlog);
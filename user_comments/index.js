document.getElementById('addComment').addEventListener('click', function() {
    const newComment = document.getElementById('newComment').value;
    if (newComment) {
        const commentId = new Date().getTime();
        const commentHtml = `
            <div class="comment" data-id="${commentId}">
                <img src="https://via.placeholder.com/40" alt="User">
                <div class="comment-text">${newComment}</div>
                <input type="text" class="form-control comment-input">
                <button class="btn btn-sm btn-primary edit-comment">Edit</button>
                <button class="btn btn-sm btn-danger delete-comment">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6L5 6 21 6 21 8 19.688 8 18.878 19.875C18.773 21.14 17.644 22 16.367 22L7.631 22C6.355 22 5.227 21.14 5.122 19.875L4.312 8 3 8 3 6ZM7 19.986C7 20.544 7.477 21 8.049 21L15.949 21C16.523 21 17 20.544 17 19.986L17.812 8 6.188 8 7 19.986ZM10 10 10 18 11 18 11 10 10 10ZM13 10 13 18 14 18 14 10 13 10ZM8 4L9 3 15 3 16 4 20 4 20 5 4 5 4 4 8 4Z"/></svg>
                </button>
            </div>
        `;
        document.getElementById('comments').insertAdjacentHTML('beforeend', commentHtml);
        document.getElementById('newComment').value = '';
    }
});

document.getElementById('comments').addEventListener('click', function(event) {
    if (event.target.closest('.edit-comment')) {
        const commentDiv = event.target.closest('.comment');
        const commentTextDiv = commentDiv.querySelector('.comment-text');
        const commentInput = commentDiv.querySelector('.comment-input');
        
        commentTextDiv.style.display = 'none';
        commentInput.style.display = 'block';
        commentInput.value = commentTextDiv.innerText;
        commentInput.focus();

        commentInput.addEventListener('blur', saveComment);
        commentInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                saveComment();
            }
        });

        function saveComment() {
            commentTextDiv.innerText = commentInput.value;
            commentTextDiv.style.display = 'block';
            commentInput.style.display = 'none';
            commentInput.removeEventListener('blur', saveComment);
            commentInput.removeEventListener('keydown', saveComment);
        }
    }

    if (event.target.closest('.delete-comment')) {
        const commentDiv = event.target.closest('.comment');
        commentDiv.remove();
    }
});

document.getElementById('saveEvent').addEventListener('click', function() {
    const eventTitle = document.getElementById('eventTitle').value;
    const eventDateTime = document.getElementById('eventDateTime').value;
    const assignTo = document.getElementById('assignTo').value;
    const eventNote = document.getElementById('eventNote').value;
    const eventStatus = document.getElementById('eventStatus').value;

    const eventData = {
        title: eventTitle,
        dateTime: eventDateTime,
        assignTo: assignTo,
        note: eventNote,
        status: eventStatus
    };

    console.log('Event Data:', eventData);
});
const Renderer = function () {
    const renderPosts = function (posts) {
        $('#posts').empty()
        for (let ps in posts) {
            const divToAdd = `<div class="post" data-id="${posts[ps].id}"><h3>${posts[ps].text}</h3></div>`
            const commentInput = `<input class="inputComment">`
            const commentButton = `<button class="commentsBtn">comment</button>`
            const deleteButton = `<button class="delete" value="delete">delete</button>`
            $("#posts").append(divToAdd);
            $(`div[data-id="${posts[ps].id}"]`).append(deleteButton)
            $(`div[data-id="${posts[ps].id}"]`).append(commentButton)
            $(`div[data-id="${posts[ps].id}"]`).append(commentInput)
            for (let com of posts[ps].comments) {
                let commentDiv = $(`<div class="comments-container"></div>`)
                const divToComment = `<div class="comments" data-comment="${com.id}">${com.text}</div>`
                const deleteComment = `<div class="delete-comment">X</div>`
                commentDiv.append(divToComment)
                commentDiv.append(deleteComment)
                $(`div[data-id="${posts[ps].id}"]`).append(commentDiv)
            }
        }
    }
    return {
        renderPosts
    }
}
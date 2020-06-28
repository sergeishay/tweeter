const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#post").on("click", function () {
    const inputText = $("#input").val()
    const letSomething = tweeter.addPost(inputText)
    renderer.renderPosts(letSomething)
})

$("#posts").on("click" , ".delete", function (){
   const deleteID = $(this).closest(".post").attr("data-id")
   const deleteSome=tweeter.removePost(deleteID)
   renderer.renderPosts(deleteSome)
})

$("#posts").on("click" , ".commentsBtn" ,  function (){
    const addInput = $(".inputComment").val();
    const postId = $(this).closest(".post").data().id
    const addComments = tweeter.addComment(postId , addInput)
    renderer.renderPosts(addComments)
})

$("#posts").on("click" , ".delete-comment" ,  function (){
    const deleteCommentId = $(this).closest($(".comments-container")).find(".comments").data().comment
    const postId = $(this).closest(".post").attr("data-id")
    const deleteComment = tweeter.removeComment(postId , deleteCommentId)
    renderer.renderPosts(deleteComment)
})
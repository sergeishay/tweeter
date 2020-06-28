const Tweeter = function () {

    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." },
                { id: "c7", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = posts.length;
    let commentIdCounter = 0;

    const getPosts = function () {
        return posts
    }
    //
    const addPost = (addP) => {
        postIdCounter += 1;
        let idToPush = "p" + postIdCounter;
        posts.push({
            text: addP,
            id: idToPush,
            comments: []
        })
        return posts
    }

    const removePost = (postID) => {
        for (let i in posts) {
            if (posts[i].id === postID) {
                posts.splice(i, 1)
            }
        }
        postIdCounter -= 1
        return posts
    }

    const addComment = (postID, text) => {
        for (let i in posts) {
            if (posts[i].id === postID) {
                commentIdCounter += posts[i].comments.length
                commentIdCounter += 1;
                let comToPush = "c" + commentIdCounter;
                posts[i].comments.push({
                    id: comToPush,
                    text: text
                });
                commentIdCounter = 0;
            }
        } return posts
    }

    const removeComment = (postID, commentID) => {
        for (let p in posts) {
            for (let c in posts[p].comments) {
                if (posts[p].comments[c].id === commentID && posts[p].id === postID) {
                    commentIdCounter = posts[p].comments.length;
                    console.log(commentIdCounter)
                    posts[p].comments.splice(c, 1)
                    commentIdCounter-=1 ; 
                }
                
            }
        } return posts
    }

    return {
        postIdCounter,
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}
const tweet = Tweeter()

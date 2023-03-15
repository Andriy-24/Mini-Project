let url = new URL(location.href)
let urlJson = url.searchParams.get('postId')
let postId = JSON.parse(urlJson)
fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
.then(value => value.json())
.then(posts => {
    let divPost = document.getElementById('divPost')
    let divUserId = document.createElement('div')
    divUserId.innerText = 'UserId: ' +posts.userId
    let divId = document.createElement('div')
    divId.innerText = 'Id: ' +posts.id
    let divTitle = document.createElement('div')
    divTitle.innerText = 'Title: ' +posts.title
    let divBody = document.createElement('div')
    divBody.innerText = 'Body: ' +posts.body
    divPost.append(divUserId,divId,divTitle,divBody)
})
fetch('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments')
.then(value => value.json())
.then(comments => {
    let divCommentMain = document.getElementById('divCommentMain')
    for (const comment of comments) {
        let divComment = document.createElement('div')
        divComment.classList.add('divComment')
        let divPostId = document.createElement('div')
        divPostId.innerText = 'PostId: ' + comment.postId
        let divId = document.createElement('div')
        divId.innerText = 'Id: ' + comment.id
        let divName = document.createElement('div')
        divName.innerText = 'Name: ' + comment.name
        let divEmail = document.createElement('div')
        divEmail.innerText = 'Email: ' + comment.email
        let divBody = document.createElement('div')
        divBody.innerText = `Body: 
        ${comment.body}`
        divComment.append(divPostId,divId,divName,divBody)
        divCommentMain.appendChild(divComment)
    }
})
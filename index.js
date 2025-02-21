const heart = "images/icon-heart.png"
const comment = "images/icon-comment.png"
const dm = "images/icon-dm.png"

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },

    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },

    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPosts() {
    const postContainerEl = document.getElementById("postContainer")

        const postHtml =  posts.map(post =>
        `
            <div class="post">
                <div class="head">
                    <img src="${post.avatar}" alt="Smiling potriat of courbet" class="head-avatar">
                    <div class="user-dets">
                        <p class="name">${post.name}</p>
                        <p>${post.location}</p>
                    </div>
                </div>
                <img src="${post.post}" alt="selfie potriat of courbet with hands on the head and eyes wide open" class="post-img">
                <div class="post-interact">
                    <div class="engage-container">
                        <img src="${heart}" alt="" class="engage heart" id="heart-el">
                        <img src="${comment}" alt="" class="engage comment">
                        <img src="${dm}" alt="" class="engage dm">
                    </div>
                    <div class="para">
                        <p class="like-count">${post.likes} likes</p>
                        <p><span>${post.username}</span> ${post.comment}</p>
                    </div>
                </div>
            </div>
        </div>

        `).join("")

        postContainerEl.innerHTML = postHtml
    }

renderPosts()

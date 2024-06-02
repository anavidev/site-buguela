const USERID = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
}

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
const notify = document.querySelector(".notifyinput");

    userComment.addEventListener("input", e => {
        if(!userComment.value) {
            publishBtn.setAttribute("disabled", "disabled");
            publishBtn.classList.remove("abled")
        }else {
            publishBtn.removeAttribute("disabled");
            publishBtn.classList.add("abled")
        }
    })

    function addPost() {
        if(!userComment.value) return;
        USERID.name = userName.value;
        if(USERID.name === "Anônimo") {
            USERID.identity = false;
            USERID.image = "img/anonimo.png"
        }else {
            USERID.identity = true;
            USERID.image = "img/user_pic.png"
        }

        USERID.message = userComment.value;
        USERID.date = new Date().toLocaleString();
        let published = 
        `<div class="parents">
            <img src="${USERID.image}">
            <div>
                <h1>${USERID.name}</h1>
                <p>${USERID.message}</p>
                <div class="engagements"><img src="img/icon_like.png" id="like"><img src="img/icon_dislike.png" id="deslike"><img src="img/icon_share.png" alt=""></div>
                <span class="date">${USERID.date}</span>
            </div>    
        </div>`

        comments.innerHTML += published;
        userComment.value = "";
        publishBtn.classList.remove("abled")

        let commentsNum = document.querySelectorAll(".parents").length;
        document.getElementById("comment").textContent = commentsNum;

    }

    publishBtn.addEventListener("click", addPost);
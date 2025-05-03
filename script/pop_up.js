function msg_box(id, title, text, call_back){
    let msg_box_element = document.createElement("div");
    msg_box_element.classList.add("pop_up");
    msg_box_element.id = id;

    msg_box_element.innerHTML = `
        
        <div class="pop_up_bg">
            <div class="pop_up_window">
                <p class="msg_title">${title}</p>
                <p class="msg_text"></p>
                <p class="msg_ok">好</p>
            </div>
        </div>
    `
    let msg_text = msg_box_element.getElementsByClassName("msg_text")[0];
    for (let sentence of text.split("\n")){
        let sentence_element = document.createElement("p");
        sentence_element.innerHTML = sentence;
        msg_text.appendChild(sentence_element);
    }

    let msg_ok = msg_box_element.getElementsByClassName("msg_ok")[0];
    msg_ok.addEventListener("click", call_back);
    msg_box_element.addEventListener("click", (event) =>{
        if (event.target === msg_ok){
            event.currentTarget.classList.add("hidden");
            localStorage.setItem("is_announce", ANNOUNCEMENT_VERSION)
        }
    })

    document.getElementById("main_content").appendChild(msg_box_element);
}
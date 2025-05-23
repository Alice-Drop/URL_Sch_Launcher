const DEFAULT_APP_ICON = "/img/default_app_icon2.png";


const AppKeys = {
    NAME: "name",
    ICON: "icon",
    TAGS: "tags",
    PAGES: "pages",
    PLATFORM: "supported_platforms"
}

const PageKeys = {
    NAME: "page_name",
    URL: "page_url",
    SHORTCUTS: "shortcuts_url"
}

const SupportedPlatform = {
    ANDROID: "android",
    IOS:  "ios",
    PC: "pc",
    SHUT_DOWN: "shut_down"
}


// 这里面的基本都是生成对应的空间而已。因为，因为因为，意
function factory_page_item(page_data){

    let widget = document.createElement("div");
    widget.classList.add("page_item");

    //console.log(page_data)
    let shortcut = page_data[PageKeys.SHORTCUTS];

    widget.innerHTML = `
                        <div class="page_info">
                            <div class="page_title">${safe_get_language_content(page_data[PageKeys.NAME])}</div>
                            <div class="page_url_content">${page_data[PageKeys.URL]}</div>
                        </div>
                        <div class="url_btn_group">
                            <button class="btn_create_shortcut elegant_btn">
                                <span>添加到快捷指令</span>
                                <img src="/img/shortcut.svg" alt="icon-shortcut">
                            </button>
                            <button class="btn_open_url elegant_btn" >
                                <img src="/img/start_v2.svg" alt="icon-launch">
                                <span>启动</span>
                            </button>
                        </div>
    `
    widget.classList.add("folded"); // 添加这个，用来默认让应用的url折叠

    let btn_create_shortcut = widget.getElementsByClassName("btn_create_shortcut")[0]
    if (shortcut){
        btn_create_shortcut.addEventListener("click", function () {
            window.open(shortcut)
        });
    }else{
        btn_create_shortcut.classList.add("hidden");
    }

    widget.addEventListener("click", (event)=>{
        let self = event.currentTarget;
        let clicked_part = event.target;

        // 点击里面靠上的那个信息栏就会折叠/取消折叠
        let page_info = widget.getElementsByClassName("page_info")[0];
        if (page_info.contains(clicked_part)){
            if (self.classList.contains("folded")) {
                self.classList.remove("folded");
            }else {
                self.classList.add("folded");
            }
        }

    })

    widget.getElementsByClassName("btn_open_url")[0].addEventListener("click", function(){
        window.open(page_data[PageKeys.URL], "_self");
    })

    return widget;

}

function factory_compatibility_note(supported_platform){
    let widget = document.createElement("div");
    widget.classList.add("compilability_note");
    widget.innerHTML = `
        <img class="icon_comp_pc" src="/img/complicated_with_PC.svg" alt="icon-complicated_with_pc" />
        <img class="icon_comp_ios" src="/img/apple.svg" alt="icon-complicated_with_ios" />
        <img class="icon_comp_android" src="/img/android.svg" alt="icon-complicated_with_android" />
        <img class="icon_comp_checked" src="/img/complicated.svg" alt="icon-compilability" />
    `
    if (supported_platform.length > 0){
        if (!supported_platform.includes(SupportedPlatform.PC)){
            widget.getElementsByClassName("icon_comp_pc")[0].classList.add("hidden");
        }
        if (!supported_platform.includes(SupportedPlatform.IOS)){
            widget.getElementsByClassName("icon_comp_ios")[0].classList.add("hidden");
        }
        if (!supported_platform.includes(SupportedPlatform.ANDROID)){
            widget.getElementsByClassName("icon_comp_android")[0].classList.add("hidden");
        }

        if (supported_platform.includes(SupportedPlatform.SHUT_DOWN)){
            widget.getElementsByClassName("icon_comp_checked")[0].setAttribute("src", "./img/shut_down.svg")
            widget.getElementsByClassName("icon_comp_checked")[0].classList.remove("hidden")
            widget.innerHTML += "软件已被关闭"
        }else{
            widget.getElementsByClassName("icon_comp_checked")[0].classList.add("hidden")  // 新版显示方案，那个勾勾已经包括在各个平台里面了
        }

    }else {
        //console.log("内容为空")
        widget.getElementsByClassName("icon_comp_pc")[0].classList.add("hidden");
        widget.getElementsByClassName("icon_comp_ios")[0].classList.add("hidden");
        widget.getElementsByClassName("icon_comp_android")[0].classList.add("hidden");

        widget.classList.add("hidden");
    }
    return widget
}

function factory_app_item(app_data){
    let pages = app_data[AppKeys.PAGES];
    let raw_tags_data = app_data[AppKeys.TAGS];
    let tags = [];
    //console.log(app_data)



    if (raw_tags_data.length > 0){
        for (let tag_code of raw_tags_data){
            if (Object.keys(TAGS).includes(tag_code)){
                // 如果是一个标签
                tags.push(safe_get_language_content(TAGS[tag_code].name));

            }
        }
    }

    let name = safe_get_language_content(app_data[AppKeys.NAME]);
    let supported_platforms = app_data[AppKeys.PLATFORM];
    //console.log("支持的：")
    //console.log(supported_platforms);

    let icon = app_data[AppKeys.ICON];
    if (!icon){
        icon = DEFAULT_APP_ICON;
    }

    let widget = document.createElement("div");
    widget.classList.add("app_item");
    widget.innerHTML = `
                    <div class="app_item_info_placer">
                        <img src="${icon}" alt="app_icon" class="app_icon"/>
                        <div class="app_item_title_placer">
                            <span class="app_title">
                                ${name}
                                
                            </span>
                            
                            <span class="tags_holder"></span>
                        </div>
                    </div>
                        
                    <div class="pages_container"></div>
    `
    // 添加应用标签
    let tags_holder = widget.getElementsByClassName("tags_holder")[0];
    for (let tag of tags){
        let tag_element = document.createElement("span");
        tag_element.innerText = tag;
        tag_element.classList.add("tag_element");
        tags_holder.appendChild(tag_element);
    }

    // 添加各个url scheme
    let pages_container = widget.getElementsByClassName("pages_container")[0];
    for (let page_data of pages){
        pages_container.appendChild(factory_page_item(page_data));
    }

    // 添加兼容性标志
    let app_title = widget.getElementsByClassName("app_title")[0];
    app_title.appendChild(factory_compatibility_note(supported_platforms))


    widget.classList.add("folded"); // 添加这个，用来默认让应用的url折叠
    widget.addEventListener("click", (event)=>{
        let self = event.currentTarget;
        let clicked_part = event.target;
        let app_item_title_placer = widget.getElementsByClassName("app_item_info_placer")[0];

        if (app_item_title_placer.contains(clicked_part)){
            // 如果点击的是标题那部分显示图标、名称、标签的部分，就作为折叠app识别
            if (self.classList.contains("folded")) {
                // 处在折叠，则变为展开
                self.classList.remove("folded");

                // 还要把自己第一个page_item展开
                self.querySelector(".page_item").classList.remove("folded");

            }else {
                self.classList.add("folded");
            }
        }else if (clicked_part.closest(".page_info")){
            if (clicked_part.closest(".page_info").contains(clicked_part)) { // todo: 这里如果点击的不是这两种，会报错。
                // 如果点击的是一个page的信息。如果是已经折叠，那么就是会被点开（由它自己的事件处理器实现），
                let this_page_item = clicked_part.closest(".page_item");
                // 不管是不是正在展开，我们把除它之外的都折叠起来准没错。不要判断是否展开，因为在正在展开的过程中判断线程不安全。
                for (let page_info_element of widget.querySelectorAll(".page_item")) {
                    if (page_info_element.innerHTML !== this_page_item.innerHTML) {
                        page_info_element.classList.add("folded");
                    }
                }
            }
        }
    })
    return widget;

}
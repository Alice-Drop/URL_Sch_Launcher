const DEFAULT_APP_ICON = "/img/default_app_icon2.png";
const SYSTEM =  {
    language: "zh-CN"
}

const AppKeys = {
    NAME: "name",
    ICON: "icon",
    TAGS: "tags",
    PAGES: "pages",
    PLATFORM: "supported_platform"
}

const PageKeys = {
    NAME: "page_name",
    URL: "page_url"
}


// 这里面的基本都是生成对应的空间而已。因为，因为因为，意
function factory_page_item(page_data){

    let widget = document.createElement("div");
    widget.classList.add("page_item");

    widget.innerHTML = `
                        <div class="page_info">
                            <div class="page_title">${page_data[PageKeys.NAME][SYSTEM.language]}</div>
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
    widget.addEventListener("click", (event)=>{
        let self = event.currentTarget;
        let clicked_part = event.target;
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

function factory_app_item(app_data){
    let pages = app_data[AppKeys.PAGES];
    let tags = app_data[AppKeys.TAGS];
    // TODO: 标签忘记做国际化了

    let name = app_data[AppKeys.NAME][SYSTEM.language];
    console.log(name)

    let icon = app_data[AppKeys.ICON];
    if (!icon){
        icon = DEFAULT_APP_ICON;
    }

    let widget = document.createElement("div");
    widget.classList.add("app_item");
    widget.innerHTML = `
                    <div class="app_item_title_placer">
                        <img src="${icon}" alt="app_icon" class="app_icon"/>
                        <div style="display: inline-flex;flex-direction: column;justify-content: center">
                            <span class="app_title">${name}</span>
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

    widget.classList.add("folded"); // 添加这个，用来默认让应用的url折叠
    widget.addEventListener("click", (event)=>{
        let self = event.currentTarget;
        let clicked_part = event.target;
        let app_item_title_placer = widget.getElementsByClassName("app_item_title_placer")[0];
        if (app_item_title_placer.contains(clicked_part)){
            if (self.classList.contains("folded")) {
                self.classList.remove("folded");
            }else {
                self.classList.add("folded");
            }
        }

    })

    return widget;

}
let TAGS = {};
let URL_SCH_DATA = {};

const LINKS = {
   URL_SCH: "/script/url_schemes.json",
   TAGS: "/script/tags_data.json"
}

const ANNOUNCEMENT_VERSION = 202505022317;  // 用来识别用户看过的公告版本是否低于当前公告版本

async function init(){
    if (!is_announce_checked()){
        user_guide();
    }
    await load_tags()
      .then((tags) => {
         TAGS = tags;
      })
       .catch((error)=>{
           console.error(error);
       });
    console.log("tags ok")
    await load_urls()
      .then((urls) => {
         URL_SCH_DATA = urls;
      });

    console.log("urls ok")
   
    show_all_items();
}

async function load_tags(){
   let response = await fetch(LINKS.TAGS);
   if (!response.ok) {
      throw new Error('Network response was not ok');
   }
   return await response.json();
   
}

async function load_urls() {
   let response = await fetch(LINKS.URL_SCH);
   if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   let url_data = await response.json();

   return url_data;
   
}

function show_all_items() {
    // 用于显示全部数据。
    display_app_item_set(Object.keys(URL_SCH_DATA));
}
function display_app_item_set(app_item_set){
    // 显示指定的app_item。用于显示全部的默认，以及搜索时选择指定部分
    // 传入的是id数组。
    let result_container = document.getElementById('result_container');
    result_container.innerHTML = '';
    for (let id of app_item_set){
        let app = URL_SCH_DATA[id];
        result_container.appendChild(factory_app_item(app));
    }

    unfold_first_item();

}

function unfold_first_item(){
    // 为了用户指引和好看，需要让搜索结果第一个是开启状态
    let first_app_item = document.querySelectorAll(".app_item")[0];
    if (first_app_item){
        first_app_item.getElementsByClassName("app_item_title_placer")[0].click();
        //first_app_item.getElementsByClassName("page_info")[0].click();
    }
}



function test_app_item(){

    let data = URL_SCH_DATA.app_0;

    let result_container = document.getElementById('result_container');
    result_container.innerHTML = "";
    result_container.appendChild(factory_app_item(data));
}

function user_guide(){
    // 为初始使用的用户提供指引
    let title_user_guide = "欢迎使用URL Scheme 快速启动应用 工具！";
    let text_user_guide = `
URL Scheme是一种可以直接跳转到应用里的页面的链接。
比如说，<a class="std_link" href="weixin://">weixin://</a>这个链接可以直接跳转到这台设备上上安装的微信（手机/电脑都可以）。可以点击试试！
利用这个，可以快速打开某个页面，甚至把直接跳转到应用内部的链接放到桌面，用这个链接打开一些应用就不会出现开屏广告。
目前，IOS系统对此的支持较好，部分链接在其它平台会无效。
        `
    msg_box("popup_user_guide", title_user_guide, text_user_guide, user_guide_checked)

}

function user_guide_checked(){
    localStorage.setItem("is_announce", String(ANNOUNCEMENT_VERSION));
}

function is_announce_checked(){
    // 检查用户是否已经阅读了最新版的公告
    let read_announce = Number(localStorage.getItem("is_announce"));
    if (read_announce){
        if (read_announce >= ANNOUNCEMENT_VERSION)
            return true;
    }
    return false;
}

/*  ======== 搜索框管理相关  =========  */
function start_search(){
    let txt_search_word = document.getElementById("txt_search_word");

    let wanted_word = txt_search_word.value;
    if (wanted_word){
        // 只有搜索词有东西才搜索
        display_app_item_set(search_item(wanted_word));
    }
}

function result_unfolding_control(){
    // 在出现点击之后，把result_container里面其他的都折起
    let result_container = document.getElementById('result_container');
    result_container.addEventListener("click", function(event){
        let clicked_part = event.target;
        if (clicked_part.closest(".app_item").contain(clicked_part)){

        }
    })
}
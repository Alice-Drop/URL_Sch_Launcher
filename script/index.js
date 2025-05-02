let TAGS = {};
let URL_SCH_DATA = {};

const LINKS = {
   URL_SCH: "/script/url_schemes.json",
   TAGS: "/script/tags_data.json"
}

async function init(){
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
   let tags_data = await response.json();

   return tags_data;
   
}

async function load_urls() {
   let response = await fetch(LINKS.URL_SCH);
   if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   let url_data = await response.json();

   return url_data;
   
}

function show_all_items(){
    // 用于显示全部数据。
    let result_container = document.getElementById('result_container');
    result_container.innerHTML = '';
    for (let id of Object.keys(URL_SCH_DATA)){
        let app = URL_SCH_DATA[id];
        result_container.appendChild(factory_app_item(app));
    }

}



function test_app_item(){
    /*
    "app_0": {
      "name": {
         "zh-CN": "ios系统基础应用"
      },
      "tags": [],
      "icon": "",
      "pages": [
         {
            "page_name": {
               "zh-CN": "短信"
            },
            "page_url": "sms://"
         },
         {
            "page_name": {
               "zh-CN": "AppStore"
            },
            "page_url": "itms-apps://"
         },
         {
            "page_name": {
               "zh-CN": "电话"
            },
            "page_url": "tel://"
         },
         {
            "page_name": {
               "zh-CN": "备忘录"
            },
            "page_url": "mobilenotes://"
         },
         {
            "page_name": {
               "zh-CN": "E-Mail"
            },
            "page_url": "MESSAGE://"
         }
      ]
   }
    * */
    let data = URL_SCH_DATA.app_0;

    let result_container = document.getElementById('result_container');
    result_container.innerHTML = "";
    result_container.appendChild(factory_app_item(data));
}

function user_guide(){
    // 为初始使用的用户提供指引

}
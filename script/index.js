function init(){
    show_all_items();
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
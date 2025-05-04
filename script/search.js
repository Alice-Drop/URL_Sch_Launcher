const NAME_TO_UUID = {}
const PATH_CACHE = "/script/search_cache.json";

async function load_search_cache(){
    let response = await fetch(PATH_CACHE);
    if (!response.ok) {
        console.log("警告，无法获取到搜索缓存")
    }
    return await response.json();
}

function search_item_with_cache(app_name){
    // 精确搜索，只搜索出一个或0个。注意不能传入空来返回所有。
    if (app_name){
        let names = Object.keys(NAME_TO_UUID);

        if (names.contains(app_name)){
            let UUID = NAME_TO_UUID[app_name];
            return URL_SCH_DATA[UUID];
        }
    }

    return null;

}

function search_item(wanted_word){
    // 依赖缓存的半精确搜索，是contain不是相等
    let cache;
    load_search_cache().then((cache_data)=>{
        cache = cache_data;
    })
    let id_suited = [];
    //let wanted_app_data = [];
    console.log("开始搜索，查找"+wanted_word);
    for (let id of Object.keys(URL_SCH_DATA)){
        //
        if (safe_get_language_content(URL_SCH_DATA[id].name).includes(wanted_word)){
            id_suited.push(id);
            //wanted_app_data.push(URL_SCH_DATA[id]);
        }
    }
    return id_suited;



}

// todo:需要完成模糊搜索
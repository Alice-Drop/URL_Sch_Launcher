function load_items(){
    let txt_search_word = document.getElementById("txt_search_word");

    place_item(get_wanted_item(txt_search_word.value))
}
// todo:需要更新数据格式，把里面的键改成高级封装，包括app_tags和urls

function get_wanted_item(wanted_keyword){
    // 搜索

    let wanted_data = [];
    if (wanted_keyword){
        for (let key of Object.keys(URL_SCH_DATA)){
            if (key.includes(wanted_keyword)){
                wanted_data.push(URL_SCH_DATA.get(key));
            }
        }
    }
    return wanted_data
}

function place_item(data_list){
    // 渲染到网页

}
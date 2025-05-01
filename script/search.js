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

function search_item(app_name){
    // 不依赖缓存的精确搜索
}

// todo:需要完成模糊搜索
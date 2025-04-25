function display_shelf(data, shelf_obj, as_param=""){
    // 把那些文章数据渲染到上面去

    let articles_shelf = shelf_obj;
    console.log(data)
    if (data.length){
        let row = document.createElement("tr");
        articles_shelf.appendChild(row)
        for (let i = 0; i< data.length; i++){

            let item = data[i];
            let cell = shelf_item_factory(item["title"], item["icon"], item["href"], as_param);
            cell.classList.add("article_item")

            row.appendChild(cell)
        }
    }else{
        articles_shelf.appendChild(no_item_msg());
    }
}

function shelf_item_factory(title, img, href, as_param=""){
    // 生成一个文章展示单元的DOM。
    // as_param如果被传入，则是打开as_param这个链接，把href作为参数传递给链接

    if (!img){
        img = DEFAULT_IMG;
    }
    if (as_param){
        href = `${as_param}?doc_href=${href}`;
    }
    let item = document.createElement("td");
    item.innerHTML =  `
        <img src="${img}" />
        <a href="${href}" target="_blank">${title}</a>
        `
    item.addEventListener("click", function(){
        window.open(href, "_blank");
    })
    return item;
}

function no_item_msg(){
    // 如果没有可展示内容，则提示内容为空。

    let content = document.createElement("div");
    content.setAttribute("style", `
        border: 1px solid #ccc;
        border-radius: 15px;
        /*box-shadow: 1px 1px 2px #ccc;  */  
        padding: 45px;

    `);
    let para = document.createElement("p");
    para.innerText = "(´°Δ°`) 没有符合要求的内容"
    content.appendChild(para)


    return content
}
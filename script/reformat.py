import json

DATA_PATH = "./raw_data.json"
OUTPUT_PATH = "./url_schemes.json"


# 原始数据，简略示例，使用时替换为完整 URL_SCH_DATA
def get_current_data():
    with open(DATA_PATH, "r", encoding="utf-8") as data:
        return json.load(data)


# 转换函数
def convert_data(original_data):
    """
    将原始 URL_SCH_DATA 转换为指定格式：
    {
      应用的UUID: {
        "name": 应用名称,
        "tags": [],
        "icon": "",
        "pages":  [{"page_name":页面名1, "page_url": 链接1},
                    {"page_name":页面名2, "page_url": 链接2, ...},
        ]
      },
      ...
    }
    """
    new_data = {}
    
    index = 0
    for key, pages in original_data.items(): # 遍历原始数据
        pages_list = [{page_name: url} for page_name, url in pages.items()]

        new_pages = []
        for page_name, page_url in pages.items():
            new_item = {
                "page_name": {
                    "zh-CN": page_name
                    },
                "page_url": page_url
                }
            new_pages.append(new_item)

        new_data["app_"+ str(index)] = {
            "name": {
                "zh-CN": key
                },
            "tags": [],
            "icon": "",
            "supported_platforms": [],
            "pages": new_pages,

        }
        index += 1
    return new_data


if __name__ == '__main__':
    # 执行转换
    result = convert_data(get_current_data())

    # 将结果写入 url_schemes.json（格式化，保留中文）
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=3)

    print("已生成 url_schemes.json")

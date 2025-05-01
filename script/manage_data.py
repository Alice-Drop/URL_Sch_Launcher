import json

DATA_PATH = "./url_schemes.json"


def get_current_data():
    with open(DATA_PATH, "r", encoding="utf-8") as data:
        return json.load(data)


def remind_0_is_back():
    print("输入b以返回。")


def main():
    while 1:
        print("欢迎使用管理系统。需要进行什么操作？\n1.查询数据\n2.新增数据\n3.删除数据")
        choice = input("")

        if choice == "1":
            print("查询方式：1.用应用名称查找\n2.用UUID查询")
            remind_0_is_back()
            choice = input("")
            if choice == "1":
                name = input("请输入查找的应用名称：")
                if name:
                    pass


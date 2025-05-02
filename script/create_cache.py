import json
from AppItem import SYSTEM, AppKeys
import os


def load_data():
    with open(SYSTEM.PATH, encoding="utf-8") as my_file:
        return json.load(my_file)


def main():
    result = {}

    url_schemes_data: dict = load_data()
    if len(url_schemes_data):
        for id, value in url_schemes_data.items():
            name_data: dict = value.get(AppKeys.NAME) # 此时是字典，存储了各语言。
            print(name_data)
            for lang, name in name_data.items():
                if lang in result.keys():
                    result[lang][name] = id
                else:
                    result[lang] = {
                        name: id
                    }

    with open("./search_cache.json", "w", encoding="utf-8") as my_file:
        json.dump(result, my_file, indent=3, ensure_ascii=False)

        print("done.")


if __name__ == "__main__":
    main()
    os.system("pause")

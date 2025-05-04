# 准备弃用。因为这个的转换太麻烦了。

class AppKeys:
    NAME = "name"
    ICON = "icon"
    PAGES = "pages"
    TAGS = "tags"
    PLATFORM = "supported_platform"
    
class System:
    LANGUAGE = "zh-CN",
    PATH = "./url_schemes.json"
    
    
class PageContent:
    def __init__(self, data):
        pass
    
class AppItem:
    def __init__(self, data: dict):
        
        self.name: str = data.get(AppKeys.NAME)
        self.icon: str = data.get(AppKeys.ICON)
        self.tags: list = data.get(AppKeys.TAGS)
        self.pages: list = data.get(AppKeys.PAGES)
        

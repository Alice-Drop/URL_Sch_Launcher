class AppKeys:
    NAME = "name"
    ICON = "icon"
    PAGES = "pages"
    TAGS = "tags"
    PLATFORM = "supported_platform"
    
class SYSTEM:
    LANGUAGE = "zh-CN"
    
    
class PageContent:
    def __init__(self, data):

    
class AppItem:
    def __init__(self, data: dict):
        
        self.name: str = data.get(AppKeys.NAME)
        self.icon: str = data.get(AppKeys.ICON)
        self.tags: list = data.get(AppKeys.TAGS)
        self.pages: list = data.get(AppKeys.PAGES)
        

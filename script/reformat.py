import json

# 原始数据，简略示例，使用时替换为完整 URL_SCH_DATA
URL_SCH_DATA = {
    "ios系统基础应用": {
        "短信": "sms://",
        "AppStore": "itms-apps://",
        "电话": "tel://",
        "备忘录": "mobilenotes://",
        "E-Mail": "MESSAGE://"
    },
    "支付宝": {
        "支付宝": "alipay://",
        "蚂蚁庄园": "alipays://platformapi/startapp?appId=66666674",
        "蚂蚁森林": "alipays://platformapi/startapp?appId=60000002",
        "蚂蚁宝卡": "alipays://platformapi/startapp?appId=60000057",
        "款码": "alipayqr://platformapi/startapp?saId=20000056",
        "扫码": "alipays://platformapi/startapp?saId=10000007",
        "红包": "alipays://platformapi/startapp?appId=88886666",
        "股票": "alipays://platformapi/startapp?appId=20000134",
        "生活缴费": "alipays://platformapi/startapp?appId=20000193",
        "手机充值": "alipays://platformapi/startapp?appId=10000003",
        "彩票": "alipays://platformapi/startapp?appId=10000011",
        "淘票票": "alipays://platformapi/startapp?appId=20000131",
        "查快递": "alipays://platformapi/startapp?appId=20000754",
        "AA收款": "alipays://platformapi/startapp?appId=20000263",
        "收款": "alipays://platformapi/startapp?appId=20000123",
        "转账": "alipays://platformapi/startapp?appId=20000221",
        "还信用卡": "alipays://platformapi/startapp?appId=09999999"
    },
    "钉钉": {
        "钉钉": "dingtalk://"
    },
    "淘宝": {
        "淘宝网": "taobao://",
        "淘宝旅行": "taobaotravel://",
        "淘宝宝贝搜索": "taobao://http://s.taobao.com/?q=：prompt",
        "淘宝店铺搜索": "taobao://http://shopsearch.taobao.com/browse/shop_search.htm?q=：prompt"
    },
    "天猫": {
        "天猫": "tmall://"
    },
    "QQ": {
        "QQ": "mqq://",
        "QQ群组": "mqqapi://card/show_pslcard?src_type=internal&version=1&card_type=group&uin={QQ群号}",
        "QQ联系人": "mqqapi://card/show_pslcard?src_type=internal&version=1&uin={QQ号码}",
        "QQ国际版": "mqqiapi://"
    },
    "QQ音乐": {
        "QQ音乐": "qqmusic://",
        "QQ音乐最近播放": "qqmusic://today?mid=31&k1=2&k4=0"
    },
    "QQ浏览器": {
        "QQ浏览器": "mttbrowser://"
    },
    "QQ邮箱": {
        "QQ邮箱": "qqmail://"
    },
    "腾讯企业邮箱": {
        "腾讯企业邮箱": "qqbizmailDistribute2://"
    },
    "腾讯视频": {
        "腾讯视频": "tenvideo://"
    },
    "腾讯新闻": {
        "腾讯新闻": "qqnews://"
    },
    "腾讯微云": {
        "腾讯微云": "weiyun://"
    },
    "腾讯地图": {
        "腾讯地图": "sosomap://"
    },
    "QQ斗地主": {
        "QQ斗地主": "tencent382://"
    },
    "QQ安全中心": {
        "QQ安全中心": "qmtoken://"
    },
    "腾讯手机管家": {
        "腾讯手机管家": "mqqsecure://"
    },
    "腾讯微博": {
        "腾讯微博": "TencentWeibo://"
    },
    "天天星连萌": {
        "天天星连萌": "tencent100689806://"
    },
    "天天爱消除": {
        "天天爱消除": "tencent100689805://"
    },
    "天天酷跑": {
        "天天酷跑": "tencent100692648://"
    },
    "天天飞车": {
        "天天飞车": "tencent100695850://"
    },
    "节奏大师": {
        "节奏大师": "tencentrm://"
    },
    "微信": {
        "微信": "wechat://",
        "微信-扫一扫": "weixin://dl/scan",
        "微信-反馈": "weixin://dl/feedback",
        "微信-朋友圈": "weixin://dl/moments",
        "微信-设置": "weixin://dl/settings",
        "微信-消息通知设置": "weixin://dl/notifications",
        "微信-聊天设置": "weixin://dl/chat",
        "微信-通用设置": "weixin://dl/general",
        "微信-公众号": "weixin://dl/officialaccounts",
        "微信-游戏": "weixin://dl/games",
        "微信-帮助": "weixin://dl/help",
        "微信-个人信息": "weixin://dl/profile",
        "微信-功能插件": "weixin://dl/features"
    },
    "百度": {
        "百度": "baiduboxapp://"
    },
    "百度地图": {
        "百度地图": "baidumap://"
    },
    "百度贴吧": {
        "百度贴吧": "com.baidu.tieba://"
    },
    "百度云": {
        "百度云": "baiduyun://"
    },
    "百度音乐": {
        "百度音乐": "baidumusic://"
    },
    "百度视频": {
        "百度视频": "baiduvideoiphone://"
    },
    "百度糯米": {
        "百度糯米": "bainuo://"
    },
    "百度魔图": {
        "百度魔图": "photowonder://"
    },
    "百度魔拍": {
        "百度魔拍": "wondercamera://"
    },
    "百度导航": {
        "百度导航": "bdNavi://"
    },
    "百度输入法": {
        "百度输入法": "BaiduIMShop://"
    },
    "网易邮箱": {
        "网易邮箱": "neteasemail://"
    },
    "网易新闻": {
        "网易新闻": "newsapp://"
    },
    "网易云音乐": {
        "网易云音乐": "orpheuswidget://"
    },
    "有道词典": {
        "有道词典": "yddict://或yddictproapp://"
    },
    "有道云笔记": {
        "有道云笔记": "youdaonote://"
    },
    "网易公开课": {
        "网易公开课": "ntesopen://"
    },
    "网易将军令": {
        "网易将军令": "netease-mkey://"
    },
    "美团": {
        "美团外卖": "meituanwaimai://",
        "美团": "imeituan://"
    },
    "点评": {
        "点评": "dianping://或dianping://search"
    },
    "12306": {
        "12306": "cn.12306://"
    },
    "京东": {
        "京东": "openApp.jdMobile://或jd://"
    },
    "今日头条": {
        "今日头条": "snssdk141://"
    },
    "高德地图": {
        "高德地图": "iosamap://"
    },
    "新浪微博": {
        "新浪微博": "weibo://"
    },
    "微博国际版": {
        "微博国际版": "weibointernational://"
    },
    "优酷": {
        "优酷": "youku://"
    },
    "爱奇艺": {
        "爱奇艺": "iqiyi://或qiyi-iphone://"
    },
    "爱奇艺PPS": {
        "爱奇艺PPS": "ppstream://"
    },
    "土豆视频": {
        "土豆视频": "tudou://"
    },
    "PPTV": {
        "PPTV": "pptv://"
    },
    "暴风影音": {
        "暴风影音": "com.baofeng.play://"
    },
    "搜狐视频": {
        "搜狐视频": "sohuvideo-iphone://"
    },
    "搜狐新闻": {
        "搜狐新闻": "sohunews://"
    },
    "虾米音乐": {
        "虾米音乐": "xiami://"
    },
    "酷我音乐": {
        "酷我音乐": "com.kuwo.kwmusic.kwmusicForKwsing://"
    },
    "酷狗音乐": {
        "酷狗音乐": "kugouURL://"
    },
    "天天动听": {
        "天天动听": "ttpod://"
    },
    "摩拜单车": {
        "摩拜单车": "mobike://"
    },
    "ofo": {
        "ofo": "ofoapp://"
    },
    "chrome": {
        "chrome": "googlechrome://"
    },
    "Gmail": {
        "Gmail": "googlegmail://"
    },
    "印象笔记": {
        "印象笔记": "evernote://"
    },
    "挖财记账": {
        "挖财记账": "wacai://"
    },
    "猎豹浏览器": {
        "猎豹浏览器": "sinaweibosso.422729959://"
    },
    "UC浏览器": {
        "UC浏览器": "ucbrowser://"
    },
    "名片全能王": {
        "名片全能王": "camcard://"
    },
    "豆瓣fm": {
        "豆瓣fm": "doubanradio://"
    },
    "微盘": {
        "微盘": "sinavdisk://"
    },
    "人人": {
        "人人": "renren://"
    },
    "我查查": {
        "我查查": "wcc://"
    },
    "1号店": {
        "1号店": "wccbyihaodian://"
    },
    "知乎": {
        "知乎": "zhihu://"
    },
    "墨客": {
        "墨客": "com.moke.moke-1://"
    },
    "扫描全能王": {
        "扫描全能王": "camscanner://"
    },
    "TuneIn": {
        "TuneIn": "Radio"
    },
    "OfficeSuite": {
        "OfficeSuite": "mobisystemsofficesuite://"
    },
    "WPS": {
        "WPS": "Office"
    },
    "Line": {
        "Line": "line://"
    },
    "1Password": {
        "1Password": "onepassword://"
    },
    "Clear(著名的Todo应用)": {
        "Clear(著名的Todo应用)": "clearapp://"
    },
    "Calendars": {
        "Calendars": "5"
    },
    "GoodReader": {
        "GoodReader": "4"
    },
    "PDF": {
        "PDF": "Expert"
    },
    "Documents": {
        "Documents": "5"
    },
    "nPlayer": {
        "nPlayer": "nplayer-http://"
    },
    "GPlayer": {
        "GPlayer": "gplayer://"
    },
    "AVPlayer": {
        "AVPlayer": "AVPlayer://"
    },
    "Ace": {
        "Ace": "Player"
    },
    "12306订票助手": {
        "12306订票助手": "trainassist://"
    },
    "金山词霸": {
        "金山词霸": "com.kingsoft.powerword.6://"
    },
    "凤凰新闻": {
        "凤凰新闻": "comIfeng3GifengNews://"
    },
    "高铁管家": {
        "高铁管家": "gtgj://"
    },
    "飞信": {
        "飞信": "fetion://"
    },
    "大智慧": {
        "大智慧": "dzhiphone://"
    },
    "布卡漫画": {
        "布卡漫画": "buka://"
    },
    "哔哩哔哩动画": {
        "哔哩哔哩动画": "bilibili://"
    },
    "56视频": {
        "56视频": "com.56Video://"
    },
    "365日历": {
        "365日历": "rili365://"
    },
    "58同城": {
        "58同城": "wbmain://"
    },
    "遇见": {
        "遇见": "iaround://"
    },
    "陌陌": {
        "陌陌": "momochat://"
    },
    "旺旺卖家版": {
        "旺旺卖家版": "wangwangseller://"
    },
    "掌阅iReader": {
        "掌阅iReader": "iReader://"
    },
    "艺龙旅行": {
        "艺龙旅行": "elongIPhone://"
    },
    "迅雷+迅雷云播": {
        "迅雷+迅雷云播": "thunder://"
    },
    "熊猫公交": {
        "熊猫公交": "wb1405365637://"
    },
    "携程无线": {
        "携程无线": "CtripWireless://"
    },
    "无线苏州": {
        "无线苏州": "SuZhouTV://"
    },
    "唯品会": {
        "唯品会": "vipshop://"
    },
    "微视": {
        "微视": "weishiiosscheme://"
    },
    "微拍": {
        "微拍": "wpweipai://"
    },
    "旺信": {
        "旺信": "wangxin://"
    },
    "万年历": {
        "万年历": "youloft.419805549://"
    },
    "同花顺": {
        "同花顺": "amihexin://"
    },
    "天涯社区": {
        "天涯社区": "tianya://"
    },
    "天气通Pro": {
        "天气通Pro": "sinaweatherpro://"
    },
    "天气通": {
        "天气通": "sinaweather://"
    },
    "墨迹天气": {
        "墨迹天气": "rm434209233MojiWeather://"
    },
    "蜻蜓FM": {
        "蜻蜓FM": "qtfmp://"
    },
    "浦发银行": {
        "浦发银行": "wx1cb534bb13ba3dbd://"
    },
    "招商银行": {
        "招商银行": "cmbmobilebank://"
    },
    "建设银行": {
        "建设银行": "wx2654d9155d70a468://"
    },
    "工商银行": {
        "工商银行": "com.icbc.iphoneclient://"
    },
    "保卫萝卜2": {
        "保卫萝卜2": "wb2217954495://"
    },
    "保卫萝卜": {
        "保卫萝卜": "wb1308702128://"
    },
    "搜狗输入法": {
        "搜狗输入法": "com.sogou.sogouinput://"
    },
    "随手记": {
        "随手记": "FDMoney://"
    },
    "weico微博": {
        "weico微博": "weico://"
    }
}

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
    for app_name, pages in original_data.items():
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

        
        new_data["app_"+str(index)] = {
            "name": {
                "zh-CN": app_name
                },
            "tags": [],
            "icon": "",
            "pages": new_pages
        }
        index +=1
    return new_data


if __name__ == '__main__':
    # 执行转换
    result = convert_data(URL_SCH_DATA)

    # 将结果写入 output.json（格式化，保留中文）
    with open('output.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=3)

    print("已生成 output.json")

# win10下载与安装

## win10启动盘的制作

1. 微软官网有一个[MediaCreationTool工具](https://www.microsoft.com/zh-cn/software-download/windows10/)，用以升级win10。  
2. 首先下载这个工具到本地，并打开这个这个exe，接受它的声明和许可条款，下一步。  
![MediaCreationTool工具下载](./img/win10安装/MediaCreationTool.png)  
3. 它可以直接将本机操作系统升级为win10，也可以为其他电脑创建win10的介质（U盘、光盘、ISO文件）；我们选择后者，但不会使用光盘，而是使用的是U盘，继续下一步。  
![win10download](./img/win10安装/win10download.png)  
4. 语言、体系结构和版本会按照本机自动选择好，当然你也可以选择其他版本，继续下一步。随后会出现让选择U盘或者ISO文件。  
![ip](./img/win10安装/up.png)  
5. 选择ISO会多出一步“刻录”，也是可以刻录到U盘的，使用[UltraISO](https://cn.ultraiso.net/)，有教程也很简单就不展开了。  
6. U盘准备8G或16G，我的是以NTFS格式进行格式化的，有些UEFI的启动盘要求是FAT32格式；下载或刻录完毕，该U盘就是启动盘了。  

## win10安装

1. 安装新系统，C盘里里重要的东西要自己备份到其他盘，因为不会影响到其他盘的资料。
2. 再将自己的UEFI或BIOS设置成U盘启动，我的是Dell系列的电脑，可以参照这篇[Dell新版BIOS设置U盘启动](https://jingyan.baidu.com/article/3d69c55126805bf0cf02d7ed.html)进行设置。
3. 插上你的win10启动盘，重启电脑，选择你U盘的名字再确定，就会开始安装win10系统。
4. 安装过程非常简单，按照你需求进行一下选择，安装好会进入新系统。

## win10激活

1. win10系统最好激活一下，虽然表面上说不会影响速度什么的，使用上总感觉会慢；可以自行到官网购买win10激活码，也可以去tb等网站上购买私人渠道的。
2. 我这里介绍一个网站：[Windows激活工具](https://windows.kangkangd.cn/)，会下载一个软件，一键激活windows和office，非常强大和方便。
3. 其他网站下载的激活软件总会绑一些乱七八糟的东西给你，很烦也很不安全；这个软件非常不错，很干净，暂时免费也没有失效！记得激活后重启！

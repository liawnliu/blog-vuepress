# JavaScript简介和使用方法

## JavaScript简史

&nbsp;&nbsp;&nbsp;&nbsp;上个世纪九十年代，人们普遍使用电话拨号上网，并且网页的大小、复杂性不断增加，提交一个表单请本需要等很久时间的响应，如果必填域没填或输入无效值那就更加费时。  
&nbsp;&nbsp;&nbsp;&nbsp;为了处理这种简单的验证，Netscape公司的布兰登·艾奇(Brendan Eich)在1995年与Sun公司合作开发出Live Script客户端脚本语言(服务器端也可使用，名叫Live Wire)，发布前夕为搭上热炒Java的顺风车改名为JavaScript。  
&nbsp;&nbsp;&nbsp;&nbsp;因微软也推出名为JScript的JavaScript实现语言，两不同版本暴露出非标准化系列问题。1997年，ECMA的TC39以JavaScript1.1为蓝本完成了ECMA-262——定义一种名为ECMAScript的新脚本语言的标准。  
&nbsp;&nbsp;&nbsp;&nbsp;第二年，ISO/IEC也采用了ECMAScript作为标准，自此各浏觉器开发商将ECMAScript作为各自JavaScript实现的基础。  

## JavaScript实现

虽然JavaScript和ECMAScript通常被人们用来表达相同的含义，但JavaScript的含义却比ECMA-262中规定的要多得多，如下图。  
![JavaScript](img\JavaScript.png)

### ECMAScript

&nbsp;&nbsp;&nbsp;&nbsp;Web浏览器是ECMAScript实现的宿主环境之一，不仅提供基本的ECMAScript实现，同时也会提供该语言的扩展(例如DOM)以便语言与环境之间对接交互。其宿主环境有Node和Adobe Flash。  
&nbsp;&nbsp;&nbsp;&nbsp;ECMAScript就是对实现ECMA-262标准规定的各个方面内容的语言的描述。ECMA-262标准规定了ECMAScript语言的组成部防：语法、类型、语句、关键字、保留字、操作符、对象。  
&nbsp;&nbsp;&nbsp;&nbsp;ECMA-262第1版册除了所有针对浏览器的代码并作了小改动：支持Unicode标准，对象变得与平台无关。  
&nbsp;&nbsp;&nbsp;&nbsp;ECMA-262第3版修改了：字符串处理、错误定义、数值输出。新增了正则表达式、新控制语句try-catch异常处理。  
&nbsp;&nbsp;&nbsp;&nbsp;ECMA-262第5版新增：JSON对象、继承的方法和高级属性定义，另外还包含一种严格模式。  

### 文档对象模型(DOM)

&nbsp;&nbsp;&nbsp;&nbsp;文档对象模型是针对XML但经过扩展用于HTML的应用程序编程接口(API)。DOM把整个页面映射为一个多层节点结构。开发人员首次无需重新办载网页，就可以借助DOM提供的API对网页的外观和内容进行修改。  
&nbsp;&nbsp;&nbsp;&nbsp;DOM1级由DOM核心(DOM Core)和DOM HTML组成，DOM核心规定了如何映射基于XML的文档结构，DOM HTML在DOM核心上扩展了针对HTML的对象和方法。  
&nbsp;&nbsp;&nbsp;&nbsp;DOM2级在原DOM上扩充了鼠标和用户界面事件、范国、遍历等细分模块，而且通过对象接口增加了对CSS的支持。  
&nbsp;&nbsp;&nbsp;&nbsp;DOM3级引入了以统一方式加载和保存文档的方法，新增了验证文挡的方法。也开始支持XML1.0规范。  

### 浏免器对象模型(CO0M)

也是一种接口，用来处理浏览器窗口和框架及扩展，HTML5给了标准。

## 在HTML中使用JavaScript

### \<script\>元素和放置

`<script>`定义了6个元素：`async`(异步脚本)、`charset`(用得少)、`defer`(延迟脚本)、`language`(已废弃)、`src`(外部文件)、`type`(替代language)

`<script>`的使用方式：  

1. 直接在页面中嵌入JavaScript代码，在`<script>`和`</script>`之间写JavaScript代码，如果代码里的字符串中有`</script>`这样的标签记得要使用 **“/”** 进行转译。

    ```html
    <script type="text/javascript">
        function sayScript() {
            alert("<\/script>");
        }
    </script>
    ```

2. 在页面引入JavaScript文件，`<script type="text/javascript" src="xxx.js"></script>`
   - 在HTML不能简写`<script />`，但在XHTML里可以；
   - src中可以引用外部域的JavaScript文件，但该JavaScript文件要安全可靠；
   - 一般推荐放在页面主要内容后，`</body>`标签前，因为放在`<head>`标签中的话会先下载JavaScript文件来解析页面就可能会出现空白的间隙；
   - 解决上面的问题可以用`defer="defer"`，把`<script src="xxx.js" defer="defer"></script>`放在`<head>`标签里，代表立即下载但延迟执行；
   - 与defer类似有`async`，在`<head>`标签可放多个引用的JavaScript文件，立即下载这些JavaScript但执行顺序不保证，即多个文件要没关联。

### 扩展

- 引入型的`<script type="text/javascript" src="xxx.js"></script>`中，是不会再有嵌在`<script>`和`</script>`中的代码，有也不会执行只会执行src里的文件。
- 使用`<noscript>`元素可以指定在不支持脚本的浏览器中显示的替代内容，但在启用了脚本的情况下浏览器不会显示`<noscript>`元素中的任何内容。

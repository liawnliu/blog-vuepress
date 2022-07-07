(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{713:function(t,e,r){"use strict";r.r(e);var a=r(13),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[t._v("#")]),t._v(" 队列")]),t._v(" "),r("h2",{attrs:{id:"队列数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#队列数据结构"}},[t._v("#")]),t._v(" 队列数据结构")]),t._v(" "),r("p",[t._v("    队列(queue)是一种遵从先进先出(FIFO)原则的受限线性表（受限表示对结点的操作受限制）。新添加的元素在队列尾部（只能添加不能删除），待删除的元素在队列的首部（只能删除不能添加）。队列中没有元素时，称为空队列。"),r("br"),t._v("\n    队列的例子有很多，例如单向通道，打印机的打印队列等。")]),t._v(" "),r("h2",{attrs:{id:"队列实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#队列实现"}},[t._v("#")]),t._v(" 队列实现")]),t._v(" "),r("p",[t._v("    队列实现代码细节："),r("a",{attrs:{href:"https://gitee.com/liawnliu/datastructures_ts/blob/master/src/ts/data-structures/queue.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("queue.ts"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("    1.声明一个私有变量_items用于存储元素，类型跟stack一样选用对象；再声明一个私有变量_count用于记录队列的数量；最后声明一个私有变量_lowestIndex，用于记录下一个进来的元素即将使用的下标。")]),t._v(" "),r("p",[t._v("    2.队列的先进先出实现："),r("br"),t._v("\n        新增尾部元素跟stack类似要用下标作为属性名，但这里用_lowestIndex作为属性名（可以思考一下为什么不用_count），添加到对象中后更新_count和_lowestIndex的值。"),r("br"),t._v("\n        删除首部元素跟stack类似用delete运算符，但我们要在首部删除，所以拿到首部元素的下标也就是_lowestIndex减去_count所得的值，然后使用delete删除首部元素，最后更新_count的值（_lowestIndex不用更新，它不会受影响）。")]),t._v(" "),r("p",[t._v("    3.队列的其他常用方法跟stack的其他常用方法实现类似。peek查看队列首部元素、isEmpty队列是否为空、size队列的大小、clear清空队列、toString返回队列的字符串形式。")]),t._v(" "),r("h2",{attrs:{id:"双端队列数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双端队列数据结构"}},[t._v("#")]),t._v(" 双端队列数据结构")]),t._v(" "),r("p",[t._v("    双端队列(deque)是一种允许我们同时从首部和尾部添加和移除元素的特殊队列。"),r("br"),t._v("\n    双端队列的例子有很多，例如餐厅或者电影院排队，软件中的撤销功能等。")]),t._v(" "),r("h2",{attrs:{id:"双端队列实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双端队列实现"}},[t._v("#")]),t._v(" 双端队列实现")]),t._v(" "),r("p",[t._v("    双端队列实现代码细节："),r("a",{attrs:{href:"https://gitee.com/liawnliu/datastructures_ts/blob/master/src/ts/data-structures/deque.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("deque.ts"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("    1.声明一个私有变量_items用于存储元素，类型跟stack一样选用对象；再声明一个私有变量_count用于记录队列的数量；最后声明一个私有变量_lowestIndex，用于记录下一个进来的元素即将使用的下标。（跟queue一样）")]),t._v(" "),r("p",[t._v("    2.双端队列的双端删除和添加：\n        尾部添加新元素addBack：跟队列一样的做法，在对象里插入属性名为_lowestIndex的新元素，再更新_lowestIndex和_count。"),r("br"),t._v("\n        首端添加元素addFront：要分三种情况，1队列为空那么直接往尾部添加新元素也就是调用addBack；2首部元素的下标为0那么要先将队列的元素集体右移再将新元素添加到下标为0的位置，更新_lowestIndex和_count；3首部元素的下标不为0那么将新元素添加到首部元素的前一位，更新_count。"),r("br"),t._v("\n        移除尾部元素removeBack：先拿到尾部元素的下标也就是_lowestIndex减去1所得的值，再用delete删除尾部元素，最后更新_count和_lowestIndex。"),r("br"),t._v("\n        移除首部元素removeFront：先拿到首部元素的下标也就是_lowestIndex减去_count所得的值，再用delete删除首部元素，最后更新_count（_lowestIndex不用更新，它不会受影响）。")]),t._v(" "),r("p",[t._v("    3.双端队列的其他常用方法跟queue的其他常用方法实现类似。peekFront查看双端队列首部元素、peekBack查看双端队列尾部元素、isEmpty双端队列是否为空、size双端队列的大小、clear清空双端队列、toString返回双端队列的字符串形式。")]),t._v(" "),r("h2",{attrs:{id:"循环队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#循环队列"}},[t._v("#")]),t._v(" 循环队列")]),t._v(" "),r("p",[t._v("    循环队列实现代码细节："),r("a",{attrs:{href:"https://gitee.com/liawnliu/datastructures_ts/blob/master/src/ts/others/hot-potato.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("hot-potato.ts"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("    击鼓传花思路：先构造一个队列（当然如果是双向的问题就用双端队列），将首部元素拿掉放到尾部重复num次，这num次算一轮，每轮结束将首部拿出存到临时数组里，继续循环每一轮直到剩余最后一项终止。最后一项就是胜利者，临时数组就是每轮的淘汰者。")]),t._v(" "),r("h2",{attrs:{id:"回文检查器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#回文检查器"}},[t._v("#")]),t._v(" 回文检查器")]),t._v(" "),r("p",[t._v("    回文检查器实现代码细节："),r("a",{attrs:{href:"https://gitee.com/liawnliu/datastructures_ts/blob/master/src/ts/others/palindrome-checker.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("palindrome-checker.ts"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("回文是正反都能读通的单词、词组、数或一系列字符的序列，例如madam或racecar。")])]),t._v(" "),r("p",[t._v("    思路：字符串反转、栈存储一半字符等都可以解决，这里用双端队列来解决。先将目标字符串构造成一个双端队列，然后每次都从首部和尾部取出元素对比。")]),t._v(" "),r("h2",{attrs:{id:"javascript任务队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript任务队列"}},[t._v("#")]),t._v(" JavaScript任务队列")]),t._v(" "),r("blockquote",[r("p",[t._v("当我们在浏览器中打开新标签时，就会创建一个任务队列。这是因为每个标签都是单线程处理所有的任务，称为事件循环。浏览器要负责做个任务，如渲染HTML、执行JavaScript代码、处理用户交互（用户输入、鼠标点击等）、执行和处理异步请求。\n"),r("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"),r("OutboundLink")],1),t._v("\n翻译文"),r("a",{attrs:{href:"https://segmentfault.com/a/1190000014812771?utm_source=channel-hottest",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000014812771?utm_source=channel-hottest"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);
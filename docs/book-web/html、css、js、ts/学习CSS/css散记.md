# css散记

1. 在弹性盒模型布局中，需要事先指定一个容器，后续的所有布局操作都是基于此容器来定义的。其核心是容器会根据布局的需要（动态的）调整其中所包含的子元素（即布局条目）的尺寸、顺序来填充容器的所有可用空间。当容器的尺寸由于屏幕大小（或者浏览器窗口尺寸）发生变化时，其中包含的布局条目也会自动地进行调整（flex容器可以根据本身尺寸的大小来动态地调整flex条目的尺寸）。
2. display: flex是用来指定弹性容器，flex是flex-grow、flex-shrink、flex-bsis的缩写，只写flex则是默认这三个属性值的组合。这三个css属性是确定flex条目尺寸的弹性的；flex-basis设置弹性条目的初始主轴尺寸；flex-grow当容器有多余的空间时，这些空间在不同条目之间的分配比例；flex-shrink是当容器的空间不足时，各个条目尺寸缩小的比例。
   - 当flex为none时，flex-grow、flex-shrink、flex-bsis分别是0、0、auto；
   - 当flex为auto时，flex-grow、flex-shrink、flex-bsis分别为1、1、auto；
   - 当flex为非负数字时，则flex-grow为该数字，flex-shrink为1，flex-bsis为0%；
   - 当flex为一个长度或百分比时，flex-grow和flex-shrink为1，flex-bsis为这个百分比；
   - 当flex为两个非负数字时，则flex-grow、flex-shrink分别为那两个数字，flex-bsis为0%；
   - 当flex为一个非负数字和一个百分比时，则flex-grow、flex-bsis分别为那两个值，flex-shrink为1。
3. flex拓展：flex-direction设置主轴方向。flex-wrap设置当所有的flex条目的尺寸之和超过flex容器的主轴尺寸时应该采取的行为。order自定义容器中的条目顺序
4. hight是元素内容高度，而line-hight是行高，不受元素的影响，line-height与font-size的计算值之差分为两半，分别加到一个文本行内容的顶部和底部，这样就形成了行间距。
5. 自适应方案之一:为了防止图片未加载而出现暂时的内容抖动，在垂直方向使用padding撑开容器；因为使用了padding撑开容器，而当容器添加内容进来，内容也会占据高度，所以让height为0，使添加进来的内容不占据高度
   - padding-bottom: 50%
   - height: 0
6. box-sizing: border-box切换成IE盒子模型，而box-sizing: content-box是切换成W3C盒子模型
7. overflow: hidden,white-space: nowrap,text-overflow: ellipsis。这个三个的意思分别是：超出部分隐藏，所有的文本都显示在这一行，多余的文本用省略号...显示
8. 移动端弹性盒子里溢出字体省略号替换不起作用，则加一句min-width: 0
9. text-indent 属性规定文本块中首行文本的缩进
10. 把百分数作为内外边距，值是以内联尺寸进行计算的，也即对于左右书写的语言来说的宽度。
11. min-height可以确保最小高度，超过就会撑大可以解决溢出的问题；max-width，在没有足够空间以原有宽度展示图像时会缩小图片，这样就达到了图片自适应的效果。
12. flex:1可以自动撑开宽度
13. 引入border.css文件后可以在class里加入“border-bottom”就可以使用一像素解决方案，明显的在边框处有浅灰色的边框。
14. flex:1,min-width: 0，弹性盒子分配比例都是1，但最小宽度是0，那么能保证元素能最小获得父元素的宽度
15. type为text的input标签，想让它有默认浅色提示可以使用，placeholder属性。
16. overflow: hidden会触发BFC，使得带有overflow: hidden的元素成为BFC(块级格式化上下文)。因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。
17. flex-direction: row | row-reverse | column | column-reverse  
    - row：横向从左到右排列（左对齐），默认的排列方式。
    - row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
    - column：纵向排列。
    - row-reverse：反转纵向排列，从后往前排，最后一项排在最上面。
18. justify-content: flex-start | flex-end | center | space-between | space-around;
    - flex-start: 弹性盒子元素将向行起始位置对齐。第一个元素与左起始边界对齐，后面的元素接着第一个元素进行排列。
    - flex-end: 弹性盒子元素将向行结束位置对齐。整体靠着行结束的位置排列。
    - center：整体居中显示。

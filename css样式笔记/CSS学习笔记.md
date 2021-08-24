# CSS学习笔记

## 一、初始css

用于设置HTML页面的版面布局和外观样式



## 二、引入css样式表

### 1、行内样式表（内联样式）

行内式是写在标签内部，通过标签的style属性设置元素的样式

**语法格式：**

![image-20210822111258877](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822111258877.png)

**例子：**

```html
<h1 style="color:pink; font-size:10px">这里是Daxiong创作者开发的网站</h1>
```

**注意：**

![image-20210822111739647](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822111739647.png)



### 2、内部样式表（内嵌样式）

内部样式表又称为内嵌式，是将css代码写在html文件的<head>头部标签中，用style标签括起来的。

 **语法格式：**

选择器就是选择的标签

![image-20210822135956163](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822135956163.png)

 **例子：**

```html
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style type="text/css">
		h2 {
			color : green;
			font-size : 24px;
		}
		h4 {
			color : purple;
		}
		p {
			color : lightseagreen;
		}
	</style>
</head>
```

**注意：**

![image-20210822142037715](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822142037715.png)



### 3、外部样式表（外链式）

外部样式表又称为链入式，是将所有的样式放在一个或多个以.css为扩展名的外部样式表文件中，通过link标签将外部样式表文件链接到html文件中。

**语法格式：**

![image-20210822145116317](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822145116317.png)

**例子：**

![image-20210822150159339](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822150159339.png)

![image-20210822150224815](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822150224815.png)

**注意：**

![image-20210822145435256](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822145435256.png)

![image-20210822145715817](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822145715817.png)



### 总结

![image-20210822164751911](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822164751911.png)



## 三、CSS选择器

CSS选择器的作用就是找到特定的HTML标签

![image-20210822170109168](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822170109168.png)



### 1、CSS基础选择器

#### 1）标签选择器

标签选择器也称为元素选择器，是以HTML标签名作为选择器。

![image-20210822170813249](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822170813249.png)

####2）类选择器（常用）

类选择器使用"."进行标识，后面紧跟类名。

![image-20210822171531333](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822171531333.png)

![image-20210822171549975](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822171549975.png)

多类名 类选择器的用法

![image-20210822182415382](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822182415382.png)



#### 3）id选择器

id选择器使用”#“进行标识，后面紧跟id名。

![image-20210822202242577](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822202242577.png)



##### id和类选择器区别

![image-20210822203053589](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822203053589.png)

id名在页面元素中只能出现一次，类名可以出现多次重复使用。



#### 4）通配符选择器

通配符选择器用 * 表示，* 表示选择所有的标签，匹配页面上的所有元素。

![image-20210822204805927](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822204805927.png)



#### 5）基础选择器总结

![image-20210822205003605](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822205003605.png)



###2、CSS复合选择器





## 四、CSS字体样式

### 1、font字体

#### 1.1 font-size 字体大小

![image-20210822210042099](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822210042099.png)

![image-20210822210144162](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822210144162.png)



#### 1.2 font-family字体款式

![image-20210822210404897](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822210404897.png)

![image-20210822210604627](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822210604627.png)

##### Unicode字体

![image-20210822211001149](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822211001149.png)

![image-20210822211043631](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822211043631.png)

![image-20210822211156190](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822211156190.png)



#### 1.3 font-weight 字体粗细

![image-20210822211303958](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822211303958.png)

![image-20210822211709112](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822211709112.png)



#### 1.4 font-style 字体风格

![image-20210822212257611](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822212257611.png)



#### 1.5 font： 综合设置字体样式（重点）

![image-20210822212525827](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822212525827.png)



#### 1.6 font总结

![image-20210822212842879](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822212842879.png)



### 2、CSS外观属性

#### 2.1 color：文本颜色

![image-20210822214037093](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822214037093.png)

十六进制的颜色：一共六位，前两位表示红色、中间两位表示绿色，最后两位表示蓝色。

`#000000`就是什么颜色都没有，表示黑色。`#ffffff`表示红绿蓝颜色都满了，即白色。`#ff0000`表示红色满了，其他的没有，即红色。

==开发的时候不需要去记，直接用拾色器把颜色吸过来就欧克了==

如果十六进制颜色两两相同，则可以省略，比如：红色可以表示为`#f00`，灰色可以表示为`#ccc`，而`#ff1234`不可以省略，只要有一对不同就不可以合并。







#### 2.2 line-height：行间距





#### 2.3 text-align：文本水平对齐方式



#### 2.4 text-indent：首行缩进



#### 2.5 text-decoration 文本装饰



#### 2.6 CSS外观属性总结









## 五、综合案例

 ![image-20210822213138240](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210822213138240.png)
























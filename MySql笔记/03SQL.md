# SQL

## 1、什么是SQL？

​		Structured  Query  Language：结构化查询语言

​		它定义了操作所有关系型数据库的规则

​		每一种数据库操作的方式有一点不一样的地方，称为“方言”



## 2、SQL的通用语法

​		SQL语句可以单行或多行书写，以分号结尾

​		可以使用空格和缩进来增强语句的可读性

​		MySQL数据库的SQL语句不区分大小写，关键字建议大写

​		3种注释：

​				- 单行注释：-- 注释内容 或 # 注释内容(mysql特有)  【中间要加空格，#后面空格不是必须】

​				- 多行注释：/* 注释 */



## 3、SQL的分类

- DDL（Data Definition Language）数据定义语言

  ​	用于定义数据库对象：数据库、表、列等。关键字：create、drop、alter等  

- DML（Data Manipulation Language）数据操作语言

  ​	用于对数据库中表的数据进行增删改。关键字：insert、delete、update等

- DQL（Data Query Language）数据查询语言

  ​	用于对数据库中表的数据进行查询。关键字：select、where等

- DCL（Data Control Language）数据控制语言

  ​	用于定义数据库的访问权限和安全级别及创建用户。关键字：GRANT、REVOKE等

![image-20210728111648950](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210728111648950.png)



## DDL：操作数据库、表

### 一、操作数据库：CURD

#### 1、C（Create）：创建

​		创建数据库：`create database 数据库名;`

​		判断是否存在、不存在则创建数据库：`create database if not exists 数据库名; `  

​		创建数据库、指定字符集：`create database 数据库名 character set 字符集(gbk、utf-8);`

​		判断是否存在、存在则创建数据库、指定字符集：`create database if not exists 数据库名 character set 字符集;`

#### 2、R（Retrieve）：查询

​		查询所有数据库名称：`show Databases;`

​		查询某个数据库的字符集（查询某个数据库的创建语句）：`show create database 数据库名;`

#### 3、U（Update）：修改

​		修改数据库的字符集：`alter database 数据库名 character set 字符集(utf8、gbk);`

#### 4、D（Delete）：删除

​		删除数据库：`drop database 数据库名;`

​		判断是否存在、存在则删除数据库：`drop database if exists 数据库名;`

#### 5、使用数据库（进入数据库内）

​		查询当前正在使用的数据库名：`select database();`

​		使用数据库：`use 数据库名;`



### 二、操作表：CURD

#### 1、C（Create）：创建

##### 语法：

```sql
create table 表名(
​	列名1，数据类型1，
​	列名2，数据类型2，
​	....
​	列名n，数据类型n
​);

//注意：最后一列不需要逗号(，)
```

##### 数据库类型：

​		1、int：整数类型

​				`age int`

​		2、double：小数类型

​				`score double(5,2)`   （一共有5位，小数点后面2位）

​		3、date：日期，只包含年月日

​				格式：`yyyy-MM-dd`

​		4、datetime：日期，包含年月日时分秒

​				格式：`yyyy-MM-dd HH:mm:ss`

​		5、timestamp：时间戳，包含年月日时分秒

​				格式：`yyyy-MM-dd HH:mm:ss`

​				注意：如果不给timestamp字段赋值或赋值为null，则默认使用当前的系统时间自动赋值

​		6、varchar：字符串

​				`name varchar(20) `   （表示name字段最大20个字符）

​				注意：“zhangsan”是8个字符，“张三”是2个字符

【以上是常用的数据库类型，下图是所有的数据库字段类型】

##### 数据库类型：

![image-20210728145037945](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210728145037945.png)

BLOB、CLOB、二进制都是存储比较大的数据的类型。

一般不会将大型的数据，比如电影什么的存在数据库里，一般都是存电影的磁盘路径到数据库中。

##### 例子-创建student表

![image-20210728153215239](C:\Users\eshore\AppData\Roaming\Typora\typora-user-images\image-20210728153215239.png)

```sql
create table student(
​	id int,
​	name varchar(32),
​	age int,
​	score double(4,1),
​	birthday date,
​	insert_time timestamp
);
```

##### 复制表：

​		语法：create table 表名 like 被复制的表名;

​			如：`create table stu like student;`

#### 2、R（Retrieve）：查询

​		查询某个数据库中所有表的名称：`show tables;`

​		查询表结构：`desc 表名;`

#### 3、U（Update）：修改

​		修改表名：`alter table 表名 rename to 新的表名;`

​		查看表的字符集：`show create table 表名;`

​		修改表的字符集：`alter table 表名 character set 字符集;`

​		添加列：`alter table 表名 add 列名 数据类型;`

​		修改列的名称、类型：`alter table 表名 change 旧列名 新列名 新数据类型;`

​		只修改列的类型：`alter table 表名 modify 列名 新数据类型;`

​		删除列：`alter table 表名 drop 列名;`

#### 4、D（Delete）：删除

​		删除表：`drop table 表名;`

​		判断是否存在，存在则删除表：`drop table if exists 表名;`









看到2_2_5_18了




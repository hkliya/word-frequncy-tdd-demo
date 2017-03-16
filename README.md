# 使用方法

准备环境：

    npm install

执行测试：

    npm test
    
执行index.js
    
    npm run-script index
    
    
## 需求
写一个程序来计算一个文本文件 words.txt 中每个单词出现的频率。
为了保持简单，假设：

* words.txt 只包含小写字母和空格
* 每个单词只包含小写字母
* 单词之间由一个或多个空格分开

举个例子，假设 words.txt 包含以下内容：
>the day is sunny the the  
the sunny is is

你的程序应当输出如下，按频率倒序排序：
>the 4  
is 3  
sunny 2  
day 1

## Example
* "" => ""，驱动出方法
* "he" => "he 1"，一个单词，驱动出格式化字符串的代码
* "he is" => "he 1\r\nis 1"，两个不同单词，驱动出分割单词的代码
* "he he is" => "he 2\r\nis 1"，有相同单词，驱动出分组代码
* "he is is" => "is 2\r\nhe 1"，驱动出分组后的排序代码
* "he  is" => "he 1\r\nis 1"，多个空格，完善分割单词的代码
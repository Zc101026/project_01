/** 获取 git 仓库的两种方式
 * 1. 需要将本地文件转成仓库 git init  npm init -> package.json
 * 在你的工程根目录 自动生成 .git 隐藏文件
 * 克隆（clone）  git clone 'xxx' 可以将本身储存在云端的仓库复制一份到本地
 * 2. 克隆(clone) git clone 'xxx' 可以将本储存在云端的仓库复制一份到本地
 * 
 * 
 * U： 表示这个文件为被追踪 untrecked
 * A:  表示这个文件已经添加到追踪文件     红色表示：未被暂存   绿色表示: 已被暂存
 * M： 表示这个已经被更改了（modified）   红色表示：未被暂存   绿色表示: 已被暂存
 * 
 * qit status  用来查看当前文件状态
 * 精简方式： git status -s (short)
 * 
 * 
 * git add 文件名称   /  git add .  表示可以将下面的所有文件一次性全部添加到追踪文件
 * 
 * 提交更新: git commit -m '我是一个彩笔！'  （message）
 * 
 * git add 三种作用：
 * 1. 把未被追踪的文件添加到暂存区
 * 2. 把已修改的文件添加到暂存区
 * 3.冲突 -> 解决掉以后， git add 添加到暂存区
 * 
 * a
 */ 
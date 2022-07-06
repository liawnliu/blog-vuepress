# 学习node的准备工作

## node介绍

- [Node.js](https://nodejs.org/en/)是JavaScript的一种运行环境，开源、跨平台、可用于众多流行工具里。
- 也就是说Node.js可以作为JavaScript在服务器上运行的一种形式，在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。
- Node.js 是一个底层的平台，社区在 Node.js 上构建了数千个库，例如：Express、NestJS、Koa、Socket.io等。
- Npm是 Node.js 标准的软件包管理器，解决Node.js部署的很多问题；可以下载别人写好的程序（包、命令行等），也可以自己写程序发布到Npm上。

## Node.js、Npm的安装

- 打开[Node.js官网](https://nodejs.org/en/)，如果很慢就使用[Node.js中文网](http://nodejs.cn/)，选择“Recommended For Most Users（推荐给大多数用户）”，也就是稳定版本。
- 如果你想看nodejs以前发布的版本，可以去[以前的版本](https://nodejs.org/en/download/releases/)查看。
- npm包管理工具是同node.js一并安装的，意思是node.js安装好后npm也随之安装到电脑上了。
- 打开“Git Bash”，没有装Git的可以看一下[Git的使用](Git的使用.md)；或者打开cmd，输入`node --version`可以查看安装的node是什么版本的，输入`npm --version`可以查看安装的npm是什么版本的。

## 使用nvm管理node的版本

- 在工作当中会遇到一个项目使用10.01版本，另一可能是使用的8.0.1版本，需要切换到对应的版本，那就得使用**nvm**来**管理**本地的node**版本**。
- 如果是Windows系统，可以在[GitHub](https://github.com/)里搜索`nvm-windows`
  - 在搜索结果列表里选择[coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
  - 进入之后找到“Download”字样，点击它进入下载页，可以选择`nvm-setup.zip`进行下载安装。可以选择稳定一点的版本。
- 如果是苹果系统，可以使用**brew**来安装**nvm**
  - 进入[brew官网](https://brew.sh/index_zh-cn)，复制一行代码`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`到电脑命令行里运行，就能安装好**brew**。
  - 然后运行`brew install nvm`就可以使用**brew**来安装**nvm**了。
- 如果`nvm`命令不存在，那就是nvm安装目录下运行`nvm.exe`，然后在命令窗口下输入`nvm on`表示开启nvm。
- 安装好**nvm**之后，我们命令行里使用`nvm list`查看当前所有的node版本，`nvm install v10.13.0`安装指定版本的node版，`nvm use 10.13.0`切换到指定版本。

## node相关问题

1. `nvm`命令不存在
  - 去`nvm`安装目录下运行`nvm.exe`，然后在命令窗口下输入`nvm on`表示开启nvm。
2. `node`命令不存在
  - 在运行完`nvm install v10.13.0`后一定要运行`nvm use 10.13.0`，它会给node配置环境变量等。
3. `exit status 1: You do not have sufficient privilege to perform this operation.`
  - 暂时不用Git Bash，要使用管理员身份运行cmd命令窗口，然后输入`nvm use 10.13.0`就可以切换nodejs版本了。

## 服务端和客户端开发区别

- 服务稳定性：server端可能会遭到各种恶意攻击和误操作。单个客户端可以意外挂掉，但是服务端不能。（PM2做进程守护）
- 考虑内存和CPU：客户端独占一个浏览器，内存和CPU都不是问题。server端要承载很多请求，CPU和内存都是稀缺资源。（stream写日志来优化内存和CPU，redis写session来扩展内存和CPU）
- 日志记录：前端也会参与日志记录，但只是日志的发起放，不关心后续。server端要记录日志、存储日志、分析日志，前端不关心。
- 安全：server端要随时准备接收各种恶意攻击，前端则很少。越权操作、数据库攻击等。（登录验证，预防xss攻击和sql注入）
- 集群和服务拆分：产品发展速度快，流量可能迅速增加。如何通过扩展机器和服务拆分来承载大流量。

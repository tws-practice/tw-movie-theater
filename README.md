# 练习：思沃影院

## 练习目标

- 团队协作能力
- 代码规范
- Git协作开发
- TDD实战

## 练习要求

#### 总体规则

- 教练将需要完成的功能以[用户故事](http://www.cnblogs.com/henryhappier/archive/2011/02/23/1962617.html)的形式提供给学员团队，每个人选择一张卡负责完成
- 可以与其他成员[结对编程](http://www.infoq.com/cn/articles/introducing-pair-programming)，但每个用户故事有且只有一个负责人
- 每个团队选出一名技术带头人，带领团队一起解决技术难题，确保项目如期交付

#### 界面规范

- 教练给学员提供产品原型以便沟通需求
- 原型中的功能必须实现，但具体设计不作限制

#### 代码规范

- 每个用户故事的开发必须以TDD的方式完成（先写测试后实现功能）
- 为每个用户故事创建一个[Git分支](https://github.com/geeeeeeeeek/git-recipes/wiki/3.4-%E4%BD%BF%E7%94%A8%E5%88%86%E6%94%AF)（基于最新的master分支），完成后[提交Pull Request](https://github.com/geeeeeeeeek/git-recipes/wiki/3.3-%E5%88%9B%E5%BB%BA-Pull-Request)（申请将完成的代码合并到master分支）
- 技术带头人负责处理团队成员提交的[Pull Request](https://github.com/geeeeeeeeek/git-recipes/wiki/3.3-%E5%88%9B%E5%BB%BA-Pull-Request#john-%E6%8E%A5%E5%8F%97%E4%BA%86-pull-request)，必须确保Pull Request中的代码测试通过（每个Javascript函数至少有一个测试覆盖）并且功能可用，方才能接收。

#### 流程规范

- 每天早上站会互通开发进展（包括遇到的困难）
- 每天下午code review，相互熟悉其他用户故事的代码实现，确保所有用户故事的代码合并后能正常运行

#### 项目资源

- 产品原型：见代码库根目录的`prototype.svg`文件
- 用户故事：见代码库根目录的`user-stories.md`文件
- 技术选型（仅供参考，不作限制）：见代码库根目录的`technology.md`文件
- 电影数据（仅供参考，不作限制）：见代码库根目录的`movies.csv`文件

### 输出结果

将团队练习代码库地址提交到教练指定的位置。

代码库需包含：

1. 说明如何运行和测试代码的README.md文件
2. 运行结果截图的result.png文件

## 如何开始：

1. 由每个团队的技术负责人[Fork](https://github.com/geeeeeeeeek/git-recipes/wiki/3.3-%E5%88%9B%E5%BB%BA-Pull-Request#mary-fork%E4%BA%86%E5%AE%98%E6%96%B9%E9%A1%B9%E7%9B%AE)一份项目[启动代码库](https://github.com/tws-practice/tw-movie-theater)，将所有成员加为fork后代码库的[collaborators](https://github.com/waylau/github-help/blob/master/Adding%20collaborators%20to%20a%20personal%20repository%20%E6%B7%BB%E5%8A%A0%E5%90%88%E4%BD%9C%E8%80%85%E5%88%B0%E4%B8%AA%E4%BA%BA%E7%9A%84%E5%BA%93.md)，共同使用这一代码库协作开发

## 学习资源

- git-recipes：[https://github.com/geeeeeeeeek/git-recipes/wiki](https://github.com/geeeeeeeeek/git-recipes/wiki)
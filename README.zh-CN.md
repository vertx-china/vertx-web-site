# vertx 4的官网翻译项目 ![Node.js CI](https://github.com/vertx-china/vertx-web-site/workflows/Node.js%20CI/badge.svg)

## 本地运行

本项目运行环境为node 12, python 2.7, java14以下
 
要在本地运行，如果是非windows系统，按[英文文档](README.md)里的步骤一步一步来跑，问题不是很大。

windows系统需要修改package.json里的 `update-docs` 的命令为 `cd docs && gradlew`。
如果需要在本地执行build，还需要删除build命令中的 `rm -rf .next out`

## 翻译说明
### 如何认领
Issues 里面带 `待认领` 标签的都是 [需要翻译的文档](https://github.com/vertx-china/vertx-web-site/issues?q=is%3Aopen+is%3Aissue+label%3A%E5%BE%85%E8%AE%A4%E9%A2%86)。 

也可以在 [V4.0.2文档翻译计划](https://github.com/vertx-china/vertx-web-site/projects/1) 的左侧 `未翻译` 列中找到需要翻译的文档。

请在想翻译的文档对应 issue 下面留言认领，我们会Assign给你，并修改issue标签等。

### 翻译注意事项
请 Fork 本项目再进行翻译。

除文档外，其他翻译直接翻译项目内的文件。

文档翻译需要翻译的是 `docs/translation` 目录。翻译完一个模块后，请在 `docs/metadata/*.jsx` 中搜索对应模块的简介并翻译（对应文档首页的简介）。

翻译原则上，建议中文段落和英文段落行数一致，这样在合并英文版本时，可以更清晰的发现文档中的冲突并解决。

目录的跳转是根据锚点来实现，但中文的标题处理的锚点似乎有问题，因此建议给所有标题添加上锚点，使页内跳转能正常运行。示例：

```asciidoc
[[id]]
# 标题

使用<<id, 标题>>可以跳转到上面的标题处，其中id是锚点的id，“标题” 则是显示的内容。
```
> 英文文档里省略了id，直接使用了英文标题，但翻译成中文后，`<<标题>>` 中的中文标准就定位不了。因此需要按上述示例中那样来
> 精确定位。同时，为了确保中英文一致，建议这里的id使用官网上的id，具体方法就是点击官网上（或者在未翻译时在本地执行）的链接跳转后
> 使用地址栏#后面的内容，比如上面的示例，在地址栏中的链接应该是 http://localhost:3000/docs/xxx/#id

如果是通过 `npm run dev` 来预览的话，翻译完成后，刷新即可看到翻译后的文档。

### 如何提交
提交翻译通过PR（Pull Request）进行。请在自己Fork的项目中发起PR，而不是本项目（本项目Fork了官方项目，若在本项目发起PR，默认会提交到官方项目）。

PR的描述中请注明对应的issue ID，如： `完成 #23 翻译`。

提交PR后，我们会分配 Reviewer； Review 文档给出的建议，可以:
1. 直接在github页面对应修改意见里点击 `Commit Suggestion` 按钮直接提交；
2. 在github页面对应修改意见里点击 `Batch suggestion to batch`，接受多个修改意见后，在上方的 `Commit suggestions` 统一提交；
3. 也可以自己在本地修改后直接提交，然后在github页面对应修改意见里面点击 `Resolve Conversation`。

![image](https://user-images.githubusercontent.com/13050963/107318381-9b3e5b00-6ad7-11eb-9aa6-37a61b1b06f6.png)

![image](https://user-images.githubusercontent.com/13050963/107318576-0c7e0e00-6ad8-11eb-9007-bc5cb5af71f4.png)

### 如何 Review
分配Reviewer后Github会发送邮件，也可以主动到 PR 列表里找感兴趣的文档协助Review。 

在具体PR页面里，点击 `Files changed` 标签页可以看到该PR的修改内容。在有修改意见或疑问的行，点击左边的加号，可以评论，或加入修改意见（点击 `Insert a suggestion` 按钮）。

![](https://user-images.githubusercontent.com/13050963/107318109-f754af80-6ad6-11eb-9096-e9b90f86a5f1.png)

review完毕后，点击左上角 `Review changes`，有三个选项：
- `Comment` ： 只提交评论
- `Approve` : 觉得PR没问题，同意修改内容
- `Request Change` : 觉得PR还需要进一步修改

## 分支说明

翻译只翻译master分支，因为创建的其他分支最终需要合并到master分支。

english分支与master分支的区别是：`english分支` 的 translation目录为当前版本的英文文档。主要是版本升级时，更新英文文档时用。
 
## 版本更新操作说明

当vert.x发布新的版本，english分支需要更新为最新英文文档，而master分支需要将当前文档复制一份到 `docs/translation/x.x.x` 目录
中去，其中 `x.x.x` 为当前文档的版本。然后合并english分支到当前分支，并解决相应冲突。解决的方案如下

1. 英文删除的。对应的翻译也删除（如果遵守了前面提到的英文行数和中文行数对应的话，应该比较好找到）
2. 英文增加。因为没有翻译，所以保留英文部分，或者可以安排人立即翻译
3. 英文修改。TODO 此处需要讨论之后定

english分支更新文档可合并 https://github.com/vertx-web-site/vertx-web-site 项目后，执行下面脚本来更新。

```shell
# 非win 系统
cd docs && ./gradlew copyEnglish
# win 系统
cd docs && gradlew.bat copyEnglish
```


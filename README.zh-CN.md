# vertx 4的官网翻译项目 ![Node.js CI](https://github.com/vertx-china/vertx-web-site/workflows/Node.js%20CI/badge.svg)

## 本地运行

本项目运行环境为node 12, python 2.7, java14以下
 
要在本地运行，如果是非windows系统，按[英文文档](README.md)里的步骤一步一步来跑，问题不是很大。

windows系统需要修改package.json里的 `update-docs` 的命令为 `cd docs && gradlew`。
如果需要在本地执行build，还需要删除build命令中的 `rm -rf .next out`

## 翻译说明

除文档外，其他翻译直接翻译项目内的文件。

文档翻译需要翻译的是 `docs/translation` 目录

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

> 翻译完成后，需要执行 `npm run update-docs` 更新翻译文档。也可以手动将翻译的文件复制到 `docs/extracted` 目录

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


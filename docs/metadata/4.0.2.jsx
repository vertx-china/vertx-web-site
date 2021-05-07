import oldDocs from "./4.0.0"
import { clone, find } from "./helpers"

// never forget to clone the old docs first!
const docs = clone(oldDocs)

const kotlinDocs = find(docs, "vertx-lang-kotlin")
kotlinDocs.edit = "https://github.com/vertx-china/vertx-web-site/edit/master/docs/translation/vertx-core/kotlin/index.adoc"
kotlinDocs.name = "Kotlin 版 Vert.x"
kotlinDocs.description = "Vert.x 的 Kotlin 绑定及帮助。"
const groovyDocs = find(docs, "vertx-lang-groovy")
groovyDocs.edit = "https://github.com/vertx-china/vertx-web-site/edit/master/docs/translation/vertx-core/groovy/index.adoc"
groovyDocs.name = "Groovy 版 Vert.x"
groovyDocs.description = "Vert.x 的 Groovy 绑定及帮助。"

export default docs

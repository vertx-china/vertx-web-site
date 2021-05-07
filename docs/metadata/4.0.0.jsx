import { Book, Monitor } from "react-feather"
import { Groovy, Kotlin } from "@icons-pack/react-simple-icons"
import oldDocs from "./3.9.4"
import { clone, find, findCategory, insert, move, remove } from "./helpers"

// never forget to clone the old docs first!
const docs = clone(oldDocs)

// override old categories
docs.categories = [
  findCategory(docs, "core"),
  findCategory(docs, "web"),
  findCategory(docs, "clustering"),
  findCategory(docs, "testing"),
  {
    id: "standards",
    name: "规范",
    icon: <Book />
  },
  {
    id: "kotlin",
    name: "Kotlin",
    icon: <Kotlin className="no-stroke" />
  },
  {
    id: "groovy",
    name: "Groovy",
    icon: <Groovy className="no-stroke" />
  },
  findCategory(docs, "authentication-and-authorization"),
  findCategory(docs, "databases"),
  findCategory(docs, "messaging"),
  findCategory(docs, "integration"),
  findCategory(docs, "event-bus-bridges"),
  {
    id: "monitoring",
    name: "监控",
    icon: <Monitor />
  },
  findCategory(docs, "services"),
  findCategory(docs, "reactive"),
  findCategory(docs, "microservices"),
  findCategory(docs, "devops")
]

// remove old entries
remove(docs, "vertx-web-api-contract")
remove(docs, "vertx-sync")
remove(docs, "vertx-lang-kotlin-coroutines")
remove(docs, "vertx-auth-jdbc")
remove(docs, "vertx-auth-shiro")
remove(docs, "vertx-sql-common")
remove(docs, "vertx-mysql-postgresql-client")
remove(docs, "vertx-amqp-bridge")
remove(docs, "vertx-docker")
remove(docs, "vertx-stack-manager")
remove(docs, "vertx-service-factory")
remove(docs, "vertx-maven-service-factory")
remove(docs, "vertx-http-service-factory")

// reorder entries
move(docs, "vertx-auth-oauth2", "vertx-auth-jwt")
find(docs, "vertx-stomp").category = "integration"
find(docs, "vertx-mqtt").category = "messaging"
move(docs, "vertx-mqtt", "vertx-mail-client")
find(docs, "vertx-kafka-client").category = "messaging"
move(docs, "vertx-kafka-client", "vertx-amqp-client")
move(docs, "vertx-mail-client", "vertx-stomp")
find(docs, "vertx-dropwizard-metrics").category = "monitoring"
find(docs, "vertx-micrometer-metrics").category = "monitoring"
find(docs, "vertx-health-check").category = "monitoring"

// insert new entries
insert(docs, "vertx-web-api-service",
  {
    id: "vertx-web-validation",
    name: "网络校验",
    description: "一个声明式解析和校验HTTP请求的类库。",
    category: "web",
    href: "/vertx-web-validation/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web-validation/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-examples#http-request-validation-and-openapi-3-router-factory"
  },
  {
    id: "vertx-web-openapi",
    name: "Web OpenAPI",
    description: "扩展Vert.x Web以支持OpenAPI 3，并为构建符合OpenAPI要求的Web路由器提供了一个简单的界面。",
    category: "web",
    href: "/vertx-web-openapi/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web-openapi/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-examples#http-request-validation-and-openapi-3-router-factory"
  }
)

docs.entries.push({
  id: "vertx-json-schema",
  name: "JSON Schema",
  description: "Json模式规范的扩展实现，以异步的方式来校验每一个Json数据结构。",
  category: "standards",
  href: "/vertx-json-schema/java/",
  repository: "https://github.com/eclipse-vertx/vertx-json-schema",
  edit: "https://github.com/eclipse-vertx/vertx-json-schema/tree/master/src/main/asciidoc",
  label: "Technical Preview"
})

docs.entries.push({
  id: "vertx-lang-groovy",
  name: "Groovy 版 Vert.x",
  description: "Vert.x 的 Groovy 绑定及帮助。",
  category: "groovy",
  href: "/vertx-core/groovy/",
  repository: "https://github.com/vert-x3/vertx-lang-groovy",
  edit: "https://github.com/vert-x3/vertx-lang-groovy/tree/master/src/main/asciidoc"
})

docs.entries.push({
  id: "vertx-lang-kotlin",
  name: "Kotlin 版 Vert.x",
  description: "Vert.x 的 Kotlin 绑定及帮助。",
  category: "kotlin",
  href: "/vertx-core/kotlin/",
  repository: "https://github.com/vert-x3/vertx-lang-kotlin",
  edit: "https://github.com/vert-x3/vertx-lang-kotlin/tree/master/vertx-lang-kotlin/src/main/asciidoc"
})

docs.entries.push({
    id: "vertx-lang-kotlin-coroutines",
    name: "Kotlin 协程",
    description: "Vert.x 对 Kotlin 协程的支持，提供如 async/await 或 类似 Go 通道的强大支持。由此您可用熟悉的顺序风格编写 Verticle 代码。",
    category: "kotlin",
    href: "/vertx-lang-kotlin-coroutines/kotlin/",
    repository: "https://github.com/vert-x3/vertx-lang-kotlin",
    edit: "https://github.com/vert-x3/vertx-lang-kotlin/tree/master/vertx-lang-kotlin/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/kotlin-examples/coroutines"
})

insert(docs, "vertx-auth-mongo",
  {
    id: "vertx-auth-webauthn",
    name: "Webauthn Auth",
    description: "FIDO2 WebAuthn (password-less) implementation.",
    category: "authentication-and-authorization",
    href: "/vertx-auth-webauthn/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-webauthn",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-webauthn/src/main/asciidoc"
  },
  {
    id: "vertx-auth-sql-client",
    name: "SQL 客户端鉴权与授权",
    description: "基于Vert.x SQL客户端和关系型数据库的身份验证和授权支持。",
    category: "authentication-and-authorization",
    href: "/vertx-auth-sql-client/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-sql-client",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-sql-client/src/main/asciidoc"
  }
)

insert(docs, "vertx-auth-htdigest",
  {
    id: "vertx-auth-properties",
    name: "属性鉴权与授权",
    description: "基于 Java 属性文件的鉴权与授权支持。",
    category: "authentication-and-authorization",
    href: "/vertx-auth-properties/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-properties",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-properties/src/main/asciidoc"
  },
  {
    id: "vertx-auth-ldap",
    name: "LDAP Auth",
    description: "Implementation using JDK built-in LDAP capabilities.",
    category: "authentication-and-authorization",
    href: "/vertx-auth-ldap/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-ldap",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-ldap/src/main/asciidoc"
  },
  {
    id: "vertx-auth-htpasswd",
    name: ".htpasswd 鉴权与授权",
    description: <>基于 <code>.htpasswd</code> 文件的鉴权与授权支持。</>,
    category: "authentication-and-authorization",
    href: "/vertx-auth-htpasswd/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htpasswd",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htpasswd/src/main/asciidoc"
  }
)

insert(docs, "vertx-mongo-client",
  {
    id: "vertx-sql-client-templates",
    name: "SQL 客户端模版",
    description: "一个旨在促进SQL查询执行和数据操作的小型库。",
    category: "databases",
    href: "/vertx-sql-client-templates/java/",
    repository: "https://github.com/eclipse-vertx/vertx-sql-client",
    edit: "https://github.com/eclipse-vertx/vertx-sql-client/tree/master/vertx-sql-client-templates/src/main/asciidoc"
  }
)

insert(docs, "vertx-dropwizard-metrics",
  {
    id: "vertx-zipkin",
    name: "Zipkin",
    description: "基于 Zipkin 的分布式链路追踪。",
    category: "monitoring",
    href: "/vertx-zipkin/java/",
    repository: "https://github.com/eclipse-vertx/vertx-tracing/tree/master/vertx-zipkin",
    edit: "https://github.com/eclipse-vertx/vertx-tracing/tree/master/vertx-zipkin/src/main/asciidoc"
  },
  {
    id: "vertx-opentracing",
    name: "OpenTracing",
    description: "基于 OpenTracing 的分布式链路追踪。",
    category: "monitoring",
    href: "/vertx-opentracing/java/",
    repository: "https://github.com/eclipse-vertx/vertx-tracing/tree/master/vertx-opentracing",
    edit: "https://github.com/eclipse-vertx/vertx-tracing/tree/master/vertx-opentracing/src/main/asciidoc"
  }
)

// remove labels
delete find(docs, "vertx-amqp-client").label
delete find(docs, "vertx-db2-client").label
delete find(docs, "vertx-pg-client").label
delete find(docs, "vertx-mysql-client").label
delete find(docs, "vertx-web-graphql").label

// update examples
for (let entry of docs.entries) {
  if (entry.examples !== undefined) {
    entry.examples = entry.examples
      .replace(/3\.x/, "4.x")
      .replace("reactive-sql-client-examples", "sql-client-examples")
  }
  entry.edit = `https://github.com/vertx-china/vertx-web-site/tree/master/docs/translation/${entry.id}/java`
}
find(docs, "vertx-lang-kotlin-coroutines").edit = "https://github.com/vertx-china/vertx-web-site/edit/master/docs/translation/vertx-lang-kotlin-coroutines/kotlin/index.adoc"
find(docs, "vertx-lang-kotlin").edit = "https://github.com/vertx-china/vertx-web-site/edit/master/docs/translation/vertx-core/kotlin/index.adoc"
find(docs, "vertx-lang-groovy").edit = "https://github.com/vertx-china/vertx-web-site/edit/master/docs/translation/vertx-core/groovy/index.adoc"

export default docs

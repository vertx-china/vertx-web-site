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
    name: "Standards",
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
    name: "Monitoring",
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
    name: "Web Validation",
    description: `A library to declaratively parse and validate incoming Vert.x
      Web HTTP requests.`,
    category: "web",
    href: "/vertx-web-validation/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web-validation/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-examples#http-request-validation-and-openapi-3-router-factory"
  },
  {
    id: "vertx-web-openapi",
    name: "Web OpenAPI",
    description: `Extends Vert.x Web to support OpenAPI 3, bringing a simple
      interface for building web routers that conform to OpenAPI contracts.`,
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
  description: `An extensible implementation of the Json Schema specification
    to validate every JSON data structure, asynchronously.`,
  category: "standards",
  href: "/vertx-json-schema/java/",
  repository: "https://github.com/eclipse-vertx/vertx-json-schema",
  edit: "https://github.com/eclipse-vertx/vertx-json-schema/tree/master/src/main/asciidoc",
  label: "Technical Preview"
})

docs.entries.push({
  id: "vertx-lang-groovy",
  name: "Vert.x for Groovy",
  description: "Groovy bindings and helpers for Vert.x.",
  category: "groovy",
  href: "/vertx-core/groovy/",
  repository: "https://github.com/vert-x3/vertx-lang-groovy",
  edit: "https://github.com/vert-x3/vertx-lang-groovy/tree/master/src/main/asciidoc"
})

docs.entries.push({
  id: "vertx-lang-kotlin",
  name: "Vert.x for Kotlin",
  description: "Kotlin bindings and helpers for Vert.x.",
  category: "kotlin",
  href: "/vertx-core/kotlin/",
  repository: "https://github.com/vert-x3/vertx-lang-kotlin",
  edit: "https://github.com/vert-x3/vertx-lang-kotlin/tree/master/vertx-lang-kotlin/src/main/asciidoc"
})

docs.entries.push({
    id: "vertx-lang-kotlin-coroutines",
    name: "Kotlin coroutines",
    description: `Kotlin coroutines for Vert.x, gives you super powers such as
      async/await or Go-like channels. This enables you to write your verticle
      code in a familiar sequential style.`,
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
    name: "SQL Client Auth",
    description: `Authentication and authorization support based on the Vert.x
      SQL client and a relational database.`,
    category: "authentication-and-authorization",
    href: "/vertx-auth-sql-client/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-sql-client",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-sql-client/src/main/asciidoc"
  }
)

insert(docs, "vertx-auth-htdigest",
  {
    id: "vertx-auth-properties",
    name: "Properties Auth",
    description: "Authentication and authorization support based on Java properties files.",
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
    name: ".htpasswd Auth",
    description: <>Authentication and authorization support based on <code>.htpasswd</code> files.</>,
    category: "authentication-and-authorization",
    href: "/vertx-auth-htpasswd/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htpasswd",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htpasswd/src/main/asciidoc"
  }
)

insert(docs, "vertx-mongo-client",
  {
    id: "vertx-sql-client-templates",
    name: "SQL Client Templates",
    description: `一个轻量级的库，旨在增强SQL查询
    和数据的处理`,
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
    description: "Distributed tracing with Zipkin.",
    category: "monitoring",
    href: "/vertx-zipkin/java/",
    repository: "https://github.com/eclipse-vertx/vertx-tracing/tree/master/vertx-zipkin",
    edit: "https://github.com/eclipse-vertx/vertx-tracing/tree/master/vertx-zipkin/src/main/asciidoc"
  },
  {
    id: "vertx-opentracing",
    name: "OpenTracing",
    description: "Distributed tracing with OpenTracing.",
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
    entry.edit = `https://github.com/vertx-china/vertx-web-site/tree/master/docs/translation/${entry.id}/java`
  }
}

export default docs

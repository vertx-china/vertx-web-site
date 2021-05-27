import {
  Box, CheckCircle, Database, Feather, Globe, Grid, Inbox, Key,
  PhoneCall, Search, Send, Share2, Terminal
} from "react-feather"

const categories = [
  {
    id: "core",
    name: "核心",
    icon: <Box />
  },
  {
    id: "web",
    name: "网络",
    icon: <Globe />
  },
  {
    id: "databases",
    name: "数据库",
    icon: <Database />
  },
  {
    id: "reactive",
    name: "响应式",
    icon: <Feather />
  },
  {
    id: "microservices",
    name: "微服务",
    icon: <Search />
  },
  {
    id: "mqtt",
    name: "MQTT",
    icon: <Inbox />
  },
  {
    id: "authentication-and-authorization",
    name: "认证与授权",
    icon: <Key />
  },
  {
    id: "messaging",
    name: "消息机制",
    icon: <Send />
  },
  {
    id: "integration",
    name: "集成",
    icon: <Inbox />
  },
  {
    id: "event-bus-bridges",
    name: "Event bus 桥接",
    icon: <Share2 />
  },
  {
    id: "devops",
    name: "DevOps",
    icon: <Terminal />
  },
  {
    id: "testing",
    name: "测试",
    icon: <CheckCircle />
  },
  {
    id: "clustering",
    name: "集群",
    icon: <Grid />
  },
  {
    id: "services",
    name: "服务",
    icon: <PhoneCall />
  }
]

const entries = [
  // core
  {
    id: "vertx-core",
    name: "Vert.x Core",
    description: `Vert.x core是编写Vert.x应用程序的核心依赖，
    它为HTTP，TCP，UDP，文件系统，
    异步流及许多其他功能模块提供了底层支持。
    许多Vert.x组件也依赖于Vert.x core。`,
    category: "core",
    href: "/vertx-core/java/",
    repository: "https://github.com/eclipse-vertx/vert.x",
    edit: "https://github.com/eclipse-vertx/vert.x/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/core-examples"
  },

  // web
  {
    id: "vertx-web",
    name: "Vert.x Web",
    description: "一款用于编写复杂的现代Web应用以及和HTTP微服务的工具包。",
    category: "web",
    href: "/vertx-web/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-examples"
  },
  {
    id: "vertx-web-client",
    name: "Web 客户端",
    description: "一款具有许多先进功能且易于使用的HTTP和HTTP/2客户端。",
    category: "web",
    href: "/vertx-web-client/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web-client/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-client-examples"
  },
  {
    id: "vertx-web-api-contract",
    name: "Web API Contract",
    description: `Web API Contract supports OpenApi 3 specification for a design
      first approach and provides a validation framework.`,
    category: "web",
    href: "/vertx-web-api-contract/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web-api-contract/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-examples#http-request-validation-and-openapi-3-router-factory"
  },
  {
    id: "vertx-web-api-service",
    name: "Web API 服务",
    description: "直接连接您的OpenAPI 3的web路由器到事件总线服务。",
    category: "web",
    href: "/vertx-web-api-service/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web-api-service/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-api-service-example",
    label: "Technical Preview"
  },
  {
    id: "vertx-web-graphql",
    name: "GraphQL",
    description: "使用 Vert.x Web 实现的 GraphQL 服务器。",
    category: "web",
    href: "/vertx-web-graphql/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web-graphql/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-graphql-examples",
    label: "Technical Preview"
  },

  // databases
  {
    id: "vertx-pg-client",
    name: "PostgreSQL 客户端",
    description: "一款为可扩展性和低开销而设计的PostgreSQL客户端。",
    category: "databases",
    href: "/vertx-pg-client/java/",
    repository: "https://github.com/eclipse-vertx/vertx-sql-client",
    edit: "https://github.com/eclipse-vertx/vertx-sql-client/tree/master/vertx-pg-client/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/reactive-sql-client-examples",
    label: "Technical Preview"
  },
  {
    id: "vertx-mysql-client",
    name: "MySQL 客户端",
    description: "一款轻量级的事件驱动 MySQL 客户端。",
    category: "databases",
    href: "/vertx-mysql-client/java/",
    repository: "https://github.com/eclipse-vertx/vertx-sql-client",
    edit: "https://github.com/eclipse-vertx/vertx-sql-client/tree/master/vertx-mysql-client/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/reactive-sql-client-examples",
    label: "Technical Preview"
  },
  {
    id: "vertx-mongo-client",
    name: "MongoDB 客户端",
    description: "MongoDB 客户端。",
    category: "databases",
    href: "/vertx-mongo-client/java/",
    repository: "https://github.com/vert-x3/vertx-mongo-client",
    edit: "https://github.com/vert-x3/vertx-mongo-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/mongo-examples"
  },
  {
    id: "vertx-redis-client",
    name: "Redis 客户端",
    description: "Redis 客户端。",
    category: "databases",
    href: "/vertx-redis-client/java/",
    repository: "https://github.com/vert-x3/vertx-redis-client",
    edit: "https://github.com/vert-x3/vertx-redis-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/redis-examples"
  },
  {
    id: "vertx-cassandra-client",
    name: "Cassandra 客户端",
    description: "Apache Cassandra 客户端。",
    category: "databases",
    href: "/vertx-cassandra-client/java/",
    repository: "https://github.com/vert-x3/vertx-cassandra-client",
    edit: "https://github.com/vert-x3/vertx-cassandra-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/cassandra-examples"
  },
  {
    id: "vertx-sql-common",
    name: "SQL common",
    description: "Vert.x Common SQL interface.",
    category: "databases",
    href: "/vertx-sql-common/java/",
    repository: "https://github.com/vert-x3/vertx-sql-common",
    edit: "https://github.com/vert-x3/vertx-sql-common/tree/3.9/src/main/asciidoc"
  },
  {
    id: "vertx-jdbc-client",
    name: "JDBC 客户端",
    description: "Vert.x 的 JDBC 支持。",
    category: "databases",
    href: "/vertx-jdbc-client/java/",
    repository: "https://github.com/vert-x3/vertx-jdbc-client",
    edit: "https://github.com/vert-x3/vertx-jdbc-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/jdbc-examples"
  },
  {
    id: "vertx-mysql-postgresql-client",
    name: "MySQL / PostgreSQL client",
    description: "A unified MySQL / PostgreSQL Client.",
    category: "databases",
    href: "/vertx-mysql-postgresql-client/java/",
    repository: "https://github.com/vert-x3/vertx-mysql-postgresql-client",
    edit: "https://github.com/vert-x3/vertx-mysql-postgresql-client/tree/3.8/vertx-mysql-postgresql-client-jasync/src/main/asciidoc",
    label: "Deprecated"
  },

  // reactive
  {
    id: "vertx-rx-java2",
    name: "RxJava 2",
    description: "用于Vert.x API，模块和客户端的 RxJava 2 绑定。",
    category: "reactive",
    href: "/vertx-rx/java2/",
    repository: "https://github.com/vert-x3/vertx-rx",
    edit: "https://github.com/vert-x3/vertx-rx/blob/master/rx-java2/src/main/asciidoc/vertx-rx/java2",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/rxjava-2-examples"
  },
  {
    id: "vertx-rx-java",
    name: "RxJava 1",
    description: "用于Vert.x API，模块和客户端的 RxJava 1 绑定。",
    category: "reactive",
    href: "/vertx-rx/java/",
    repository: "https://github.com/vert-x3/vertx-rx",
    edit: "https://github.com/vert-x3/vertx-rx/tree/master/rx-java/src/main/asciidoc/vertx-rx/java",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/rxjava-1-examples"
  },
  {
    id: "vertx-reactive-streams",
    name: "Reactive Streams",
    description: `Reactive streams的支持，您的应用可用此与其它响应式系统互操作，
      例如Akka和Project Reactor。`,
    category: "reactive",
    href: "/vertx-reactive-streams/java/",
    repository: "https://github.com/vert-x3/vertx-reactive-streams",
    edit: "https://github.com/vert-x3/vertx-reactive-streams/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-sync",
    name: "Vert.x Sync",
    description: `Vertx-sync allows you to deploy verticles that run using
      fibers. This enables you to write your verticle code in a familiar
      sequential style.`,
    category: "reactive",
    href: "/vertx-sync/java/",
    repository: "https://github.com/vert-x3/vertx-sync",
    edit: "https://github.com/vert-x3/vertx-sync/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/sync-examples"
  },
  {
    id: "vertx-lang-kotlin-coroutines",
    name: "Kotlin coroutines",
    description: `Kotlin coroutines for Vert.x, gives you super powers such as
      async/await or Go-like channels. This enables you to write your verticle
      code in a familiar sequential style.`,
    category: "reactive",
    href: "/vertx-lang-kotlin-coroutines/kotlin/",
    repository: "https://github.com/vert-x3/vertx-lang-kotlin",
    edit: "https://github.com/vert-x3/vertx-lang-kotlin/tree/master/vertx-lang-kotlin/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/kotlin-examples/coroutines"
  },

  // microservices
  {
    id: "vertx-service-discovery",
    name: "服务发现",
    description: "发布、查找、绑定任何类型的服务。",
    category: "microservices",
    href: "/vertx-service-discovery/java/",
    repository: "https://github.com/vert-x3/vertx-service-discovery",
    edit: "https://github.com/vert-x3/vertx-service-discovery/tree/master/vertx-service-discovery/src/main/asciidoc"
  },
  {
    id: "vertx-config",
    name: "配置",
    description: "为 Vert.x 应用提供了一种可扩展的配置方式。",
    category: "microservices",
    href: "/vertx-config/java/",
    repository: "https://github.com/vert-x3/vertx-config",
    edit: "https://github.com/vert-x3/vertx-config/tree/master/vertx-config/src/main/asciidoc"
  },
  {
    id: "vertx-circuit-breaker",
    name: "断路器（Circuit Breaker）",
    description: "实现断路器模式以减轻故障。",
    category: "microservices",
    href: "/vertx-circuit-breaker/java/",
    repository: "https://github.com/vert-x3/vertx-circuit-breaker",
    edit: "https://github.com/vert-x3/vertx-circuit-breaker/tree/master/src/main/asciidoc"
  },

  // mqtt
  {
    id: "vertx-mqtt",
    name: "MQTT",
    description: "一款 MQTT 客户端和服务器，兼容 MQTT 3.1.1 。",
    category: "mqtt",
    href: "/vertx-mqtt/java/",
    repository: "https://github.com/vert-x3/vertx-mqtt",
    edit: "https://github.com/vert-x3/vertx-mqtt/tree/master/src/main/asciidoc"
  },

  // authentication
  {
    id: "vertx-auth-common",
    name: "通用认证和授权",
    description: "为您的 Vert.x 应用程序量身定做，用于身份验证和授权的通用API，由多家供应商提供支持。",
    category: "authentication-and-authorization",
    href: "/vertx-auth-common/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-common",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-common/src/main/asciidoc"
  },
  {
    id: "vertx-auth-jdbc",
    name: "JDBC Auth",
    description: "Auth implementation backed by JDBC.",
    category: "authentication-and-authorization",
    href: "/vertx-auth-jdbc/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-jdbc",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-jdbc/src/main/asciidoc"
  },
  {
    id: "vertx-auth-jwt",
    name: "JWT 鉴权与授权",
    description: "JSON Web令牌（JWT）的实现。",
    category: "authentication-and-authorization",
    href: "/vertx-auth-jwt/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-jwt",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-jwt/src/main/asciidoc"
  },
  {
    id: "vertx-auth-shiro",
    name: "Shiro Auth",
    description: "Auth implementation using Apache Shiro.",
    category: "authentication-and-authorization",
    href: "/vertx-auth-shiro/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-shiro",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-shiro/src/main/asciidoc"
  },
  {
    id: "vertx-auth-mongo",
    name: "MongoDB 鉴权与授权",
    description: "基于 MongoDB 的身份验证和授权支持。",
    category: "authentication-and-authorization",
    href: "/vertx-auth-mongo/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-mongo",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-mongo/src/main/asciidoc"
  },
  {
    id: "vertx-auth-oauth2",
    name: "Oauth2 鉴权与授权",
    description: "OAuth2（以及一定程度上 OpenID 连接）实现。",
    category: "authentication-and-authorization",
    href: "/vertx-auth-oauth2/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-oauth2",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-oauth2/src/main/asciidoc"
  },
  {
    id: "vertx-auth-htdigest",
    name: ".htdigest 鉴权与授权",
    description: <>基于 <code>.htdigest</code> 文件的鉴权与授权支持。</>,
    category: "authentication-and-authorization",
    href: "/vertx-auth-htdigest/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htdigest",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htdigest/src/main/asciidoc"
  },

  // messaging
  {
    id: "vertx-amqp-client",
    name: "AMQP 客户端",
    description: "一款用于支持 AMQP 1.0 brokers 和 routers 的客户端。",
    category: "messaging",
    href: "/vertx-amqp-client/java/",
    repository: "https://github.com/vert-x3/vertx-amqp-client",
    edit: "https://github.com/vert-x3/vertx-amqp-client/tree/master/src/main/asciidoc",
    label: "Technical Preview"
  },
  {
    id: "vertx-stomp",
    name: "STOMP",
    description: "一款支持 STOMP 协议的客户端和服务端实现。",
    category: "messaging",
    href: "/vertx-stomp/java/",
    repository: "https://github.com/vert-x3/vertx-stomp",
    edit: "https://github.com/vert-x3/vertx-stomp/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-rabbitmq-client",
    name: "RabbitMQ Client",
    description: "A client for RabbitMQ brokers.",
    category: "messaging",
    href: "/vertx-rabbitmq-client/java/",
    repository: "https://github.com/vert-x3/vertx-rabbitmq-client",
    edit: "https://github.com/vert-x3/vertx-rabbitmq-client/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-amqp-bridge",
    name: "AMQP Bridge",
    description: "A bridge for interacting with an AMQP 1.0 broker or router.",
    category: "messaging",
    href: "/vertx-amqp-bridge/java/",
    repository: "https://github.com/vert-x3/vertx-amqp-bridge",
    edit: "https://github.com/vert-x3/vertx-amqp-bridge/tree/3.9/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/amqp-bridge-examples"
  },

  // integration
  {
    id: "vertx-kafka-client",
    name: "Kafka client",
    description: "A client for Apache Kafka.",
    category: "integration",
    href: "/vertx-kafka-client/java/",
    repository: "https://github.com/vert-x3/vertx-kafka-client",
    edit: "https://github.com/vert-x3/vertx-kafka-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/kafka-examples"
  },
  {
    id: "vertx-mail-client",
    name: "邮件客户端",
    description: "一款用于从您应用程序中发送电子邮件的 SMTP 客户端。",
    category: "integration",
    href: "/vertx-mail-client/java/",
    repository: "https://github.com/vert-x3/vertx-mail-client",
    edit: "https://github.com/vert-x3/vertx-mail-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/mail-examples"
  },
  {
    id: "vertx-consul-client",
    name: "Consul 客户端",
    description: "Consul 客户端。",
    category: "integration",
    href: "/vertx-consul-client/java/",
    repository: "https://github.com/vert-x3/vertx-consul-client",
    edit: "https://github.com/vert-x3/vertx-consul-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/consul-examples"
  },

  // event bus bridges
  {
    id: "vertx-tcp-eventbus-bridge",
    name: "TCP Eventbus Bridge",
    description: `基于简化 TCP 协议建立的应用程序与
      Vert.x 事件总线沟通的桥梁。`,
    category: "event-bus-bridges",
    href: "/vertx-tcp-eventbus-bridge/java/",
    repository: "https://github.com/vert-x3/vertx-tcp-eventbus-bridge",
    edit: "https://github.com/vert-x3/vertx-tcp-eventbus-bridge/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-camel-bridge",
    name: "Camel Bridge",
    description: "Apache Camel 端点和路由与事件总线沟通的桥梁。",
    category: "event-bus-bridges",
    href: "/vertx-camel-bridge/java/",
    repository: "https://github.com/vert-x3/vertx-camel-bridge",
    edit: "https://github.com/vert-x3/vertx-camel-bridge/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/camel-bridge-examples"
  },

  // devops
  {
    id: "vertx-dropwizard-metrics",
    name: "Dropwizard 指标监控",
    description: "使用 Dropwizard 获取并展示 Vert.x Core 组件的监控指标。",
    category: "devops",
    href: "/vertx-dropwizard-metrics/java/",
    repository: "https://github.com/vert-x3/vertx-dropwizard-metrics",
    edit: "https://github.com/vert-x3/vertx-dropwizard-metrics/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/metrics-examples"
  },
  {
    id: "vertx-micrometer-metrics",
    name: "Micrometer 指标监控",
    description: "使用 Micrometer 获取并展示 Vert.x core 组件的监控指标。",
    category: "devops",
    href: "/vertx-micrometer-metrics/java/",
    repository: "https://github.com/vert-x3/vertx-micrometer-metrics",
    edit: "https://github.com/vert-x3/vertx-micrometer-metrics/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-health-check",
    name: "健康检查",
    description: "一个可通过 HTTP 检查系统健康状况的简易 API。",
    category: "devops",
    href: "/vertx-health-check/java/",
    repository: "https://github.com/vert-x3/vertx-health-check",
    edit: "https://github.com/vert-x3/vertx-health-check/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-shell",
    name: "Shell",
    description: "使用命令行接口与 Vert.x 应用程序互动。",
    category: "devops",
    href: "/vertx-shell/java/",
    repository: "https://github.com/vert-x3/vertx-shell",
    edit: "https://github.com/vert-x3/vertx-shell/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-docker",
    name: "Docker",
    description: `These docker images, available from the DockerHub, let you
      run Vert.x applications in Docker containers.`,
    category: "devops",
    href: "/vertx-docker/",
    repository: "https://github.com/vert-x3/vertx-stack",
    edit: "https://github.com/vert-x3/vertx-stack/tree/master/stack-docs/src/main/asciidoc"
  },
  {
    id: "vertx-stack-manager",
    name: "Stack Manager",
    description: `The stack manager (provided in the Vert.x distros) lets you
      add and remove artifacts from your stack.`,
    category: "devops",
    href: "/vertx-stack-manager/stack-manager/",
    repository: "https://github.com/vert-x3/vertx-stack",
    edit: "https://github.com/vert-x3/vertx-stack/tree/master/stack-manager/src/main/asciidoc/stack-manager"
  },

  // testing
  {
    id: "vertx-junit5",
    name: "Vert.x JUnit 5",
    description: "用 Vert.x 和 JUnit 5 来运行异步测试",
    category: "testing",
    href: "/vertx-junit5/java/",
    repository: "https://github.com/vert-x3/vertx-junit5",
    edit: "https://github.com/vert-x3/vertx-junit5/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/junit5-examples"
  },
  {
    id: "vertx-unit",
    name: "Vert.x 单元测试",
    description: "一款旨在配合异步代码使用的单元测试工具。包含有JUnit 4的支持。",
    category: "testing",
    href: "/vertx-unit/java/",
    repository: "https://github.com/vert-x3/vertx-unit",
    edit: "https://github.com/vert-x3/vertx-unit/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/unit-examples"
  },

  // clustering
  {
    id: "vertx-hazelcast",
    name: "Hazelcast 集群",
    description: "基于 Hazelcast 实现的集群管理器。",
    category: "clustering",
    href: "/vertx-hazelcast/java/",
    repository: "https://github.com/vert-x3/vertx-hazelcast",
    edit: "https://github.com/vert-x3/vertx-hazelcast/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-infinispan",
    name: "Infinispan 集群",
    description: "基于 Infinispan 实现的集群管理器。",
    category: "clustering",
    href: "/vertx-infinispan/java/",
    repository: "https://github.com/vert-x3/vertx-infinispan",
    edit: "https://github.com/vert-x3/vertx-infinispan/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-ignite",
    name: "Apache Ignite 集群",
    description: "基于 Apache Ignite 实现的集群管理器。",
    category: "clustering",
    href: "/vertx-ignite/java/",
    repository: "https://github.com/vert-x3/vertx-ignite",
    edit: "https://github.com/vert-x3/vertx-ignite/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-zookeeper",
    name: "Apache Zookeeper 集群",
    description: "基于 Apache Zookeeper 实现的集群管理器。",
    category: "clustering",
    href: "/vertx-zookeeper/java/",
    repository: "https://github.com/vert-x3/vertx-zookeeper",
    edit: "https://github.com/vert-x3/vertx-zookeeper/tree/master/src/main/asciidoc"
  },

  // services
  {
    id: "vertx-grpc",
    name: "gRPC",
    description: "使用 Vert.x 实现的 gRPC 客户端和服务器。",
    category: "services",
    href: "/vertx-grpc/java/",
    repository: "https://github.com/vert-x3/vertx-grpc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/grpc-examples",
    edit: "https://github.com/vert-x3/vertx-grpc/tree/master/vertx-grpc/src/main/asciidoc"
  },
  {
    id: "vertx-service-proxy",
    name: "服务代理",
    description: "代理允许像在本地一样调用远程事件总线上的服务。",
    category: "services",
    href: "/vertx-service-proxy/java/",
    repository: "https://github.com/vert-x3/vertx-service-proxy",
    edit: "https://github.com/vert-x3/vertx-service-proxy/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/service-proxy-examples"
  },
  {
    id: "vertx-sockjs-service-proxy",
    name: "SockJS 服务代理",
    description: "允许从JavaScript（Web浏览器或 Node.js）中调用事件总线服务。",
    category: "services",
    href: "/vertx-sockjs-service-proxy/java/",
    repository: "https://github.com/vert-x3/vertx-sockjs-service-proxy",
    edit: "https://github.com/vert-x3/vertx-sockjs-service-proxy/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/service-proxy-examples"
  },
  {
    id: "vertx-service-factory",
    name: "Service Factories",
    description: "How to package and deploy Vert.x independent services.",
    category: "services",
    href: "/vertx-service-factory/java/",
    repository: "https://github.com/vert-x3/vertx-service-factory",
    edit: "https://github.com/vert-x3/vertx-service-factory/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-maven-service-factory",
    name: "Maven Service Factory",
    description: "This lets you dynamically install and deploy services from Maven at run-time.",
    category: "services",
    href: "/vertx-maven-service-factory/java/",
    repository: "https://github.com/vert-x3/vertx-maven-service-factory",
    edit: "https://github.com/vert-x3/vertx-maven-service-factory/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/maven-service-factory-examples"
  },
  {
    id: "vertx-http-service-factory",
    name: "HTTP Service Factory",
    description: `This lets you dynamically install and deploy services from an
      HTTP server (for example Bintray) at run-time.`,
    category: "services",
    href: "/vertx-http-service-factory/java/",
    repository: "https://github.com/vert-x3/vertx-http-service-factory",
    edit: "https://github.com/vert-x3/vertx-http-service-factory/tree/master/src/main/asciidoc"
  }
]

export default {
  categories,
  entries
}

import { Box, CheckCircle, Database, Feather, Globe, Grid, Inbox, Key,
  PhoneCall, Search, Send, Share2, Terminal } from "react-feather"

const categories = [
  {
    id: "core",
    name: "Core",
    icon: <Box />
  },
  {
    id: "web",
    name: "Web",
    icon: <Globe />
  },
  {
    id: "databases",
    name: "Databases",
    icon: <Database />
  },
  {
    id: "reactive",
    name: "Reactive",
    icon: <Feather />
  },
  {
    id: "microservices",
    name: "Microservices",
    icon: <Search />
  },
  {
    id: "mqtt",
    name: "MQTT",
    icon: <Inbox />
  },
  {
    id: "authentication-and-authorization",
    name: "Authentication and authorization",
    icon: <Key />
  },
  {
    id: "messaging",
    name: "Messaging",
    icon: <Send />
  },
  {
    id: "integration",
    name: "Integration",
    icon: <Inbox />
  },
  {
    id: "event-bus-bridges",
    name: "Event bus bridges",
    icon: <Share2 />
  },
  {
    id: "devops",
    name: "DevOps",
    icon: <Terminal />
  },
  {
    id: "testing",
    name: "Testing",
    icon: <CheckCircle />
  },
  {
    id: "clustering",
    name: "Clustering",
    icon: <Grid />
  },
  {
    id: "services",
    name: "Services",
    icon: <PhoneCall />
  }
]

const entries = [
  // core
  {
    id: "vertx-core",
    name: "Vert.x Core",
    description: `The Vert.x core APIs contain the backbone for writing Vert.x
      applications and low-level support for HTTP, TCP, UDP, file system,
      asynchronous streams and many other building blocks. It is also used by
      many other components of Vert.x.`,
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
    description: `A tool-kit for writing sophisticated modern web applications
      and HTTP microservices.`,
    category: "web",
    href: "/vertx-web/java/",
    repository: "https://github.com/vert-x3/vertx-web",
    edit: "https://github.com/vert-x3/vertx-web/tree/master/vertx-web/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/web-examples"
  },
  {
    id: "vertx-web-client",
    name: "Web Client",
    description: "An easy-to-use client for HTTP and HTTP/2 with many advanced features.",
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
    name: "Web API Service",
    description: "Directly connect your OpenAPI 3 web routers to event-bus services.",
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
    description: "Implement GraphQL servers with Vert.x web.",
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
    name: "PostgreSQL Client",
    description: "A PostgreSQL client focusing on scalability and low overhead.",
    category: "databases",
    href: "/vertx-pg-client/java/",
    repository: "https://github.com/eclipse-vertx/vertx-sql-client",
    edit: "https://github.com/eclipse-vertx/vertx-sql-client/tree/master/vertx-pg-client/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/reactive-sql-client-examples",
    label: "Technical Preview"
  },
  {
    id: "vertx-mysql-client",
    name: "MySQL Client",
    description: "A lightweight, event-driven client for MySQL.",
    category: "databases",
    href: "/vertx-mysql-client/java/",
    repository: "https://github.com/eclipse-vertx/vertx-sql-client",
    edit: "https://github.com/eclipse-vertx/vertx-sql-client/tree/master/vertx-mysql-client/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/reactive-sql-client-examples",
    label: "Technical Preview"
  },
  {
    id: "vertx-mongo-client",
    name: "MongoDB Client",
    description: "MongoDB client.",
    category: "databases",
    href: "/vertx-mongo-client/java/",
    repository: "https://github.com/vert-x3/vertx-mongo-client",
    edit: "https://github.com/vert-x3/vertx-mongo-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/mongo-examples"
  },
  {
    id: "vertx-redis-client",
    name: "Redis Client",
    description: "Redis client.",
    category: "databases",
    href: "/vertx-redis-client/java/",
    repository: "https://github.com/vert-x3/vertx-redis-client",
    edit: "https://github.com/vert-x3/vertx-redis-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/redis-examples"
  },
  {
    id: "vertx-cassandra-client",
    name: "Cassandra Client",
    description: "Apache Cassandra client.",
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
    name: "JDBC client",
    description: "JDBC support for Vert.x.",
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
    description: "RxJava 2 bindings for the Vert.x APIs, modules and clients.",
    category: "reactive",
    href: "/vertx-rx/java2/",
    repository: "https://github.com/vert-x3/vertx-rx",
    edit: "https://github.com/vert-x3/vertx-rx/blob/master/rx-java2/src/main/asciidoc/vertx-rx/java2",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/rxjava-2-examples"
  },
  {
    id: "vertx-rx-java",
    name: "RxJava 1",
    description: "RxJava 1 bindings for the Vert.x APIs, modules and clients.",
    category: "reactive",
    href: "/vertx-rx/java/",
    repository: "https://github.com/vert-x3/vertx-rx",
    edit: "https://github.com/vert-x3/vertx-rx/tree/master/rx-java/src/main/asciidoc/vertx-rx/java",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/rxjava-1-examples"
  },
  {
    id: "vertx-reactive-streams",
    name: "Reactive Streams",
    description: `Reactive streams support so your applications can interoperate
      with other reactive systems such as Akka and Project Reactor.`,
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
    name: "Service Discovery",
    description: "Publish, lookup and bind any type of service.",
    category: "microservices",
    href: "/vertx-service-discovery/java/",
    repository: "https://github.com/vert-x3/vertx-service-discovery",
    edit: "https://github.com/vert-x3/vertx-service-discovery/tree/master/vertx-service-discovery/src/main/asciidoc"
  },
  {
    id: "vertx-config",
    name: "配置",
    description: "一种用于配置Vert.x应用的可扩展方式。",
    category: "microservices",
    href: "/vertx-config/java/",
    repository: "https://github.com/vert-x3/vertx-config",
    edit: "https://github.com/vert-x3/vertx-config/tree/master/vertx-config/src/main/asciidoc"
  },
  {
    id: "vertx-circuit-breaker",
    name: "Circuit Breaker",
    description: "Implementation of the circuit-breaker pattern to mitigate failures.",
    category: "microservices",
    href: "/vertx-circuit-breaker/java/",
    repository: "https://github.com/vert-x3/vertx-circuit-breaker",
    edit: "https://github.com/vert-x3/vertx-circuit-breaker/tree/master/src/main/asciidoc"
  },

  // mqtt
  {
    id: "vertx-mqtt",
    name: "MQTT",
    description: "A client and server for MQTT, compliant with MQTT 3.1.1.",
    category: "mqtt",
    href: "/vertx-mqtt/java/",
    repository: "https://github.com/vert-x3/vertx-mqtt",
    edit: "https://github.com/vert-x3/vertx-mqtt/tree/master/src/main/asciidoc"
  },

  // authentication
  {
    id: "vertx-auth-common",
    name: "Auth common",
    description: `Common APIs for authentication and authorization for your
      Vert.x applications, backed by several providers.`,
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
    name: "JWT Auth",
    description: "JSON web tokens (JWT) implementation.",
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
    name: "MongoDB Auth",
    description: "Authentication and authorization support based on MongoDB.",
    category: "authentication-and-authorization",
    href: "/vertx-auth-mongo/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-mongo",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-mongo/src/main/asciidoc"
  },
  {
    id: "vertx-auth-oauth2",
    name: "Oauth2 Auth",
    description: "OAuth2 (and to some extent OpenID Connect) implementation.",
    category: "authentication-and-authorization",
    href: "/vertx-auth-oauth2/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-oauth2",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-oauth2/src/main/asciidoc"
  },
  {
    id: "vertx-auth-htdigest",
    name: ".htdigest Auth",
    description: <>Authentication and authorization support based on <code>.htdigest</code> files.</>,
    category: "authentication-and-authorization",
    href: "/vertx-auth-htdigest/java/",
    repository: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htdigest",
    edit: "https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-htdigest/src/main/asciidoc"
  },

  // messaging
  {
    id: "vertx-amqp-client",
    name: "AMQP Client",
    description: "A client for AMQP 1.0 brokers and routers.",
    category: "messaging",
    href: "/vertx-amqp-client/java/",
    repository: "https://github.com/vert-x3/vertx-amqp-client",
    edit: "https://github.com/vert-x3/vertx-amqp-client/tree/master/src/main/asciidoc",
    label: "Technical Preview"
  },
  {
    id: "vertx-stomp",
    name: "STOMP",
    description: "A client and server implementation of the STOMP protocol.",
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
    name: "Mail Client",
    description: "A SMTP client to send emails from your applications.",
    category: "integration",
    href: "/vertx-mail-client/java/",
    repository: "https://github.com/vert-x3/vertx-mail-client",
    edit: "https://github.com/vert-x3/vertx-mail-client/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/mail-examples"
  },
  {
    id: "vertx-consul-client",
    name: "Consul client",
    description: "A client for Consul.",
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
    description: `An event-bus bridge that lets you interact with Vert.x from
      any application over a simple TCP-based protocol.`,
    category: "event-bus-bridges",
    href: "/vertx-tcp-eventbus-bridge/java/",
    repository: "https://github.com/vert-x3/vertx-tcp-eventbus-bridge",
    edit: "https://github.com/vert-x3/vertx-tcp-eventbus-bridge/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-camel-bridge",
    name: "Camel Bridge",
    description: `An event-bus bridge that lets you interact with Apache Camel
      endpoints and routes.`,
    category: "event-bus-bridges",
    href: "/vertx-camel-bridge/java/",
    repository: "https://github.com/vert-x3/vertx-camel-bridge",
    edit: "https://github.com/vert-x3/vertx-camel-bridge/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/camel-bridge-examples"
  },

  // devops
  {
    id: "vertx-dropwizard-metrics",
    name: "Metrics using Dropwizard",
    description: "Captures metrics from Vert.x core components and exposes them using Dropwizard.",
    category: "devops",
    href: "/vertx-dropwizard-metrics/java/",
    repository: "https://github.com/vert-x3/vertx-dropwizard-metrics",
    edit: "https://github.com/vert-x3/vertx-dropwizard-metrics/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/metrics-examples"
  },
  {
    id: "vertx-micrometer-metrics",
    name: "Metrics using Micrometer",
    description: "Captures metrics from Vert.x core components and exposes them using Micrometer.",
    category: "devops",
    href: "/vertx-micrometer-metrics/java/",
    repository: "https://github.com/vert-x3/vertx-micrometer-metrics",
    edit: "https://github.com/vert-x3/vertx-micrometer-metrics/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-health-check",
    name: "Health Check",
    description: "A simple API to expose health checks over HTTP.",
    category: "devops",
    href: "/vertx-health-check/java/",
    repository: "https://github.com/vert-x3/vertx-health-check",
    edit: "https://github.com/vert-x3/vertx-health-check/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-shell",
    name: "Shell",
    description: "Interact with your Vert.x application using a CLI interface.",
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
    description: "Asynchronous testing with Vert.x and JUnit 5.",
    category: "testing",
    href: "/vertx-junit5/java/",
    repository: "https://github.com/vert-x3/vertx-junit5",
    edit: "https://github.com/vert-x3/vertx-junit5/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/junit5-examples"
  },
  {
    id: "vertx-unit",
    name: "Vert.x Unit",
    description: `A unit testing tool-kit designed to work with
      asynchronous code. Includes JUnit 4 support.`,
    category: "testing",
    href: "/vertx-unit/java/",
    repository: "https://github.com/vert-x3/vertx-unit",
    edit: "https://github.com/vert-x3/vertx-unit/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/unit-examples"
  },

  // clustering
  {
    id: "vertx-hazelcast",
    name: "Hazelcast Clustering",
    description: "Cluster manager implementation that uses Hazelcast.",
    category: "clustering",
    href: "/vertx-hazelcast/java/",
    repository: "https://github.com/vert-x3/vertx-hazelcast",
    edit: "https://github.com/vert-x3/vertx-hazelcast/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-infinispan",
    name: "Infinispan Clustering",
    description: "Cluster manager implementation that uses Infinispan.",
    category: "clustering",
    href: "/vertx-infinispan/java/",
    repository: "https://github.com/vert-x3/vertx-infinispan",
    edit: "https://github.com/vert-x3/vertx-infinispan/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-ignite",
    name: "Apache Ignite Clustering",
    description: "Cluster manager implementation that uses Apache Ignite.",
    category: "clustering",
    href: "/vertx-ignite/java/",
    repository: "https://github.com/vert-x3/vertx-ignite",
    edit: "https://github.com/vert-x3/vertx-ignite/tree/master/src/main/asciidoc"
  },
  {
    id: "vertx-zookeeper",
    name: "Apache Zookeeper Clustering",
    description: "Cluster manager implementation that uses Apache Zookeeper.",
    category: "clustering",
    href: "/vertx-zookeeper/java/",
    repository: "https://github.com/vert-x3/vertx-zookeeper",
    edit: "https://github.com/vert-x3/vertx-zookeeper/tree/master/src/main/asciidoc"
  },

  // services
  {
    id: "vertx-grpc",
    name: "gRPC",
    description: "Implement gRPC clients and servers with Vert.x.",
    category: "services",
    href: "/vertx-grpc/java/",
    repository: "https://github.com/vert-x3/vertx-grpc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/grpc-examples",
    edit: "https://github.com/vert-x3/vertx-grpc/tree/master/vertx-grpc/src/main/asciidoc"
  },
  {
    id: "vertx-service-proxy",
    name: "Service Proxies",
    description: "Proxies allow remote event bus services to be called as if they were local.",
    category: "services",
    href: "/vertx-service-proxy/java/",
    repository: "https://github.com/vert-x3/vertx-service-proxy",
    edit: "https://github.com/vert-x3/vertx-service-proxy/tree/master/src/main/asciidoc",
    examples: "https://github.com/vert-x3/vertx-examples/tree/3.x/service-proxy-examples"
  },
  {
    id: "vertx-sockjs-service-proxy",
    name: "SockJS Service Proxies",
    description: "Allow event bus services to be called from JavaScript (web browser or Node.js).",
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

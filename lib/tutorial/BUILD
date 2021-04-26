load("@npm//@bazel/typescript:index.bzl", "ts_project")

ts_project(
    name = "server",
    srcs = ["server.ts"],
    deps = ["@npm//@types/ws"],
    tsconfig = "//:tsconfig.json"
)

ts_project(
    name = "client",
    srcs = ["client.ts"],
    deps = ["@npm//@types/ws"],
    tsconfig = "//:tsconfig.json"
)

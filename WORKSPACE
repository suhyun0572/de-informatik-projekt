workspace(
    name = "workspace",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "55a25a762fcf9c9b88ab54436581e671bc9f4f523cb5a1bd32459ebec7be68a8",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.2.2/rules_nodejs-3.2.2.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)
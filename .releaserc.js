module.exports = {
  branches: "main",
  plugins: [
    [
      "@semantic-release/commit-analyzer", // 此处负责解析commit
      {
        "config": "conventional-changelog-cmyr-config", // 自定义配置，如果不填则是默认的conventional-changelog-angular
        "releaseRules": "./release-rules.js" //自定义配置，如果不填则是默认的conventional-changelog-angular
      }
    ],
    ["@semantic-release/release-notes-generator", //此处生成github-release的日志
      {
        "config": "conventional-changelog-cmyr-config" // 指定配置，这里才是负责生成日志的，也就是说，如果自定义了writerOpts，只有在这里写才会生效
      }
    ],
    [
      "@semantic-release/changelog", //此处会调用上一个插件生成的新增日志，然后合并到原有日志中
      {
        "changelogFile": "CHANGELOG.md",
        "changelogTitle": "# 日志"
      }
    ],
    '@semantic-release/npm', //如果是npm包会自动更新版本号并发布
    '@semantic-release/github', //推送代码回到GitHub
    [
      "@semantic-release/git", //发布release
      {
        "assets": [
          "package.json",
          "CHANGELOG.md"
        ],
      }
    ]
  ],
  "release": {
    "branches": [
      "main"
    ]
  },
}
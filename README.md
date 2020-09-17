## vscode

#### extensions

```json
{
  "recommendations": [
    "aaron-bond.better-comments",
    "abusaidm.html-snippets",
    "bierner.color-info",
    "christian-kohler.path-intellisense",
    "coenraads.bracket-pair-colorizer-2",
    "davidanson.vscode-markdownlint",
    "dbaeumer.vscode-eslint",
    "dotcypress.console-log",
    "dzannotti.vscode-babel-coloring",
    "eamodio.gitlens",
    "emmanuelbeziat.vscode-great-icons",
    "eriklynd.json-tools",
    "esbenp.prettier-vscode",
    "formulahendry.code-runner",
    "gruntfuggly.todo-tree",
    "hollowtree.vue-snippets",
    "hookyqr.beautify",
    "leetcode.vscode-leetcode",
    "ms-azuretools.vscode-docker",
    "ms-ceintl.vscode-language-pack-zh-hans",
    "ms-vscode.js-debug",
    "ms-vscode.js-debug-companion",
    "ms-vscode.js-debug-nightly",
    "ms-vscode.node-debug",
    "ms-vscode.node-debug2",
    "ms-vscode.references-view",
    "ms-vscode.vscode-js-profile-table",
    "msjsdiag.debugger-for-chrome",
    "octref.vetur",
    "pkief.material-icon-theme",
    "pranaygp.vscode-css-peek",
    "ritwickdey.liveserver",
    "sdras.vue-vscode-snippets",
    "shan.code-settings-sync",
    "shd101wyy.markdown-preview-enhanced",
    "streetsidesoftware.code-spell-checker",
    "techer.open-in-browser",
    "tomoki1207.pdf",
    "vincaslt.highlight-matching-tag",
    "vscode-icons-team.vscode-icons",
    "wallabyjs.quokka-vscode",
    "wayou.vscode-todo-highlight",
    "xabikos.javascriptsnippets",
    "zhuangtongfa.material-theme"
  ]
}
```

#### settings

```json
{
  "markdownlint.config": {
    "hard_tab": true,
    "MD013": false,
    "MD010": false
  },
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "wxml": "html",
    "javascript": "javascriptreact"
  },
  "editor.suggestSelection": "recentlyUsedByPrefix",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "workbench.activityBar.visible": true,
  "workbench.statusBar.visible": true,
  "workbench.colorTheme": "One Dark Pro", // 打开文件不覆盖
  "workbench.sideBar.location": "left",
  "workbench.tree.renderIndentGuides": "always",

  "editor.autoClosingBrackets": "always",
  "editor.autoClosingQuotes": "always",
  "editor.tabCompletion": "on",
  "editor.lineHeight": 25, //设置文字行高
  "editor.lineNumbers": "on", //开启行数提示
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.roundedSelection": false,
  "editor.accessibilitySupport": "off",
  "editor.fontLigatures": true,
  // "editor.tabSize": 4,
  "editor.detectIndentation": false,
  "editor.renderWhitespace": "none",
  "editor.renderControlCharacters": true,
  "editor.overviewRulerBorder": false,
  "editor.renderIndentGuides": false,

  ////////////////////////////////////////////////////////////////////////////
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // 快速补全
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    },
    "editor.renderWhitespace": "all",
    // snippet 提示优先（看个人喜欢）
    "editor.snippetSuggestions": "top",
    "editor.tabCompletion": "on"
    // 使用enter 接受提示
    // "editor.acceptSuggestionOnEnter": "on",˝
  },
  ////////////////////////////////////////////////////////////////////////////

  "files.associations": {
    "*.txt": "plaintext",
    "*.ejs": "html",
    "*.js": "javascript",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "debug.node.autoAttach": "off",
  "search.followSymlinks": false, // 关闭快速预览
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "vsicons.dontShowNewVersionMessage": true,
  // 开启 vscode 文件路径导航
  "breadcrumbs.enabled": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  ////////////////////////////////////////////////////////////////////////////

  "prettier.printWidth": 200,
  // "prettier.tabWidth": 4,
  "prettier.disableLanguages": [],
  // "prettier.semi": true,
  // "prettier.singleQuote": true,

  ////////////////////////////////////////////////////////////////////////////
  "liveServer.settings.donotShowInfoMsg": true, //打开自动保存
  "window.zoomLevel": 0,

  ////////////////////////////////////////////////////////////////////////////
  "vetur.validation.template": false,
  "vetur.format.options.useTabs": false, // 去掉代码结尾的分号
  "vetur.format.options.tabSize": 2,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "auto"
    },
    "prettyhtml": {
      "printWidth": 200
    }
  },

  ////////////////////////////////////////////////////////////////////////////

  "merge-conflict.autoNavigateNextConflict.enabled": true,
  "screencastMode.onlyKeyboardShortcuts": true,
  "diffEditor.ignoreTrimWhitespace": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "git.suggestSmartCommit": false,
  "cSpell.language": "en,en-GB,en-US",
  "cSpell.userWords": ["Btns", "Colums", "Waiqin", "apiname", "canclick", "checkin", "checkins", "citem", "datalist"],
  "code-runner.runInTerminal": true,
  "files.exclude": {
    "**/.classpath": true,
    "**/.project": true,
    "**/.settings": true,
    "**/.factorypath": true
  },
  "code-runner.executorMap": {
    "python": "py"
  },
  "code-runner.clearPreviousOutput": true,
  "code-runner.showRunCommandInExplorerContextMenu": false,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.tabSizing": "shrink",
  "files.autoSave": "afterDelay",
  "todo-tree.tree.showScanModeButton": false,
  "terminal.integrated.copyOnSelection": true,
  "terminal.integrated.cursorStyle": "line",
  "remote.SSH.showLoginTerminal": true,

  "remote.extensionKind": {
    "ms-azuretools.vscode-docker": "workspace"
  },
  "liveServer.settings.donotVerifyTags": true,
  "markdown.preview.openMarkdownLinks": "inEditor",
  "markdown.preview.markEditorSelection": false,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,

  "todo-tree.highlights.defaultHighlight": {
    "icon": "alert",
    "type": "text",
    "foreground": "red",
    "background": "white",
    "opacity": 50,
    "iconColour": "blue"
  },
  "todo-tree.highlights.customHighlight": {
    "TODO": {
      "icon": "check",
      "type": "line"
    },
    "FIXME": {
      "foreground": "black",
      "iconColour": "yellow",
      "gutterIcon": true
    }
  },
  "diffEditor.renderSideBySide": true,
  "git.autofetch": true
}
```

### Step

1. 终端进入项目根目录
2. ```bash
   mkdir .vscode && curl https://raw.githubusercontent.com/yanstars/vscode-setting/master/.vscode/global_settings.json --output .vscode/settings.json && curl https://raw.githubusercontent.com/yanstars/vscode-setting/master/.vscode/extensions.json --output .vscode/extensions.json
   ```
3. `vscode`内调出命令面板 `ctrl +command +p`
4. 输入 `重新加载窗口`
5. 重复步骤 `3`
6. 输入：`扩展 推荐的扩展`
7. 左侧扩展栏 , 找到工作区推荐,点击右侧不远处的 `一键下载`
8. 重复步骤 `3` `4`

### 文件内配置

- js，ts 右键 -> 选择格式化工具-> 配置默认程序-> js，ts 默认功能
- md 不用管
- vue 设置为 vuter
- 和本地 vscode 设置配置文件冲突的情况，可以将配置直接粘贴到 vscode 用户配置文件最下面，再修改下冲突配置

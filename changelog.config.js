module.exports = {
    disableEmoji: false,
    format: "{type}: {subject}",
    list: [
        "add",
        "update",
        "change",
        "fix",
        "refactor",
        "remove",
        "test",
        "chore"
    ],
    maxMessageLength: 64,
    minMessageLength: 3,
    questions: ["type", "subject"],
    scopes: [],
    types: {
        add: {
            description: "機能/コード/ファイルの追加",
            value: "add",
        },
        update: {
            description: "新規ではない機能追加",
            value: "update",
        },
        change: {
            description: "仕様変更による機能変更",
            value: "change",
        },
        fix: {
            description: "バグの修正",
            value: "fix",
        },
        refactor: {
            description: "コードのリファクタリング",
            value: "refactor",
        },
        remove: {
            description: "機能/コード/ファイルの削除",
            value: "remove",
        },
        test: {
            description: "テストの追加やテストの修正",
            value: "test",
        },
        chore: {
            description: "自動生成ファイルをコミット",
            value: "chore",
        },
    },
};

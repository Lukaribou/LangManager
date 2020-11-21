"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LanguageManager_1 = require("./LanguageManager");
const Language_1 = require("./Language");
let lm = new LanguageManager_1.LanguageManager()
    .registerLanguage(Language_1.Language.fromObject({
    code: "fr", name: "Français", data: {
        "yellow": "jaune",
        "red": "rouge",
        "blue": "bleu",
        "black": "noir"
    }
})).registerLanguage(Language_1.Language.fromObject({
    code: "en", name: "English", data: {
        "yellow": "red",
        "red": "red",
        "blue": "blue",
        "pink": "pink",
        "grey": ""
    }
}));
console.log(lm.analyze());
//# sourceMappingURL=index.js.map
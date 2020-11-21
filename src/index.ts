import {LanguageManager} from "./LanguageManager";
import {Language} from "./Language";

let lm = new LanguageManager()
    .registerLanguage(Language.fromObject({
        code: "fr", name: "Français", data: {
            "yellow": "jaune",
            "red": "rouge",
            "blue": "bleu",
            "black": "noir"
        }
    })).registerLanguage(Language.fromObject({
        code: "en", name: "English", data: {
            "yellow": "red",
            "red": "red",
            "blue": "blue",
            "pink": "pink",
            "grey": ""
        }
    }));

console.log(lm.analyze());

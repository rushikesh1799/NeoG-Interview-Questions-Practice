var readlineSync = require("readline-sync");

var news = readlineSync.question("What is the news you have ? ");
var sourceOfNews = readlineSync.question(
    "And Could you please tell us what is the source of this news ? "
);
var lowerCaseSourceOfNews = sourceOfNews.toLowerCase();

console.log(
    "---------------------------------------------------------------------"
);

if (
    lowerCaseSourceOfNews == "facebook" ||
    lowerCaseSourceOfNews == "whatsapp" ||
    lowerCaseSourceOfNews == "telegram" ||
    lowerCaseSourceOfNews == "fb" ||
    lowerCaseSourceOfNews == "tg"
) {
    console.log(
        `${news} - This is most probably fake news. Don't believe things that you see on any of the Social Media.`
    );
} else {
    console.log(
        `${news} - This news may be right one but you need to research more to get confirmation.`
    );
}

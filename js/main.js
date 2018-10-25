$(document).ready(function () {
    $(".btn-next").on("click", function () {
        getQuote();
    });
    var content = "";
    var author = "";
    var getQuote = function () {
        $.getJSON("https://v1.hitokoto.cn/?c=a&encode=json", function (json) {
            content = json["hitokoto"];
            author = json["from"];
            $(".quote-content").html(content);
            $(".author-content").html("——" + author);
        });
    }
    getQuote();
});
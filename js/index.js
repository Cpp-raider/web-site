const url = location.href;

function changeLang(obj) {
    if (url == "https://www.ccp-raider.ml/index.html") {
        if (obj.value == "ja") {
            document.location.href = "https://www.ccp-raider.ml/ja/index.html";

        } else if (obj.value == "en") {
            document.location.href = "https://www.ccp-raider.ml/en/index.html";

        }

        return;

    }

    if (obj.value == "ja") {
        if (url.match(new RegExp('/en/'))) {
            const url_ja = url.replace('/en/', '/ja/');
            document.location.href = url_ja;
        }

    } else if (obj.value == "en") {
        if (url.match(new RegExp('/ja/'))) {
            const url_en = url.replace('/ja/', '/en/');
            document.location.href = url_en;
        }

    }

}
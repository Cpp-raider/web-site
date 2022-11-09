const url = location.href;

function changeLang(obj) {
    if (location.pathname == "/index.html" || location.pathname == "") {
        if (obj.value == "ja") {
            document.location.pathname = "/ja/index.html";

        } else if (obj.value == "en") {
            document.location.href = "/en/index.html";
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

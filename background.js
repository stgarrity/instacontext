var contextHandler = function (data) {
    var xhr = new XMLHttpRequest();
    // FIXME creds
    var username = localStorage["username"];
    var password = localStorage["password"];

    if (!username) {
	alert("Please configure your username in Extensions -> InstaContext -> Options");
	return;
    }

    var url = "https://www.instapaper.com/api/add?username=";
    url += username + "&password=" + password + "&url=";

    if (data.linkUrl) {
	url += encodeURIComponent(data.linkUrl);
    } else {
	url += encodeURIComponent(data.pageUrl);
    }

    xhr.onreadystatechange = function () {
	if (xhr.readyState == 4 && xhr.status == 201) {
	    alert("Saved");
	}
    };
    xhr.open("GET", url);
    xhr.send();
};

chrome.contextMenus.create({
	"title":"Send to Instapaper",
	"contexts": ["page", "link"],
        "onclick": contextHandler
});

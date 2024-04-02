.function generateCookie() {
    // Function to generate a random alphanumeric string as UUID
    function generateUUID(){
        var d = (new Date).getTime();
        var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : r & 3 | 8).toString(16)
        });
        return uuid
    }

    var cookieName = "__Host-githubnopartition";
    var cookieValue = "";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName + '=') === 0) {
            cookieValue = cookie.substring(cookieName.length + 1);
            break;
        }
    }

    // Check if cookie already exists
    if (!cookieValue) {
        // Generate a new cookie value if it doesn't exist
        //cookieValue = randomString(12);
        cookieValue = generateUUID();
    }

    // Create a cookie with the generated or existing value (set path to ensure accessibility from parent domain)
    document.cookie = cookieName + "=" + cookieValue + "; Secure; Path=/; SameSite=None;"

    console.log("Cookies created using code on github domain")
}

generateCookie();

function generateCookie() {
    // Function to generate a random 12-digit alphanumeric string
    function randomString(length) {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var result = "";
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    // Generate a random cookie value
    var cookieValue = randomString(12);
    console.log(cookieValue);

    // Create a cookie with the generated value (set path to ensure accessibility from domainB.com)
    //document.cookie = "myCookie=" + cookieValue + "; path=/";
    document.cookie = "__Host-githubchips=" + cookieValue + "; Secure; Path=/; SameSite=None; Partitioned;"
    console.log("Cookies created using code on github domain")
}

generateCookie();

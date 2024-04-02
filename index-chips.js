window.kly = {};
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
function generateCookie() {
    var cookieName = "__Host-githubchips";
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
        cookieValue = generateUUID();
    }

    // Create a cookie with the generated or existing value (set path to ensure accessibility from parent domain)
    var d = new Date();
    d.setTime(d.getTime() + (90 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; Secure;" + expires + "; Path=/; SameSite=None; Partitioned;"

    // Create custom variable to indicate the cookies already created
    // This var will be used on another code as checker to avoid race time condition
    window.kly.UUIDexist = true;

    console.log("Cookies created using code on github domain");
    console.log("Cookies pair : "+cookieName+"="+cookieValue);
}

generateCookie();

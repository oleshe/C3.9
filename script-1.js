document.addEventListener("DOMContentLoaded", function() {
    if (document.cookie.includes('user_sity'))
    {
        user_sity = getCookie('user_sity');
        first_visit.style.cssText = `display: none;`;
        other_visit.style.cssText = `display: ;`;
        visited_sity.textContent = `Ваш город: ${user_sity}`
    }
    else {
        first_visit.style.cssText = `display: ;`;
    }
});

function inputed_value (x) {
    inValue = x.value
    newCookie = "user_sity= " + encodeURIComponent(inValue) + "; max-age=2678400‬";
    document.cookie = newCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

change_sity.onclick = () => {
    document.cookie = "user_sity=none; max-age=-1"
    window.location.reload();
}

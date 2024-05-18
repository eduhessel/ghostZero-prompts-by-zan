
window.onload = function () {
    document.getElementById('commandInput').focus();
}

var formRepeatCheck;
function handleCommand(form) {
    const command = form.query.value.toLowerCase().trim();
    var outputDiv = document.getElementById("terminalOutput");



    if (CheckDomainEndsList(command))
    {
        outputDiv.innerHTML = "Navigating to " + command;
        window.open("https://" + command);
        return false;
    }

    if (checkCommandExists(command)) {
        showNotification();
    }

    switch (command) {
        case "yt":
        case "video":
        case "youtube":
            outputDiv.innerHTML = "Navigating to youtube.com";
            window.open("https://www.youtube.com");
            break;
        case "busca":
        case "search":
        case "google":
            outputDiv.innerHTML = "Navigating to google.com";
            window.open("https://www.google.com/");
            break;
        case "gt":
        case "translate":
        case "tradutor":
            outputDiv.innerHTML = "Navigating to translate.google.com";
            window.open("https://translate.google.com");
            break;
        case "git":
        case "github":
            outputDiv.innerHTML = "Navigating to github.com";
            window.open("https://github.com/");
            break;
        case "gm":
        case "mail":
        case "gmail":
            outputDiv.innerHTML = "Navigating to gmail.com";
            window.open("https://www.gmail.com");
            break;
        case "outlook":
        case "email":
            outputDiv.innerHTML = "Navigating to outlook.live.com";
            window.open("https://outlook.live.com/");
            break;
        case "t":
        case "tw":
        case "twitch":
            outputDiv.innerHTML = "Navigating to twitch.com";
            window.open("https://www.twitch.tv/");
            break;
        case "gpt":
        case "chat":
        case "chatgpt":
            outputDiv.innerHTML = "Navigating to openai.com";
            window.open("https://chat.openai.com/");
            break;
        case "youtubedownloader":
        case "ytd":
            outputDiv.innerHTML = "Accessing Youtube Mp3 Downloads...";
            window.open("https://ytmp3.nu");
            break;
        case "hello":
        case "hi":
            outputDiv.innerHTML = "꧁We🙿LL HELL0 ▜tHeRE..▍꧂▚";
            break;
        case "hacker":
            outputDiv.innerHTML = "You are GOAT!";
            break;
        case "aboutme":
        case "about":
            outputDiv.innerHTML = "Accessing owner's identity";
            window.location.href = "pages/about.html"
            break;
        case "roadmap":
        case "newfeature":
            outputDiv.innerHTML = "Accessing owner's identity";
            window.location.href = "pages/roadmap.html"
            break;
        case "portfolio":
            outputDiv.innerHTML = "Navigating to portfolio";
            window.open("https://eduardohessel.framer.website");
            break;
        case "linkedin":
            outputDiv.innerHTML = "Navigating to linkedin";
            window.open("https://www.linkedin.com/in/eduardo-hessel/");
            break;
        case "cv":
            outputDiv.innerHTML = "Navigating to curriculum";
            window.open("https://read.cv/duwdu");
            break;
        case "colors":
            outputDiv.innerHTML = "Navigating to Color Hunt";
            window.open("https://colorhunt.co/palettes/dark");
            break;
        case "font":
        case "fonts":
            outputDiv.innerHTML = "Navigating to Google Fonts";
            window.open("https://fonts.google.com/");
            break;
        default:
            console.log(form.query.value);
            if (form.query.value == formRepeatCheck) {
                outputDiv.innerHTML = "Searching " + form.query.value;
                window.open("https://www.google.com/search?query=" + form.query.value);
                break;
            }
            else {
                formRepeatCheck = form.query.value;
                outputDiv.innerHTML = "Does not recognize: " + form.query.value + ".<br>Press enter again to submit as Google search";
                break;
            }
    }
    return false;
}

function checkCommandExists(command) {
    const validCommands = [
        "yt", "video", "youtube",
        "busca", "search", "google",
        "gt", "translate", "tradutor",
        "git", "github", "gm", "mail",
        "gmail", "outlook", "email",
        "t", "tw", "twitch", "gpt",
        "chat", "chatgpt", "youtubedownloader",
        "ytd", "hello", "hi", "hacker",
        "aboutme", "about", "portfolio",
        "linkedin", "cv"
    ];
    return validCommands.includes(command);
}

function showNotification() {
    const notification = document.createElement('div');
    notification.id = 'notification';
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="container-notification">
            <img src="../../../static/img/check-icon.svg" alt="Imagem check"/>
            <h4>Success!</h4>
        </div>
    `;

    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'green';
    notification.style.color = '#fff';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '4px';
    notification.style.display = 'none';
    notification.style.zIndex = '1000';

    const containerNotification = notification.querySelector('.container-notification');
    containerNotification.style.display = 'flex';
    containerNotification.style.alignItems = 'center';
    containerNotification.style.justifyContent = 'center';

    const h4 = notification.querySelector('h4');
    h4.style.fontSize = '12px';
    h4.style.fontWeight = '600';
    h4.style.fontFamily = 'Inter, sans-serif';

    const img = notification.querySelector('img');
    img.style.width = '20px';
    img.style.height = '20px';
    img.style.marginRight = '10px';

    document.body.appendChild(notification);

    notification.style.display = 'block';

    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

function processInput(terminalMessage, url) {
    var outputDiv = document.getElementById("terminalOutput");
    outputDiv.innerHTML = terminalMessage;
    window.open(url);
}

function CheckDomainEndsList(userInput)
{
    var domainString = [".com",".org",".net",".info",".biz",".us",".uk",".jp ",".de ",".fr",".edu",".gov",".mil",".co.id",".co.jp"]
    for(var i = 0 ; i < domainString.length;i++)
    {
        if(userInput.endsWith(domainString[i])) return true;
    }
    return false;
}

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
        window.location.href = "https://" + command;
        return false;
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
        case "portfolio":
            outputDiv.innerHTML = "Navigating to portfolio";
            window.open("https://eduardohessel.framer.website");
            break;
        default:
            console.log(form.query.value);
            if (form.query.value == formRepeatCheck) {
                outputDiv.innerHTML = "Searching " + form.query.value;
                window.location.href = "https://www.google.com/search?query=" + form.query.value;
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

function processInput(terminalMessage, url) {
    var outputDiv = document.getElementById("terminalOutput");
    outputDiv.innerHTML = terminalMessage;
    window.location.href = url;
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
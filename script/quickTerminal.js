
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
        case "y":
        case "yt":
        case "youtube":
            processInput("Navigating to youtube.com", "https://www.youtube.com"); break;
        case "google":
            outputDiv.innerHTML = "Navigating to google.com";
            window.location.href = "https://www.google.com"; break;
        case "gt":
        case "translate":
        case "googletranslate":
            outputDiv.innerHTML = "Navigating to translate.google.com";
            window.location.href = "https://translate.google.com"; break;
        case "git":
        case "github":
            outputDiv.innerHTML = "Navigating to github.com";
            window.location.href = "https://www.github.com"; break;
        case "gm":
        case "mail":
        case "gmail":
            outputDiv.innerHTML = "Navigating to gmail.com";
            window.location.href = "https://www.gmail.com"; break;
        case "t":
        case "tw":
        case "twitch":
            outputDiv.innerHTML = "Navigating to twitch.com";
            window.location.href = "https://www.twitch.com"; break;
        case "gpt":
        case "chat":
        case "chatgpt":
            outputDiv.innerHTML = "Navigating to openai.com";
            window.location.href = "https://chat.openai.com/"; break;
        case "lock":
            window.location.href = "/lock.js"; break;
        case "minigame":
        case "terminalminigame":
        case "passwordminigame":
        case "falloutminigame":
            outputDiv.innerHTML = "Opening Minigame...";
            window.location.href = "/passwordminigame.js"; break;
        case "youtubedownloader":
        case "ytd":
            outputDiv.innerHTML = "Accessing Youtube Mp3 Downloads...";
            window.location.href = "https://ytmp3.nu/";
            break;
        //==============================================================
        //Local
        //==============================================================
        case "hello":
        case "hi":
            outputDiv.innerHTML = "꧁We🙿LL HELL0 ▜tHeRE..▍꧂▚"; break;

        case "aboutme":
        case "about":
            outputDiv.innerHTML = "Accessing owner's identity";
            window.location.href = "pages/about.html"
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
    //visit info
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
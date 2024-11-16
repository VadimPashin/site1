document.getElementById("Enter").addEventListener("click", RequireEnter);

var errorParagraph = document.getElementById("EnterError");

var alphabet = ["a","b","c","d","e","f","g","h",
    "i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z","0","1","2","3","4","5",
    "6","7","8","9","_","!","?","A","B","C","D","E",
    "F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","@","#","№",
    "$",";","%","^","*","(",")","-","а","б","в","г",
    "д","е","ё","ж","з","и","й","к","л","м","н","о",
    "п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ",
    "ы","ь","э","ю","я","я","А","Б","В","Г","Д","Е",
    "Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р",
    "С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь",
    "Э","Ю","Я"];




var starterAccaunts = ["user1,234", "usertwo,353", "Путин,Россия_Имба"]
var finalLogins = EncriptAccaunts();




function RequireEnter(){
    var loginText = document.getElementById("login").value;
    var passwordText = document.getElementById("password").value;
    var canAutorize = false;
    var errorText = "Неизвестная ошибка";
    if (loginText != "" && passwordText != ""){
        for (var k = 0; k < finalLogins.length; k++){
            var unencriptedWord = UnencriptWord(finalLogins[k]);
            if (loginText == unencriptedWord.substring(0, loginText.length)){
               if (passwordText == unencriptedWord.substring(loginText.length + 1, unencriptedWord.length)){
                canAutorize = true;
               }
               
            }
            else{
                errorText = "Аккаунт и пароль не совпадают";
            }
        }
    }
    else{
        errorText = "Не указан логин или пароль";
    }
    if (canAutorize){
        document.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
    else {
        errorParagraph.innerHTML = errorText;
        setTimeout(ClearError, 3000);
    }
}

function EncriptAccaunts(){
    var result = [];
    for (var i = 0; i < starterAccaunts.length; i++){
        var currentWord = EncryptWord(starterAccaunts[i]);
        result.push(currentWord);
    }
    return result
}

function EncryptWord(word){
    var finalWord;
    var finalWordSymbols = [];
    var starterWordSymbols = word.split("");
    for (var i = 0; i < starterWordSymbols.length; i++){
        var currentSymbol = starterWordSymbols[i];
        if (currentSymbol != "," && currentSymbol != " "){
            var currentSymbolIndex;
            for (var j = 0; j < alphabet.length; j++){
                if (alphabet[j] == currentSymbol){
                    currentSymbolIndex = j + 3;
                }
            }
            
            if (currentSymbolIndex > alphabet.length){
                currentSymbolIndex -= alphabet.length;
            }
            currentSymbol = alphabet[currentSymbolIndex];
        }
        finalWordSymbols.push(currentSymbol);
    }
    finalWord = finalWordSymbols.join("");
    return finalWord;
}

function UnencriptWord(word){
    var finalWord;
    var finalWordSymbols = [];
    var starterWordSymbols = word.split("");
    for (var i = 0; i < starterWordSymbols.length; i++){
        var currentSymbol = starterWordSymbols[i];
        if (currentSymbol != "," && currentSymbol != " "){
            var currentSymbolIndex;
            for (var j = 0; j < alphabet.length; j++){
                if (alphabet[j] == currentSymbol){
                    currentSymbolIndex = j - 3;
                }
            }
            if (currentSymbolIndex < 0){
                currentSymbolIndex = alphabet.length + currentSymbolIndex;
            }
            currentSymbol = alphabet[currentSymbolIndex];
        }
        
        finalWordSymbols.push(currentSymbol);
    }
    finalWord = finalWordSymbols.join("");
    return finalWord;
}

function ClearError(){
    errorParagraph.innerHTML = "";
}
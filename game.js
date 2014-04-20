var gameState; // 0 - Main menu 1 - Password screen 2 - Load level 3 - Playing 4 - Death 5 - Credits 6 - Instructions 7 - Loading data
var initGameState = false;

function InitGame()
{
	initGameState = true;
	gameState = 7;
}

function ChangeGameState(n)
{
	initGameState = true;
	gameState = n;
}

function UpdateGame()
{
	var oldGameState = gameState;
	switch(gameState)
	{
		case 0:
			if(initGameState) document.getElementById("startMenu").style.display = "block";
			break;
		case 1:
			if(initGameState) document.getElementById("passwordMenu").style.display = "block";
			break;
		case 2:
			levels[level].Init();
			ChangeGameState(3);
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			if(initGameState) StartLoadingData();
			document.getElementById("loadingBar").style.width = "" + ((data.length / dataSrcs.length) * 200) + "px";
			document.getElementById("loadingBar").innerHTML = "" + ((data.length / dataSrcs.length) * 100) + "% loaded";
			if(data.length == dataSrcs.length)
			{
				document.getElementById("loadingScreen").style.display = "none";
				ChangeGameState(0);
			}
			break;
	}
	if(gameState != oldGameState) initGameState = true;
	else initGameState = false;
	preventDefault = (gameState == 3);
	UpdateKeys();
}

function ClickNewGame()
{
	level = 0;
	document.getElementById("startMenu").style.display = "none";
	ChangeGameState(2);
}

function ClickPassword()
{
	document.getElementById("startMenu").style.display = "none";
	ChangeGameState(1);
}

function ClickReturn()
{
	document.getElementById("passwordMenu").style.display = "none";
	ChangeGameState(0);
}

function TryPassword()
{
	var goodPassword = false;
	var password = document.getElementById("passwordBox").value;
	password = password.toUpperCase();
	for(var i = 0; i < numberOfLevels; i++)
	{
		if(password == levels[i].password)
		{
			level = i;
			goodPassword = true;
		}
	}
	if(!goodPassword)
	{
		alert("Invalid password!");
		document.getElementById("passwordBox").value = "";
	}
	else
	{
		document.getElementById("passwordMenu").style.display = "none";
		ChangeGameState(2);
	}
}
var keys = {};
var keyConfig = ["keyLeft", 37, "keyRight", 39]; // Key names followed by keycodes

function UpdateKeys()
{
	for(var i = 0; i < keyConfig.length; i += 2)
	{
		var key = keys[keyConfig[i]];
		var _pressed = pressed[keyConfig[i + 1]];
		if(key)
		{
			if(_pressed)
			{
				if(key.state == 0) key.state = 1;
				else if(key.state == 1) key.state = 2;
			}
			else key.state = 0;
		}
		else
		{
			keys[keyConfig[i]] = {};
			key = keys[keyConfig[i]];
			key.state = 0;
		}
	}
}
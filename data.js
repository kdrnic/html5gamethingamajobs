var dataSrcs = []; // Array of strings containing the URLs for each data to be preloaded
var data = {};

function StartLoadingData()
{
	data.length = 0;
	for(var i = 0; i < dataSrcs.length; i++)
	{
		var extension = dataSrcs[i].substr(dataSrcs[i].length - 4, 4);
		if(extension == ".png")
		{
			var img = new Image();
			img.shortSrc = dataSrcs[i];
			img.src = dataSrcs[i];
			img.onload = function()
			{
				data[this.shortSrc] = this;
				data.length++;
			}
		}
		if((extension == ".wav") || (extension == ".ogg"))
		{
			var snd = new Audio();
			snd.shortSrc = dataSrcs[i];
			snd.src = dataSrcs[i];
			snd.onload = function()
			{
				data[this.shortSrc] = this;
				data.length++;
			}
		}
	}
}
var dataSrcs = []; // Make an array of strings with all the filenames to be loaded
var data = {};

function StartLoadingData()
{
	data.length = 0;
	for(var i = 0; i < dataSrcs.length; i++)
	{
		var extension = dataSrcs[i].substr(dataSrcs[i].length - 4, 4);
		if(extension == ".png")
		{
			console.log("Loading " + dataSrcs[i]);
			var img = new Image();
			img.shortSrc = dataSrcs[i];
			img.src = dataSrcs[i];
			img.onload = function()
			{
				data[this.shortSrc] = this;
				data.length++;
				console.log("Loaded " + this.src);
			}
		}
	}
}
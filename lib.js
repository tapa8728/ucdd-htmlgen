var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h"+level+">" + text + "</h"+level+">"
}

lib.generateOrderedList = function(arrayOfText)
{
    var listitem = "<ol>";
    for(i = 0; i < arrayOfText.length; i++) 
    { 
 	   listitem += "<li>"+ arrayOfText[i] + "</li>";
    }
    return listitem + "</ol>";
}

lib.generateUnorderedList = function(arrayOfText) 
{
    var listitem = "<ul>";
    for(i = 0; i < arrayOfText.length; i++) 
    { 
 	   listitem += "<li>"+ arrayOfText[i] + "</li>";
    }
    return listitem + "</ul>"; 
}

lib.generateTableRow = function (arrayOfText) 
{
    var listitem = "<table><tr>";
    for(i = 0; i < arrayOfText.length; i++) 
    { 
 	   listitem += "<td>"+ arrayOfText[i] + "</td>";
    }
    return listitem + "</tr></table>";
}

lib.generateTable = function(twoDimensionalArrayOfText) 
{
    var listitem = "<table>";
    for(i = 0; i < twoDimensionalArrayOfText.length; i++) 
    { 
	listitem+="<tr>";	
	 for( j= 0; j< twoDimensionalArrayOfText[0].length; j++)  	  
	{
		 listitem += "<td>"+ twoDimensionalArrayOfText[i][j] + "</td>";
	}
	listitem+="</tr>";
    }
    return listitem + "</table>";
}

lib.generateHyperLink = function(url, text)
{
    return "<a href=\""+url+"\">"+text+"</a>"
}

lib.generateFormTextField = function(name) 
{
   return "<form><input type=\"text\" name=\""+name+"\"></form>"
}

lib.generateFormTextFieldWithLabel = function(name, label)
{
    return "<form>"+label+": <input type=\"text\" name=\""+name+"\"></form>"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) 
{
    return "not yet implemented"
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "not yet implemented"
}

module.exports = lib

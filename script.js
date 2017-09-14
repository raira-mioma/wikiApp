function searchWiki() {
  clearOutput();	
  doSearch();
};

$(function() {
	$("#wikiSearch").keypress(function(e){
		if(e.keyCode===13){
			doSearch();
		}
	});
});

function clearOutput() {
	$("#output").html('');
};

function doSearch(){
  var search = $("#wikiSearch").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" 
	+ search + "&format=json&callback=?";
	
	$.ajax({
		url: url,
		type: "GET", 
		contentType: "application/json; charset=utf-8",
		async: false, 
		dataType: "json",
		success: function(data, status, jqXHR) {
			$("#output").html();
			for(var i=0; i< data[1].length;i++){
				$("#output").append("<div><div class='well'><a href=" + data[3][i] + 
				"><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></div></div>" );
			}
		}
	});
  
}

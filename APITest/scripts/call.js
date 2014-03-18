
var webService = "http://tpointwebservice.perdial.com/tpointwebservice.asmx/"; //getComponent
//var webService = "http://193.128.62.132/tPointWebService.asmx/"; //getComponent
        // componentID: compId, userID: userId, recordId: recordId, lsSearchParams: searchParams

function getLogin(username, password)
{
    var address = webService + "getLogin";    
    var params = JSON.stringify({ username: username, password: password });
    var returnValue = call(address, params, successLogin);
    
    return returnValue;
}

function getNextJob(userId)
{
    var address = webService + "getNextJob";
    //var params = JSON.stringify({ userId: userId });
    var params = "{'userId':'" + userId + "'}";
    var returnValue = call(address, params, successNextJob);
    
    return returnValue;
}

function successLogin(data)
{
    var returnValue = data.d;
    
    return returnValue;
}

function successNextJob(data)
{
    console.log("called Next Job ");
    //returnValue = JSON.parse(returnValue);
    //var returnValue = $.xml2json(response.d);
    return data;
}

function call(address, params, onSucess) 
{
    jQuery.support.cors = true;
    var returnValue;
    
	$.ajax({
		type: "POST",
        async: false,
		url: address,
        data: params, 
        contentType: "application/json; charset=utf-8",
		success: function (response) 
        {
            returnValue = onSucess(response);
            
            //returnValue = JSON.parse(returnValue);
            //var returnValue = $.xml2json(response.d);
		},
        error: function (response) 
        {
			console.log("Error: " + response);
		}
	});
            
    return returnValue;
}

/*
function call(address, username, password) 
{
    jQuery.support.cors = true;
    var returnValue = 0;
            
	$.ajax({
		type: "POST",
        async: false,
		url: address,
        data: JSON.stringify({ username: username, password: password }),
        contentType: "application/json; charset=utf-8",
		success: function (response) 
        {
        	returnValue = response.d;
            console.log("call: " + returnValue);
            //var nameJson = $.xml2json(response.d);
		},
        error: function (response) 
        {
			console.log("Error: " + response);
		}
	});
            
    return returnValue;
}
*/
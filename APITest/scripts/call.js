
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

function getMyNextJob(userId)
{
    var address = webService + "getNextJob";
    var params = JSON.stringify({ userID: userId });
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
    var returnValue = $.xml2json(data.d);
    
    return returnValue;
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
		},
        error: function (response) 
        {
			console.log("Error: " + response);
		}
	});
            
    return returnValue;
}


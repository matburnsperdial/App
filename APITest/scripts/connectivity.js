
function isOnline() 
{
    return navigator.connection.type != Connection.NONE;
}

function checkOnline() 
{
    try
    {
        if (!isOnline()) 
        {
            var firstStartUp = getStored("firstStartUp");
                    
            if (firstStartUp == "No such record!")
            {
                ////// May need to direct to alternative page
                showError("No internet connection available", "visible");
            }
            else
            {
                var currentTime = getTime();
                        
                if (firstStartUp < currentTime)
                {
                    showError("No internet connection available. Data available from " + firstStartUp, "visible");       
                }
            }
                    
            return false;
        }
    }
    catch (e) 
    {
        console.log(e);
    }
}

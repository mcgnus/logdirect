# logdirect

Do you want to get infos about a user? Just give them the url and they are redirected to a non suspicious page while the IP and user agent are logged. 

Furthermore you can shorten the url you get with your favourite url shortener. In Future versions this may be implemented into this service. 



###GET request to /make?url=_your_url_with_http
url parameter example: "http://www.google.com"
Returns an url which you can send to the user.  

###GET request to /get/:id
Redirects the user to the page saved with ID or to "https://www.google.com" when ID is not found and saves IP, user agent and datetime.

###GET request to /logs/:id
Shows timestamps, IPs and User Agents who accessed the page saved with ID.


##Future work: 
Implement url shortener 

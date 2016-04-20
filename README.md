## logdirect
Set up a hook to log user IP and user agent and redirect to individual URL.

View logs of users who accessed the url. 

#GET request to:
/make?url=http://www.google.com/
Returns an ID to access the url. 

#GET request to:
/get/:id
Redirects user to the page saved with ID or to "https://www.google.com" when ID is not found and saves IP, user agent and datetime.

#GET request to:
/logs/:id
Shows timestamps, IPs and User Agents who accessed the page saved with ID.


Future work: 
Implement url shortener 

# logdirect

Do you want to get infos about a user? Just give them the url and they are redirected to a non suspicious page while the IP and user agent are logged. 

Furthermore you can shorten the url you get with your favourite url shortener. In Future versions this may be implemented into this service. 



###GET request to /make?url=_your_url_with_http
Returns an ID which you can append to the service url at the /get/:id method and send to the user. 


###GET request to /get/:id
Redirects the user to the page saved with ID or to "https://www.google.com" when ID is not found and saves IP, user agent and datetime.


###GET request to /logs/:id
Shows timestamps, IPs and User Agents who accessed the page saved with ID.



###Examples:
1. GET request to `/make?url=http://www.google.com`
  * Received: ```{"tag":123}```
2. link for the user: `/get/123`
  * user clicks on link and gets redirected to `http://www.google.com`
3. GET request to `/logs/123`
  * view user stats: ```
Wed Apr 20 2016 02:32:21 GMT+0600 (CEST) Request for http://www.google.de from 127.0.0.1 with Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36
```









####Future work: 
Implement url shortener 

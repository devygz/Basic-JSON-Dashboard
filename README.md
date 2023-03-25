
# Basic JSON Dashboard
An incredibly simple JSON dashboard (parser?) for real-time telemetry data  
  
## Features
- Get data from an HTTP endpoint every [x] seconds
- Reserved propery for larger display and server-side uptime data
- Very, very simple and lightweight. It is so lightweight that you don't even need to define properties on the client side.  
  
###  
  
## How to Get Started  
  
Clone the repo, then edit js/main.js file. You will notice 2 lines:
> const RefreshRate = 2;  
> const APIEndpoint = "http://127.0.0.1:8078/api.json";  
  
**APIEndpoint** is the API endpoint of your JSON API. Configure this to point your server.  
**RefreshRate** is how many times the data is fetched in 1 second. Think it like Hertz. For example, if it is set to 5, that means the data will be updated every 200ms (or 5 times in 1 second).  
  
Configure them according to the needs, and you are ready to go!  
  
## API Response and Parsing
  
The server must return a very simple JSON response. One example can be found in example-api-response/api.json  
  
All the properites (except named **speed** and **uptime**) will be displayed as a new sensor value. This allows to add and hide properties directly on server-side code, without caring about client-side implementations. *speed* will be displayed larger on the screen, and *uptime* will be displayed under the date in gray color. Please note that *speed* is required, but *uptime* is optional.  
  
## Index Files

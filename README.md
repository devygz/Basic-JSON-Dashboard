
# Basic JSON Dashboard
An incredibly simple JSON dashboard (parser?) for real-time telemetry data  
  
![Example Screenshot of the Dashboard](https://github.com/devygz/Basic-JSON-Dashboard/raw/main/img/github-screenshot.png "Example Screenshot of the Dashboard")
  
## Features
- Get data from an HTTP endpoint [x] times in 1 second.
- Reserved key names for larger display and server-side uptime data
- Very, very simple and lightweight. It is so lightweight that you don't even need to define each key on the client side.  
  
###  
  
## How to Get Started  
  
Clone the repo, then edit js/main.js file. You will notice 2 lines:
> const RefreshRate = 2;  
> const APIEndpoint = "http://127.0.0.1:8078/api.json";  
  
**APIEndpoint** is the API endpoint of your JSON API. Configure this to point your server.  
**RefreshRate** is how many times the data is fetched in 1 second, similar to Hertz. For example, if it is set to 5, that means the data will be updated every 200ms (or 5 times in 1 second).  
  
Configure them according to the needs, and you are ready!  
  
## API Response and Parsing
  
The server must return a very simple JSON response. Example response can be found in example-api-response/api.json  
  
All the keys (except named **speed** and **uptime**) will be displayed as a new sensor value. This allows to add and hide values directly on server-side code, without caring about client-side implementations. *speed* value will be displayed larger on the screen, and *uptime* will be displayed under the date in gray color. Please note that *speed* is required, but *uptime* is optional.  
  
## Index Files
  
Two different index files (named index.html and index2.html) is created. Simply, they are two different designs. Choose the best version for you and customize.  
  
This project was actually created for an Efficiency Challenge Car contest, so variable names tend to be in that direction (like speed).
  
## Licenses  
  
[VMWare Clarity City Font](https://github.com/vmware/clarity-city) is used as default font.  

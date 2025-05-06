
# Basic JSON Dashboard
An incredibly simple JSON dashboard (parser?) for real-time telemetry data  
  
![Example Screenshot of the Dashboard](https://github.com/devygz/Basic-JSON-Dashboard/raw/main/img/github-screenshot.png "Example Screenshot of the Dashboard")
  
## Features
- Get data from an HTTP endpoint [x] times in 1 second.
- Reserved key names for larger display and server-side uptime data
- Extremely lightweight: you don’t need to define each key on the client side.  
  
###  
  
## How to Get Started  
  
Clone the repo, then edit js/main.js file. Customize these lines:
> const RefreshRate = 2;  
> const APIEndpoint = "http://127.0.0.1:8078/api.json";  
  
**APIEndpoint** is the URL of your JSON API server. Configure this to point to the backend data server.  
**RefreshRate** is number of times per second the data should be fetched. (e.g., 5 = fetch every 200ms) 
  
Configure them according to the needs, and you are ready!  
  
## API Response and Parsing
  
TYour backend should return a simple JSON object. An example response can be found in example-api-response/api.json  
  
All the keys (except named **speed** and **uptime**) will be displayed as a new sensor value. This allows to add and hide values directly on server-side code, without caring about client-side implementations or updates. *speed* value will be displayed larger on the screen, and *uptime* will be displayed under the date in gray color. Please note that *speed* key is mandatory, but *uptime* key is optional.  
  
## Index Files
  
Two different index files (named index.html and index2.html) are created. Simply, there are two different designs. Choose the best version for you and customize.  
  
This project was actually created for an Efficiency Challenge Car contest, so the design and variable naming might also have been chosen in relation to that.
  
## Licenses  
  
[VMWare Clarity City Font](https://github.com/vmware/clarity-city) is used as the default font.  

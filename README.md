# CleanApp Web Application

This app is to be main Web application for Cleanapp.

Currently contains only referral function. By default redirects to the www.cleanapp.io website which is located at Google sites hosting for now.

# Technical details

The end point of the referral service is /ref with the port 3000, protocol http:// at the time.
E.g.
```
htp://localhost:3000/ref?refId=12345
```

Docker image:
```
ibnazer/cleanappapp:1.6
```
*(this is 2.0 alpha).*

Once deployed depends on the platform and docker-compose configuration (see backend reporistory).
Expected URL:
```
http://app.cleanapp.io:80/ref/refId=12345
```

*Last updated: Jan 4, 2023*
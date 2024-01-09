# CleanApp Web Application

This app is to be main Web application for Cleanapp.

Currently contains only referral function. By default redirects to the www.cleanapp.io website which is located at Google sites hosting for now.

Build the project using React.

# Technical details

The end point of the referral service is /ref with the port 3000, protocol http:// at the time.
E.g.
```
htp://localhost:3000/ref?refId=12345
```

# Docker & DockerHub

Docker image:
```
<DOCKER_PREFIX>/cleanappapp:<DOCKER_LABEL>
```
e.g.
```
ibnazer/cleanappapp:1.6
```
* 1.6 is 2.0 (alpha)

When building an image update the script to build it ./dockerapp/build_server_image.sh: at the top there are two environment
variables: DOCKER_LABEL and DOCKER_PREFIX.

> 💡 **ATTENTION:** Deployment depends on and described in the cleanapp_back_end_v2 reporistory.

> 💡 **IMPORTANT:** When you push your new image to DockerHub, you must own the prefix.

Once deployed depends on the platform and docker-compose configuration (see backend reporistory).
Expected URL:
```
http://app.cleanapp.io:80/ref/refId=12345
```

*Last updated: Jan 4, 2023*

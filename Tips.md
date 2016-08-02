
* Packager can't listen on port 8081

```
$ sudo lsof -n -i4TCP:8081 | grep LISTEN
$ kill -9 <进程id>
```

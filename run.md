#!/bin/sh 
MYDIR=`dirname $0`
cd `dirname $0`
DIR="$( cd "$( dirname "$0"  )" && pwd  )" 
for files in $(ls *.jpg)  
    do mv $files "k"$files  
done  

ourfor.top:443 {
       root /home/wwwroot/ourfor.top
       gzip
}
  
 file.ourfor.top:443 {
       root /home/wwwroot/file.ourfor.top
       gzip
       browse
       log ../access.log
}
media.ourfor.top:443 {
       root /home/wwwroot/media.ourfor.top
       gzip 
}
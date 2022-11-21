#!/usr/bin/python

# Import modules for CGI handling
import cgi, cgitb
cgitb.enable()

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
# name = form.getvalue('name')
# email  = form.getvalue('email')

print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>Hello - Second CGI Program</title>")
print ("</head>")
print ("<body>")
print("<center><pre> <form method=GET action=http://127.0.0.1:8000/cgi-bin/process.py ><b> <font color= #33CC33 size=6 >Registration Form</font></b><br><br> Name: <input type= text name= name vlaue=name size=23><br><br>Email: <input type= email name= email  size=23><br><br>  <input type= submit value=Submit name=B1>     <input type=reset value=Reset name=B2><br><br>  </form></pre></center>")
print( "</from>")
print ("</body>")
print ("</html>")
# <form onSubmit = "return checkPassword(this)" action="http://127.0.0.1:5000/register" method="POST">

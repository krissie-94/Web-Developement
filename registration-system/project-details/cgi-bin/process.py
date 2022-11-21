#!/usr/bin/python

# Import modules for CGI handling
import cgi, cgitb
cgitb.enable()

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
name = form.getvalue('name')
email  = form.getvalue('email')
submit=form.getvalue("B1")

print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>Hello - Second CGI Program</title>")
print ("</head>")
print ("<body>")
print("<center><pre><form method=GET action=http://127.0.0.1:8000/cgi-bin/connect.py><b><font color= #33CC33 size=25 > Registration Form </font></b><br><br>  Name: <input name=name type=text value= %s><br><br> Email: <input name=email  type=email value=%s><br><br>Is this information correct ?  <br><br><input type=%s><br><br><input type=radio name='confirm' value='yes'> YES   <input type=radio name='confirm' value='no' checked> NO </form></pre></center>" %(name,email,submit))
print ("</body>")
print ("</html>")

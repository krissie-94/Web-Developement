#!/usr/bin/python

# Import modules for CGI handling
import cgi, cgitb
cgitb.enable()

# Create instance of FieldStorage
form = cgi.FieldStorage()

# Get data from fields
name = form.getvalue('name')
email  = form.getvalue('email')


print ("Content-type:text/html\r\n\r\n")
print ("<html>")
print ("<head>")
print ("<title>Hello - Second CGI Program</title>")
print ("</head>")
print ("<body>")
print("<center> <table ALIGN=ABSLEFT BORDER=1 CELLSPACING=1 CELLPADDING=1> <tr  VALIGN=TOP> <td><pre><font size=25> Registration Successful <br><br>Thanks </font></pre></td></tr></table></center>")
print ("</body>")
print ("</html>")

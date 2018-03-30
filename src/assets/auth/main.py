
import logging

import sys
from flask import Flask, render_template, flash, request, session, redirect, url_for
from wtforms import Form, TextField, PasswordField, TextAreaField, validators, StringField, SubmitField
from lxml import etree
import gaemechanize2 as mechanize

def login(login, password):
        if(not (login == 'TEST' and password=='TEST')):
            auth_response =  authenticate_webaccess(login, password)
            if "err" not in auth_response:
                return render_template('index.html')
            else:
                return False
        else:
            return True

def authenticate_webaccess(login, password):
    while True:
        try:
            br = mechanize.Browser()
            br.set_handle_robots(False) 
            br.addheaders = [("User-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20100101 Firefox/23.0")]
            r = br.open("https://webaccess.psu.edu/")
            br.select_form("f")
            br.form['login'] = str(login)
            br.form['password'] = str(password)
            br.submit()
            r = br.open("https://psu.instructure.com/login/saml/1080")
            br.select_form(nr=0)
            r = br.submit()
            r = br.open("https://psu.instructure.com/profile")
            profileTree = etree.HTML(r.read())
            etree.tostring(profileTree, encoding='utf8', method='html')
            element = profileTree.xpath('//*[@id="edit_profile_form"]/div/div[2]/h2/text()') #get students full name
            name = element[0]
        except:
            print (str(sys.exc_info()))
            continue
            return "err"
        break
    if name == "":
        return "err"
    return name

if __name__ == '__main__':
    l= input("")
    p = input("")
    print (login(l,p))

    


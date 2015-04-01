**Ubuntu Azerbaijan**

Ubuntu-az.org Website

Written using Python Django and mezzanine


**How to run in local**:

1. Clone repository to somewhere in your computer
2. Install requirements: `pip install -r requirements.txt`
3. Run: `python manage.py runserver`
4. Manage settings using `local_settings.py`
5. Deploy: `fab deploy`

**Localization**:

*Making messages ready for translation:

`django-admin.py makemessages -l az -a`

*Compiling messages to .mo files:

`django-admin.py compilemessages`


**Read CHANGELOG.md for Changes!**


[![Analytics](https://ga-beacon.appspot.com/UA-36541010-2/ubuntuaz/)](http://www.ubuntu-az.org)
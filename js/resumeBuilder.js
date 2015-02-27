var bio = {
    "name": "Ranuka Perera",
    "role": "Web Developer",
    "contacts": {
        "mobile": "77-xxxx-x92",
        "email": "ranukaxxx@gmail.com",
        "github": "ranuka-perera",
        "twitter": "N/A",
        "location": "Sri Lanka"
    },
    "welcomeMessage": "Welcome to my humble &lt;redacted&gt; portfolio page...",
    "skills": [
        "Clicking",
        "Doubleclicking",
        "Thinking in Python",
        "Being unsuccesful in humor"],
    "biopic": "http://pix.sawrc.com/83a953b.png",
    "display": function () {
        var x = 0;
    }
};

var education = {
    "schools": [
        {
            "name": "Australian College of Business and Technology",
            "location": "Colombo, Sri Lanka",
            "degree": "Bachelor's Degree",
            "majors": "Software Engineering & Computer Science",
            "dates": "2013",
            "url": "http://acbt.lk"
        },
        {
            "name": "St. Jospeh's College",
            "location": "Colombo 10, Sri Lanka",
            "degree": "High School",
            "majors": "N/A",
            "dates": "2008",
            "url": "http://en.wikipedia.org/wiki/St._Joseph%27s_College,_Colombo"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nanodegree",
            "school": "Udacity",
            "date": "2015",
            "url": "http://udacity.com"
        },
        {
            "title": "Intro to HTML",
            "school": "Udacity",
            "date": "2015",
            "url": "http://udacity.com"
        }
    ],
    "display": function () {
        var x = 0;
    }
};

var work = {
    "jobs": [
        {
            "employer": "Virtusa",
            "title": "Engineer- Technology",
            "location": "Sri Lanka",
            "dates": "2014-",
            "description": "Worked as Automation Engineer in the Veraxxx Project"
        }
    ],
    "display": function () {
        var x = 0;
    }
};

var projects = {
    "projects": [
        {
            "title": "Automation project",
            "dates": "2014-",
            "description": "Selenium automation in python using DWR.",
            "images": [""]
        },
        {
            "title": "Simple XDDC downloader (Xchat plugin)",
            "dates": "2013",
            "description": "Download xddctransfers using Xchat IRC client automatically.",
            "images": [""]
        }
    ],
    display: function () {
        var x = 0;

};
//bio.bio.display();
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#topContacts").append(HTMLbioPic.replace("%data%", bio.biopic));
$("#topContacts").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#topContacts").append(HTMLskillsStart);
bio.skills.forEach(function (skill) {
    $("#skills").append(HTMLskills.replace("%data%", skill));
});


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
    display: function () {
        "use strict";
        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
        $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
        $("#header").append(HTMLWelcomeMsg.replace("%data%", this.welcomeMessage));
        $("#header").append(HTMLskillsStart);
        this.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
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
    display: function () {
        var x = 0;
    }
};

var work = {
    "jobs": [
        {
            "employer": "Virtusa",
            "title": "Engineer (Technology)",
            "location": "Sri Lanka",
            "dates": "2014 - Present",
            "description": "Worked as Automation Engineer in the Veraxxx Project"
        },
        {
            "employer": "Self",
            "title": "Student",
            "location": "Home",
            "dates": "Birth - 2012",
            "description": "Stayed as a student."
        }
    ],
    display: function () {
        "use strict";
        this.jobs.forEach(function (job) {
            var wxp = $("#workExperience").append(HTMLworkStart);
            var work_el = wxp.find(".work-entry:last");
            work_el.append(
                HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
            work_el.append(HTMLworkDates.replace("%data%", job.dates));
            work_el.append(HTMLworkLocation.replace("%data%", job.location));
            work_el.append(HTMLworkDescription.replace("%data%", job.description));
        });
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
    }
};
bio.display();
work.display();



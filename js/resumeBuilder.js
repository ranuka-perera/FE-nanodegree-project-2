var bio = {
    "name": "Ranuka Perera",
    "role": "Web Developer",
    "contacts": {
        "mobile": "01-00100-101",
        "email": "ranuka*@gmail.com",
        "github": "ranuka-perera",
        "twitter": "N/A",
        "location": "Ja-Ela, Sri Lanka"
    },
    "welcomeMessage": "Welcome to my humble &lt;redacted&gt; portfolio page.",
    "skills": [
        "Clicking",
        "Doubleclicking",
        "Thinking in Python",
        "Being unsuccessful in humor"],
    "biopic": "http://pix.sawrc.com/83a953b.png",
    display: function () {
        "use strict";
        var header = $("#header");
        header.prepend(HTMLheaderRole.replace("%data%", this.role));
        header.prepend(HTMLheaderName.replace("%data%", this.name));
        var contact_ar = [];
        contact_ar.push(HTMLmobile.replace("%data%", this.contacts.mobile));
        contact_ar.push(HTMLemail.replace("%data%", this.contacts.email));
        contact_ar.push(HTMLgithub.replace("%data%", this.contacts.github));
        contact_ar.push(HTMLtwitter.replace("%data%", this.contacts.twitter));
        contact_ar.push(HTMLlocation.replace("%data%", this.contacts.location));
        contact_ar.forEach(function (item) {
            $("#topContacts").append(item);
        });
        header.append(HTMLbioPic.replace("%data%", this.biopic));
        header.append(HTMLWelcomeMsg.replace("%data%", this.welcomeMessage));
        header.append(HTMLskillsStart);
        this.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
        contact_ar.forEach(function (item) {
            $("#footerContacts").append(item);
        });
    }
};

var education = {
    "schools": [
        {
            "name": "Australian College of Business and Technology",
            "location": "Colombo 03, Sri Lanka",
            "degree": "Bachelor's Degree",
            "majors": "Software Engineering & Computer Science",
            "dates": "2013",
            "url": "http://acbt.lk"
        },
        {
            "name": "St. Joseph's College",
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
        "use strict";
        var eduHolder = $("#education");
        this.schools.forEach(function (school) {
            eduHolder.append(HTMLschoolStart);
            var schoolContainer = eduHolder.find(".education-entry:last");
            schoolContainer.append(
                HTMLschoolName.replace("%data%", school.name).replace("#", school.url) +
                HTMLschoolDegree.replace("%data%", school.degree));
            schoolContainer.append(HTMLschoolDates.replace("%data%", school.dates));
            schoolContainer.append(HTMLschoolLocation.replace("%data%", school.location));
            schoolContainer.append(HTMLschoolMajor.replace("%data%", school.majors));
        });
        eduHolder.append(HTMLonlineClasses);
        this.onlineCourses.forEach(function (course) {
            eduHolder.append(HTMLschoolStart);
            var eduEntry = eduHolder.find(".education-entry:last");
            eduEntry.append(HTMLonlineTitle.replace("%data%", course.title) +
                            HTMLonlineSchool.replace("%data%", course.school));
            eduEntry.append(HTMLonlineDates.replace("%data%", course.date));
            eduEntry.append(HTMLonlineURL.replace("%data%", course.url).replace("#", course.url));

        });
    }
};

var work = {
    "jobs": [
        {
            "employer": "Virtusa",
            "title": "Engineer (Technology)",
            "location": "Colombo 09, Sri Lanka",
            "dates": "2014 - Present",
            "description": "Worked as Automation Engineer in the Veraxxx Project"
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
            "images": [
                "http://www.seleniumhq.org/images/big-logo.png"
            ]
        },
        {
            "title": "Simple XDDC downloader (Xchat plugin)",
            "dates": "2013",
            "description": "Download xddc transfers using Xchat IRC client automatically.",
            "images": [
                "http://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hexchat_Logo.svg/120px-Hexchat_Logo.svg.png",
                "https://realpython.com/images/python-powered.png"
            ]
        }
    ],
    display: function () {
        "use strict";
        this.projects.forEach(function (project) {
            var projects_holder = $("#projects").append(HTMLprojectStart);
            var project_container = projects_holder.find(".project-entry:last");
            project_container.append(HTMLprojectTitle.replace("%data%", project.title));
            project_container.append(HTMLprojectDates.replace("%data%", project.dates));
            project_container.append(HTMLprojectDescription.replace("%data%", project.description));
            project.images.forEach(function (image) {
                project_container.append(HTMLprojectImage.replace("%data%", image));
            });


        });
    }
};
function displayMap () {
    $("#mapDiv").append(googleMap);
}
bio.display();
work.display();
projects.display();
education.display();
displayMap();



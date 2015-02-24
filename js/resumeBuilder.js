var bio = {
    "bio": {
        "name": "Ranuka Perera",
        "role": "<ADD ROLE>",
        "contacts": {
            "mobile": "77xxxxx92",
            "email": "ranukaxxx@gmail.com",
            "github": "ranuka-perera",
            "twitter": "N/A",
            "location": "Sri Lanka"
            },
        "welcomeMessage": "Welcome to my humble <redacted> portfolio page...",
        "skills": [
            "Clicking",
            "Doubleclicking",
            "Thinking in Python",
            "Being unsuccesful in humor"],
        "biopic": "<url>",
        "display": function () {
            return;
        }
    }
}

var education = {
    "education": {
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
            return;
        }
    }
}

var work = {
    "work": {
        "jobs": [
            "employer": "Virtusa",
            "title": "Engineer- Technology",
            "location": "Sri Lanka",
            "dates": "2014-",
            "description": "Worked as Automation Engineer in the Veraxxx Project"
        ],
        "display": function(){
            return;
        }
    }
}

var projects = {
    "projects": {
        "projects": [
        ]

    }
}
projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters
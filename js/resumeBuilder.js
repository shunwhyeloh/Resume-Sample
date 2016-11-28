var bio = {
    "name": "Alina Moore",
    "role": "Dancer/ Actor/ Model",
    "contacts": {
        "mobile": "012-4567565",
        "email": "alinat@gmail.com",
        "github": "alina",
        "location": "San Diego, CA"
    },
    "welcomeMessage": "Every great story on the planet happened when someone decided not to give up, but kept going no matter what.",
    "skills": ["Contemporary dance", "Ballet", "Salsa", "Zumba"],
    "biopic": "images/alina.jpg",

    //basic contact information
    display: function() {
        var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedHTMLheaderRole, formattedHTMLheaderName);

        var formattedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts, #footerContacts").append(formattedHTMLmobile, formattedHTMLemail, formattedHTMLgithub, formattedHTMLlocation);

        var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedHTMLbioPic, formattedHTMLwelcomeMsg);

        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

//education
var education = {
    "schools": [{
        "name": "American Conservatory Theater",
        "location": "San Francisco, CA",
        "degree": "Master in Fine Arts",
        "majors": ["Acting"],
        "dates": "2014-2015",
        "url": "http://www.act-sf.org/home/conservatory/mfa_program.highResolutionDisplay.html"
    }, {
        "name": "California Institute of the Arts",
        "location": "Valencia, CA",
        "degree": "Bachelor in Fine Arts",
        "majors": ["Dance"],
        "dates": "2010-2014",
        "url": "https://www.calarts.edu/"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Developer, Nanodegree",
        "dates": "2016 to date",
        "url": "https://www.udacity.com/classic"
    }],

    display: function() {
        if (education.schools.length > 0) {
            education.schools.forEach(function(school) {
                $("#education").append(HTMLschoolStart);
                var formattedHTMLschoolName = HTMLschoolName.replace("%data%", school.name);
                var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
                $(".education-entry:last").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
                var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
                $(".education-entry:last").append(formattedHTMLschoolLocation);
                var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", school.dates);
                $(".education-entry:last").append(formattedHTMLschoolDates);

                for (i = 0; i < school.majors.length; i++) {
                    var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", school.majors[i]);
                    $(".education-entry:last").append(formattedHTMLschoolMajor);
                }
            });
        }

        //online classes
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append('<div class="education-entry">');
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            $(".education-entry:last").append(formattedOnlineSchool + formattedOnlineTitle);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            $(".education-entry:last").append(formattedOnlineDates + formattedOnlineURL);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "California Dance Company",
        "title": "Instructor",
        "location": "Anderson, CA",
        "dates": "2015 to date",
        "description": "Instruct students ages 7 through 20 in proper contemporary dance techniques."
    }, {
        "employer": "AXIS Dance Company",
        "title": "Coordinator",
        "location": "Oakland, CA",
        "dates": "2014-2015",
        "description": "Accurately complete all administrative duties related to dance classes."
    }],

    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedWorkLocation);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedWorkDates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};

//project details
var projects = {
    "projects": [{
        "title": "Interviewed by Dance Health magazine December issue",
        "dates": "2014",
        "description": "Was featured on Dance Health magazine December issue about how dancing can ease anxiety.",
        "images": ["images/art.jpg"]
    }, {
        "title": "Perform for UK singer Yulia",
        "dates": "2013",
        "description": "Travel to multiple Asia countries such as Hong Kong, Taiwan, Malaysia, Singapore, and Thailand for Yulia's world tour.",
        "images": ["images/team.jpg"]
    }],

    display: function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);

            for (imageIndex = 0; imageIndex < projects.projects[i].images.length; imageIndex++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

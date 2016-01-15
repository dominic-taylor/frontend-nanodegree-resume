var name = 'Dominic Taylor';
var role = 'Web Dev';
var bio = {
  'name': 'Dominic',
  'role': 'Web Dev',
  'contact': { 'email': 'blah@blah.net',
              'mobile': '123654',
              'location': 'Wellington, NZ'
              },
  'bioPic': 'images/fry.jpg',
  'welcomeMessage': 'SUP!',
  'skills': ['eating', 'jumping', 'skipping', 'speaking quietly']
}
var formattedName= HTMLheaderName.replace("%data%",name);
var formattedRole= HTMLheaderRole.replace("%data%", role);
var formattedPic= HTMLbioPic.replace('%data%',bio.bioPic)
var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
var formattedMobile = HTMLmobile.replace('%data%', bio.contact.mobile);
var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
var formattedMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);


$("#header").prepend(formattedName, formattedRole);
$('#header').append(formattedPic, formattedMessage);
$("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);
$("#header").append(HTMLskillsStart);

for (skill in bio.skills) {
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkills);
}; 



var work = {
  'jobs': [
    {
      'employer': 'Isentia',
      "title":  "Broadcast Monitor",
      "location": "Wellington, New Zealand", 
    "years": "July 2015 - Present",
    "description":"Monitor and write summeries of radio broadcasts and play\
     table tennis when the cricket is on."

  },
  {
  "employer": "Mario Bros Circus",
  "title":  "Lion Tamer",
  "location": "Mushroom Kingdom, Under the Sea", 
  "years": "Aug 2010 - Jan 2015",
  "description":"The title says it all."
  }

]
};
var education ={
  "schools": [
  {
  "name": "Victoria University",
  "degree": "BA in Philosophy",
  "years": "2007-11",
  "location": "Wellington, NZ"
  },
  {
  "name": "Wairoa College",
  "degree": "University Enterance",
  "years": "2002-2007",
  "location": "Wairoa, NZ"
  }
  ],
  "onlineCourse":[
    {"title":"HTML and CSS",
    "school": "Udacity",
    "dates": "December 2015",
    "url": "https://www.udacity.com/"
    }
  ]
};
var projects = {
  'list': [
          { 
            'title': 'Rocket Fryer',
            "dates": 'August 1993 -1999',
            'description': 'Fried rockets semi regularly \
            but could never beat the record. ',
           'projectImage': 'images/fry.jpg'
          }      
    ]
  };

  function displayProjects() {
    for (project in projects.list) {

    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.list[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.list[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.list[project].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.list[project].projectImage);
    $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);
    }

  }

displayProjects();

function displayWork () {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedworklocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedworklocation);

    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].years);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace('%data%',work.jobs[job].description)
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();


function displayEducation () {
  for (school in education.schools) {
    $('#education').append(HTMLschoolStart);
    formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
     formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
    formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].years);
    formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
   
    $('.education-entry:last').append(formattedSchoolName, formattedSchoolDates, formattedSchoolDegree);
  }
}
displayEducation();

$('.education-entry:last').append(HTMLonlineClasses);
  
  for (online in education.onlineCourse) {
    var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourse[online].title);
    $('.education-entry:last').append();

    var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourse[online].school);
    $('.education-entry:last').append();

    var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourse[online].dates);
    $('.education-entry:last').append();

    var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourse[online].url);
    $('.education-entry:last').append(formattedonlineTitle,formattedonlineSchool, formattedonlineDates,formattedonlineURL);
  };


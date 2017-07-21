//Make links at bottom fade to company name on hover
//add overlay to skills to display category
//add JS hover box-shadow growth or 3D
//parallax scrolling for images
//add bike animation, fade in contact icons on scroll after animation

var projectLinks = document.getElementsByClassName("project-link");
var languages = document.getElementsByClassName("languages")[0];
var frameworks = document.getElementsByClassName("frameworks")[0];
var otherSkills = document.getElementsByClassName("other-skills")[0];
var comingSoon = document.getElementsByClassName("coming-soon")[0];
var hiddenOverlays = document.getElementsByClassName("hidden");
var skillsLists = document.getElementsByClassName("skills-list");
var skills = document.getElementsByClassName("skill");

[].forEach.call(projectLinks, function(link) {
	link.addEventListener("mouseenter", function() {
		link.classList.add("project-link-animation");
	});
	link.addEventListener("mouseleave", function() {
		link.classList.remove("project-link-animation");
	});
});

// [].forEach.call(hiddenOverlays, function(overlay) {
// 	overlay.addEventListener("mouseenter", function() {
// 		overlay.classList.add("show");
// 	});
// 	overlay.addEventListener("mouseleave", function() {
// 		overlay.classList.remove("show");
// 	});
// });

[].forEach.call(skills, function(skill, index) {
	skill.addEventListener("mouseenter", function() {
		skillsLists[index].classList.add("fade");
		setTimeout(function() {
			skillsLists[index].classList.add("hide");
		}, 500);
	});
	skill.addEventListener("mouseleave", function() {
		skillsLists[index].classList.remove("fade", "hide");
	});
});

languages.addEventListener("mouseenter", function() {
	languages.classList.add("languages-overlay", "overlay");
});
languages.addEventListener("mouseleave", function() {
	languages.classList.remove("languages-overlay", "overlay");
});

frameworks.addEventListener("mouseenter", function() {
	frameworks.classList.add("frameworks-overlay", "overlay");
});
frameworks.addEventListener("mouseleave", function() {
	frameworks.classList.remove("frameworks-overlay", "overlay");
});

otherSkills.addEventListener("mouseenter", function() {
	otherSkills.classList.add("other-skills-overlay", "overlay");
});
otherSkills.addEventListener("mouseleave", function() {
	otherSkills.classList.remove("other-skills-overlay", "overlay");
});

comingSoon.addEventListener("mouseenter", function() {
	comingSoon.classList.add("coming-soon-overlay", "overlay");
});
comingSoon.addEventListener("mouseleave", function() {
	comingSoon.classList.remove("coming-soon-overlay", "overlay");
});

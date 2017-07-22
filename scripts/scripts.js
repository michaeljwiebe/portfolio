var projectLinks = document.getElementsByClassName("project-link");
var skillsLists = document.getElementsByClassName("skills-list");
var skillCategories = document.getElementsByClassName("skill-category");
var skills = document.getElementsByClassName("skill");

[].forEach.call(projectLinks, function(link) {
	link.addEventListener("mouseenter", function() {
		link.classList.add("project-link-animation");
	});
	link.addEventListener("mouseleave", function() {
		link.classList.remove("project-link-animation");
	});
});

[].forEach.call(skills, function(skill, index) {
	skill.addEventListener("mouseenter", function() {
		skillCategories[index].classList.add("skill-category-overlay");
		skillsLists[index].classList.add("fade-out");
	});
	skill.addEventListener("mouseleave", function() {
		skillCategories[index].classList.remove("skill-category-overlay");
		skillsLists[index].classList.remove("fade-out");
	});
});

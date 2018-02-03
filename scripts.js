document.addEventListener('DOMContentLoaded', function() {
	/*
	*  Bio picture, name, sectiontitle fadein
	**/
	var bioInfo = document.getElementsByClassName("bio-info")[0];
	var sectionTitles = document.getElementsByClassName("section-title");
	function initialFadeIn(){
		setTimeout(function(){
			bioInfo.classList.add('visible');
			[].forEach.call(sectionTitles, function(title){
				title.classList.add("visible")
			});
		}, 
		400);
	}

	window.onload = initialFadeIn;



	/*
	*  Links flashing red
	**/
	var projectLinks = document.getElementsByClassName("project-link");
	[].forEach.call(projectLinks, function(link) {
		link.addEventListener("mouseenter", function() {
			link.classList.add("project-link-animation");
		});
		link.addEventListener("mouseleave", function() {
			link.classList.remove("project-link-animation");
		});
	});

	/*
	*  Skill list overlay
	**/
	var skillsLists = document.getElementsByClassName("skills-list");
	var skillCategories = document.getElementsByClassName("skill-category");
	var skillContainers = document.getElementsByClassName("skill-container");
	[].forEach.call(skillContainers, function(skill, index) {
		skill.addEventListener("mouseenter", function() {
			skillCategories[index].classList.add("skill-category-overlay");
			skillsLists[index].classList.add("fade-out");
		});
		skill.addEventListener("mouseleave", function() {
			skillCategories[index].classList.remove("skill-category-overlay");
			skillsLists[index].classList.remove("fade-out");
		});

	/*
	*  Skill container fade in
	**/
		var skillContainerPosition = skillContainers[index].getBoundingClientRect();
		window.addEventListener("scroll", () =>{
			skillFadeIn(skillContainerPosition.bottom, index)
		})
		skillFadeIn(skillContainerPosition.bottom, index)
	});

	function skillFadeIn(skillBottom, index) {
		if ((window.innerHeight + window.scrollY) > skillBottom || window.innerHeight > 680){
			setTimeout(() => skillContainers[index].classList.add("fade-in"), (index+1)*400+200);
		}
	}

	/*
	*  fade in project containers
	**/
	var projectContainers = document.getElementsByClassName("project-container");
	[].forEach.call(projectContainers, function(project, index) {
		var projectContainerPosition = projectContainers[index].getBoundingClientRect();

		window.addEventListener("scroll", () =>{
			if((window.innerHeight + window.scrollY) > (projectContainerPosition.bottom - 300)){
				setTimeout(() => projectContainers[index].classList.add("fade-in"), (index+1)*400);
			}
		})
	})

	/*
	*  fade in connect links
	**/
	var connectLinks = document.getElementsByClassName("connect-link");
	[].forEach.call(connectLinks, function(link, index) {
		window.addEventListener('scroll', () => {
			if((window.innerHeight + window.scrollY) > 1900){
				setTimeout(() => link.classList.add("fade-in"), (index+1)*400);
			}
		})
	})




})
var projectLinks = document.getElementsByClassName("project-link");

[].forEach.call(projectLinks, function(link) {
	link.addEventListener("mouseenter", function() {
		link.classList.add("project-link-animation");
	});
	link.addEventListener("mouseleave", function() {
		link.classList.remove("project-link-animation");
	});
});

var circleEl = document.querySelector('.skills-graph-circle'),
		progressBar = circleEl.querySelector('.skills-graph-circle__bar'),
		r = progressBar.getAttribute('r'),
		circumference = 2 * Math.PI * r,
		countEl = document.querySelector('.skills-graph-circle__count'),
		countVal = parseInt(countEl.getAttribute('data-skills-graph-perc'));

		var smth = new SmoothAnimate(circleEl, {
			value: [0, countVal]
		}, {
			duration: 3600,
			easing: 'easeOutBack',
			step: function (progress, el, currentValue) {
				progressBar.style.strokeDashoffset = circumference - (currentValue * circumference / 100);
				countEl.textContent = Math.ceil(currentValue);
			}
		});
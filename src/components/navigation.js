import React from 'react';

export default function Navigation() {
	return (
		<header>
			<nav>
				<ul className="navigation">
					<li className="navItem">
						<a href="#home" className="navLink" id='home-link'>
							<svg
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								fill="none"
							>
								<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
							</svg>
						</a>
					</li>
					<li className="navItem">
						<a href="#about" className="navLink" id='about-link'>
							<svg
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								fill="none"
							>
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
							</svg>
						</a>
					</li>
					<li className="navItem">
						<a href="#projects" className="navLink" id='projects-link'>
							<svg
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								fill="none"
							>
								<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
							</svg>
						</a>
					</li>
					<li className="navItem">
						<a href="#contact" className="navLink" id='contact-link'>
							<svg
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								fill="none"
							>
								<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

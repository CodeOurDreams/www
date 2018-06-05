module.exports = {
    // General Information
    orgName: 'Code Our Dreams',
    email: 'info@codeourdreams.org',
    phone: '(410) 790-5273‬',
	address: '445 East Ohio Street, Apartment 2605, Chicago, IL 60611',
	
	nav: [
		{ label: 'Home',		ref: '#home'											},
		{ label: 'Mission',		ref: '#mission'											},
		{ label: 'Values',		ref: '#values'											},
		{ label: 'Get Involved',ref: '#getInvolved'										},
		{ label: 'About',		ref: '#about'											},
		{ label: 'Contact',		ref: '#contact'											},

		{ label: 'Get Involved',ref: '#getInvolved',button: true						},
		{ label: 'Donate',		ref: '',			button: true,	specialBtn: true	}
	],

	home: {
		subtitle1: 'empowering students',
		subtitle2: 'to code for good'
	},

	mission: 'Code Our Dreams is dedicated to teaching students computer science, so that they may be equipped to build applications that drive positive change in our communities.',

	values: {
		title: 'Our Values',
		values: [
			{ label: 'Empowerment',				icon: 'handshake',	description: 'Our teachers are here to empower and inspire our students to create the change they want to see in their communities.'	},
			{ label: 'Community Engagement',	icon: 'users',		description: 'Our students build applications that address the problems they see in their communities. When our students graduate, we hope to have given them the tools to continue growing and positively engaging with their communities.'	},
			{ label: 'Curiosity',				icon: 'lightbulb',	description: 'We encourage our students to problem solve, think creatively and always have fun.'										}
		]
	},

	getInvolved: {
		title: 'Get Involved',
		subtitle: 'Join. Teach. Donate.',
		body: 'Code Our Dreams is only made possible by our countless volunteers who help teach, our donors who support our mission and activities, and the students who apply',
		details: 'Each student cohort is asked the question, "What problem do you see in your community?" In the first few weeks, students address the above question and brainstorm ideas for how a mobile application could help. Students break into group and brainstorm ideas. We help them practice entrepreneurship and presentation concepts like elevator pitches and ideation. Each group presents their idea in front of the cohort. They all vote. The winning idea is now the entire cohort’s project for the remaining school year. We teach our students computer science fundamentals, UI/UX design and user testing. At the end of the year, our students have a fully functioning MVP of their idea published in the app store. At the end of the year, our students are proud to showcase their coding talents and their ability to address social issues on their own through technology. How cool is that?',
		actions: [
			{ label: 'Learn More',		ref: '#learn'						},
			{ label: 'Join a Cohort',	ref: '#join',	specialBtn: true	},
			{ label: 'Apply to Teach',	ref: '#teach',	specialBtn: true	},
			{ label: 'Donate',			ref: '#donate',	specialBtn: true	}
		]
	},

	about: {
		title: 'Our Board',
		subtitle: ' Learn more about our leaders',
		people: [
			{ name: 'Brianne Caplan',	title: 'Founder & President',		image: 'imgCaplan',		bio: 'Brianne is a Data Scientist and uchicago grad. She is dedicated to helping bridge the education gap through civic engagement, technology and a love for teaching.'	},
			{ name: 'Shane Selig',		title: 'Co-Founder & Secretary',	image: 'imgSelig',		bio: ''	},
			{ name: 'Isa Villaseñor',	title: 'Co-Founder & Treasurer',	image: 'imgVillasenor',	bio: 'Isa is a Chicago native, UChicago grad and an alumn of Chicago Scholars and Daniel Murphy Scholarship Fund. She strongly believes that education is the best tool for success and is passionate about helping youth gain access to opportunities that will put them on a path to leadership. She has mentored students from various organizations for over five years.'	},
			{ name: 'Piper & Millie',	title: 'Chief Happiness Officers',	image: 'imgDogs',		bio: 'Woof.'	}
		]
	},

	contact: {
		title: 'Contact Us',
		subtitle: 'We want to hear from you!',
		mailingList: {
			title: 'Join Our Mailing List',
			placeholder: 'Email',
			button: 'Signup'
		},
		message: {
			title: 'Send Us a Message',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			button: 'Send Message'
		}
	},

	footer: {
		socialMedia: [
			{ label: 'Twitter',		icon: 'twitter',	iconType: 'b',	ref: 'https://twitter.com/CodeOurDreams'				},
			{ label: 'Facebook',	icon: 'facebook',	iconType: 'b',	ref: 'https://www.facebook.com/CodeOurDreams'			},
			{ label: 'LinkedIn',	icon: 'linkedin',	iconType: 'b',	ref: 'https://www.linkedin.com/company/codeourdreams'	},
			{ label: 'Instagram',	icon: 'instagram',	iconType: 'b',	ref: 'https://www.instagram.com/CodeOurDreams'			},
			{ label: 'GitHub',		icon: 'gitgub',		iconType: 'b',	ref: 'https://github.com/orgs/CodeOurDreams'			},
			{ label: 'Email',		icon: 'envelope',	iconType: 's',	ref: 'mailto:info@codeourdreams.org'					}
		],

		copyright: 'Copyright © 2018 Code Our Dreams. All Rights Reserved.',
		links: [
			{ label: 'Privacy Policy',	ref: '#footer'	},
			{ label: 'Terms of Use',	ref: '#footer'	}
		]
	},

	modal: {
		header: 'Bio'
	}
}
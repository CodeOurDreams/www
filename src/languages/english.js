module.exports = {
    // General Information
    orgName: 'Code Our Dreams',
    email:   'info@codeourdreams.org',
    phone:   '(410) 790-5273‬',
	  address:  '445 East Ohio Street, Apartment 2605, Chicago, IL 60611',
	
	nav: [
		{ label: 'Home',		    ref: '#home'					},
		{ label: 'Mission',		  ref: '#mission'				},
		{ label: 'Values',		  ref: '#values'				},
		{ label: 'Get Involved',ref: '#getInvolved'   },
		{ label: 'About',		    ref: '#about'         },
		{ label: 'Contact',		  ref: '#contact'       },

		{ label: 'Get Involved',ref: '#getInvolved',	class: 'button'							            },
		{ label: 'Donate',		  ref: '#getInvolved',	class: 'button special modalDonateOpen'	}
	],

	home: {
		header: 'empowering students',
		content: [
			'to code for good',
			'to create',
			'to explore',
			'to ideate',
			'to innovate',
			'to learn'
		]
	},

	mission: 'Code Our Dreams is dedicated to teaching students computer science, so that they may be equipped to build applications that drive positive change in our communities.',

	values: {
		title: 'Our Values',
		values: [
			{ label: 'Empowerment',				    icon: 'handshake',	description: 'Our teachers are here to empower and inspire our students to create the change they want to see in their communities.'  },
			{ label: 'Community Engagement',	icon: 'users',		  description: 'Our students build applications that address the problems they see in their communities.'	                              },
			{ label: 'Curiosity',				      icon: 'lightbulb',	description: 'We encourage our students to problem solve, think creatively and always have fun.'                                      }
		],
		learnMore: {
			title: 'Why it Matters',
			content: [
				'Our broad goal is helping close the technology and education gap. Our goal is not to simply get more people into programming later in life, but offer children the opportunity to begin a career and passion for computer science during their early educational years. Further, we hope to encourage students at a younger age to seek community engagement. According to https://csedweek.org/resource_kit/blurbs, nine in ten parents want their child to study computer science, but only one in four schools teach computer programming. Further, only 22 percent of AP Computer Science students are women. Only 13% are Black/African American or Hispanic/Latino. Many of these schools that do have computer science programs do not have qualified teachers with backgrounds in coding or computer science. If we can systemically scale our Code Our Dreams program to reach these target demographics, we can improve these numbers in Chicago and beyond.',
        'There have existed groups surrounding coding for social good. However, these groups are typically college and above. We’ve researched and haven’t found any group that teaches high school students to code for social good. With the rise of social media, we have seen students at young ages having their voices heard. High school students are innovative, determined and creative. We want to give high schoolers the opportunity to utilize application development to have their voices heard and to see the change that they want to see in their communities. From our feedback with potential Code Our Dream students, we have heard a ton of excitement for this program. First, students think app development is exciting. Apps are a realm they use frequently. Second, many of our target students want something to do on a weekend. Third, they want to get ahead in their career and learn something new.',
        'Our intention is to develop an efficient and effective model driven by performance data that will be scalable across the country. Initially we plan on focusing in Chicago so that we can rapidly iterate and improve our process to maximize the quality of education imparted on students and the reach we will have. We will do this by carefully tracking participants in our program and seeing how different approaches result in long term outcomes. By developing this model, we will create a highly modular approach that can be implemented anywhere by anyone. To do that, we will further plan on creating a national network that will support the programs no matter where they are with the materials and resources they need, and experienced advice on how to tailor-make the programs for local circumstances.'
			]
		}
	},

	getInvolved: {
		title:    'Get Involved',
		subtitle: 'Join. Teach. Donate.',
		body:     'Code Our Dreams is only made possible by our countless volunteers who help teach, our donors who support our mission and activities, and the students who apply',
		details:  'Each student cohort is asked the question, "What problem do you see in your community?" In the first few weeks, students address the above question and brainstorm ideas for how a mobile application could help. Students break into group and brainstorm ideas. We help them practice entrepreneurship and presentation concepts like elevator pitches and ideation. Each group presents their idea in front of the cohort. They all vote. The winning idea is now the entire cohort’s project for the remaining school year. We teach our students computer science fundamentals, UI/UX design and user testing. At the end of the year, our students have a fully functioning MVP of their idea published in the app store. At the end of the year, our students are proud to showcase their coding talents and their ability to address social issues on their own through technology. How cool is that?',
		learnMore: {
			title: 'Our Program',
			content: [
				'Each student cohort is asked the question, "What problem do you see in your community?"',
				'In the first few weeks, students address the above question and brainstorm ideas for how a mobile application could help. Students break into group and brainstorm ideas. We help them practice entrepreneurship and presentation concepts like elevator pitches and ideation.',
				'Each group presents their idea in front of the cohort. They all vote.',
				'The winning idea is now the entire cohort’s project for the remaining school year. We teach our students computer science fundamentals, UI/UX design and user testing.',
				'At the end of the year, our students have a fully functioning MVP of their idea published in the app store. At the end of the year, our students are proud to showcase their coding talents and their ability to address social issues on their own through technology.',
				'How cool is that?'
			]
		},
		actions: [
			{ label: 'Learn More',    id: 'expansionGetInvolvedLearn',																				},
			{ label: 'Join a Cohort',                                   ref: 'https://shanecoryselig.typeform.com/to/Nt0NPK',	btnType: 'form'		},
			{ label: 'Apply to Teach',                                  ref: 'https://shanecoryselig.typeform.com/to/pCDvDs',	btnType: 'form'		},
			{ label: 'Donate',                                          ref: '#donate',                                       btnType: 'donate'	}
		]
	},

	about: {
		title: 'Our Board',
		subtitle: ' Learn more about our leaders',
		people: [

			{ name: 'Brianne Caplan',	title: 'Founder & President',		  image: 'imgCaplan',		  bio: 'Brianne is a Data Scientist and uchicago grad. She is dedicated to helping bridge the education gap through civic engagement, technology and a love for teaching.'	                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                                                                                                                                                                                                                              },
			{ name: 'Shane Selig',		title: 'Co-Founder & Secretary',	image: 'imgSelig',		  bio: 'Shane is a Chicago native and graduate of Vanderbilt University with a degrees in Computer Science in Engineering and Managment. Since graduating, he has served as a consultant in the technology space, helping startups and early stage companies improve efficiency, simplify communications, and develop scalable processes. He has been actively involved with local charities in Chicago for over 16 years, and is especially passionate about operational logistics and organizations that take a hands on approach towards solving the root issues of the people they serve instead of addressing the symptoms. In addition to Code Our Dreams, Shane currently serves on the boards of Lights on the Lawn, a nonprofit which raises money through live music for local causes, and The Mary Parrish Center, a transitional housing center for survivors of domestic and sexual violence.'	},
			{ name: 'Isa Villaseñor',	title: 'Co-Founder & Treasurer',	image: 'imgVillasenor',	bio: 'Isa is a Chicago native, UChicago grad and an alumn of Chicago Scholars and Daniel Murphy Scholarship Fund. She strongly believes that education is the best tool for success and is passionate about helping youth gain access to opportunities that will put them on a path to leadership. She has mentored students from various organizations for over five years.'		                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                        },
			{ name: 'Piper & Millie',	title: 'Chief Happiness Officers',image: 'imgDogs',		    bio: 'Woof.'	                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                        }
		]
	},

	contact: {
		title: 'Contact Us',
		subtitle: 'We want to hear from you!',
		mailingList: {
			title:     'Join Our Mailing List',
			firstName: 'First Name',
			lastName:  'Last Name',
			email:     'Email',
			button:    'Signup'
		},
		message: {
			title:   'Send Us a Message',
			name:    'Name',
			email:   'Email',
			message: 'Message',
			button:  'Send Message'
		}
	},

	footer: {
		socialMedia: [

			{ label: 'Twitter',		icon: 'twitter',	iconType: 'fab',	ref: 'https://twitter.com/CodeOurDreams'				      },
			{ label: 'Facebook',	icon: 'facebook',	iconType: 'fab',	ref: 'https://www.facebook.com/CodeOurDreams'			    },
			{ label: 'LinkedIn',	icon: 'linkedin',	iconType: 'fab',	ref: 'https://www.linkedin.com/company/codeourdreams'	},
			{ label: 'Instagram',	icon: 'instagram',iconType: 'fab',	ref: 'https://www.instagram.com/CodeOurDreams'			  },
			{ label: 'GitHub',		icon: 'github',		iconType: 'fab',	ref: 'https://github.com/orgs/CodeOurDreams'			    },
			{ label: 'Email',		  icon: 'envelope',	iconType: 'fas',	ref: 'mailto:info@codeourdreams.org'					        }
		],

		copyright: 'Copyright © 2018 Code Our Dreams. All Rights Reserved.',
		links: [
			// { label: 'Privacy Policy',	ref: '#footer'	},
			// { label: 'Terms of Use',	ref: '#footer'	}
		]
	},

	modalBio: {
		header: 'Bio'
	},

	modalDonate: {
		header: 'Donate -- NOT ENABLED'
	}
}
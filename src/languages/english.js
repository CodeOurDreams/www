const VARS = {
  email:   'info@codeourdreams.org'
}

module.exports = {
  // General Information
  orgName: 'Code Our Dreams',
  email:   VARS.email,
  phone:   '(410) 790-5273‬',
  address: '1000 West Adams Street, Apartment 718, Chicago, IL 60607',
	
	nav: [
		{ label: 'Home',		    ref: '#home'					},
		{ label: 'Mission',		  ref: '#mission'				},
		{ label: 'Our Program', ref: '#program'				},
		{ label: 'Get Involved',ref: '#getInvolved'   },
		{ label: 'About',		    ref: '#about'         },
		{ label: 'Contact',		  ref: '#contact'       },

		{ label: 'Get Involved',ref: '#getInvolved',	class: 'button'							            },
		{ label: 'Donate',		  ref: '#getInvolved',	class: 'button special modalDonateOpen'	},
	],

	home: {
		header: 'empowering students',
		content: [
			'code for good',
			'create real-world applications',
      'imagine a new future',
      'challenge the status quo',
			'explore the unseen',
			'ideate and innovate the future',
      'inspire each other',
      'never stop learning',
		],
	},

	mission: 'Code Our Dreams is dedicated to teaching students computer science, so that they may be equipped to build applications that drive positive change in our communities.',

	program: {
		title: 'Our Program',
		program: [
			{ label: 'Discuss & Ideate',                    icon: 'people-carry',       description: 'We discuss problems we see in our communities and ideate real-world apps that address those problems.'                            },
			{ label: 'Design & Test',     iconType: 'fab',  icon: 'codepen',            description: 'We learn product design and design thinking.'	                                                                                    },
			{ label: 'Code & Develop',                      icon: 'code',	              description: 'We explore computer science concepts and build fully developed iOS apps.'                                                         },
			{ label: 'Present & Pitch',                     icon: 'chalkboard-teacher',	description: 'We present and pitch our finished applications to family and friends, inspiring others to improve our world, one app at a time.'  },
		],
		learnMore: {
			title: 'Why it Matters',
			content: [
				'The Code Our Dreams program, which is free for schools and students, serves as a technology incubator for high school students to discuss community problems and build technology solutions.',
        'The program is divided into 4 parts, where our students wear many hats from Product Manager to Product Designer to Developer to Sales',
	'1.) Students discuss communities, both what makes them beautiful and where they would like to see change. They practice imaginative brainstorming for solutions that address community problems. Ultimately, our students decide on an app to build that addresses one of these community problems.',
	'2.) Students learn about service design and empathetic user-centered research and create UI/UX designs for their application. ',		
	'3.) Students learn the building blocks of creating a solution from scratch. They ultimately build a fully developed application using Python.',
	'4.) Students learn elevator pitches and presentation skills, showcasing their technology solution to their community.',			
			],
		},
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
			],
		},
		actions: [
			{ label: 'Learn More',    id: 'expansionGetInvolvedLearn',																			                                  	},
			{ label: 'Join a Cohort',                                   ref: 'https://shanecoryselig.typeform.com/to/Nt0NPK',	btnType: 'form'		},
			{ label: 'Apply to Teach',                                  ref: 'https://shanecoryselig.typeform.com/to/pCDvDs',	btnType: 'form'		},
			{ label: 'Donate',                                          ref: '#donate',                                       btnType: 'donate'	},
		],
  },
  
  twitter: {
    title: 'Twitter',
    subtitle: 'Learn More About Our Current Activities',
  },

	about: {
		title: 'Our Board',
		subtitle: ' Learn more about our leaders',
		people: [
			{ name: 'Brianne Caplan',	title: 'Founder & President',		  image: 'imgCaplan',		  bio: 'Brianne is a native of Baltimore, but is now a proud Chicago transplant since attending the University of Chicago. She founded Code Our Dreams due to her and passion for using technology as a powerful tool in bridging the education and achievement gap. She currently works as a Data Scientist at a retail analytics start-up called SwiftIQ. She is especially interested in combining her passions for data and technology with art and philosophy, by using the internet as a dynamic medium for storytelling. In addition to her work for Code Our Dreams, she also volunteers with Empower Work as a Peer Counselor and with GirlForward as a Mentor.'	                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                                                                                                                                                                                                                              },
			{ name: 'Mary Stanton',		title: 'Secretary',	image: 'imgSelig',		  bio: 'Mary Stanton'	},
 			{ name: 'Isa Villaseñor',	title: 'Co-Founder & Treasurer',	image: 'imgVillasenor',	bio: 'Isa is a Chicago native, UChicago grad and an alumn of Chicago Scholars and Daniel Murphy Scholarship Fund. She strongly believes that education is the best tool for success and is passionate about helping youth gain access to opportunities that will put them on a path to leadership. She has mentored students from various organizations for over five years.'		                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                        },
			// { name: 'Piper & Millie',	title: 'Chief Happiness Officers',image: 'imgDogs',		    bio: 'Woof.'	                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                                                                                                                                                                                                                                	                                                                                                                                                        }
		],
	},

	contact: {
		title: 'Contact Us',
		subtitle: 'We want to hear from you!',
		mailingList: {
			title:     'Join Our Mailing List',
			firstName: 'First Name',
			lastName:  'Last Name',
			email:     'Email',
			button:    'Signup',
		},
		message: {
			title:   'Send Us a Message',
			name:    'Name',
			email:   'Email',
			message: 'Message',
			button:  'Send Message',
		},
	},

	footer: {
		socialMedia: [
			{ label: 'Twitter',		icon: 'twitter',	iconType: 'fab',	ref: 'https://twitter.com/CodeOurDreams'				      },
			{ label: 'Facebook',	icon: 'facebook',	iconType: 'fab',	ref: 'https://www.facebook.com/CodeOurDreams'			    },
			{ label: 'LinkedIn',	icon: 'linkedin',	iconType: 'fab',	ref: 'https://www.linkedin.com/company/codeourdreams'	},
			{ label: 'Instagram',	icon: 'instagram',iconType: 'fab',	ref: 'https://www.instagram.com/CodeOurDreams'			  },
			{ label: 'GitHub',		icon: 'github',		iconType: 'fab',	ref: 'https://github.com/orgs/CodeOurDreams'			    },
			{ label: 'Email',		  icon: 'envelope',	iconType: 'fas',	ref: `mailto:${ VARS.email }`					                },
		],

		links: [
			// { label: 'Privacy Policy',	ref: '#footer'	},
			// { label: 'Terms of Use', 	ref: '#footer'	},
		]
	},

	modalBio: {
		header: 'Biography',
	},

	modalDonate: {
		header: 'Donate',
	},
}

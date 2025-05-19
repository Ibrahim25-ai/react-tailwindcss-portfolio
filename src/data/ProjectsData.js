// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	
	FiLinkedin,
	
} from 'react-icons/fi';

export const singleProjectData = [
	{
	ProjectHeader: {
		title: 'Revolutionizing Lab Research Management',
		subTitle : 'Revolutionizing Lab Research: A Dynamic Web Application for Efficient Management',
		publishDate: 'Jan 27, 2024',
		tags: 'Angular / SpringBoot / JWT',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'A web application which is a part of a laboratory project focusing on research management. The project aims to create a comprehensive web platform for managing a research laboratory, including its members, publications, tools, and events.',
		GithubHeading : 'Github Link',
		ProjectLink: [{
			title: 'Github Link',
			display : 'Laboratory Research Management',
			url: 'https://github.com/Ibrahim25-ai/Laboratory_Research_Management_SpringBoot_Angular',
		}],
	
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Angular',
					'SpringBoot',	
					'JWT'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
			  id: 1,
			  details: 
				'The challenge was to design and implement a comprehensive web platform for managing a research laboratory. This required a deep understanding of the various functionalities needed by laboratory members and stakeholders, such as managing publications, tools, and events effectively.',
			},
			{
			  id: 2,
			  details: 
				'Integrating advanced search functionalities for members and publications posed a significant challenge. This involved creating efficient database queries and implementing robust indexing to ensure quick and accurate results based on user input.',
			},
			{
			  id: 3,
			  details: 
				'Ensuring secure access to sensitive data through the integration of Spring Security and JWT authentication was crucial. This required careful planning and implementation of security protocols to protect member information and research outputs.',
			},
			{
			  id: 4,
			  details: 
				'The application needed to provide an appealing user interface while maintaining a seamless user experience. Balancing functionality with design was challenging, particularly in making the platform accessible and user-friendly for both technical and non-technical users.',
			},
		  ],
		SocialSharingHeading: 'Share This',
		SocialSharing: [

			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/in/ibrahim-ben-lakhal/',
			},

		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
	},
	{
		ProjectHeader: {
			title: 'BrightSkies Academy Platform',
			subTitle: 'BrightSkies Academy: Elevating High Performance Computing Training with a Tailored Platform',
			publishDate: 'Nov 6, 2023',
			tags: 'Angular / Django / MySQL / AWS',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Brightskies Inc',
				},
				{
					id: 2,
					title: 'Services',
					details: 'Digital transformation enabler and market leader',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://www.brightskiesinc.com/',
				},
				
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
			'The main objective of the project is to develop a robust web platform that leverages high-capability courses to host powerful resource labs. This platform aims to provide an engaging and effective learning environment, accommodating various skill levels while facilitating advanced computational tasks and collaboration among users.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Angular',
						'Django',
						'MySQL',
						'AWS',
					
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
				  id: 1,
				  details: 
'Making a web platform that can leverage courses with high capabilities to host powerful resources and labs was a significant challenge. This involved ensuring the platform could efficiently handle intensive computational tasks while providing an engaging and informative experience for users at varying skill levels.',				},
				{
				  id: 2,
				  details: 
					'Creating an AWS Lambda function posed several challenges in terms of integration and scalability. Tailoring solutions to client requirements and budget necessitated a flexible architecture that could handle varying loads and service demands efficiently.',
				},
				{
				  id: 3,
				  details: 
					'Building a dashboard for super administrators and managers involved designing an intuitive UI that could present complex data in an easily digestible format. This required extensive user feedback and iterations to ensure usability across different roles within the platform.',
				},
				{
				  id: 4,
				  details: 
					'Monitoring user progress in their courses was crucial for ensuring accountability and engagement. Implementing a reliable tracking system required careful planning of data collection and analysis methods to provide meaningful insights without compromising user privacy.',
				},
			  ],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
			
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/in/ibrahim-ben-lakhal/',
				},
	
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'Blockchain-Driven Authenticity',
			subTitle:'Blockchain-Driven Authenticity: Transforming Olive Oil Supply Chain Transparency',
				publishDate: 'May 31, 2023',
				tags: 'React / NodeJS / Blockchain / MongoDB ',
		},
		ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Image1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Image2,
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: Image3,
				},
		],
		ProjectInfo: {
				
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
				'The main objective of this project is to develop a decentralized application that ensures the traceability of Tunisian extra virgin olive oil using blockchain technology. This application will allow consumers to scan a QR code to view the complete history of their product, thus ensuring transparency regarding the origin and quality of the olive oil.',
				GithubHeading : 'Github Link',
				ProjectLink: [{
					title: 'Github Link',
					display : 'Olive Oil supply chain',
					url: 'https://github.com/Ibrahim25-ai/pfa',
				}],
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Blockchain',
							'Ethereum',
							'Ganache',
							'Truffle',
							'Solidity',
							'React',
							'Node.js',
							'MongoDB',
							'Web3',
						],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
						id: 1,
						details: 
						  'The major challenge lies in developing an application that can integrate multiple actors in the supply chain while ensuring the security and transparency of data. The implementation of smart contracts must meet functional and non-functional requirements while providing an intuitive user interface.',
					  },
					  {
						id: 2,
						details: 
						  'It is necessary to conduct thorough research on existing decentralized applications in the agri-food sector to leverage best practices and avoid pitfalls encountered by similar projects.',
					  },
					  {
						id: 3,
						details: 
						  'Integrating blockchain technology into a traditional sector like agri-food requires raising awareness and training end users to ensure effective adoption of the application.',
					  },
					  {
						id: 4,
						details: 
						  'Developing a robust backend solution, including setting up REST APIs and managing smart contracts, also poses a technical challenge that must be addressed carefully to ensure the performance and scalability of the application.',
					  },
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/in/ibrahim-ben-lakhal/',
					},
			
				],
		},
		RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
		},
	},
	{
		ProjectHeader: {
				title: 'Scalable .NET eCommerce Solution',
				subTitle: 'Empowering Online Retail: A Scalable .NET eCommerce Solution',
				publishDate: 'Dec 12, 2023',
				tags: '.NET / C# /  MS SQL / HTML / CSS',
		},
		ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Image1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Image2,
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: Image3,
				},
		],
		ProjectInfo: {
				
			GithubHeading : 'Github Link',
				ProjectLink: [{
					title: 'Github Link',
					display : 'Ecommerce website',
					url: 'https://github.com/Ibrahim25-ai/ecommerce',
				}],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails: 
				'The objective of this project is to create a powerful and flexible open-source eCommerce platform built on .NET 6, designed to provide businesses with the tools they need to scale and grow. The platform is optimized for high performance, scalability, and security, supporting integration with Microsoft technologies and web farms for enterprise-level reliability.',
				Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
					'.NET 6',
					'MS SQL',
					'Azure',
					'Web Farms',
					'Asynchronous Methods',
					],
				},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
				{
					id: 1,
					details: 
					'One of the key challenges was designing a highly scalable architecture to support businesses of all sizes, from small stores to large enterprises, while maintaining the flexibility required for different business models.',
				},
				{
					id: 2,
					details: 
					'Ensuring seamless integration with web farms was critical for optimizing performance and reliability, especially for businesses with heavy traffic or distributed systems.',
				},
				{
					id: 3,
					details: 
					'Implementing fully asynchronous methods was crucial to enhancing responsiveness and performance across the platform, minimizing load times, and providing smooth user experiences.',
				},
				{
					id: 4,
					details: 
					'Maintaining a high standard of security was essential, requiring adherence to industry-standard security practices, especially when dealing with sensitive customer and transaction data.',
				},
				{
					id: 5,
					details: 
					'As an open-source project, fostering a strong community and providing a customizable, pluggable architecture was a challenge that required attention to design patterns and extensibility, making it easy for developers to contribute and tailor the platform.',
				},
				],
  
				SocialSharingHeading: 'Share This',
				SocialSharing: [
				
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/in/ibrahim-ben-lakhal/',
					},
			
				],
		},
		RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
		},
	},
	{
		ProjectHeader: {
				title: 'Your Personal Blogging Space',
				subTitle: 'Your Personal Blogging Space: Seamless Content Creation and Engagement Platform',
				publishDate: 'May 28, 2023',
				tags: 'PHP / AJAX / JAVASCRIPT / HTML / CSS',
		},
		ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Image1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Image2,
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: Image3,
				},
		],
		ProjectInfo: {
				
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
				'The main objective of this project is to develop a blog platform that allows users to securely authenticate, write posts, and interact with other users through comments and reactions. The application will be designed using the MVC (Model-View-Controller) pattern to ensure a clean separation of concerns and maintainable code structure.',
				GithubHeading : 'Github Link',
				ProjectLink: [{
					title: 'Github Link',
					display : 'Blog space',
					url: 'https://github.com/Ibrahim25-ai/blog/tree/main/blog/blog',
				}],
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'PHP',
							'AJAX',
							'HTML',
							'CSS',
							'JavaScript',
						  ],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					
						{
						  id: 1,
						  details: 
							'The main challenge is to implement secure user authentication that prevents unauthorized access and ensures data protection. This includes validating user inputs and securely storing passwords using hashing techniques.',
						},
						{
						  id: 2,
						  details: 
							'Designing the application using the MVC pattern requires careful planning to ensure that models, views, and controllers interact seamlessly, which can be challenging when implementing complex features like user interactions and dynamic content loading.',
						},
						{
						  id: 3,
						  details: 
							'Handling asynchronous requests using AJAX will require a solid understanding of JavaScript and PHP integration to update content without requiring page reloads, which adds complexity to the development process.',
						},
						{
						  id: 4,
						  details: 
							'Creating a user-friendly interface that encourages user engagement through writing and reacting to posts is crucial. This involves designing intuitive navigation and ensuring the overall user experience is smooth and enjoyable.',
						},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
				
				
				
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/in/ibrahim-ben-lakhal/',
					},
					
				],
		},
		RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
		},
	},
	{
		ProjectHeader: {
			title: 'Patient Tracker',
			subTitle: 'Patient Tracker: Real-Time Health Monitoring and Alert System for Peace of Mind',
			publishDate: 'Apr 20, 2023',
			tags: 'Dart / Flutter / Firebase',
		},
		ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Image1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Image2,
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: Image3,
				},
		],
		ProjectInfo: {
				
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
				'The primary objective of this project is to develop a mobile application using Flutter to help users keep track of patient health status. The app provides real-time visualization of patient information, sends alerts in case of emergencies, and allows users to add tasks and medication reminders.',
				GithubHeading : 'Github Link',
				ProjectLink: [{
					title: 'Github Link',
					display : 'Patient tracker',
					url: 'https://github.com/Ibrahim25-ai/SuiviPatientFlutter',
				}],
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'Flutter',
          					'Firebase',
						],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
						id: 1,
						details: 
						  'One of the main challenges was to implement real-time data visualization, ensuring that patient status updates were instantly reflected in the app without lag, which required effective integration with Firebase for data syncing.',
					  },
					  {
						id: 2,
						details: 
						  'Developing a user-friendly interface that accommodates a range of functionalities (such as task management and medication reminders) while maintaining simplicity and ease of navigation for users was crucial.',
					  },
					  {
						id: 3,
						details: 
						  'Ensuring the reliability of alert systems in case of emergencies was a key focus, necessitating rigorous testing and validation to confirm that alerts were triggered accurately and promptly when required.',
					  },
					  {
						id: 4,
						details: 
						  'Handling sensitive patient data raised privacy and security concerns, requiring the implementation of robust security measures to protect user information and ensure compliance with healthcare regulations.',
					  },
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					
					
				
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/in/ibrahim-ben-lakhal/',
					},
				
				],
		},
		RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
		},
	},
	{
		ProjectHeader: {
			title: 'DoubleCo Agency',
			subTitle: 'DoubleCo Agency: Showcasing Creativity with a User-Friendly Mobile-Responsive Site',

			publishDate: 'Oct 11, 2022',
			tags: 'HTML / Bootstrap / CSS / Frontend',
		},
		ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: Image1,
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: Image2,
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: Image3,
				},
		],
		ProjectInfo: {
				ClientHeading: 'About Client',
				CompanyInfo: [
					{
						id: 1,
						title: 'Name',
						details: 'DoubleCo Agency',
					},
					{
						id: 2,
						title: 'Services',
						details: 'Communication consulting agency',
					},
					
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails:
				'The primary objective of this project is to develop a showcase website for a communication agency to effectively present their services. The site is designed to be user-friendly and visually appealing, ensuring a seamless experience for visitors on both desktop and mobile devices.',
				GithubHeading : 'Github Link',
				ProjectLink: [{
					title: 'Github Link',
					display : 'DoubleCo Agency',
					url: 'https://github.com/Ibrahim25-ai/DoubleCo',
				}],
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'Bootstrap',
						  ],
					},
				],
				ProjectDetailsHeading: 'Challenge',
				ProjectDetails: [
					{
					  id: 1,
					  details: 
						'One of the main challenges was to create a visually appealing design that aligns with the communication agency’s branding while ensuring the site is easy to navigate for users of all backgrounds.',
					},
					{
					  id: 2,
					  details: 
						'Implementing responsive design using Bootstrap required careful attention to different screen sizes and devices, ensuring that all elements functioned correctly and were aesthetically pleasing on mobile devices.',
					},
					{
					  id: 3,
					  details: 
						'Balancing aesthetics with performance was crucial, as the site needed to load quickly and efficiently without sacrificing visual quality, especially on mobile devices with varying internet speeds.',
					},
					{
					  id: 4,
					  details: 
						'This being my first freelance project, effective communication with the client was essential to understand their vision and requirements, which sometimes posed challenges in aligning their expectations with the final deliverable.',
					},
				  ],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/in/ibrahim-ben-lakhal/',
					},
	
				],
		},
		RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
		},
	},
];

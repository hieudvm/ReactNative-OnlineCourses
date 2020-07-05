const coursesData = [
    {
        id: 1,
        title: 'React Native',
        author: 'Hai Pham',
        level: 'Advance',
        released: 'May 12, 2020',
        duration: '38 hours',
        image: '../../assets/reactNative.png',
        content: [
            {
                detail: 'Getting started',
                time: '1:27',
                data: [
                    {
                        title: 'Getting started',
                        time: '1:27'
                    }
                ]
            },
            {
                detail: 'Course Overview',
                time: '1 hour 40m',
                data: [
                    {
                        title: 'Introduction',
                        time: '2:10'
                    },
                    {
                        title: 'Setup Enviroment',
                        time: '18:09'
                    },
                    {
                        title: 'Generate React Native Project & Run App On Simulators/Devices',
                        time: '12:53'
                    },
                    {
                        title: 'Project Walkthrough',
                        time: '9:00'
                    },
                    {
                        title: 'Component & JSX',
                        time: '18:46'
                    },
                    {
                        title: 'Props & State',
                        time: '11:33'
                    },
                    {
                        id: 7,
                        title: 'Style In ReactNative',
                        time: '7:37'
                    }
                ]
            },
            {
                detail: 'Component, Styling and Layout',
                time: '4 hours 13m',
                data: [
                    {
                        title: 'Component, Styling and Layout',
                        time: '2:08:36'
                    },
                    {
                        title: 'Using ScrollView/Image/FlatList/SectionList/Alert/Share in React Native',
                        time: '2:05:20'
                    }
                ]
            },
            {
                detail: 'Navigation with React Navigation',
                time: '2 hours 11m',
                data: [
                    {
                        title: 'Navigation with React Navigation',
                        time: '2:11:18'
                    }
                ]
            },
            {
                detail: 'State management and Redux',
                time: '3 hours 43m',
                data: [
                    {
                        title: 'React Lifecycle, React Hook and React Context',
                        time: '2:03:11'
                    },
                    {
                        title: 'React Lifecycle, React Hook and React Context - Part 2',
                        time: '1:40:09'
                    }]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 2,
        title: 'Android',
        author: 'Huy Nguyen',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '30 hours',
        image: '../../assets/Android.jpg',
        content: [
            {
                detail: 'Android developer',
                time: '3 hours 50m',
                data: [
                    {
                        title: 'Android developer',
                        time: '3 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 3,
        title: 'IOS',
        author: 'Huy Nguyen',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '30 hours',
        content: [
            {
                detail: 'Ios developer',
                time: '3 hours 50m',
                data: [
                    {
                        title: 'Ios developer',
                        time: '3 hours 50m'
                    }
                ]
            }
        ],
        image: '../../assets/Ios.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 4,
        title: 'ReactJs',
        author: 'Hai Pham',
        level: 'Advance',
        released: 'May 12, 2020',
        image: '../../assets/react.png',
        duration: '38 hours',
        content: [
            {
                detail: 'ReactJs developer',
                time: '4 hours 50m',
                data: [
                    {
                        title: 'ReactJs developer',
                        time: '4 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 5,
        title: 'VueJs',
        author: 'Huy Nguyen',
        level: 'Beginner',
        released: 'May 12, 2020',
        image: '../../assets/vuejs-logo.jpg',
        duration: '30 hours',
        content: [
            {
                detail: 'VueJs developer',
                time: '5 hours 50m',
                data: [
                    {
                        title: 'VueJs developer',
                        time: '5 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isPaths: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 6,
        title: 'NuxtJs',
        author: 'Huy Nguyen',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '30 hours',
        image: '../../assets/Nuxtjs.png',
        content: [
            {
                detail: 'NuxtJs developer',
                time: '3 hours 20m',
                data: [
                    {
                        title: 'NuxtJs developer',
                        time: '3 hours 20m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 7,
        title: 'Java Developer',
        author: 'Hai Pham',
        level: 'Advance',
        released: 'May 12, 2020',
        duration: '38 hours',
        image: '../../assets/Javadev.jpg',
        content: [
            {
                detail: 'Java developer: The Big Picture',
                time: '6 hours 50m',
                data: [
                    {
                        title: 'Java developer: The Big Picture',
                        time: '6 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 8,
        title: 'Python',
        author: 'Huy Nguyen',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '30 hours',
        image: '../../assets/Python.jpg',
        content: [
            {
                detail: 'Python developer',
                time: '4 hours 30m',
                data: [
                    {
                        title: 'Python developer',
                        time: '4 hours 30m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 9,
        title: 'Angular',
        author: 'Huy Nguyen',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '30 hours',
        image: '../../assets/Angular.png',
        content: [
            {
                detail: 'Angular developer',
                time: '3 hours 50m',
                data: [
                    {
                        title: 'Angular developer',
                        time: '3 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 10,
        title: 'Spring Framework: Spring MVC',
        author: 'Bryan',
        level: 'Beginner',
        released: 'May 15, 2019',
        duration: '23 hours',
        image: '../../assets/SpringMVC.png',
        content: [
            {
                detail: 'Spring Framework: Spring MVC',
                time: '3 hours 50m',
                data: [
                    {
                        title: 'Spring Framework: Spring MVC',
                        time: '3 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 11,
        title: 'Restful API webservice',
        author: 'Shawn',
        level: 'Beginner',
        released: 'Feb 27, 2019',
        duration: '12 hours',
        image: '../../assets/restfulAPI.jpg',
        content: [
            {
                detail: 'Restful API webservice',
                time: '5 hours 50m',
                data: [
                    {
                        title: 'Restful API webservice',
                        time: '5 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 12,
        title: 'NodeJs: The Big Picture',
        author: 'Fallon',
        level: 'Beginner',
        released: 'Jun 3, 2019',
        duration: '5 hours',
        image: '../../assets/Nodejs.svg',
        content: [
            {
                detail: 'NodeJs: The Big Picture',
                time: '5 hours 50m',
                data: [
                    {
                        title: 'NodeJs: The Big Picture',
                        time: '5 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 13,
        title: 'Javascript: Getting Started',
        author: 'Barry',
        level: 'Beginner',
        released: 'Jan 16, 2019',
        duration: '4 hours',
        image: '../../assets/javascript.png',
        content: [
            {
                detail: 'Javascript: Getting Started',
                time: '4 hours 50m',
                data: [
                    {
                        title: 'Javascript: Getting Started',
                        time: '4 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 14,
        title: 'HTML, CSS, Javascript: The Big Picture',
        author: 'Hieu Duong',
        Level: 'Beginner',
        released: 'Jan 20, 2019',
        duration: '1 hours',
        image: '../../assets/html-css-js.jpg',
        star: 5,
        content: [
            {
                detail: 'HTML, CSS, Javascript: Getting Started',
                time: '4 hours 50m',
                data: [
                    {
                        title: 'HTML, CSS, Javascript: Getting Started',
                        time: '4 hours 50m'
                    }
                ]
            }
        ],
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 15,
        title: 'C++: The Big Picture',
        author: 'Mike',
        level: 'Beginner',
        released: 'Feb 2, 2020',
        duration: '10 hours',
        image: '../../assets/Cplus.jpg',
        content: [
            {
                detail: 'C++: The Big Picture',
                time: '4 hours 50m',
                data: [
                    {
                        title: 'C++: The Big Picture',
                        time: '4 hours 50m'
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 16,
        title: 'Angular Denver 2019: Keynote talk',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: '40m 42s',
        content: [
            {
                detail: 'Keynote talk',
                time: '40m 42s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 17,
        title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: ' 24m 28s',
        content: [
            {
                detail: 'Simplifying Front end State Management with Observable Store',
                time: '24m 28s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 18,
        title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: ' 22m 48s',
        content: [
            {
                detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                time: '22m 48s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 19,
        title: 'Angular Denver 2019: What you do not know about Zone.js',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: ' 10m 47s',
        content: [
            {
                detail: 'What you do not know about Zone.js',
                time: '10m 47s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 20,
        title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: ' 20m 36s',
        content: [
            {
                detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                time: '20m 36s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 21,
        title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: ' 22m 4s',
        content: [
            {
                detail: 'Machine Learning in Angular with TensorFlow.js',
                time: '22m 4s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 22,
        title: 'Angular Denver 2019: Rendering Angular Applications in Terminal, Angular Platform',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: ' 20m 24s',
        content: [
            {
                detail: 'Rendering Angular Applications in Terminal, Angular Platform',
                time: '20m 24s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 23,
        title: 'Angular Denver 2019: Intro to Bazel',
        author: 'Angular Denver',
        level: 'Intermediate',
        released: 'Sep 11, 2019',
        duration: ' 10m 6s',
        content: [
            {
                detail: 'Intro to Bazel',
                time: '10m 6s',
                data: [
                    {
                        title: '',
                        time: ''
                    }
                ]
            }
        ],
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    }
]

const paths = [
    {
        id: 1,
        title: 'Angular Denver 2019',
        countCourses: '44 Courses',
        duration: '15 hours',
        description: 'Angular Denver is the coolest Angular conference east of the Continental Dide! Angular developers come from all over to spend two days learning, connecting, and having fun.',
        image: '../../assets/angular-pwa-course.png',
        listCourses: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Rendering Angular Applications in Terminal, Angular Platform',
                author: 'Angular Denver',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 24s',
                content: [
                    {
                        detail: 'Rendering Angular Applications in Terminal, Angular Platform',
                        time: '20m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 2,
        title: 'Big Data LDN 2019',
        countCourses: '101 Courses',
        duration: '42 hours',
        description: 'Big Data LDN (London) is a free to attend conference and exhibition, hosting leading data and analytics experts who are ready to equip you with the tools you need to deliver your most effective data-driven strategy.',
        image: '../../assets/Big-Data.jpg',
        listCourses: [
            {
                title: 'The Database Is Only Half Done',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: '30m 1s',
                content: [
                    {
                        detail: 'The Database Is Only Half Done',
                        time: '30m 1s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Your AI Is Wrong! Lessons from Decision-making with Imperfect AI',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: '23m 8s',
                content: [
                    {
                        detail: 'Your AI Is Wrong! Lessons from Decision-making with Imperfect AI',
                        time: '23m 8s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Multiparadigm Data Science: The Next Frontier in Decision Making',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: '24m 53s',
                content: [
                    {
                        detail: 'Multiparadigm Data Science: The Next Frontier in Decision Making',
                        time: '24m 53s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Achieving 100% Adoption of Analytics in the Enterprise',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: ' 28m 33s',
                content: [
                    {
                        detail: 'Achieving 100% Adoption of Analytics in the Enterprise',
                        time: '28m 33s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Data Skills: How Mondi Does Digital',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: ' 19m 49s',
                content: [
                    {
                        detail: 'Data Skills: How Mondi Does Digital',
                        time: '19m 49s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Building a Modern Data Architecture for the Data Driven Enterprise',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 15, 2019',
                duration: ' 30m 25s',
                content: [
                    {
                        detail: 'Building a Modern Data Architecture for the Data Driven Enterprise',
                        time: '30m 25s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Harnessing the Power of Data to Improve Public Health',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: ' 23m 11s',
                content: [
                    {
                        detail: 'Harnessing the Power of Data to Improve Public Health',
                        time: '23m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Real-time Data Analytics at Scale Using Cloud Services',
                author: 'Big Data LDN',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: ' 28m 23s',
                content: [
                    {
                        detail: 'Real-time Data Analytics at Scale Using Cloud Services',
                        time: '28m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 3,
        title: 'BSides Huntsville 2020',
        countCourses: '8 Courses',
        duration: '6 hours',
        description: 'BSides Huntsville is the conference for those that work in the trenches of cybersecurity for you to engage in fierce discussions about the next big ideas or the worst product you have ever seen in a friendly and informal setting.',
        image: '../../assets/bsides-huntsville.png',
        listCourses: [
            {
                title: 'Sercurity 2030: The Next Decade',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '39m 11s',
                content: [
                    {
                        detail: '',
                        time: '39m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Training the IT Security Staff on a Shoestring Budget',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 28, 2020',
                duration: '37m 20s',
                content: [
                    {
                        detail: 'Training the IT Security Staff on a Shoestring Budget',
                        time: '37m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'How to Secure America',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '1h 11m',
                content: [
                    {
                        detail: 'How to Secure America',
                        time: '1h 11m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Reversing the Gophe Spambot: Confronting COM Code and Surmouting STL Snags',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '40m 9s',
                content: [
                    {
                        detail: 'Reversing the Gophe Spambot: Confronting COM Code and Surmouting STL Snags',
                        time: '40m 9s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Closing the Cybersecurity Talent Gap',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '1h 4m',
                content: [
                    {
                        detail: 'Closing the Cybersecurity Talent Gap',
                        time: '1h 4m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Cyber-Ninja Space Pirates',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '38m 6s',
                content: [
                    {
                        detail: 'Cyber-Ninja Space Pirates',
                        time: '38m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Hacking the Human',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: ' 50m 11s',
                content: [
                    {
                        detail: 'Hacking the Human',
                        time: '50m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 4,
        title: 'CodeMash Conference 2020',
        countCourses: '94 Courses',
        duration: '76 hours',
        description: 'CodeMash is a unique event that educates developers on current practices, methodologies and technology trends in variety of platforms and development languages such as Java, .Net, Ruby and PHP.',
        image: '../../assets/CodeMash.jpg',
        listCourses: [
            {
                title: 'Event Processing without Breaking Production: CodeMash',
                author: 'CodeMash',
                level: 'Intermediate',
                released: 'Feb 7, 2020',
                duration: '39m 11s',
                content: [
                    {
                        detail: 'Event Processing without Breaking Production: CodeMash',
                        time: '39m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Bringing Order to Chaos: CodeMash',
                author: 'CodeMash',
                level: 'Intermediate',
                released: 'Feb 7, 2020',
                duration: '37m 20s',
                content: [
                    {
                        detail: 'Bringing Order to Chaos: CodeMash',
                        time: '37m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Finding Service Boundaries: CodeMash',
                author: 'CodeMash',
                level: 'Intermediate',
                released: 'Feb 7, 2020',
                duration: '1h 11m',
                content: [
                    {
                        detail: 'Finding Service Boundaries: CodeMash',
                        time: '1h 11m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'API Gateways and Microservices: CodeMash',
                author: 'CodeMash',
                level: 'Intermediate',
                released: 'Feb 7, 2020',
                duration: '40m 9s',
                content: [
                    {
                        detail: 'API Gateways and Microservices: CodeMash',
                        time: '40m 9s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Vertical Slice Architecture: CodeMash',
                author: 'CodeMash',
                level: 'Intermediate',
                released: 'Feb 7, 2020',
                duration: '1h 4m',
                content: [
                    {
                        detail: 'Vertical Slice Architecture: CodeMash',
                        time: '1h 4m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Kiling REST and Adopting RPC: CodeMash',
                author: 'CodeMash',
                level: 'Intermediate',
                released: 'Feb 7, 2020',
                duration: '38m 6s',
                content: [
                    {
                        detail: 'Kiling REST and Adopting RPC: CodeMash',
                        time: '38m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: '5 Ideas For Writing Better Cloud Native Microservice: CodeMash',
                author: 'CodeMash',
                level: 'Intermediate',
                released: 'Feb 7, 2020',
                duration: ' 50m 11s',
                content: [
                    {
                        detail: '5 Ideas For Writing Better Cloud Native Microservice: CodeMash',
                        time: '50m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 5,
        title: 'DEVintersection 2019',
        countCourses: '20 Courses',
        duration: '18 hours',
        description: 'It is a challenge to stay on top of everything new while mastering the fundamentals. This exciting event, now in its eighth year, brings your favorite Microsoft leaders,, engineers and industry experts together to educate, network and share their expertise with you. ',
        image: '../../assets/devintersection.png',
        listCourses: [
            {
                title: 'The History of .Net: DEVintersection 2019',
                author: 'DEVintersection',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '1h 5m',
                content: [
                    {
                        detail: 'The History of .Net: DEVintersection 2019',
                        time: '1h 5m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'The State of .Net and Looking Ahead to 2020: DEVintersection 2019',
                author: 'DEVintersection',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '59m 27s',
                content: [
                    {
                        detail: 'The State of .NET and Looking Ahead to 2020: DEVintersection 2019',
                        time: '59m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Building Modern .NET Desktop Apps with .NET core and Windows 10: DEVitersection 2019',
                author: 'DEVintersection',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '52m 16s',
                content: [
                    {
                        detail: 'Building Modern .NET Desktop Apps with .NET core and Windows 10: DEVitersection 2019',
                        time: '52m 16s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Building the Best Web App with lastest Updates to ASP.NET Core for 2020: DEVintersection 2019',
                author: 'DEVintersection',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '48m 56s',
                content: [
                    {
                        detail: 'Building the Best Web App with lastest Updates to ASP.NET Core for 2020: DEVintersection 2019',
                        time: '48m 56s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'What You Need to Know About .NET Core: DEVintersection 2019',
                author: 'DEVintersection',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '1h 2m',
                content: [
                    {
                        detail: 'What You Need to Know About .NET Core: DEVintersection 2019',
                        time: '1h 2m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Blazor for the Web Forms Developer: DEVintersection 2019',
                author: 'DEVintersection',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '38m 6s',
                content: [
                    {
                        detail: 'Blazor for the Web Forms Developer: DEVintersection 2019',
                        time: '38m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'SignalR: Real-time for All the Things: DEVintersection 2019',
                author: 'DEVintersection',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: ' 50m 11s',
                content: [
                    {
                        detail: 'SignalR: Real-time for All the Things: DEVintersection 2019',
                        time: '50m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 6,
        title: 'AWS Application Development',
        countCourses: '12 Courses',
        duration: '15 hours',
        description: 'In this path, you will learn how to develop application using primarily Amazon Web Service. We will cover the various tools of AWS development, how to continuously deliver and automate deployments.',
        image: '../../assets/aws.png',
        listCourses: [
            {
                title: 'Coding in AWS Cloud9 IDE',
                author: 'Jordan Yankovich',
                level: 'Intermediate',
                released: 'Jun 11, 2020',
                duration: '1h 16m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using AWS Cloud9',
                        time: '22m 52s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Developing sofware with Cloud9',
                        time: '17m 46s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Collaborating with Teams Using Cloud9',
                        time: '15m 16s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Integrating Cloud9 and Other AWS Service',
                        time: '18m 29s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Developing Applications with AWS Lightsail',
                author: 'Tom Compagno',
                level: 'Intermediate',
                released: 'Mar 6, 2020',
                duration: ' 1h 12m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'cretae and Connect to a Lightsail Server',
                        time: '16m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Create and Configure a Cloud9 Developmet Enviroment',
                        time: '12m 37s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Prepare Your Lightsail for Production Scalability',
                        time: '9m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Scaling Lightsail to Hanle More Traffic',
                        time: '26m 29s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Exploring Additional Lightsail Capabilities',
                        time: '5m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Performing Continuous Delivery with AWS CodeStar',
                author: 'Armen Avanesi',
                level: 'Intermediate',
                released: 'Mar 12, 2020',
                duration: ' 54m 33s',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Your First Continuos Delivery Pipeline',
                        time: '23m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Monitoring and Managing a CodeStar Application',
                        time: '20m 17s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Team Management with CodeStar',
                        time: '9m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Managing Source Control with AWS CodeCommit',
                author: 'Saravanan',
                level: 'Intermediate',
                released: 'Feb 10, 2020',
                duration: ' 1h 5m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '2m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Core Features of AWS CodeCommit',
                        time: '17m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Integrate AWS CodeCommit with AWS Cloud9',
                        time: '15m 51s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Monitor and Troubleshoot AWS CodeCommit',
                        time: '14m 8s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Deploying Code with AWS CodeDeploy',
                author: 'Edwards',
                level: 'Intermediate',
                released: 'Apr 8, 2020',
                duration: ' 1h 12m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Overview of AWS CodeDeploy',
                        time: '12m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using CodeDeploy with EC2',
                        time: '20m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using CodeDeploy with ECS',
                        time: '18m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using CodeDeploy with Lambda',
                        time: '18m 45s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Practicing CI/CD with AWS CodePipeline',
                author: 'Ryan Lewis',
                level: 'Intermediate',
                released: 'Mar 20, 2020',
                duration: ' 1h 4m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building and Deploying code win CodePipeline',
                        time: '40m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Advanced CodePipeline Practices',
                        time: '20m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Implementing Pub/Sub Messageing with Amazon SNS',
                author: 'Saravanan',
                level: 'Beginner',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Getting started with Amazon SNS',
                        time: '40m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Publishing Messages to SNS',
                        time: '20m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Implementing Message Brokering with Amazon MQ',
                author: 'Michael',
                level: 'Beginner',
                released: 'Apr 9, 2020',
                duration: ' 1h 38m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Message with Amazon MQ',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Managing Amazon MQ',
                        time: '20m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 7,
        title: 'C# Development Fundamentals',
        countCourses: '14 Courses',
        duration: '42 hours',
        description: 'C# is the most commonly used language for leveraging the .NET  Framework. Such as, learning C# is springboard to creating enterprise systems, desktop application, websites and mobile applications.',
        image: '../../assets/C#.jpeg',
        listCourses: [
            {
                title: 'C# Fundamentals',
                author: 'Scott Allen',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                author: 'Simon Robin',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 8,
        title: 'Java Development Enviroments and Tooling',
        countCourses: '6 Courses',
        duration: '15 hours',
        description: 'While you can write Java code using a simple text editor and compile your code using te java command, you will be much more productive if you take advantage of and master the rich tooling available to you.',
        image: '../../assets/Javadev.jpg',
        listCourses: [
            {
                title: 'Setting up Java Development Enviroment',
                author: 'Sander Mak',
                level: 'Beginner',
                released: 'Jan 3, 2020',
                duration: '50m 11s',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Installing and Running Java',
                        time: '18m 59s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using IntelliJ for Java Development',
                        time: '19m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Packaging Java Applications',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Eclipse for Java Developers',
                author: 'Jose Paumard',
                level: 'Intermediate',
                released: 'Apr 5, 2018',
                duration: '3h 23m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Setting up a JavaSE Developent Enviroment with Eclipse',
                        time: '52m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Setting up a Java Maven Development Enviroment with Eclipse',
                        time: '41m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using Git for Java Project in Eclipse',
                        time: '43m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Connecting Eclipse to a Database Server with MySQL',
                        time: '18m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Setting up a JavaEE Project in Eclipse with Tomcat',
                        time: '43m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Maven Fundamentals',
                author: 'Bryan Hansen',
                level: 'Intermediate',
                released: 'Jun 28, 2019',
                duration: '2h 25m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introduction to Maven',
                        time: '38m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Structure',
                        time: '41m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Dependencies',
                        time: '20m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Repositories',
                        time: '17m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Plugins',
                        time: '19m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 9,
        title: 'API Development in ASP .NET Core',
        countCourses: '7 Courses',
        duration: '19 hours',
        description: 'APIs are at the heart of today s connected applications. ASP .NET Core offers a multitude of choices for developing APIs. This path will help you learn about al of the choices, from REST to GraphQL, and how to implement each one.',
        image: '../../assets/asp-net-core.png',
        listCourses: [
            {
                title: 'Designing RESTful Web APIs',
                author: 'Shawn',
                level: 'Beginner',
                released: 'Aug 5, 2019',
                duration: '2h 17m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'What is REST?',
                        time: '28m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Designing a RESTful API',
                        time: '41m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Handling More Complex Scenarios in Your API',
                        time: '20m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Version Your API',
                        time: '10m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Locking Down Your API',
                        time: '19m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Building a RESTful API with ASP.NET Core 3',
                author: 'Kevin Dockx',
                level: 'Beginner',
                released: 'Oct 10, 2019',
                duration: '5h 3m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Getting started with REST',
                        time: '43m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Structuring and Implementing the Outer Facing Contract',
                        time: '49m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Getting Resources',
                        time: '35m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Filltering and Searching',
                        time: '20m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Resources',
                        time: '49m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Validating Data and Reporting validation Errors',
                        time: '26m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Updating Resources',
                        time: '1h 3m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Deleting Resources',
                        time: '13m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Implementing Advanced RESTful API Concerns with ASP.NET Core 3',
                author: 'Kevin Dockx',
                level: 'Intermediate',
                released: 'Oct 10, 2019',
                duration: '3h 53m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Supporting Paging for Collection Resources',
                        time: '40m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Sorting Resource Collections',
                        time: '30m 38s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Shaping Data',
                        time: '20m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning and Implementing HATEOAS',
                        time: '30m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Improving Reliablitity with Advanced Content Negotiation',
                        time: '42m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Getting Started with Caching Resources',
                        time: '32m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Supporting HTTP Cache for ASP.NET Core APIs ',
                        time: '25m 17s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Supporting Concurrency',
                        time: '8m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Documenting an ASP.Net Core API with OpenAPI/Swagger',
                author: 'Kevin Dockx',
                level: 'Intermediate',
                released: 'Feb 27, 2019',
                duration: '2h 51m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Getting Started with Open API/ Swagger',
                        time: '13m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Documenting Your First API with OpenAPI/ Swagger',
                        time: '22m 38s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using and Overriding Conventions for OpenAPI Generation',
                        time: '42m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Generating OpenAPI Specifications for Advenced input and Output Scenarios',
                        time: '30m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Dealing with Different Versions and Protecting the Documentation',
                        time: '34m 29s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Improving Your Documentation with Advanced Customization',
                        time: '18m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 10,
        title: 'IOS App Development - Fundamentals',
        countCourses: '12 Courses',
        duration: '31 hours',
        description: 'Learn to build IOS app for iPhone and iPad. You will begin with the Swift programming language, explore Apple s xcode IDE and cover all the essential concepts, architectural patterns and techniques to build IOS apps.',
        image: '../../assets/Ios.jpg',
        listCourses: [
            {
                title: 'Swift Fundamentals',
                author: 'Simmon',
                level: 'Beginner',
                released: 'Jan 10, 2019',
                duration: '3h 48m',
                content: [
                    {
                        detail: 'A Few More Reasons to Learn Swift',
                        time: '27m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Piece by piece: What Your Data Means',
                        time: '48m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Shaping the Path: Controlling the Flow of Your Code',
                        time: '27m 38s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Constructing Code: Who Does What? - Creating Functions',
                        time: '21m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                        time: '27m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'IOS 11 Fundamentals',
                author: 'Simon',
                level: 'Beginner',
                released: 'Jan 24, 2018',
                duration: '4h 24m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Getting Started',
                        time: '48m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Single View Applications',
                        time: '45m 38s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Constructing Code: Who Does What? - Creating Functions',
                        time: '21m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                        time: '27m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Becomming an Xcode Power User',
                author: 'Jonathan Wong',
                level: 'Beginner',
                released: 'May 22, 2020',
                duration: '2h 34m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Managing Projetc and Workspaces in Xcode',
                        time: '19m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Xcode Project: Configuring Schemes and Targets',
                        time: '22m 38s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Navigating through Xcode: Finding Your Workflow',
                        time: '27m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Productivity in Xcode',
                        time: '27m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'IOS Collection Views: Getting Started',
                author: 'Mark',
                level: 'Intermediate',
                released: 'Jun 13, 2019',
                duration: '2h 27m',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Course Introduction',
                        time: '7m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Your First Collection View',
                        time: '15m 38s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Custommizing Size and Spacing',
                        time: '21m 57s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Supplementary Views (Section Header and Footer)',
                        time: '27m 5s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Customizing Collection View Cells',
                        time: '24m 29s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Object - C for Swift Developers',
                author: 'David',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '1h 23m',
                content: [
                    {
                        detail: 'Object - C for Swift Developers',
                        time: '1h 2m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 11,
        title: 'Fundamentals of IP Operations',
        countCourses: '20 Courses',
        duration: '40 hours',
        description: 'This is collection of courses provides newcomers with the first step they need to start a career in IT. After completing this path, learners should be prepared to begin a entry-level IT job, such as Help Desk Technician or Desktop Support Technician, that provides additional hands-on experience.',
        image: '../../assets/ITOP.png',
        listCourses: [
            {
                title: 'Computer Fundamentals: Hardware',
                author: 'Daniel',
                level: 'Intermediate',
                released: 'Jan 14, 2019',
                duration: '2h 43m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Hardware',
                        time: '2h 43m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Mobile Devices',
                author: 'Glenn',
                level: 'Intermediate',
                released: 'Jan 14, 2019',
                duration: '2h 33m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Mobile Devices',
                        time: '2h 33m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Operating Systems',
                author: 'Glenn',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '3h 55m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Operating Systems',
                        time: '3h 55m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Operational Procedures',
                author: 'Denial',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '1h 55m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Operational Procedures',
                        time: '1h 55m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Networking',
                author: 'Vlad',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '2h 12m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Networking',
                        time: '2h 12m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Practical Networking',
                author: 'Ben Piper',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '3h 27m',
                content: [
                    {
                        detail: 'Practical Networking',
                        time: '3h 27m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 12,
        title: 'Fundamentals of IP Operations',
        countCourses: '20 Courses',
        duration: '40 hours',
        description: 'This is collection of courses provides newcomers with the first step they need to start a career in IT. After completing this path, learners should be prepared to begin a entry-level IT job, such as Help Desk Technician or Desktop Support Technician, that provides additional hands-on experience.',
        image: '../../assets/ITOP.png',
        listCourses: [
            {
                title: 'Computer Fundamentals: Hardware',
                author: 'Daniel',
                level: 'Intermediate',
                released: 'Jan 14, 2019',
                duration: '2h 43m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Hardware',
                        time: '2h 43m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Mobile Devices',
                author: 'Glenn',
                level: 'Intermediate',
                released: 'Jan 14, 2019',
                duration: '2h 33m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Mobile Devices',
                        time: '2h 33m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Operating Systems',
                author: 'Glenn',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '3h 55m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Operating Systems',
                        time: '3h 55m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Operational Procedures',
                author: 'Denial',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '1h 55m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Operational Procedures',
                        time: '1h 55m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Computer Fundamentals: Networking',
                author: 'Vlad',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '2h 12m',
                content: [
                    {
                        detail: 'Computer Fundamentals: Networking',
                        time: '2h 12m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Practical Networking',
                author: 'Ben Piper',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '3h 27m',
                content: [
                    {
                        detail: 'Practical Networking',
                        time: '3h 27m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 13,
        title: 'Managing Security Operations in Microsoft Azure',
        countCourses: '4 Courses',
        duration: '5 hours',
        description: 'Moving to the cloud provides countless benefits to you and your organization, but properly securing and maintaining security in the cloud presents a never-ending challenge.',
        image: '../../assets/microsoft-azure-main.png',
        listCourses: [
            {
                title: 'Managing and Responding to Microsoft Azure Security Alerts',
                author: 'Ammar Hasayen',
                level: 'Intermediate',
                released: 'Jun 25, 2019',
                duration: '57m 1s',
                content: [
                    {
                        detail: 'Managing and Responding to Microsoft Azure Security Alerts',
                        time: '57m 1s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Configuring Security Services and Polices in Microsoft Azure',
                author: 'Ned Bellavance',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: '1h 52m',
                content: [
                    {
                        detail: 'Configuring Security Services and Polices in Microsoft Azure',
                        time: '1h 52m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Indident Response and Remediation in Microsoft Azure',
                author: 'Ammar Hasayen',
                level: 'Intermediate',
                released: 'Dec 13, 2019',
                duration: '2h 11m',
                content: [
                    {
                        detail: 'Indident Response and Remediation in Microsoft Azure',
                        time: '2h 11m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 14,
        title: 'Microsoft Azure Stack Planning and Operations',
        countCourses: '4 Courses',
        duration: '5 hours',
        description: 'Microsoft Azure Stack is a extension of Microsoft Azure Cloud Platform Service to your on-premises implementations. This path will teach you the basics of planing for, setting up, and managing the operations of this hybrid integration.',
        image: '../../assets/microsoft-azure-main.png',
        listCourses: [
            {
                title: 'Microsoft Azure Stack Hub Development: Getting Started',
                author: 'Jason Helmick',
                level: 'Beginner',
                released: 'Feb 29, 2020',
                duration: '1h 13m',
                content: [
                    {
                        detail: 'Microsoft Azure Stack Hub Development: Getting Started',
                        time: '1h 13m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Creating Micro Azure Stack Development Enviroments',
                author: 'Jason Helmick',
                level: 'Beginner',
                released: 'Feb 28, 2020',
                duration: '1h 43m',
                content: [
                    {
                        detail: 'Creating Micro Azure Stack Development Enviroments',
                        time: '1h 43m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Architecural Patterns for Azure Stack Solutions',
                author: 'Tim Waner',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '1h 48m',
                content: [
                    {
                        detail: 'Architecural Patterns for Azure Stack Solutions',
                        time: '1h 48m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Operating Azure stack Hub',
                author: 'Ned Bellavance',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '1h 31m',
                content: [
                    {
                        detail: 'Operating Azure stack Hub',
                        time: '40m 9s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 15,
        title: 'Monitoring Microsoft Resources with System Center 2016 (SCOM)',
        countCourses: '4 Courses',
        duration: '12 hours',
        description: 'System Center Operations Manager, also known as SCOM or OpsMgr, is an enterprise monitoring tool that deeply instruments servers ad services in the datacenter.',
        image: '../../assets/SCOM_Logo.jpg',
        listCourses: [
            {
                title: 'Introduction System Center 2016 - Operations Manager SCOM',
                author: 'Greg Shield',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '1h 5m',
                content: [
                    {
                        detail: 'Introduction System Center 2016 - Operations Manager SCOM',
                        time: '1h 5m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Installing and Configuring System Center 2016 - Operations Manager (SCOM)',
                author: 'Greg Shield',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '59m 27s',
                content: [
                    {
                        detail: 'Installing and Configuring System Center 2016 - Operations Manager (SCOM)',
                        time: '59m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Monitoring Windows Server 2016 with System Center 2016 - Operations Manager (SCOM)',
                author: 'Greg Shield',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '52m 16s',
                content: [
                    {
                        detail: 'Monitoring Windows Server 2016 with System Center 2016 - Operations Manager (SCOM)',
                        time: '52m 16s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Monitor Azure Resources and Web Applications with System Center Operations Manager (SCOM)',
                author: 'Greg Shield',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '48m 56s',
                content: [
                    {
                        detail: 'Monitor Azure Resources and Web Applications with System Center Operations Manager (SCOM)',
                        time: '48m 56s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    }
]

const authors = [
    {
        id: 1,
        name: 'Hieu Duong',
        title: 'Elearning.io Author',
        description: 'Hieu Duong is a sofware developer, consultant, conference speaker, and Elearning.io Author. Him Courses include: Angular, OOP Fundamentals in C#. For him work in support of sofware developers, she has been recognized with the Microsoft Most valuable Professional (MVP) award, and is a Google Developer Expert (GDE).',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 2,
        name: 'Huy Nguyen',
        title: 'Elearning.io Author',
        description: 'Huy Nguyen is a sofware developer, consultant, conference speaker, and Elearning.io Author. Him Courses include: Angular, OOP Fundamentals in C#. For him work in support of sofware developers, she has been recognized with the Microsoft Most valuable Professional (MVP) award, and is a Google Developer Expert (GDE).',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 3,
        name: 'Hai Pham',
        title: 'Elearning.io Author',
        description: 'Hai Pham is a sofware developer, consultant, conference speaker, and Elearning.io Author. Him Courses include: Angular, OOP Fundamentals in C#. For him work in support of sofware developers, she has been recognized with the Microsoft Most valuable Professional (MVP) award, and is a Google Developer Expert (GDE).',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 4,
        name: 'Bryan',
        title: 'Elearning.io Author',
        description: 'Bryan is a sofware developer, consultant, conference speaker, and Elearning.io Author. Him Courses include: Angular, OOP Fundamentals in C#. For him work in support of sofware developers, she has been recognized with the Microsoft Most valuable Professional (MVP) award, and is a Google Developer Expert (GDE).',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 5,
        name: 'Shawn',
        title: 'Elearning.io Author',
        description: 'Shawn is a sofware developer, consultant, conference speaker, and Elearning.io Author. Him Courses include: Angular, OOP Fundamentals in C#. For him work in support of sofware developers, she has been recognized with the Microsoft Most valuable Professional (MVP) award, and is a Google Developer Expert (GDE).',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 6,
        name: 'Barry',
        title: 'Elearning.io Author',
        description: 'Barry is a sofware developer, consultant, conference speaker, and Elearning.io Author. Him Courses include: Angular, OOP Fundamentals in C#. For him work in support of sofware developers, she has been recognized with the Microsoft Most valuable Professional (MVP) award, and is a Google Developer Expert (GDE).',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 7,
        name: 'Josh',
        title: 'Elearning.io Author',
        description: 'Josh is a sofware developer, consultant, conference speaker, and Elearning.io Author. Him Courses include: Angular, OOP Fundamentals in C#. For him work in support of sofware developers, she has been recognized with the Microsoft Most valuable Professional (MVP) award, and is a Google Developer Expert (GDE).',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 8,
        name: 'Scott Allen',
        title: 'Elearning.io Author',
        description: 'Scott Allen has worked on every thing from 8-bit embedded devices to large scale web sites. During his 15+ years in commercial sofware development. Since 2001, Scott has focused on server-side and web technologies, like ASP.NET, ASP.NET AJAX, Windows Workflow, Silverlight, and LNQ.',
        course: [
            {
                title: 'The State of .Net and Looking Ahead to 2020: DEVintersection 2019',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '59m 27s',
                image: '../../assets/asp-net-core.png',
                content: [
                    {
                        detail: 'The State of .NET and Looking Ahead to 2020: DEVintersection 2019',
                        time: '59m 27s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Building Modern .NET Desktop Apps with .NET core and Windows 10: DEVitersection 2019',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '52m 16s',
                image: '../../assets/netcore.png',
                content: [
                    {
                        detail: 'Building Modern .NET Desktop Apps with .NET core and Windows 10: DEVitersection 2019',
                        time: '52m 16s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Building the Best Web App with lastest Updates to ASP.NET Core for 2020: DEVintersection 2019',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '48m 56s',
                image: '../../assets/asp-net-core.png',
                content: [
                    {
                        detail: 'Building the Best Web App with lastest Updates to ASP.NET Core for 2020: DEVintersection 2019',
                        time: '48m 56s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'What You Need to Know About .NET Core: DEVintersection 2019',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '1h 2m',
                image: '../../assets/devintersection.png',
                content: [
                    {
                        detail: 'What You Need to Know About .NET Core: DEVintersection 2019',
                        time: '1h 2m',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Blazor for the Web Forms Developer: DEVintersection 2019',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: '38m 6s',
                image: '../../assets/devintersection.png',
                content: [
                    {
                        detail: 'Blazor for the Web Forms Developer: DEVintersection 2019',
                        time: '38m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'SignalR: Real-time for All the Things: DEVintersection 2019',
                level: 'Intermediate',
                released: 'Dec 10, 2019',
                duration: ' 50m 11s',
                image: '../../assets/devintersection.png',
                content: [
                    {
                        detail: 'SignalR: Real-time for All the Things: DEVintersection 2019',
                        time: '50m 11s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    },
    {
        id: 9,
        name: 'Joe Eames',
        title: 'Elearning.io Author',
        description: 'Joe began hos love of programming on an Apple III in BASIC. Although his preferred language is JavaScript, he was worked professionally with just about every major Microsoft language. He is currently a consultant and full time author for Elearning.io. Joe has always had a strong interest in education, had worked both full and part time as a technical teacher for over ten years.',
        course: [
            {
                title: 'Angular Denver 2019: Keynote talk',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: '40m 42s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Keynote talk',
                        time: '40m 42s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Simplifying Front end State Management with Observable Store',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 24m 28s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Simplifying Front end State Management with Observable Store',
                        time: '24m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 48s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                        time: '22m 48s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: What you do not know about Zone.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 47s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'What you do not know about Zone.js',
                        time: '10m 47s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Intro to Bazel',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 10m 6s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Intro to Bazel',
                        time: '10m 6s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 20m 36s',
                image: '../../assets/Angular.png',
                content: [
                    {
                        detail: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                        time: '20m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Angular Denver 2019: Machine Learning in Angular with TensorFlow.js',
                level: 'Intermediate',
                released: 'Sep 11, 2019',
                duration: ' 22m 4s',
                image: '../../assets/angular-pwa-course.png',
                content: [
                    {
                        detail: 'Machine Learning in Angular with TensorFlow.js',
                        time: '22m 4s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'C# Fundamentals',
                level: 'Beginner',
                released: 'Apr 16, 2019',
                duration: '6h 5m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            },
            {
                title: 'Beginning C# Collections',
                level: 'Beginner',
                released: 'Mar 29, 2019',
                duration: '3h 26m',
                image: '../../assets/C#.jpeg',
                content: [
                    {
                        detail: 'Course Overview',
                        time: '1m 36s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: '',
                                time: ''
                            }
                        ]
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    }
]

export default { coursesData, paths, authors };
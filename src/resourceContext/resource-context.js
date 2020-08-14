const paths = [
    {
        id: 1,
        title: 'Web developer: Angular Denver 2019',
        countCourses: '44 Courses',
        duration: '15 hours',
        description: 'Angular Denver is the coolest Angular conference east of the Continental Dide! Angular developers come from all over to spend two days learning, connecting, and having fun.',
        image: '../../assets/angular-pwa-course.png',
        listCourses: [
            {
                id: 24,
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
                                title: 'Keynote talk',
                                time: '40m 42s'
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
                id: 25,
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
                                title: 'Simplifying Front end State Management with Observable Store',
                                time: '24m 28s'
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
                id: 26,
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
                                title: 'Angular Denver 2019: Supercharge Your Angular Test with Jest',
                                time: '22m 48s'
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
                id: 27,
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
                                title: 'What you do not know about Zone.js',
                                time: '10m 47s'
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
                id: 28,
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
                                title: 'Intro to Bazel',
                                time: '10m 6s'
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
                id: 29,
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
                                title: 'Bridging Parallel Universes: Upgrading Huge Apps with Angular Elements',
                                time: '20m 36s'
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
                id: 30,
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
                                title: 'Machine Learning in Angular with TensorFlow.js',
                                time: '22m 4s'
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
                id: 31,
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
                                title: 'Rendering Angular Applications in Terminal, Angular Platform',
                                time: '20m 24s'
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
                id: 32,
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
                                title: 'The Database Is Only Half Done',
                                time: '30m 1s'
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
                id: 33,
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
                                title: 'Your AI Is Wrong! Lessons from Decision-making with Imperfect AI',
                                time: '23m 8s'
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
                id: 34,
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
                                title: 'Multiparadigm Data Science: The Next Frontier in Decision Making',
                                time: '24m 53s'
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
                id: 35,
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
                                title: 'Achieving 100% Adoption of Analytics in the Enterprise',
                                time: '28m 33s'
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
                id: 36,
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
                                title: 'Data Skills: How Mondi Does Digital',
                                time: '19m 49s'
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
                id: 37,
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
                                title: 'Building a Modern Data Architecture for the Data Driven Enterprise',
                                time: '30m 25s'
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
                id: 38,
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
                                title: 'Harnessing the Power of Data to Improve Public Health',
                                time: '23m 11s'
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
                id: 39,
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
                                title: 'Real-time Data Analytics at Scale Using Cloud Services',
                                time: '28m 23s'
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
                id: 40,
                title: 'Sercurity 2030: The Next Decade',
                author: 'BSides Huntsville',
                level: 'Intermediate',
                released: 'Feb 29, 2020',
                duration: '39m 11s',
                content: [
                    {
                        detail: 'Sercurity 2030: The Next Decade',
                        time: '39m 11s',
                        data: [
                            {
                                title: 'Sercurity 2030: The Next Decade',
                                time: '39m 11s'
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
                id: 41,
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
                                title: 'Training the IT Security Staff on a Shoestring Budget',
                                time: '37m 20s'
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
                id: 42,
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
                                title: 'How to Secure America',
                                time: '1h 11m'
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
                id: 43,
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
                                title: 'Reversing the Gophe Spambot: Confronting COM Code and Surmouting STL Snags',
                                time: '40m 9s'
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
                id: 44,
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
                                title: 'Closing the Cybersecurity Talent Gap',
                                time: '1h 4m'
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
                id: 45,
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
                                title: 'Cyber-Ninja Space Pirates',
                                time: '38m 6s'
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
                id: 46,
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
                                title: 'Hacking the Human',
                                time: '50m 11s'
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
                id: 47,
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
                                title: 'Event Processing without Breaking Production: CodeMash',
                                time: '39m 11s'
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
                id: 48,
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
                                title: 'Bringing Order to Chaos: CodeMash',
                                time: '37m 20s'
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
                id: 49,
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
                                title: 'Finding Service Boundaries: CodeMash',
                                time: '1h 11m'
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
                id: 50,
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
                                title: 'API Gateways and Microservices: CodeMash',
                                time: '40m 9s'
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
                id: 51,
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
                                title: 'Vertical Slice Architecture: CodeMash',
                                time: '1h 4m'
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
                id: 52,
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
                                title: 'Kiling REST and Adopting RPC: CodeMash',
                                time: '38m 6s'
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
                id: 53,
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
                                title: '5 Ideas For Writing Better Cloud Native Microservice: CodeMash',
                                time: '50m 11s'
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
                id: 54,
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
                                title: 'The History of .Net: DEVintersection 2019',
                                time: '1h 5m'
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
                id: 55,
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
                                title: 'The State of .Net and Looking Ahead to 2020: DEVintersection 2019',
                                time: '59m 27s'
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
                id:56,
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
                                title: 'Building Modern .NET Desktop Apps with .NET core and Windows 10: DEVitersection 2019',
                                time: '52m 16s'
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
                id: 57,
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
                                title: 'Building the Best Web App with lastest Updates to ASP.NET Core for 2020: DEVintersection 2019',
                                time: '48m 56s'
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
                id: 58,
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
                                title: 'What You Need to Know About .NET Core: DEVintersection 2019',
                                time: '1h 2m'
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
                id: 59,
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
                                title: 'Blazor for the Web Forms Developer: DEVintersection 2019',
                                time: '38m 6s'
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
                id: 60,
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
                                title: 'SignalR: Real-time for All the Things: DEVintersection 2019',
                                time: '50m 11s'
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
                id: 61,
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
                                title: 'Course Overview',
                                time: '1m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Using AWS Cloud9',
                        time: '22m 52s',
                        data: [
                            {
                                title: 'Using AWS Cloud9',
                                time: '22m 52s'
                            }
                        ]
                    },
                    {
                        detail: 'Developing sofware with Cloud9',
                        time: '17m 46s',
                        data: [
                            {
                                title: 'Developing sofware with Cloud9',
                                time: '17m 46s'
                            }
                        ]
                    },
                    {
                        detail: 'Collaborating with Teams Using Cloud9',
                        time: '15m 16s',
                        data: [
                            {
                                title: 'Collaborating with Teams Using Cloud9',
                                time: '15m 16s'
                            }
                        ]
                    },
                    {
                        detail: 'Integrating Cloud9 and Other AWS Service',
                        time: '18m 29s',
                        data: [
                            {
                                title: 'Integrating Cloud9 and Other AWS Service',
                                time: '18m 29s'
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
                id: 62,
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
                                title: 'Course Overview',
                                time: '1m 20s'
                            }
                        ]
                    },
                    {
                        detail: 'cretae and Connect to a Lightsail Server',
                        time: '16m',
                        data: [
                            {
                                title: 'cretae and Connect to a Lightsail Server',
                                time: '16m'
                            }
                        ]
                    },
                    {
                        detail: 'Create and Configure a Cloud9 Developmet Enviroment',
                        time: '12m 37s',
                        data: [
                            {
                                title: 'Create and Configure a Cloud9 Developmet Enviroment',
                                time: '12m 37s'
                            }
                        ]
                    },
                    {
                        detail: 'Prepare Your Lightsail for Production Scalability',
                        time: '9m 42s',
                        data: [
                            {
                                title: 'Prepare Your Lightsail for Production Scalability',
                                time: '9m 42s'
                            }
                        ]
                    },
                    {
                        detail: 'Scaling Lightsail to Hanle More Traffic',
                        time: '26m 29s',
                        data: [
                            {
                                title: 'Scaling Lightsail to Hanle More Traffic',
                                time: '26m 29s'
                            }
                        ]
                    },
                    {
                        detail: 'Exploring Additional Lightsail Capabilities',
                        time: '5m 6s',
                        data: [
                            {
                                title: 'Exploring Additional Lightsail Capabilities',
                                time: '5m 6s'
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
                id: 63,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Creating Your First Continuos Delivery Pipeline',
                        time: '23m 28s',
                        data: [
                            {
                                title: 'Creating Your First Continuos Delivery Pipeline',
                                time: '23m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Monitoring and Managing a CodeStar Application',
                        time: '20m 17s',
                        data: [
                            {
                                title: 'Monitoring and Managing a CodeStar Application',
                                time: '20m 17s'
                            }
                        ]
                    },
                    {
                        detail: 'Team Management with CodeStar',
                        time: '9m 42s',
                        data: [
                            {
                                title: 'Team Management with CodeStar',
                                time: '9m 42s'
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
                id: 64,
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
                                title: 'Course Overview',
                                time: '2m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Core Features of AWS CodeCommit',
                        time: '17m 28s',
                        data: [
                            {
                                title: 'Core Features of AWS CodeCommit',
                                time: '17m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Integrate AWS CodeCommit with AWS Cloud9',
                        time: '15m 51s',
                        data: [
                            {
                                title: 'Integrate AWS CodeCommit with AWS Cloud9',
                                time: '15m 51s'
                            }
                        ]
                    },
                    {
                        detail: 'Monitor and Troubleshoot AWS CodeCommit',
                        time: '14m 8s',
                        data: [
                            {
                                title: 'Monitor and Troubleshoot AWS CodeCommit',
                                time: '14m 8s'
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
                id: 65,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Overview of AWS CodeDeploy',
                        time: '12m 28s',
                        data: [
                            {
                                title: 'Overview of AWS CodeDeploy',
                                time: '12m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Using CodeDeploy with EC2',
                        time: '20m 24s',
                        data: [
                            {
                                title: 'Using CodeDeploy with EC2',
                                time: '20m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Using CodeDeploy with ECS',
                        time: '18m 11s',
                        data: [
                            {
                                title: 'Using CodeDeploy with ECS',
                                time: '18m 11s'
                            }
                        ]
                    },
                    {
                        detail: 'Using CodeDeploy with Lambda',
                        time: '18m 45s',
                        data: [
                            {
                                title: 'Using CodeDeploy with Lambda',
                                time: '18m 45s'
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
                id: 66,
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
                                title: 'Course Overview',
                                time: '1m 26s'
                            }
                        ]
                    },
                    {
                        detail: 'Building and Deploying code win CodePipeline',
                        time: '40m 28s',
                        data: [
                            {
                                title: 'Building and Deploying code win CodePipeline',
                                time: '40m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Advanced CodePipeline Practices',
                        time: '20m 24s',
                        data: [
                            {
                                title: 'Advanced CodePipeline Practices',
                                time: '20m 24s'
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
                id: 67,
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
                                title: 'Course Overview',
                                time: '1m 26s'
                            }
                        ]
                    },
                    {
                        detail: 'Getting started with Amazon SNS',
                        time: '40m 28s',
                        data: [
                            {
                                title: 'Getting started with Amazon SNS',
                                time: '40m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Publishing Messages to SNS',
                        time: '20m 24s',
                        data: [
                            {
                                title: 'Publishing Messages to SNS',
                                time: '20m 24s'
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
                id: 68,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Message with Amazon MQ',
                        time: '49m 28s',
                        data: [
                            {
                                title: 'Message with Amazon MQ',
                                time: '49m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Managing Amazon MQ',
                        time: '20m 24s',
                        data: [
                            {
                                title: 'Managing Amazon MQ',
                                time: '20m 24s'
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
                id: 69,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s',
                        data: [
                            {
                                title: 'Introducing C# and .NET',
                                time: '49m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s',
                        data: [
                            {
                                title: 'Learning the C# Syntax',
                                time: '35m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s',
                        data: [
                            {
                                title: 'Working with Classes and Objects',
                                time: '45m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s',
                        data: [
                            {
                                title: 'Testing Your Code',
                                time: '35m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s',
                        data: [
                            {
                                title: 'Working with Reference Types and Value Types',
                                time: '45m 20s'
                            }
                        ]
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s',
                        data: [
                            {
                                title: 'Controlling the Flow Execution',
                                time: '45m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s',
                        data: [
                            {
                                title: 'Building Type',
                                time: '35m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s',
                        data: [
                            {
                                title: 'OOP with C#',
                                time: '55m 20s'
                            }
                        ]
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s',
                        data: [
                            {
                                title: 'Catching up with the Lastest in C#',
                                time: '8m 7s'
                            }
                        ]
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s',
                        data: [
                            {
                                title: 'Go Furhter with C#',
                                time: '2m 30s'
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
                id: 70,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s',
                        data: [
                            {
                                title: 'Introducing Collections and Arrays',
                                time: '29m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s',
                        data: [
                            {
                                title: 'Importing from a Data Source Intro an array.',
                                time: '25m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s',
                        data: [
                            {
                                title: 'Resizeing Collections with Lists',
                                time: '25m 28s'
                            }
                        ]
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s',
                        data: [
                            {
                                title: 'Storing keyed Data with Dictionaries',
                                time: '15m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s',
                        data: [
                            {
                                title: 'Manipulating List Data',
                                time: '26m 22s'
                            }
                        ]
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s',
                        data: [
                            {
                                title: 'Selecting Items Using LINQ',
                                time: '27m 20s'
                            }
                        ]
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s',
                        data: [
                            {
                                title: 'Creating Collections of Collections',
                                time: '24m 23s'
                            }
                        ]
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s',
                        data: [
                            {
                                title: 'Taking Collections Further',
                                time: '16m 26s'
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
                id: 71,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Installing and Running Java',
                        time: '18m 59s',
                        data: [
                            {
                                title: 'Installing and Running Java',
                                time: '18m 59s'
                            }
                        ]
                    },
                    {
                        detail: 'Using IntelliJ for Java Development',
                        time: '19m 24s',
                        data: [
                            {
                                title: 'Using IntelliJ for Java Development',
                                time: '19m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Packaging Java Applications',
                        time: '25m 28s',
                        data: [
                            {
                                title: 'Packaging Java Applications',
                                time: '25m 28s'
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
                id: 72,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Setting up a JavaSE Developent Enviroment with Eclipse',
                        time: '52m 57s',
                        data: [
                            {
                                title: 'Setting up a JavaSE Developent Enviroment with Eclipse',
                                time: '52m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Setting up a Java Maven Development Enviroment with Eclipse',
                        time: '41m 24s',
                        data: [
                            {
                                title: 'Setting up a Java Maven Development Enviroment with Eclipse',
                                time: '41m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Using Git for Java Project in Eclipse',
                        time: '43m 27s',
                        data: [
                            {
                                title: 'Using Git for Java Project in Eclipse',
                                time: '43m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Connecting Eclipse to a Database Server with MySQL',
                        time: '18m 24s',
                        data: [
                            {
                                title: 'Connecting Eclipse to a Database Server with MySQL',
                                time: '18m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Setting up a JavaEE Project in Eclipse with Tomcat',
                        time: '43m 27s',
                        data: [
                            {
                                title: 'Setting up a JavaEE Project in Eclipse with Tomcat',
                                time: '43m 27s'
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
                id: 73,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Introduction to Maven',
                        time: '38m 57s',
                        data: [
                            {
                                title: 'Introduction to Maven',
                                time: '38m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Structure',
                        time: '41m 24s',
                        data: [
                            {
                                title: 'Structure',
                                time: '41m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Dependencies',
                        time: '20m 57s',
                        data: [
                            {
                                title: 'Dependencies',
                                time: '20m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Repositories',
                        time: '17m 5s',
                        data: [
                            {
                                title: 'Repositories',
                                time: '17m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Plugins',
                        time: '19m 27s',
                        data: [
                            {
                                title: 'Plugins',
                                time: '19m 27s'
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
                id: 74,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'What is REST?',
                        time: '28m 57s',
                        data: [
                            {
                                title: 'What is REST?',
                                time: '28m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Designing a RESTful API',
                        time: '41m 24s',
                        data: [
                            {
                                title: 'Designing a RESTful API',
                                time: '41m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Handling More Complex Scenarios in Your API',
                        time: '20m 57s',
                        data: [
                            {
                                title: 'Handling More Complex Scenarios in Your API',
                                time: '20m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Version Your API',
                        time: '10m 5s',
                        data: [
                            {
                                title: 'Version Your API',
                                time: '10m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Locking Down Your API',
                        time: '19m 27s',
                        data: [
                            {
                                title: 'Locking Down Your API',
                                time: '19m 27s'
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
                id: 75,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Getting started with REST',
                        time: '43m 57s',
                        data: [
                            {
                                title: 'Getting started with REST',
                                time: '43m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Structuring and Implementing the Outer Facing Contract',
                        time: '49m 24s',
                        data: [
                            {
                                title: 'Structuring and Implementing the Outer Facing Contract',
                                time: '49m 24s'
                            }
                        ]
                    },
                    {
                        detail: 'Getting Resources',
                        time: '35m 57s',
                        data: [
                            {
                                title: 'Getting Resources',
                                time: '35m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Filltering and Searching',
                        time: '20m 5s',
                        data: [
                            {
                                title: 'Filltering and Searching',
                                time: '20m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Creating Resources',
                        time: '49m 27s',
                        data: [
                            {
                                title: 'Creating Resources',
                                time: '49m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Validating Data and Reporting validation Errors',
                        time: '26m 27s',
                        data: [
                            {
                                title: 'Validating Data and Reporting validation Errors',
                                time: '26m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Updating Resources',
                        time: '1h 3m',
                        data: [
                            {
                                title: 'Updating Resources',
                                time: '1h 3m'
                            }
                        ]
                    },
                    {
                        detail: 'Deleting Resources',
                        time: '13m 27s',
                        data: [
                            {
                                title: 'Deleting Resources',
                                time: '13m 27s'
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
                id: 76,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Supporting Paging for Collection Resources',
                        time: '40m 57s',
                        data: [
                            {
                                title: 'Supporting Paging for Collection Resources',
                                time: '40m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Sorting Resource Collections',
                        time: '30m 38s',
                        data: [
                            {
                                title: 'Sorting Resource Collections',
                                time: '30m 38s'
                            }
                        ]
                    },
                    {
                        detail: 'Shaping Data',
                        time: '20m 57s',
                        data: [
                            {
                                title: 'Shaping Data',
                                time: '20m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Learning and Implementing HATEOAS',
                        time: '30m 5s',
                        data: [
                            {
                                title: 'Learning and Implementing HATEOAS',
                                time: '30m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Improving Reliablitity with Advanced Content Negotiation',
                        time: '42m 27s',
                        data: [
                            {
                                title: 'Improving Reliablitity with Advanced Content Negotiation',
                                time: '42m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Getting Started with Caching Resources',
                        time: '32m 27s',
                        data: [
                            {
                                title: 'Getting Started with Caching Resources',
                                time: '32m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Supporting HTTP Cache for ASP.NET Core APIs ',
                        time: '25m 17s',
                        data: [
                            {
                                title: 'Supporting HTTP Cache for ASP.NET Core APIs',
                                time: '25m 17s'
                            }
                        ]
                    },
                    {
                        detail: 'Supporting Concurrency',
                        time: '8m 27s',
                        data: [
                            {
                                title: 'Supporting Concurrency',
                                time: '8m 27s'
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
                id: 77,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Getting Started with Open API/ Swagger',
                        time: '13m 57s',
                        data: [
                            {
                                title: 'Getting Started with Open API/ Swagger',
                                time: '13m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Documenting Your First API with OpenAPI/ Swagger',
                        time: '22m 38s',
                        data: [
                            {
                                title: 'Documenting Your First API with OpenAPI/ Swagger',
                                time: '22m 38s'
                            }
                        ]
                    },
                    {
                        detail: 'Using and Overriding Conventions for OpenAPI Generation',
                        time: '42m 57s',
                        data: [
                            {
                                title: 'Using and Overriding Conventions for OpenAPI Generation',
                                time: '42m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Generating OpenAPI Specifications for Advenced input and Output Scenarios',
                        time: '30m 5s',
                        data: [
                            {
                                title: 'Generating OpenAPI Specifications for Advenced input and Output Scenarios',
                                time: '30m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Dealing with Different Versions and Protecting the Documentation',
                        time: '34m 29s',
                        data: [
                            {
                                title: 'Dealing with Different Versions and Protecting the Documentation',
                                time: '34m 29s'
                            }
                        ]
                    },
                    {
                        detail: 'Improving Your Documentation with Advanced Customization',
                        time: '18m 27s',
                        data: [
                            {
                                title: 'Improving Your Documentation with Advanced Customization',
                                time: '18m 27s'
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
                id: 78,
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
                                title: 'A Few More Reasons to Learn Swift',
                                time: '27m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Piece by piece: What Your Data Means',
                        time: '48m 57s',
                        data: [
                            {
                                title: 'Piece by piece: What Your Data Means',
                                time: '48m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Shaping the Path: Controlling the Flow of Your Code',
                        time: '27m 38s',
                        data: [
                            {
                                title: 'Shaping the Path: Controlling the Flow of Your Code',
                                time: '27m 38s'
                            }
                        ]
                    },
                    {
                        detail: 'Constructing Code: Who Does What? - Creating Functions',
                        time: '21m 57s',
                        data: [
                            {
                                title: 'Constructing Code: Who Does What? - Creating Functions',
                                time: '21m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                        time: '27m 5s',
                        data: [
                            {
                                title: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                                time: '27m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s',
                        data: [
                            {
                                title: 'Making Sense of Closures',
                                time: '24m 29s'
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: 'Using Classes and Object in Swift',
                                time: '25m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: 'Introducing Protocols',
                                time: '25m 9s'
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
                id: 79,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Getting Started',
                        time: '48m 57s',
                        data: [
                            {
                                title: 'Getting Started',
                                time: '48m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Building Single View Applications',
                        time: '45m 38s',
                        data: [
                            {
                                title: 'Building Single View Applications',
                                time: '45m 38s'
                            }
                        ]
                    },
                    {
                        detail: 'Constructing Code: Who Does What? - Creating Functions',
                        time: '21m 57s',
                        data: [
                            {
                                title: 'Constructing Code: Who Does What? - Creating Functions',
                                time: '21m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                        time: '27m 5s',
                        data: [
                            {
                                title: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                                time: '27m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s',
                        data: [
                            {
                                title: 'Making Sense of Closures',
                                time: '24m 29s'
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: 'Using Classes and Object in Swift',
                                time: '25m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: 'Introducing Protocols',
                                time: '25m 9s'
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
                id: 80,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Managing Projetc and Workspaces in Xcode',
                        time: '19m 57s',
                        data: [
                            {
                                title: 'Managing Projetc and Workspaces in Xcode',
                                time: '19m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Building Xcode Project: Configuring Schemes and Targets',
                        time: '22m 38s',
                        data: [
                            {
                                title: 'Building Xcode Project: Configuring Schemes and Targets',
                                time: '22m 38s'
                            }
                        ]
                    },
                    {
                        detail: 'Navigating through Xcode: Finding Your Workflow',
                        time: '27m 57s',
                        data: [
                            {
                                title: 'Navigating through Xcode: Finding Your Workflow',
                                time: '27m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Productivity in Xcode',
                        time: '27m 5s',
                        data: [
                            {
                                title: 'Productivity in Xcode',
                                time: '27m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s',
                        data: [
                            {
                                title: 'Making Sense of Closures',
                                time: '24m 29s'
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: 'Using Classes and Object in Swift',
                                time: '25m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: 'Introducing Protocols',
                                time: '25m 9s'
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
                id: 81,
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
                                title: 'Course Overview',
                                time: '1m 36s'
                            }
                        ]
                    },
                    {
                        detail: 'Course Introduction',
                        time: '7m 57s',
                        data: [
                            {
                                title: 'Course Introduction',
                                time: '7m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Your First Collection View',
                        time: '15m 38s',
                        data: [
                            {
                                title: 'Your First Collection View',
                                time: '15m 38s'
                            }
                        ]
                    },
                    {
                        detail: 'Custommizing Size and Spacing',
                        time: '21m 57s',
                        data: [
                            {
                                title: 'Custommizing Size and Spacing',
                                time: '21m 57s'
                            }
                        ]
                    },
                    {
                        detail: 'Supplementary Views (Section Header and Footer)',
                        time: '27m 5s',
                        data: [
                            {
                                title: 'Supplementary Views (Section Header and Footer)',
                                time: '27m 5s'
                            }
                        ]
                    },
                    {
                        detail: 'Customizing Collection View Cells',
                        time: '24m 29s',
                        data: [
                            {
                                title: 'Customizing Collection View Cells',
                                time: '24m 29s'
                            }
                        ]
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s',
                        data: [
                            {
                                title: 'Using Classes and Object in Swift',
                                time: '25m 27s'
                            }
                        ]
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s',
                        data: [
                            {
                                title: 'Introducing Protocols',
                                time: '25m 9s'
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
                id: 82,
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
                                title: 'Object - C for Swift Developers',
                                time: '1h 2m'
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
                id: 83,
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
                                title: 'Computer Fundamentals: Hardware',
                                time: '2h 43m'
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
                id: 84,
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
                                title: 'Computer Fundamentals: Mobile Devices',
                                time: '2h 33m'
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
                id: 85,
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
                                title: 'Computer Fundamentals: Operating Systems',
                                time: '3h 55m'
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
                id: 86,
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
                                title: 'Computer Fundamentals: Operational Procedures',
                                time: '1h 55m'
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
                id: 87,
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
                                title: 'Computer Fundamentals: Networking',
                                time: '2h 12m'
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
                id: 88,
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
                                title: 'Practical Networking',
                                time: '3h 27m'
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
                id: 89,
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
                                title: 'omputer Fundamentals: Hardware',
                                time: '2h 43m'
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
                id: 90,
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
                                title: 'Computer Fundamentals: Mobile Devices',
                                time: '2h 33m'
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
                id: 91,
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
                                title: 'Computer Fundamentals: Operating Systems',
                                time: '3h 55m'
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
                id: 92,
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
                                title: 'Computer Fundamentals: Operational Procedures',
                                time: '1h 55m'
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
                id: 93,
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
                                title: 'Computer Fundamentals: Networking',
                                time: '2h 12m'
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
                id: 94,
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
                                title: 'Practical Networking',
                                time: '3h 27m'
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
                id: 95,
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
                                title: 'Managing and Responding to Microsoft Azure Security Alerts',
                                time: '57m 1s'
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
                id: 96,
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
                                title: 'Configuring Security Services and Polices in Microsoft Azure',
                                time: '1h 52m'
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
                id: 97,
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
                                title: 'Indident Response and Remediation in Microsoft Azure',
                                time: '2h 11m'
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
                id: 98,
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
                                title: 'Microsoft Azure Stack Hub Development: Getting Started',
                                time: '1h 13m'
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
                id: 99,
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
                                title: 'Creating Micro Azure Stack Development Enviroments',
                                time: '1h 43m'
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
                id: 100,
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
                                title: 'Architecural Patterns for Azure Stack Solutions',
                                time: '1h 48m'
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
                id: 101,
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
                                title: 'Operating Azure stack Hub',
                                time: '40m 9s'
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
                id: 102,
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
                                title: 'Introduction System Center 2016 - Operations Manager SCOM',
                                time: '1h 5m'
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
                id: 103,
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
                                title: 'Installing and Configuring System Center 2016 - Operations Manager (SCOM)',
                                time: '59m 27s'
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
                id: 104,
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
                                title: 'Monitoring Windows Server 2016 with System Center 2016 - Operations Manager (SCOM)',
                                time: '52m 16s'
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
                id: 105,
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
                                title: 'Monitor Azure Resources and Web Applications with System Center Operations Manager (SCOM)',
                                time: '48m 56s'
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

const newPaths = paths.slice(0, 7)

const trendingPaths = paths.slice(7, 15)


export {paths, newPaths, trendingPaths };
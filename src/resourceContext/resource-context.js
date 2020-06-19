const courses = {
    softwareDevelopment: [{
        id: 1,
        title: 'React Native',
        author: 'Hai Pham',
        level: 'Advance',
        released: 'May 12, 2020',
        duration: '38 hours',
        image: '../../assets/reactNative.png',
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
        duration: '30 hours',
        image: '../../assets/vuejs-logo.jpg',
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
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    }],
    itOperations: [{
        id: 1,
        title: 'Architecting for Reliability on AWS',
        author: 'Hai Pham',
        level: 'Advance',
        released: 'May 12, 2020',
        duration: '8 hours',
        image: '../../assets/aws.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 2,
        title: 'Architecting for Security on AWS',
        author: 'Huy Nguyen',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/AWS-Security.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 3,
        title: 'Docker Deep Dive',
        author: 'Huy Nguyen',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/dockerdeepdive.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 4,
        title: 'Managing Microsoft Azure Subcriptions',
        author: 'Hai Pham',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/microsoft-azure-main.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 5,
        title: 'Windows PowerShell Toolmaking Fundamentals',
        author: 'Adam Bertram',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '2 hours',
        image: '../../assets/windowsPowershell.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 6,
        title: 'Computer Fundamentals: Hardware',
        author: 'Daniel Lachance',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/computerHardware.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 7,
        title: 'Basic Security Concepts for Cisco Network',
        author: 'Ross Bagurdes',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '1 hours 30m',
        image: '../../assets/cisco-security1.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 8,
        title: 'Networking Concepts and Protocols',
        author: 'Ross Bagurdes',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '5 hours 20m',
        image: '../../assets/networkSecurity.jpeg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    }],
    securityProfessional: [{
        id: 1,
        title: 'Creating Security Baselines in Microsoft Azure',
        author: 'Neil Morrissey',
        level: 'Advance',
        released: 'May 12, 2020',
        duration: '1 hours 55m',
        image: '../../assets/AzureSecurity.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 2,
        title: 'Malware Analysis: Indentifying and Defeating Code Obfuscation',
        author: 'Josh Stroschein',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/malwareAnalysis.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 3,
        title: 'Performing Malware Analysis on Malicious Documents',
        author: 'Tyler Hudak',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/pMalwareAnalysis.webp',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 4,
        title: 'EthicalHacking: Social Engineering',
        author: 'Kevin Henry',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/ethicalHacking.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 5,
        title: 'Security Management',
        author: 'Kevin Henry',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '2 hours',
        image: '../../assets/green-security-logo.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 6,
        title: 'Investigations and Incident Management',
        author: 'Kevin Henry',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/incident-detection-investigation.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    }],
    dataProofessional: [{
        id: 1,
        title: 'Python: The Big Picture',
        author: 'Jason Olson',
        level: 'Advance',
        released: 'May 12, 2020',
        duration: '1 hours 55m',
        image: '../../assets/Python.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 2,
        title: 'Google Cloud Platform Big Data and Machine Learning Fundamentals',
        author: 'Google Cloud',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/google-cloud.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 3,
        title: 'Programming with R',
        author: 'Tyler Hudak',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/r-programming.jpg',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 4,
        title: 'Building Your First Power BI Report',
        author: 'Kevin Henry',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/Power_bi.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 5,
        title: 'Getting Started with Your First SQL Server Instance',
        author: 'Kevin Hill',
        level: 'Intermediate',
        released: 'May 12, 2020',
        duration: '2 hours',
        image: '../../assets/microsoft-sql-server.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    },
    {
        id: 6,
        title: 'Introduction to TensorFlow',
        author: 'Google Cloud',
        level: 'Beginner',
        released: 'May 12, 2020',
        duration: '3 hours',
        image: '../../assets/tensor.png',
        star: 5,
        islearning: 0,
        isFavorite: 0,
        isNew: 0,
        isTrending: 0
    }]
}

const paths = {
    conference: [{
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '20m 24s'
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
                        time: '30m 1s'
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
                        time: '23m 8s'
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
                        time: '24m 53s'
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
                        time: '28m 33s'
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
                        time: '19m 49s'
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
                        time: '30m 25s'
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
                        time: '23m 11s'
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
                        time: '28m 23s'
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
                        time: '39m 11s'
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
                        time: '37m 20s'
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
                        time: '1h 11m'
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
                        time: '40m 9s'
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
                        time: '1h 4m'
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
                        time: '38m 6s'
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
                        time: '50m 11s'
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
                        time: '39m 11s'
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
                        time: '37m 20s'
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
                        time: '1h 11m'
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
                        time: '40m 9s'
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
                        time: '1h 4m'
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
                        time: '38m 6s'
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
                        time: '50m 11s'
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
                        time: '1h 5m'
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
                        time: '59m 27s'
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
                        time: '52m 16s'
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
                        time: '48m 56s'
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
                        time: '1h 2m'
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
                        time: '38m 6s'
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
                        time: '50m 11s'
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    }],
    softwareDevelopment: [{
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
                        time: '1m 27s'
                    },
                    {
                        detail: 'Using AWS Cloud9',
                        time: '22m 52s'
                    },
                    {
                        detail: 'Developing sofware with Cloud9',
                        time: '17m 46s'
                    },
                    {
                        detail: 'Collaborating with Teams Using Cloud9',
                        time: '15m 16s'
                    },
                    {
                        detail: 'Integrating Cloud9 and Other AWS Service',
                        time: '18m 29s'
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
                        time: '1m 20s'
                    },
                    {
                        detail: 'cretae and Connect to a Lightsail Server',
                        time: '16m'
                    },
                    {
                        detail: 'Create and Configure a Cloud9 Developmet Enviroment',
                        time: '12m 37s'
                    },
                    {
                        detail: 'Prepare Your Lightsail for Production Scalability',
                        time: '9m 42s'
                    },
                    {
                        detail: 'Scaling Lightsail to Hanle More Traffic',
                        time: '26m 29s'
                    },
                    {
                        detail: 'Exploring Additional Lightsail Capabilities',
                        time: '5m 6s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Creating Your First Continuos Delivery Pipeline',
                        time: '23m 28s'
                    },
                    {
                        detail: 'Monitoring and Managing a CodeStar Application',
                        time: '20m 17s'
                    },
                    {
                        detail: 'Team Management with CodeStar',
                        time: '9m 42s'
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
                        time: '2m 36s'
                    },
                    {
                        detail: 'Core Features of AWS CodeCommit',
                        time: '17m 28s'
                    },
                    {
                        detail: 'Integrate AWS CodeCommit with AWS Cloud9',
                        time: '15m 51s'
                    },
                    {
                        detail: 'Monitor and Troubleshoot AWS CodeCommit',
                        time: '14m 8s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Overview of AWS CodeDeploy',
                        time: '12m 28s'
                    },
                    {
                        detail: 'Using CodeDeploy with EC2',
                        time: '20m 24s'
                    },
                    {
                        detail: 'Using CodeDeploy with ECS',
                        time: '18m 11s'
                    },
                    {
                        detail: 'Using CodeDeploy with Lambda',
                        time: '18m 45s'
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
                        time: '1m 26s'
                    },
                    {
                        detail: 'Building and Deploying code win CodePipeline',
                        time: '40m 28s'
                    },
                    {
                        detail: 'Advanced CodePipeline Practices',
                        time: '20m 24s'
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
                        time: '1m 26s'
                    },
                    {
                        detail: 'Getting started with Amazon SNS',
                        time: '40m 28s'
                    },
                    {
                        detail: 'Publishing Messages to SNS',
                        time: '20m 24s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Message with Amazon MQ',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Managing Amazon MQ',
                        time: '20m 24s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Installing and Running Java',
                        time: '18m 59s'
                    },
                    {
                        detail: 'Using IntelliJ for Java Development',
                        time: '19m 24s'
                    },
                    {
                        detail: 'Packaging Java Applications',
                        time: '25m 28s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Setting up a JavaSE Developent Enviroment with Eclipse',
                        time: '52m 57s'
                    },
                    {
                        detail: 'Setting up a Java Maven Development Enviroment with Eclipse',
                        time: '41m 24s'
                    },
                    {
                        detail: 'Using Git for Java Project in Eclipse',
                        time: '43m 27s'
                    },
                    {
                        detail: 'Connecting Eclipse to a Database Server with MySQL',
                        time: '18m 24s'
                    },
                    {
                        detail: 'Setting up a JavaEE Project in Eclipse with Tomcat',
                        time: '43m 27s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introduction to Maven',
                        time: '38m 57s'
                    },
                    {
                        detail: 'Structure',
                        time: '41m 24s'
                    },
                    {
                        detail: 'Dependencies',
                        time: '20m 57s'
                    },
                    {
                        detail: 'Repositories',
                        time: '17m 5s'
                    },
                    {
                        detail: 'Plugins',
                        time: '19m 27s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'What is REST?',
                        time: '28m 57s'
                    },
                    {
                        detail: 'Designing a RESTful API',
                        time: '41m 24s'
                    },
                    {
                        detail: 'Handling More Complex Scenarios in Your API',
                        time: '20m 57s'
                    },
                    {
                        detail: 'Version Your API',
                        time: '10m 5s'
                    },
                    {
                        detail: 'Locking Down Your API',
                        time: '19m 27s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Getting started with REST',
                        time: '43m 57s'
                    },
                    {
                        detail: 'Structuring and Implementing the Outer Facing Contract',
                        time: '49m 24s'
                    },
                    {
                        detail: 'Getting Resources',
                        time: '35m 57s'
                    },
                    {
                        detail: 'Filltering and Searching',
                        time: '20m 5s'
                    },
                    {
                        detail: 'Creating Resources',
                        time: '49m 27s'
                    },
                    {
                        detail: 'Validating Data and Reporting validation Errors',
                        time: '26m 27s'
                    },
                    {
                        detail: 'Updating Resources',
                        time: '1h 3m'
                    },
                    {
                        detail: 'Deleting Resources',
                        time: '13m 27s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Supporting Paging for Collection Resources',
                        time: '40m 57s'
                    },
                    {
                        detail: 'Sorting Resource Collections',
                        time: '30m 38s'
                    },
                    {
                        detail: 'Shaping Data',
                        time: '20m 57s'
                    },
                    {
                        detail: 'Learning and Implementing HATEOAS',
                        time: '30m 5s'
                    },
                    {
                        detail: 'Improving Reliablitity with Advanced Content Negotiation',
                        time: '42m 27s'
                    },
                    {
                        detail: 'Getting Started with Caching Resources',
                        time: '32m 27s'
                    },
                    {
                        detail: 'Supporting HTTP Cache for ASP.NET Core APIs ',
                        time: '25m 17s'
                    },
                    {
                        detail: 'Supporting Concurrency',
                        time: '8m 27s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Getting Started with Open API/ Swagger',
                        time: '13m 57s'
                    },
                    {
                        detail: 'Documenting Your First API with OpenAPI/ Swagger',
                        time: '22m 38s'
                    },
                    {
                        detail: 'Using and Overriding Conventions for OpenAPI Generation',
                        time: '42m 57s'
                    },
                    {
                        detail: 'Generating OpenAPI Specifications for Advenced input and Output Scenarios',
                        time: '30m 5s'
                    },
                    {
                        detail: 'Dealing with Different Versions and Protecting the Documentation',
                        time: '34m 29s'
                    },
                    {
                        detail: 'Improving Your Documentation with Advanced Customization',
                        time: '18m 27s'
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
                        time: '27m 36s'
                    },
                    {
                        detail: 'Piece by piece: What Your Data Means',
                        time: '48m 57s'
                    },
                    {
                        detail: 'Shaping the Path: Controlling the Flow of Your Code',
                        time: '27m 38s'
                    },
                    {
                        detail: 'Constructing Code: Who Does What? - Creating Functions',
                        time: '21m 57s'
                    },
                    {
                        detail: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                        time: '27m 5s'
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s'
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s'
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Getting Started',
                        time: '48m 57s'
                    },
                    {
                        detail: 'Building Single View Applications',
                        time: '45m 38s'
                    },
                    {
                        detail: 'Constructing Code: Who Does What? - Creating Functions',
                        time: '21m 57s'
                    },
                    {
                        detail: 'Taking Data Types Further: when to Limit, Describe, and Collect',
                        time: '27m 5s'
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s'
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s'
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Managing Projetc and Workspaces in Xcode',
                        time: '19m 57s'
                    },
                    {
                        detail: 'Building Xcode Project: Configuring Schemes and Targets',
                        time: '22m 38s'
                    },
                    {
                        detail: 'Navigating through Xcode: Finding Your Workflow',
                        time: '27m 57s'
                    },
                    {
                        detail: 'Productivity in Xcode',
                        time: '27m 5s'
                    },
                    {
                        detail: 'Making Sense of Closures',
                        time: '24m 29s'
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s'
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Course Introduction',
                        time: '7m 57s'
                    },
                    {
                        detail: 'Your First Collection View',
                        time: '15m 38s'
                    },
                    {
                        detail: 'Custommizing Size and Spacing',
                        time: '21m 57s'
                    },
                    {
                        detail: 'Supplementary Views (Section Header and Footer)',
                        time: '27m 5s'
                    },
                    {
                        detail: 'Customizing Collection View Cells',
                        time: '24m 29s'
                    },
                    {
                        detail: 'Using Classes and Object in Swift',
                        time: '25m 27s'
                    },
                    {
                        detail: 'Introducing Protocols',
                        time: '25m 9s'
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
                        time: '1h 2m'
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    }],
    iTOps: [{
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
                        time: '2h 43m'
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
                        time: '2h 33m'
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
                        time: '3h 55m'
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
                        time: '1h 55m'
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
                        time: '2h 12m'
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
                        time: '3h 27m'
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
                        time: '57m 1s'
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
                        time: '1h 52m'
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
                        time: '2h 11m'
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
                        time: '1h 13m'
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
                        time: '1h 43m'
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
                        time: '1h 48m'
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
                        time: '40m 9s'
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
                        time: '1h 5m'
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
                        time: '59m 27s'
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
                        time: '52m 16s'
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
                        time: '48m 56s'
                    }
                ],
                star: 5,
                islearning: 0,
                isFavorite: 0,
                isNew: 0,
                isTrending: 0
            }
        ]
    }]
}

const authors = [
    {
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '59m 27s'
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
                        time: '52m 16s'
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
                        time: '48m 56s'
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
                        time: '1h 2m'
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
                        time: '38m 6s'
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
                        time: '50m 11s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
                        time: '40m 42s'
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
                        time: '24m 28s'
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
                        time: '22m 48s'
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
                        time: '10m 47s'
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
                        time: '10m 6s'
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
                        time: '20m 36s'
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
                        time: '22m 4s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing C# and .NET',
                        time: '49m 28s'
                    },
                    {
                        detail: 'Learning the C# Syntax',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Classes and Objects',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Testing Your Code',
                        time: '35m 24s'
                    },
                    {
                        detail: 'Working with Reference Types and Value Types',
                        time: '45m 20s'
                    },
                    {
                        detail: 'Controlling the Flow Execution',
                        time: '45m 28s'
                    },
                    {
                        detail: 'Building Type',
                        time: '35m 24s'
                    },
                    {
                        detail: 'OOP with C#',
                        time: '55m 20s'
                    },
                    {
                        detail: 'Catching up with the Lastest in C#',
                        time: '8m 7s'
                    },
                    {
                        detail: 'Go Furhter with C#',
                        time: '2m 30s'
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
                        time: '1m 36s'
                    },
                    {
                        detail: 'Introducing Collections and Arrays',
                        time: '29m 28s'
                    },
                    {
                        detail: 'Importing from a Data Source Intro an array.',
                        time: '25m 24s'
                    },
                    {
                        detail: 'Resizeing Collections with Lists',
                        time: '25m 28s'
                    },
                    {
                        detail: 'Storing keyed Data with Dictionaries',
                        time: '15m 24s'
                    },
                    {
                        detail: 'Manipulating List Data',
                        time: '26m 22s'
                    },
                    {
                        detail: 'Selecting Items Using LINQ',
                        time: '27m 20s'
                    },
                    {
                        detail: 'Creating Collections of Collections',
                        time: '24m 23s'
                    },
                    {
                        detail: 'Taking Collections Further',
                        time: '16m 26s'
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
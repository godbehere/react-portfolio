export const projectObj = [
    {
        title: 'Furniture Assembly',
        pic: process.env.PUBLIC_URL + './assets/images/hammer-g82b79cace_1280.jpg',
        tech: [
            <li>JavaScript</li>,
            <li>React</li>,
            <li>Python (Flask)</li>
            ],
        description: 'Web app that uses threejs to animate furniture assembly in order to assist customers',
        link: 'https://ikea.godbehere.org',
        github: 'https://github.com/gregyoung03/I_WebApp',
    },
    {
        title: 'Elevator Quoting',
        pic: process.env.PUBLIC_URL + './assets/images/architecture-gad0122c16_1280.jpg',
        tech: [
            <li>C#</li>,
            <li>mySQL</li>
            ],
        description: 'This application is a tool to assist in creating quotes for elevator design and fabrication. ' + 
                        'The software saves and loads quotes to a mySQL database as well as generates a DXF file ' +
                        'of the elevator/pit which can be imported into AutoCAD',
        link: 'https://github.com/StellarisDesignSolutions/ElevatorQuoting',
        github: 'https://github.com/StellarisDesignSolutions/ElevatorQuoting',
    },
    {
        title: 'Adventures in Food',
        pic: 'https://i.imgur.com/zZiKoXb.jpg',
        tech: [
            <li>HTML</li>,
            <li>CSS</li>,
            <li>JavaScript</li>
            ],
        description: 'Concept landing page for a food blog',
        link: 'http://food.godbehere.org/',
        github: 'https://github.com/godbehere/adventures-in-food',
    },
    {
        title: 'Largo Farms Website',
        pic: process.env.PUBLIC_URL + './assets/images/barley-field-ge75bde247_1280.jpg',
        tech: [
            <li>Angular</li>,
            <li>TypeScript</li>,
            <li>Python (Flask)</li>,
            <li>MongoDB</li>
            ],
        description: 'Shop page for a local hobby farm that sells chicken and beef products.',
        link: 'https://largo.godbehere.org',
        github: 'https://github.com/godbehere/largo-farm',
    },
    {
        title: 'This Portfolio',
        pic: process.env.PUBLIC_URL + './assets/images/portfolio-gdb49c8631_1280.png',
        tech: [
            <li>React</li>,
            <li>HTML</li>,
            <li>CSS</li>,
            <li>JavaScript</li>
            ],
        description: 'Link to the repository for this portfolio!',
        link: 'https://github.com/godbehere/react-portfolio',
        github: 'https://github.com/godbehere/react-portfolio',
    },
]
export const projectObj = [
    {
        title: 'Furniture Assembly',
        pic: process.env.PUBLIC_URL + './assets/images/hammer-g82b79cace_1280.jpg',
        tech: [
            <li>JavaScript</li>,
            <li>React</li>,
            <li>Python (Flask)</li>,
            <li>Docker</li>
            ],
        description: 'Furniture Assembly is an application which makes use of the threejs JavaScript library to animate Ikea furniture assembly. The models were downloaded from Ikea’s GitHub page and are served via a Flask API running in a Docker container with Gunicorn.',
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
        title: 'Shopper UI',
        pic: process.env.PUBLIC_URL + './assets/images/store-g40f30356f_1280.png',
        tech: [
            <li>HTML</li>,
            <li>CSS</li>,
            <li>Java</li>,
            <li>TypeScript</li>,
            <li>Angular</li>,
            <li>mySQL</li>,
            <li>SpringBoot</li>,
            <li>Docker</li>
            ],
        description: 'Shopper UI page created as part of training at FDM. Uses RESTful API written with SpringBoot framework.',
        link: 'http://shopper.godbehere.org/',
        github: '',
    },
    {
        title: 'Largo Farms Website',
        pic: process.env.PUBLIC_URL + './assets/images/barley-field-ge75bde247_1280.jpg',
        tech: [
            <li>Angular</li>,
            <li>TypeScript</li>,
            <li>Python (Flask)</li>,
            <li>MongoDB</li>,
            <li>Docker</li>
            ],
        description: 'Largo Farms Website is an application which I created while learning Flask, Angular, and MongoDB. This site will eventually replace my family farm’s current website, but in the meantime has been a wonderful learning opportunity. I built the frontend using Angular (TypeScript) and keep the cart and product list up to date with observables. The cart and inventory data are stored in MongoDB which is running in a Docker container. The API for the database was implemented with Flask (Python)',
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
const MainContent = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-5">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="mt-2">
                <p><strong>Instituto Tecnológico de Monterrey, Monterrey, Nuevo León</strong></p>
                <p>Bachelor of Computer Science; GPA: 9.5/10 (Aug. 2021 – Jun. 2025)</p>
                <p>Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming in C++, Database Design, Full Stack Web Development, iOS Apps Development, Networking, Distributed Systems, Agile Methodologies, IoT</p>
            </div>
        </section>
        
        <section className="mt-5">
            <h2 className="text-2xl font-bold">Professional Experience</h2>
            <div className="mt-2">
                <p><strong>App Development, On Campus Intern (Monterrey, Nuevo León)</strong></p>
                <p>Software Engineer (Feb 2023 - Aug 2023)</p>
                <ul className="list-disc list-inside">
                    <li>Worked on the recruitment process for social service volunteers, automating candidate selection.</li>
                    <li>UI Design: Coded intuitive visual interfaces and pre-configured components, expediting the application development process.</li>
                    <li>Data Integration: Seamlessly integrated data with SharePoint lists for efficient management and retrieval.</li>
                </ul>
                <p><strong>Web Development, Diseño y fabricación de implementos industriales (Monterrey, Nuevo León)</strong></p>
                <p>Software Developer (Feb 2024 - Currently)</p>
                <ul className="list-disc list-inside">
                    <li>Develop responsive, visually appealing web pages while collaborating with designers to incorporate feedback.</li>
                </ul>
            </div>
        </section>

        <section className="mt-5">
            <h2 className="text-2xl font-bold">Most Relevant Projects</h2>
            <div className="mt-2">
                <p><strong>Machine Learning iOS App & Web Application</strong></p>
                <p>Tools: XCode, React, PostgreSQL, NodeJS</p>
                <p>Impact: Facilitate sign language learning for deaf children via video recognition technology.</p>

                <p><strong>Web Application with React and MySQL</strong></p>
                <p>Tools: React, MySQL, Firebase, NodeJS</p>
                <p>Impact: Streamlined administration process for elderly care programs.</p>

                <p><strong>Botnet Recognition using Algorithms</strong></p>
                <p>Tools: C++</p>
                <p>Identified botnets in a network traffic simulation, improving network security.</p>
            </div>
        </section>

        <section className="mt-5">
            <h2 className="text-2xl font-bold">Programming Skills</h2>
            <div className="mt-2">
                <p>Languages: C++, Java, Python, JavaScript, HTML, CSS, Swift, Rust</p>
                <p>Technologies: Google Cloud, Git, Azure DevOps, VSCode</p>
            </div>
        </section>

        <section className="mt-5">
            <h2 className="text-2xl font-bold">Additional Information</h2>
            <div className="mt-2">
                <p>ICPC 2023: Participated in a competitive programming contest, solving complex algorithmic problems using C++.</p>
                <p>FemCodingChallenge 2023: 3rd place in Apple's inclusivity coding challenge.</p>
                <p>Languages: Spanish (Native), English (C1), German (A2)</p>
            </div>
        </section>
    </div>
);

export default MainContent;
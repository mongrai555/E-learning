// หลักสูตรวิทยาการคอมพิวเตอร์ - ข้อมูลรายวชาและเครื่องมือที่ใช้

export interface Tool {
  name: string;
  type: 'language' | 'framework' | 'database' | 'tool' | 'platform' | 'design';
  description?: string;
  descriptionEn?: string;
  icon?: string;
}

export interface CourseContent {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  semester: number;
  description: string;
  descriptionEn?: string;
  fullDescription: string;
  fullDescriptionEn: string;
  objectives: string[];
  objectivesEn: string[];
  topics: string[];
  topicsEn: string[];
  tools: Tool[];
  prerequisites?: string[];
  credits?: number;
  duration?: string;
  image?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const curriculum: CourseContent[] = [
  // ปี 1 เทอม 1
  {
    id: 'prog-fundamentals',
    title: 'การเขียนโปรแกรมเบื้องต้น',
    titleEn: 'Fundamentals of Programming',
    year: 1,
    semester: 1,
    description: 'เรียนรู้พื้นฐานการเขียนโปรแกรม ตัวแปร ฟังก์ชัน และโครงสร้างควบคุม',
    descriptionEn: 'Learn the basics of programming: variables, functions, and control structures',
    fullDescription: 'วิชานี้เป็นวิชาพื้นฐานที่แนะนำนักศึกษาให้เข้าใจในหลักการและแนวคิดของการเขียนโปรแกรม รวมถึงการเข้าใจการทำงานของพื้นฐานของโครงสร้างโปรแกรมต่าง ๆ',
    fullDescriptionEn: 'This foundational course introduces students to the principles and concepts of programming, including understanding the operation of various program structures.',
    objectives: [
      'เข้าใจหลักการของการเขียนโปรแกรม',
      'สามารถใช้ตัวแปรพื้นฐานและโครงสร้างควบคุม',
      'เขียนโปรแกรมเบื้องต้นได้'
    ],
    objectivesEn: [
      'Understand the principles of programming',
      'Be able to use basic variables and control structures',
      'Write basic programs'
    ],
    topics: [
      'หลักการเขียนโปรแกรม',
      'ตัวแปรและชนิดข้อมูล',
      'โครงสร้างควบคุม',
      'ฟังก์ชันและการใช้งาน',
      'การจัดการข้อผิดพลาด'
    ],
    topicsEn: [
      'Programming principles',
      'Variables and data types',
      'Control structures',
      'Functions and their usage',
      'Error handling'
    ],
    tools: [
      { name: 'Google Colab', type: 'platform', description: 'แพลตฟอร์มออนไลน์สำหรับการเขียนและรันโค้ด Python ฟรี', descriptionEn: 'Free online platform for writing and running Python code' }
    ],
    credits: 3,
    duration: '15',
    difficulty: 'beginner',
    image: '/fundamentals.png'
  },
  {
    id: 'ict',
    title: 'เทคโนโลยีสารสนเทศและการสื่อสาร',
    titleEn: 'Information and Communications Technology',
    year: 1,
    semester: 1,
    description: 'ความรู้พื้นฐานเกี่ยวกับเทคโนโลยีสารสนเทศและการสื่อสาร',
    descriptionEn: 'Basic knowledge of information and communication technology',
    fullDescription: 'ศึกษาความรู้พื้นฐานและการประยุกต์ใช้เทคโนโลยีสารสนเทศและการสื่อสารในชีวิตประจำวัน รวมถึงการใช้งานคอมพิวเตอร์และอินเทอร์เน็ตอย่างมีประสิทธิภาพ',
    fullDescriptionEn: 'Study basic knowledge and applications of information and communication technology in daily life, including efficient use of computers and the internet.',
    objectives: [
      'เข้าใจเทคโนโลยีสารสนเทศและการสื่อสาร',
      'สามารถใช้เครื่องมือคอมพิวเตอร์และอินเทอร์เน็ตได้',
      'ประยุกต์ใช้เทคโนโลยีในการแก้ปัญหา'
    ],
    objectivesEn: [
      'Understand information and communication technology',
      'Be able to use computer tools and the internet',
      'Apply technology to solve problems'
    ],
    topics: [
      'หลักการของ ICT',
      'คอมพิวเตอร์และอุปกรณ์',
      'เครือข่ายคอมพิวเตอร์',
      'อินเทอร์เน็ตและการสื่อสาร',
      'ความปลอดภัยของข้อมูล'
    ],
    topicsEn: [
      'ICT principles',
      'Computers and devices',
      'Computer networks',
      'Internet and communication',
      'Data security'
    ],
    tools: [
      { name: 'Microsoft Office', type: 'tool', description: 'ชุดโปรแกรมสำนักงาน', descriptionEn: 'Office software suite' },
      { name: 'Web Browser', type: 'tool', description: 'เว็บเบราว์เซอร์', descriptionEn: 'Web browser' }
    ],
    credits: 3,
    duration: '15',
    difficulty: 'beginner',
    image: '/ICT.png'
  },

  // ปี 1 เทอม 2
  {
    id: 'computer-org',
    title: 'องค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์',
    titleEn: 'Computer Organization and Architecture',
    year: 1,
    semester: 2,
    description: 'ศึกษาโครงสร้างและการทำงานของระบบคอมพิวเตอร์',
    descriptionEn: 'Study the structure and operation of computer systems',
    fullDescription: 'วิชานี้จะศึกษาเกี่ยวกับองค์ประกอบของคอมพิวเตอร์ สถาปัตยกรรมคอมพิวเตอร์ และหลักการทำงานของระบบคอมพิวเตอร์',
    fullDescriptionEn: 'This course studies computer components, computer architecture, and the principles of computer system operation.',
    objectives: [
      'เข้าใจองค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์',
      'เข้าใจการทำงานของ CPU, Memory, I/O',
      'วิเคราะห์ประสิทธิภาพของระบบคอมพิวเตอร์'
    ],
    objectivesEn: [
      'Understand computer components and architecture',
      'Understand the operation of CPU, Memory, I/O',
      'Analyze computer system performance'
    ],
    topics: [
      'องค์ประกอบของ CPU',
      'ระบบ Memory และ Cache',
      'ระบบ Input/Output',
      'การทำงานของ Pipeline',
      'สถาปัตยกรรมคอมพิวเตอร์'
    ],
    topicsEn: [
      'CPU components',
      'Memory and Cache system',
      'Input/Output system',
      'Pipeline operation',
      'Computer architecture'
    ],
    tools: [
      { name: 'Tinkercad', type: 'tool', description: 'แพลตฟอร์มออนไลน์สำหรับการออกแบบวงจรและจำลอง', descriptionEn: 'Online platform for circuit design and simulation' },
      { name: 'Arduino IDE', type: 'tool', description: 'สภาพแวดล้อมการพัฒนาสำหรับการเขียนโปรแกรม Arduino', descriptionEn: 'Development environment for Arduino programming' }
    ],
    credits: 3,
    duration: '15',
    difficulty: 'intermediate',
    prerequisites: ['เทคโนโลยีสารสนเทศและการสื่อสาร'],
    image: '/iot.png'
  },
  {
    id: 'intro-network',
    title: 'เครือข่ายคอมพิวเตอร์เบื้องต้น',
    titleEn: 'Introduction to Computer Network',
    year: 1,
    semester: 2,
    description: 'ความรู้พื้นฐานเกี่ยวกับเครือข่ายคอมพิวเตอร์และการสื่อสาร',
    descriptionEn: 'Basic knowledge of computer networks and communication',
    fullDescription: 'ศึกษาหลักการและแนวคิดพื้นฐานของเครือข่ายคอมพิวเตอร์ โปรโตคอล และการสื่อสารข้อมูล',
    fullDescriptionEn: 'Study the basic principles and concepts of computer networks, protocols, and data communication.',
    objectives: [
      'เข้าใจหลักการของเครือข่ายคอมพิวเตอร์',
      'เข้าใจโปรโตคอลการสื่อสาร',
      'สามารถกำหนดค่าเครือข่ายพื้นฐานได้'
    ],
    objectivesEn: [
      'Understand computer network principles',
      'Understand communication protocols',
      'Be able to configure basic networks'
    ],
    topics: [
      'หลักการเครือข่าย',
      'โปรโตคอล TCP/IP',
      'การกำหนดค่า Network',
      'ความปลอดภัยของเครือข่าย',
      'การแก้ไขปัญหาเครือข่าย'
    ],
    topicsEn: [
      'Network principles',
      'TCP/IP protocol',
      'Network configuration',
      'Network security',
      'Network troubleshooting'
    ],
    tools: [
      { name: 'Cisco Packet Tracer', type: 'tool', description: 'โปรแกรมจำลองเครือข่ายของ Cisco', descriptionEn: 'Cisco network simulation program' }
    ],
    credits: 3,
    duration: '15',
    difficulty: 'intermediate',
    image: '/internet.png'
  },
  {
    id: 'prog-problem-solving',
    title: 'การเขียนโปรแกรมและทักษะการแก้ปัญหา',
    titleEn: 'Programming and Problem Solving Skills',
    year: 1,
    semester: 2,
    description: 'พัฒนาทักษะการเขียนโปรแกรมและการแก้ปัญหาเชิงตรรกะ',
    descriptionEn: 'Develop programming skills and logical problem-solving',
    fullDescription: 'พัฒนาทักษะการคิดวิเคราะห์ การแก้ปัญหา และการเขียนโปรแกรมขั้นสูง',
    fullDescriptionEn: 'Develop analytical thinking, problem-solving, and advanced programming skills.',
    objectives: [
      'พัฒนาทักษะการแก้ปัญหา',
      'เขียนโปรแกรมขั้นสูงได้',
      'ใช้อัลกอริทึมในการแก้ปัญหา'
    ],
    objectivesEn: [
      'Develop problem-solving skills',
      'Write advanced programs',
      'Use algorithms to solve problems'
    ],
    topics: [
      'Algorithm Design',
      'Problem Solving Techniques',
      'Advanced Programming',
      'Code Optimization',
      'Debugging Techniques'
    ],
    topicsEn: [
      'Algorithm Design',
      'Problem Solving Techniques',
      'Advanced Programming',
      'Code Optimization',
      'Debugging Techniques'
    ],
    tools: [
      { name: 'Google Colab', type: 'platform', description: 'แพลตฟอร์มออนไลน์สำหรับการเขียนและรันโค้ด Python', descriptionEn: 'Online platform for writing and running Python code' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' }
    ],
    credits: 3,
    duration: '15',
    difficulty: 'intermediate',
    prerequisites: ['การเขียนโปรแกรมเบื้องต้น'],
    image: '/programing.png'
  },

  // ปี 2 เทอม 1
  {
    id: 'data-structure',
    title: 'โครงสร้างข้อมูลและอัลกอริทึม',
    titleEn: 'Data Structure and Algorithm',
    year: 2,
    semester: 1,
    description: 'ศึกษาโครงสร้างข้อมูลและอัลกอริทึมพื้นฐาน',
    descriptionEn: 'Study basic data structures and algorithms',
    fullDescription: 'ศึกษาโครงสร้างข้อมูลต่าง ๆ และอัลกอริทึมสำหรับการจัดการข้อมูลอย่างมีประสิทธิภาพ',
    fullDescriptionEn: 'Study various data structures and algorithms for efficient data management.',
    objectives: [
      'เข้าใจโครงสร้างข้อมูลพื้นฐาน',
      'วิเคราะห์ความซับซ้อนของอัลกอริทึม',
      'เลือกใช้โครงสร้างข้อมูลที่เหมาะสม'
    ],
    objectivesEn: [
      'Understand basic data structures',
      'Analyze algorithm complexity',
      'Select appropriate data structures'
    ],
    topics: [
      'Array และ Linked List',
      'Stack และ Queue',
      'Tree และ Graph',
      'Sorting และ Searching',
      'Hash Table',
      'Dynamic Programming'
    ],
    topicsEn: [
      'Array and Linked List',
      'Stack and Queue',
      'Tree and Graph',
      'Sorting and Searching',
      'Hash Table',
      'Dynamic Programming'
    ],
    tools: [
      { name: 'C++', type: 'language', description: 'ภาษาโปรแกรมมิ่ง', descriptionEn: 'Programming language' },
      { name: 'Algorithm Visualizer', type: 'tool', description: 'เครื่องมือแสดงผลอัลกอริทึม', descriptionEn: 'Algorithm visualization tool' },
      { name: 'QT Creator', type: 'tool', description: 'IDE สำหรับการพัฒนาแอปพลิเคชันด้วย C++', descriptionEn: 'IDE for C++ application development' }
    ],
    credits: 3,
    duration: '15',
    difficulty: 'intermediate',
    prerequisites: ['การเขียนโปรแกรมและทักษะการแก้ปัญหา'],
    image: '/AG.png'
  },
  {
    id: 'relational-db',
    title: 'ฐานข้อมูลโครงสร้างเชิงสัมพันธ์',
    titleEn: 'Structure Relational Database',
    year: 2,
    semester: 1,
    description: 'ศึกษาการออกแบบและการจัดการฐานข้อมูลเชิงสัมพันธ์',
    descriptionEn: 'Study the design and management of relational databases',
    fullDescription: 'ศึกษาหลักการออกแบบฐานข้อมูล การใช้งาน SQL และการจัดการฐานข้อมูลเชิงสัมพันธ์',
    fullDescriptionEn: 'Study database design principles, SQL usage, and relational database management.',
    objectives: [
      'ออกแบบฐานข้อมูลได้',
      'ใช้งาน SQL ได้อย่างคล่องแคล่ว',
      'จัดการฐานข้อมูลขนาดใหญ่ได้'
    ],
    objectivesEn: [
      'Design databases',
      'Use SQL fluently',
      'Manage large databases'
    ],
    topics: [
      'Database Design',
      'Entity Relationship Model',
      'SQL Queries',
      'Normalization',
      'Database Administration',
      'Backup และ Recovery'
    ],
    topicsEn: [
      'Database Design',
      'Entity Relationship Model',
      'SQL Queries',
      'Normalization',
      'Database Administration',
      'Backup and Recovery'
    ],
    tools: [
      { name: 'MySQL', type: 'database', description: 'ระบบจัดการฐานข้อมูล', descriptionEn: 'Database management system' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 3,
    duration: '15',
    difficulty: 'intermediate',
    image: '/database.png'
  },
  // คอร์สย่อยของวิศวกรรมซอฟต์แวร์
  {
    id: 'github-course',
    title: 'GitHub และการควบคุมเวอร์ชั่น',
    titleEn: 'GitHub and Version Control',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การใช้งาน GitHub สำหรับการควบคุมเวอร์ชั่นและการทำงานร่วมกัน',
    descriptionEn: 'Learn to use GitHub for version control and collaboration',
    fullDescription: 'ศึกษาการใช้งาน Git และ GitHub สำหรับการควบคุมเวอร์ชั่น การทำงานเป็นทีม และการจัดการโปรเจกต์ซอฟต์แวร์',
    fullDescriptionEn: 'Study the use of Git and GitHub for version control, teamwork, and software project management.',
    objectives: [
      'เข้าใจหลักการของ Version Control',
      'ใช้งาน Git และ GitHub ได้อย่างมีประสิทธิภาพ',
      'ทำงานร่วมกันในทีมผ่าน GitHub'
    ],
    objectivesEn: [
      'Understand Version Control principles',
      'Use Git and GitHub effectively',
      'Collaborate in teams through GitHub'
    ],
    topics: [
      'Git Fundamentals',
      'GitHub Repository Management',
      'Branching และ Merging',
      'Pull Requests และ Code Review',
      'Collaboration Workflows',
      'GitHub Actions และ CI/CD'
    ],
    topicsEn: [
      'Git Fundamentals',
      'GitHub Repository Management',
      'Branching and Merging',
      'Pull Requests and Code Review',
      'Collaboration Workflows',
      'GitHub Actions and CI/CD'
    ],
    tools: [
      { name: 'GitHub', type: 'platform', description: 'แพลตฟอร์มควบคุมเวอร์ชั่นและ collaboration', descriptionEn: 'Version control and collaboration platform' },
      { name: 'Git', type: 'tool', description: 'ระบบควบคุมเวอร์ชั่น', descriptionEn: 'Version control system' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'beginner',
    image: '/github_p.png'
  },
  {
    id: 'docker-course',
    title: 'Docker และ Containerization',
    titleEn: 'Docker and Containerization',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การใช้งาน Docker สำหรับการสร้างและจัดการ Container',
    descriptionEn: 'Learn to use Docker for creating and managing containers',
    fullDescription: 'ศึกษาหลักการของ Containerization การใช้งาน Docker และการ Deploy แอปพลิเคชันด้วย Container',
    fullDescriptionEn: 'Study the principles of Containerization, using Docker, and deploying applications with containers.',
    objectives: [
      'เข้าใจหลักการของ Containerization',
      'สร้างและจัดการ Docker Container ได้',
      'Deploy แอปพลิเคชันด้วย Docker'
    ],
    objectivesEn: [
      'Understand Containerization principles',
      'Create and manage Docker containers',
      'Deploy applications with Docker'
    ],
    topics: [
      'Container Fundamentals',
      'Docker Images และ Containers',
      'Dockerfile และ Build Process',
      'Docker Compose',
      'Container Orchestration',
      'Docker Registry และ Distribution'
    ],
    topicsEn: [
      'Container Fundamentals',
      'Docker Images and Containers',
      'Dockerfile and Build Process',
      'Docker Compose',
      'Container Orchestration',
      'Docker Registry and Distribution'
    ],
    tools: [
      { name: 'Docker', type: 'tool', description: 'เครื่องมือ containerization', descriptionEn: 'Containerization tool' },
      { name: 'Docker Compose', type: 'tool', description: 'เครื่องมือจัดการ multi-container', descriptionEn: 'Multi-container management tool' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'intermediate',
    image: '/docker_p.png'
  },
  {
    id: 'playwright-course',
    title: 'Playwright และการทดสอบอัตโนมัติ',
    titleEn: 'Playwright and Automated Testing',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การใช้งาน Playwright สำหรับการทดสอบเว็บแอปพลิเคชันอัตโนมัติ',
    descriptionEn: 'Learn to use Playwright for automated web application testing',
    fullDescription: 'ศึกษาการทดสอบแอปพลิเคชันอัตโนมัติด้วย Playwright รวมถึงการเขียน Test Script และการ CI/CD Integration',
    fullDescriptionEn: 'Study automated application testing with Playwright, including writing test scripts and CI/CD integration.',
    objectives: [
      'เข้าใจหลักการของ Automated Testing',
      'เขียน Test Script ด้วย Playwright ได้',
      'ผสานการทดสอบเข้ากับ CI/CD Pipeline'
    ],
    objectivesEn: [
      'Understand Automated Testing principles',
      'Write Test Scripts with Playwright',
      'Integrate testing with CI/CD Pipeline'
    ],
    topics: [
      'Automated Testing Fundamentals',
      'Playwright Framework',
      'Test Script Development',
      'Cross-browser Testing',
      'Test Reporting และ Analysis',
      'CI/CD Integration'
    ],
    topicsEn: [
      'Automated Testing Fundamentals',
      'Playwright Framework',
      'Test Script Development',
      'Cross-browser Testing',
      'Test Reporting and Analysis',
      'CI/CD Integration'
    ],
    tools: [
      { name: 'Playwright', type: 'tool', description: 'เครื่องมือทดสอบอัตโนมัติ', descriptionEn: 'Automated testing tool' },
      { name: 'Visual Studio Code', type: 'tool', description: 'IDE สำหรับการเขียน Test Script', descriptionEn: 'IDE for writing Test Scripts' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'intermediate',
    image: '/playwright_p.png'
  },
  {
    id: 'postman-course',
    title: 'Postman และการทดสอบ API',
    titleEn: 'Postman and API Testing',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การใช้งาน Postman สำหรับการทดสอบและพัฒนา API',
    descriptionEn: 'Learn to use Postman for API testing and development',
    fullDescription: 'ศึกษาการใช้งาน Postman สำหรับการทดสอบ API การสร้าง Test Collection และการทำ API Documentation',
    fullDescriptionEn: 'Study using Postman for API testing, creating test collections, and API documentation.',
    objectives: [
      'เข้าใจหลักการของ API Testing',
      'ใช้งาน Postman ในการทดสอบ API ได้',
      'สร้าง API Documentation และ Test Collection'
    ],
    objectivesEn: [
      'Understand API Testing principles',
      'Use Postman for API testing',
      'Create API Documentation and Test Collections'
    ],
    topics: [
      'API Testing Fundamentals',
      'Postman Interface และ Features',
      'Request และ Response Handling',
      'Test Automation ใน Postman',
      'API Documentation',
      'Team Collaboration ใน Postman'
    ],
    topicsEn: [
      'API Testing Fundamentals',
      'Postman Interface and Features',
      'Request and Response Handling',
      'Test Automation in Postman',
      'API Documentation',
      'Team Collaboration in Postman'
    ],
    tools: [
      { name: 'Postman', type: 'tool', description: 'เครื่องมือทดสอบ API', descriptionEn: 'API testing tool' },
      { name: 'Newman', type: 'tool', description: 'Command-line runner สำหรับ Postman', descriptionEn: 'Command-line runner for Postman' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'beginner',
    image: '/postman_p.png'
  },

  // คอร์สย่อยของเว็บเทคโนโลยี
  {
    id: 'figma-course',
    title: 'Figma และการออกแบบ UI/UX',
    titleEn: 'Figma and UI/UX Design',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การออกแบบ User Interface และ User Experience ด้วย Figma',
    descriptionEn: 'Learn User Interface and User Experience design with Figma',
    fullDescription: 'ศึกษาการใช้งาน Figma สำหรับการออกแบบ UI/UX การสร้าง Prototype และการทำงานร่วมกันในทีมดีไซน์',
    fullDescriptionEn: 'Study using Figma for UI/UX design, prototype creation, and collaboration in design teams.',
    objectives: [
      'เข้าใจหลักการออกแบบ UI/UX',
      'ใช้งาน Figma ในการออกแบบได้อย่างมีประสิทธิภาพ',
      'สร้าง Prototype และ Wireframe ได้'
    ],
    objectivesEn: [
      'Understand UI/UX design principles',
      'Use Figma effectively for design',
      'Create Prototypes and Wireframes'
    ],
    topics: [
      'UI/UX Design Fundamentals',
      'Figma Interface และ Tools',
      'Design Systems และ Components',
      'Prototyping และ Animation',
      'Collaboration และ Handoff',
      'Mobile และ Web Design Patterns'
    ],
    topicsEn: [
      'UI/UX Design Fundamentals',
      'Figma Interface and Tools',
      'Design Systems and Components',
      'Prototyping and Animation',
      'Collaboration and Handoff',
      'Mobile and Web Design Patterns'
    ],
    tools: [
      { name: 'Figma', type: 'design', description: 'เครื่องมือออกแบบ UI/UX', descriptionEn: 'UI/UX design tool' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'beginner',
    image: '/figma_p.png'
  },
  {
    id: 'html-css-course',
    title: 'HTML และ CSS',
    titleEn: 'HTML and CSS',
    year: 2,
    semester: 1,
    description: 'เรียนรู้พื้นฐานการสร้างเว็บไซต์ด้วย HTML และการจัดรูปแบบด้วย CSS',
    descriptionEn: 'Learn the basics of creating websites with HTML and styling with CSS',
    fullDescription: 'ศึกษาการใช้งาน HTML สำหรับการสร้างโครงสร้างเว็บไซต์ และ CSS สำหรับการจัดรูปแบบและ Responsive Design',
    fullDescriptionEn: 'Study using HTML for creating website structure and CSS for styling and responsive design.',
    objectives: [
      'เข้าใจโครงสร้าง HTML และ Semantic Elements',
      'ใช้ CSS ในการจัดรูปแบบและ Layout ได้',
      'สร้างเว็บไซต์ที่ Responsive ได้'
    ],
    objectivesEn: [
      'Understand HTML structure and Semantic Elements',
      'Use CSS for styling and layout',
      'Create responsive websites'
    ],
    topics: [
      'HTML Semantic Elements',
      'CSS Selectors และ Properties',
      'Flexbox และ Grid Layout',
      'Responsive Design',
      'CSS Animations และ Transitions',
      'Modern CSS Techniques'
    ],
    topicsEn: [
      'HTML Semantic Elements',
      'CSS Selectors and Properties',
      'Flexbox and Grid Layout',
      'Responsive Design',
      'CSS Animations and Transitions',
      'Modern CSS Techniques'
    ],
    tools: [
      { name: 'HTML', type: 'language', description: 'ภาษามาร์กอัปสำหรับเว็บ', descriptionEn: 'Markup language for web' },
      { name: 'CSS', type: 'language', description: 'ภาษาจัดรูปแบบ', descriptionEn: 'Styling language' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'beginner',
    image: '/html_css.png'
  },
  {
    id: 'tailwind-course',
    title: 'Tailwind CSS Framework',
    titleEn: 'Tailwind CSS Framework',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การใช้งาน Tailwind CSS สำหรับการพัฒนาเว็บไซต์แบบ Utility-First',
    descriptionEn: 'Learn to use Tailwind CSS for utility-first web development',
    fullDescription: 'ศึกษาการใช้งาน Tailwind CSS Framework สำหรับการสร้าง UI ที่สวยงามและ Responsive อย่างรวดเร็ว',
    fullDescriptionEn: 'Study using the Tailwind CSS Framework to quickly create beautiful and responsive UI.',
    objectives: [
      'เข้าใจแนวคิด Utility-First CSS',
      'ใช้งาน Tailwind CSS Classes ได้อย่างคล่องแคล่ว',
      'ปรับแต่งและขยาย Tailwind Configuration ได้'
    ],
    objectivesEn: [
      'Understand Utility-First CSS concepts',
      'Use Tailwind CSS Classes fluently',
      'Customize and extend Tailwind Configuration'
    ],
    topics: [
      'Utility-First CSS Concepts',
      'Tailwind CSS Classes และ Components',
      'Responsive Design กับ Tailwind',
      'Customization และ Configuration',
      'Dark Mode และ Themes',
      'Performance Optimization'
    ],
    topicsEn: [
      'Utility-First CSS Concepts',
      'Tailwind CSS Classes and Components',
      'Responsive Design with Tailwind',
      'Customization and Configuration',
      'Dark Mode and Themes',
      'Performance Optimization'
    ],
    tools: [
      { name: 'Tailwind CSS', type: 'framework', description: 'CSS framework สำหรับ utility-first', descriptionEn: 'CSS framework for utility-first' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'intermediate',
    prerequisites: ['HTML และ CSS'],
    image: '/tailwind_p.png'
  },
  {
    id: 'javascript-course',
    title: 'JavaScript',
    titleEn: 'JavaScript',
    year: 2,
    semester: 1,
    description: 'เรียนรู้ภาษา JavaScript และฟีเจอร์ใหม่ในรุ่น ES6 และใหม่กว่า',
    descriptionEn: 'Learn the JavaScript language and new features in ES6 and later versions',
    fullDescription: 'ศึกษาการเขียนโปรแกรมด้วย JavaScript รวมถึงฟีเจอร์สมัยใหม่ของ ES6+ สำหรับการพัฒนาเว็บแอปพลิเคชัน',
    fullDescriptionEn: 'Study programming with JavaScript, including modern ES6+ features for web application development.',
    objectives: [
      'เข้าใจ JavaScript Fundamentals',
      'ใช้งานฟีเจอร์ ES6+ ได้อย่างมีประสิทธิภาพ',
      'เขียน JavaScript สำหรับการพัฒนาเว็บได้'
    ],
    objectivesEn: [
      'Understand JavaScript Fundamentals',
      'Use ES6+ features effectively',
      'Write JavaScript for web development'
    ],
    topics: [
      'JavaScript Fundamentals',
      'ES6+ Features (Arrow Functions, Destructuring, etc.)',
      'DOM Manipulation',
      'Asynchronous JavaScript (Promises, Async/Await)',
      'Modules และ Import/Export',
      'Modern JavaScript Development'
    ],
    topicsEn: [
      'JavaScript Fundamentals',
      'ES6+ Features (Arrow Functions, Destructuring, etc.)',
      'DOM Manipulation',
      'Asynchronous JavaScript (Promises, Async/Await)',
      'Modules and Import/Export',
      'Modern JavaScript Development'
    ],
    tools: [
      { name: 'JavaScript', type: 'language', description: 'ภาษาโปรแกรมมิ่งสำหรับเว็บ', descriptionEn: 'Programming language for web' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'intermediate',
    prerequisites: ['การเขียนโปรแกรมและทักษะการแก้ปัญหา'],
    image: '/java_p.png'
  },
  {
    id: 'react-course',
    title: 'React และการพัฒนา Frontend',
    titleEn: 'React and Frontend Development',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การพัฒนา User Interface ด้วย React Library',
    descriptionEn: 'Learn User Interface development with React Library',
    fullDescription: 'ศึกษาการใช้งาน React สำหรับการสร้าง Interactive UI และการจัดการ State ในแอปพลิเคชัน',
    fullDescriptionEn: 'Study using React to create interactive UI and state management in applications.',
    objectives: [
      'เข้าใจหลักการของ React และ Component-based Architecture',
      'สร้าง React Components และจัดการ State ได้',
      'ใช้งาน React Hooks และ Context API ได้'
    ],
    objectivesEn: [
      'Understand React principles and Component-based Architecture',
      'Create React Components and manage State',
      'Use React Hooks and Context API'
    ],
    topics: [
      'React Fundamentals และ JSX',
      'Components และ Props',
      'State Management และ React Hooks',
      'Event Handling และ Forms',
      'React Router สำหรับ Navigation',
      'Performance Optimization'
    ],
    topicsEn: [
      'React Fundamentals and JSX',
      'Components and Props',
      'State Management and React Hooks',
      'Event Handling and Forms',
      'React Router for Navigation',
      'Performance Optimization'
    ],
    tools: [
      { name: 'React', type: 'framework', description: 'JavaScript library สำหรับ UI', descriptionEn: 'JavaScript library for UI' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'intermediate',
    prerequisites: ['JavaScript และ ES6+'],
    image: '/react_p.png'
  },
  {
    id: 'nextjs-course',
    title: 'Next.js และ Full-Stack Development',
    titleEn: 'Next.js and Full-Stack Development',
    year: 2,
    semester: 1,
    description: 'เรียนรู้การพัฒนาเว็บแอปพลิเคชันแบบ Full-Stack ด้วย Next.js',
    descriptionEn: 'Learn full-stack web application development with Next.js',
    fullDescription: 'ศึกษาการใช้งาน Next.js Framework สำหรับการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพสูงและ SEO-friendly',
    fullDescriptionEn: 'Study using the Next.js Framework to create high-performance and SEO-friendly web applications.',
    objectives: [
      'เข้าใจหลักการของ Next.js และ Server-Side Rendering',
      'สร้าง Full-Stack Application ด้วย Next.js ได้',
      'Deploy แอปพลิเคชันไปยัง Production ได้'
    ],
    objectivesEn: [
      'Understand Next.js principles and Server-Side Rendering',
      'Create Full-Stack Applications with Next.js',
      'Deploy applications to Production'
    ],
    topics: [
      'Next.js Fundamentals และ App Router',
      'Server-Side Rendering (SSR) และ Static Generation (SSG)',
      'API Routes และ Server Actions',
      'Database Integration',
      'Authentication และ Authorization',
      'Performance และ SEO Optimization'
    ],
    topicsEn: [
      'Next.js Fundamentals and App Router',
      'Server-Side Rendering (SSR) and Static Generation (SSG)',
      'API Routes and Server Actions',
      'Database Integration',
      'Authentication and Authorization',
      'Performance and SEO Optimization'
    ],
    tools: [
      { name: 'Next.js', type: 'framework', description: 'React framework สำหรับ production', descriptionEn: 'React framework for production' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย', descriptionEn: 'Modern code editor' },
      { name: 'Qoder', type: 'tool', description: 'IDE สำหรับการพัฒนาเว็บและแอปพลิเคชัน', descriptionEn: 'IDE for web and application development' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'advanced',
    prerequisites: ['React และการพัฒนา Frontend'],
    image: '/next_p.png'
  },


];

export default curriculum;
// หลักสูตรวิทยาการคอมพิวเตอร์ - ข้อมูลรายวิชาและเครื่องมือที่ใช้

export interface Tool {
  name: string;
  type: 'language' | 'framework' | 'database' | 'tool' | 'platform' | 'design';
  description?: string;
  icon?: string;
}

export interface CourseContent {
  id: string;
  title: string;
  titleEn: string;
  year: number;
  semester: number;
  description: string;
  fullDescription: string;
  objectives: string[];
  topics: string[];
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
    fullDescription: 'วิชานี้เป็นวิชาพื้นฐานที่แนะนำนักศึกษาให้เข้าใจในหลักการและแนวคิดของการเขียนโปรแกรม รวมถึงการเข้าใจการทำงานของพื้นฐานของโครงสร้างโปรแกรมต่าง ๆ',
    objectives: [
      'เข้าใจหลักการของการเขียนโปรแกรม',
      'สามารถใช้ตัวแปรพื้นฐานและโครงสร้างควบคุม',
      'เขียนโปรแกรมเบื้องต้นได้'
    ],
    topics: [
      'หลักการเขียนโปรแกรม',
      'ตัวแปรและชนิดข้อมูล',
      'โครงสร้างควบคุม',
      'ฟังก์ชันและการใช้งาน',
      'การจัดการข้อผิดพลาด'
    ],
    tools: [
      { name: 'Google Colab', type: 'platform', description: 'แพลตฟอร์มออนไลน์สำหรับการเขียนและรันโค้ด Python ฟรี' }
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
    fullDescription: 'ศึกษาความรู้พื้นฐานและการประยุกต์ใช้เทคโนโลยีสารสนเทศและการสื่อสารในชีวิตประจำวัน รวมถึงการใช้งานคอมพิวเตอร์และอินเทอร์เน็ตอย่างมีประสิทธิภาพ',
    objectives: [
      'เข้าใจเทคโนโลยีสารสนเทศและการสื่อสาร',
      'สามารถใช้เครื่องมือคอมพิวเตอร์และอินเทอร์เน็ตได้',
      'ประยุกต์ใช้เทคโนโลยีในการแก้ปัญหา'
    ],
    topics: [
      'หลักการของ ICT',
      'คอมพิวเตอร์และอุปกรณ์',
      'เครือข่ายคอมพิวเตอร์',
      'อินเทอร์เน็ตและการสื่อสาร',
      'ความปลอดภัยของข้อมูล'
    ],
    tools: [
      { name: 'Microsoft Office', type: 'tool', description: 'ชุดโปรแกรมสำนักงาน' },
      { name: 'Google Workspace', type: 'platform', description: 'แพลตฟอร์มการทำงานออนไลน์' },
      { name: 'Web Browser', type: 'tool', description: 'เว็บเบราว์เซอร์' }
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
    fullDescription: 'วิชานี้จะศึกษาเกี่ยวกับองค์ประกอบของคอมพิวเตอร์ สถาปัตยกรรมคอมพิวเตอร์ และหลักการทำงานของระบบคอมพิวเตอร์',
    objectives: [
      'เข้าใจองค์ประกอบและสถาปัตยกรรมคอมพิวเตอร์',
      'เข้าใจการทำงานของ CPU, Memory, I/O',
      'วิเคราะห์ประสิทธิภาพของระบบคอมพิวเตอร์'
    ],
    topics: [
      'องค์ประกอบของ CPU',
      'ระบบ Memory และ Cache',
      'ระบบ Input/Output',
      'การทำงานของ Pipeline',
      'สถาปัตยกรรมคอมพิวเตอร์'
    ],
    tools: [
      { name: 'Tinkercad', type: 'tool', description: 'แพลตฟอร์มออนไลน์สำหรับการออกแบบวงจรและจำลอง' },
      { name: 'Arduino IDE', type: 'tool', description: 'สภาพแวดล้อมการพัฒนาสำหรับการเขียนโปรแกรม Arduino' }
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
    fullDescription: 'ศึกษาหลักการและแนวคิดพื้นฐานของเครือข่ายคอมพิวเตอร์ โปรโตคอล และการสื่อสารข้อมูล',
    objectives: [
      'เข้าใจหลักการของเครือข่ายคอมพิวเตอร์',
      'เข้าใจโปรโตคอลการสื่อสาร',
      'สามารถกำหนดค่าเครือข่ายพื้นฐานได้'
    ],
    topics: [
      'หลักการเครือข่าย',
      'โปรโตคอล TCP/IP',
      'การกำหนดค่า Network',
      'ความปลอดภัยของเครือข่าย',
      'การแก้ไขปัญหาเครือข่าย'
    ],
    tools: [
      { name: 'Cisco Packet Tracer', type: 'tool', description: 'โปรแกรมจำลองเครือข่ายของ Cisco' }
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
    fullDescription: 'พัฒนาทักษะการคิดวิเคราะห์ การแก้ปัญหา และการเขียนโปรแกรมขั้นสูง',
    objectives: [
      'พัฒนาทักษะการแก้ปัญหา',
      'เขียนโปรแกรมขั้นสูงได้',
      'ใช้อัลกอริทึมในการแก้ปัญหา'
    ],
    topics: [
      'Algorithm Design',
      'Problem Solving Techniques',
      'Advanced Programming',
      'Code Optimization',
      'Debugging Techniques'
    ],
    tools: [
      { name: 'Google Colab', type: 'platform', description: 'แพลตฟอร์มออนไลน์สำหรับการเขียนและรันโค้ด Python' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ดที่ทันสมัย' }
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
    fullDescription: 'ศึกษาโครงสร้างข้อมูลต่าง ๆ และอัลกอริทึมสำหรับการจัดการข้อมูลอย่างมีประสิทธิภาพ',
    objectives: [
      'เข้าใจโครงสร้างข้อมูลพื้นฐาน',
      'วิเคราะห์ความซับซ้อนของอัลกอริทึม',
      'เลือกใช้โครงสร้างข้อมูลที่เหมาะสม'
    ],
    topics: [
      'Array และ Linked List',
      'Stack และ Queue',
      'Tree และ Graph',
      'Sorting และ Searching',
      'Hash Table',
      'Dynamic Programming'
    ],
    tools: [
      { name: 'C++', type: 'language', description: 'ภาษาโปรแกรมมิ่ง' },
      { name: 'Python', type: 'language', description: 'ภาษาโปรแกรมมิ่ง' },
      { name: 'Algorithm Visualizer', type: 'tool', description: 'เครื่องมือแสดงผลอัลกอริทึม' }
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
    fullDescription: 'ศึกษาหลักการออกแบบฐานข้อมูล การใช้งาน SQL และการจัดการฐานข้อมูลเชิงสัมพันธ์',
    objectives: [
      'ออกแบบฐานข้อมูลได้',
      'ใช้งาน SQL ได้อย่างคล่องแคล่ว',
      'จัดการฐานข้อมูลขนาดใหญ่ได้'
    ],
    topics: [
      'Database Design',
      'Entity Relationship Model',
      'SQL Queries',
      'Normalization',
      'Database Administration',
      'Backup และ Recovery'
    ],
    tools: [
      { name: 'MySQL', type: 'database', description: 'ระบบจัดการฐานข้อมูล' },
      { name: 'MySQL Workbench', type: 'tool', description: 'เครื่องมือจัดการ MySQL' },
      { name: 'phpMyAdmin', type: 'tool', description: 'เครื่องมือจัดการฐานข้อมูลผ่านเว็บ' }
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
    fullDescription: 'ศึกษาการใช้งาน Git และ GitHub สำหรับการควบคุมเวอร์ชั่น การทำงานเป็นทีม และการจัดการโปรเจกต์ซอฟต์แวร์',
    objectives: [
      'เข้าใจหลักการของ Version Control',
      'ใช้งาน Git และ GitHub ได้อย่างมีประสิทธิภาพ',
      'ทำงานร่วมกันในทีมผ่าน GitHub'
    ],
    topics: [
      'Git Fundamentals',
      'GitHub Repository Management',
      'Branching และ Merging',
      'Pull Requests และ Code Review',
      'Collaboration Workflows',
      'GitHub Actions และ CI/CD'
    ],
    tools: [
      { name: 'GitHub', type: 'platform', description: 'แพลตฟอร์มควบคุมเวอร์ชั่นและ collaboration' },
      { name: 'Git', type: 'tool', description: 'ระบบควบคุมเวอร์ชั่น' }
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
    fullDescription: 'ศึกษาหลักการของ Containerization การใช้งาน Docker และการ Deploy แอปพลิเคชันด้วย Container',
    objectives: [
      'เข้าใจหลักการของ Containerization',
      'สร้างและจัดการ Docker Container ได้',
      'Deploy แอปพลิเคชันด้วย Docker'
    ],
    topics: [
      'Container Fundamentals',
      'Docker Images และ Containers',
      'Dockerfile และ Build Process',
      'Docker Compose',
      'Container Orchestration',
      'Docker Registry และ Distribution'
    ],
    tools: [
      { name: 'Docker', type: 'tool', description: 'เครื่องมือ containerization' },
      { name: 'Docker Compose', type: 'tool', description: 'เครื่องมือจัดการ multi-container' }
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
    fullDescription: 'ศึกษาการทดสอบแอปพลิเคชันอัตโนมัติด้วย Playwright รวมถึงการเขียน Test Script และการ CI/CD Integration',
    objectives: [
      'เข้าใจหลักการของ Automated Testing',
      'เขียน Test Script ด้วย Playwright ได้',
      'ผสานการทดสอบเข้ากับ CI/CD Pipeline'
    ],
    topics: [
      'Automated Testing Fundamentals',
      'Playwright Framework',
      'Test Script Development',
      'Cross-browser Testing',
      'Test Reporting และ Analysis',
      'CI/CD Integration'
    ],
    tools: [
      { name: 'Playwright', type: 'tool', description: 'เครื่องมือทดสอบอัตโนมัติ' },
      { name: 'Visual Studio Code', type: 'tool', description: 'IDE สำหรับการเขียน Test Script' }
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
    fullDescription: 'ศึกษาการใช้งาน Postman สำหรับการทดสอบ API การสร้าง Test Collection และการทำ API Documentation',
    objectives: [
      'เข้าใจหลักการของ API Testing',
      'ใช้งาน Postman ในการทดสอบ API ได้',
      'สร้าง API Documentation และ Test Collection'
    ],
    topics: [
      'API Testing Fundamentals',
      'Postman Interface และ Features',
      'Request และ Response Handling',
      'Test Automation ใน Postman',
      'API Documentation',
      'Team Collaboration ใน Postman'
    ],
    tools: [
      { name: 'Postman', type: 'tool', description: 'เครื่องมือทดสอบ API' },
      { name: 'Newman', type: 'tool', description: 'Command-line runner สำหรับ Postman' }
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
    fullDescription: 'ศึกษาการใช้งาน Figma สำหรับการออกแบบ UI/UX การสร้าง Prototype และการทำงานร่วมกันในทีมดีไซน์',
    objectives: [
      'เข้าใจหลักการออกแบบ UI/UX',
      'ใช้งาน Figma ในการออกแบบได้อย่างมีประสิทธิภาพ',
      'สร้าง Prototype และ Wireframe ได้'
    ],
    topics: [
      'UI/UX Design Fundamentals',
      'Figma Interface และ Tools',
      'Design Systems และ Components',
      'Prototyping และ Animation',
      'Collaboration และ Handoff',
      'Mobile และ Web Design Patterns'
    ],
    tools: [
      { name: 'Figma', type: 'design', description: 'เครื่องมือออกแบบ UI/UX' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'beginner',
    image: '/figma_p.png'
  },
  {
    id: 'html-css-course',
    title: 'HTML5 และ CSS3',
    titleEn: 'HTML5 and CSS3',
    year: 2,
    semester: 1,
    description: 'เรียนรู้พื้นฐานการสร้างเว็บไซต์ด้วย HTML5 และการจัดรูปแบบด้วย CSS3',
    fullDescription: 'ศึกษาการใช้งาน HTML5 สำหรับการสร้างโครงสร้างเว็บไซต์ และ CSS3 สำหรับการจัดรูปแบบและ Responsive Design',
    objectives: [
      'เข้าใจโครงสร้าง HTML5 และ Semantic Elements',
      'ใช้ CSS3 ในการจัดรูปแบบและ Layout ได้',
      'สร้างเว็บไซต์ที่ Responsive ได้'
    ],
    topics: [
      'HTML5 Semantic Elements',
      'CSS3 Selectors และ Properties',
      'Flexbox และ Grid Layout',
      'Responsive Design',
      'CSS Animations และ Transitions',
      'Modern CSS Techniques'
    ],
    tools: [
      { name: 'HTML', type: 'language', description: 'ภาษามาร์กอัปสำหรับเว็บ' },
      { name: 'CSS', type: 'language', description: 'ภาษาจัดรูปแบบ' }
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
    fullDescription: 'ศึกษาการใช้งาน Tailwind CSS Framework สำหรับการสร้าง UI ที่สวยงามและ Responsive อย่างรวดเร็ว',
    objectives: [
      'เข้าใจแนวคิด Utility-First CSS',
      'ใช้งาน Tailwind CSS Classes ได้อย่างคล่องแคล่ว',
      'ปรับแต่งและขยาย Tailwind Configuration ได้'
    ],
    topics: [
      'Utility-First CSS Concepts',
      'Tailwind CSS Classes และ Components',
      'Responsive Design กับ Tailwind',
      'Customization และ Configuration',
      'Dark Mode และ Themes',
      'Performance Optimization'
    ],
    tools: [
      { name: 'Tailwind CSS', type: 'framework', description: 'CSS framework สำหรับ utility-first' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'intermediate',
    prerequisites: ['HTML5 และ CSS3'],
    image: '/tailwind_p.png'
  },
  {
    id: 'javascript-course',
    title: 'JavaScript',
    titleEn: 'JavaScript',
    year: 2,
    semester: 1,
    description: 'เรียนรู้ภาษา JavaScript และฟีเจอร์ใหม่ในรุ่น ES6 และใหม่กว่า',
    fullDescription: 'ศึกษาการเขียนโปรแกรมด้วย JavaScript รวมถึงฟีเจอร์สมัยใหม่ของ ES6+ สำหรับการพัฒนาเว็บแอปพลิเคชัน',
    objectives: [
      'เข้าใจ JavaScript Fundamentals',
      'ใช้งานฟีเจอร์ ES6+ ได้อย่างมีประสิทธิภาพ',
      'เขียน JavaScript สำหรับการพัฒนาเว็บได้'
    ],
    topics: [
      'JavaScript Fundamentals',
      'ES6+ Features (Arrow Functions, Destructuring, etc.)',
      'DOM Manipulation',
      'Asynchronous JavaScript (Promises, Async/Await)',
      'Modules และ Import/Export',
      'Modern JavaScript Development'
    ],
    tools: [
      { name: 'JavaScript', type: 'language', description: 'ภาษาโปรแกรมมิ่งสำหรับเว็บ' }
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
    fullDescription: 'ศึกษาการใช้งาน React สำหรับการสร้าง Interactive UI และการจัดการ State ในแอปพลิเคชัน',
    objectives: [
      'เข้าใจหลักการของ React และ Component-based Architecture',
      'สร้าง React Components และจัดการ State ได้',
      'ใช้งาน React Hooks และ Context API ได้'
    ],
    topics: [
      'React Fundamentals และ JSX',
      'Components และ Props',
      'State Management และ React Hooks',
      'Event Handling และ Forms',
      'React Router สำหรับ Navigation',
      'Performance Optimization'
    ],
    tools: [
      { name: 'React', type: 'framework', description: 'JavaScript library สำหรับ UI' }
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
    fullDescription: 'ศึกษาการใช้งาน Next.js Framework สำหรับการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพสูงและ SEO-friendly',
    objectives: [
      'เข้าใจหลักการของ Next.js และ Server-Side Rendering',
      'สร้าง Full-Stack Application ด้วย Next.js ได้',
      'Deploy แอปพลิเคชันไปยัง Production ได้'
    ],
    topics: [
      'Next.js Fundamentals และ App Router',
      'Server-Side Rendering (SSR) และ Static Generation (SSG)',
      'API Routes และ Server Actions',
      'Database Integration',
      'Authentication และ Authorization',
      'Performance และ SEO Optimization'
    ],
    tools: [
      { name: 'Next.js', type: 'framework', description: 'React framework สำหรับ production' }
    ],
    credits: 1,
    duration: '4',
    difficulty: 'advanced',
    prerequisites: ['React และการพัฒนา Frontend'],
    image: '/next_p.png'
  },


];

export default curriculum;
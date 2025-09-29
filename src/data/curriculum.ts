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
      { name: 'Python', type: 'language', description: 'ภาษาโปรแกรมมิ่งสำหรับผู้เริ่มต้น' },
      { name: 'Visual Studio Code', type: 'tool', description: 'โปรแกรมแก้ไขโค้ด' },
      { name: 'Git', type: 'tool', description: 'ระบบควบคุมเวอร์ชั่น' }
    ],
    credits: 3,
    duration: '15 สัปดาห์',
    difficulty: 'beginner',
    image: '/images/programming-fundamentals.jpg'
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
    duration: '15 สัปดาห์',
    difficulty: 'beginner',
    image: '/images/ict.jpg'
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
      { name: 'Assembly Language', type: 'language', description: 'ภาษาแอสเซมบลี' },
      { name: 'CPU Simulator', type: 'tool', description: 'โปรแกรมจำลอง CPU' },
      { name: 'Logisim', type: 'tool', description: 'โปรแกรมออกแบบวงจรตรรกะ' }
    ],
    credits: 3,
    duration: '15 สัปดาห์',
    difficulty: 'intermediate',
    prerequisites: ['เทคโนโลยีสารสนเทศและการสื่อสาร'],
    image: '/images/computer-architecture.jpg'
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
      { name: 'Wireshark', type: 'tool', description: 'โปรแกรมวิเคราะห์เครือข่าย' },
      { name: 'Cisco Packet Tracer', type: 'tool', description: 'โปรแกรมจำลองเครือข่าย' },
      { name: 'Command Line Tools', type: 'tool', description: 'เครื่องมือ command line' }
    ],
    credits: 3,
    duration: '15 สัปดาห์',
    difficulty: 'intermediate',
    image: '/images/computer-network.jpg'
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
      { name: 'Python', type: 'language', description: 'ภาษาโปรแกรมมิ่ง' },
      { name: 'Java', type: 'language', description: 'ภาษาโปรแกรมมิ่ง' },
      { name: 'IDE', type: 'tool', description: 'สภาพแวดล้อมการพัฒนา' }
    ],
    credits: 3,
    duration: '15 สัปดาห์',
    difficulty: 'intermediate',
    prerequisites: ['การเขียนโปรแกรมเบื้องต้น'],
    image: '/images/problem-solving.jpg'
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
    duration: '15 สัปดาห์',
    difficulty: 'intermediate',
    prerequisites: ['การเขียนโปรแกรมและทักษะการแก้ปัญหา'],
    image: '/images/data-structure.jpg'
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
    duration: '15 สัปดาห์',
    difficulty: 'intermediate',
    image: '/images/database.jpg'
  },
  {
    id: 'software-eng',
    title: 'วิศวกรรมซอฟต์แวร์',
    titleEn: 'Software Engineering',
    year: 2,
    semester: 1,
    description: 'หลักการและกระบวนการพัฒนาซอฟต์แวร์',
    fullDescription: 'ศึกษาหลักการและกระบวนการพัฒนาซอฟต์แวร์ตั้งแต่การวิเคราะห์ความต้องการจนถึงการทดสอบ',
    objectives: [
      'เข้าใจกระบวนการพัฒนาซอฟต์แวร์',
      'ประยุกต์ใช้หลักการวิศวกรรมซอฟต์แวร์',
      'ทำงานเป็นทีมในการพัฒนาซอฟต์แวร์'
    ],
    topics: [
      'Software Development Life Cycle',
      'Requirements Analysis',
      'Software Design',
      'Testing และ Quality Assurance',
      'Project Management',
      'Version Control'
    ],
    tools: [
      { name: 'GitHub', type: 'platform', description: 'แพลตฟอร์มควบคุมเวอร์ชั่นและ collaboration' },
      { name: 'Docker', type: 'tool', description: 'เครื่องมือ containerization' },
      { name: 'Playwright', type: 'tool', description: 'เครื่องมือทดสอบอัตโนมัติ' },
      { name: 'Postman', type: 'tool', description: 'เครื่องมือทดสอบ API' }
    ],
    credits: 3,
    duration: '15 สัปดาห์',
    difficulty: 'intermediate',
    image: '/images/software-engineering.jpg'
  },
  {
    id: 'web-tech',
    title: 'เว็บเทคโนโลยี',
    titleEn: 'Web Technology',
    year: 2,
    semester: 1,
    description: 'การพัฒนาเว็บแอปพลิเคชันและเทคโนโลยีที่เกี่ยวข้อง',
    fullDescription: 'ศึกษาการพัฒนาเว็บไซต์และเว็บแอปพลิเคชัน รวมถึงเทคโนโลยีฝั่งไคลเอนต์และเซิร์ฟเวอร์',
    objectives: [
      'พัฒนาเว็บไซต์ได้',
      'เข้าใจเทคโนโลยีเว็บสมัยใหม่',
      'สร้างเว็บแอปพลิเคชันแบบ responsive'
    ],
    topics: [
      'HTML5 และ Semantic Web',
      'CSS3 และ Responsive Design',
      'JavaScript และ ES6+',
      'Frontend Frameworks',
      'Backend Development',
      'Web APIs และ REST',
      'Database Integration',
      'Deployment และ Hosting'
    ],
    tools: [
      { name: 'Figma', type: 'design', description: 'เครื่องมือออกแบบ UI/UX' },
      { name: 'HTML', type: 'language', description: 'ภาษามาร์กอัปสำหรับเว็บ' },
      { name: 'CSS', type: 'language', description: 'ภาษาจัดรูปแบบ' },
      { name: 'Tailwind CSS', type: 'framework', description: 'CSS framework สำหรับ utility-first' },
      { name: 'JavaScript', type: 'language', description: 'ภาษาโปรแกรมมิ่งสำหรับเว็บ' },
      { name: 'React', type: 'framework', description: 'JavaScript library สำหรับ UI' },
      { name: 'Next.js', type: 'framework', description: 'React framework สำหรับ production' },
      { name: 'Vercel', type: 'platform', description: 'แพลตฟอร์ม deployment สำหรับเว็บ' }
    ],
    credits: 3,
    duration: '15 สัปดาห์',
    difficulty: 'intermediate',
    prerequisites: ['การเขียนโปรแกรมและทักษะการแก้ปัญหา'],
    image: '/images/web-technology.jpg'
  }
];

export default curriculum;
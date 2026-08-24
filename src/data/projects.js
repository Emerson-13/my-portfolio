const base = import.meta.env.BASE_URL;
const projectImage = (folder, file) => `${base}projects/${folder}/${file}`;

const projects = [
  {
    id: 1,
    title: "HR Lifecycle AI",
    images: [],
    description:
      "An AI-powered HR lifecycle system that automates the hiring process from job description creation to candidate lifecycle management using AI agents.",
    fullDescription:
      "HR Lifecycle AI is an intelligent recruitment and HR automation platform that starts with AI-generated job descriptions and carries candidates through the entire hiring lifecycle. It uses n8n to orchestrate workflows that connect AI agents to each stage of the process — job posting, candidate screening, interview scheduling, evaluation, and onboarding — reducing manual HR workload and speeding up hiring decisions.",
    tags: ["n8n", "AI Agents", "Laravel", "Vue.js", "Supabase"],
    github: "",
    demo: "",
    features: [
      "AI-Generated Job Descriptions",
      "Automated Candidate Screening",
      "n8n Workflow Orchestration",
      "AI Agent Integration",
      "Interview Scheduling",
      "Candidate Lifecycle Tracking",
    ],
  },
  {
    id: 2,
    title: "HRIS - Payrolll",
    images: [],
    description:
      "A complete Human Resource Information System for managing employees, payroll, attendance, leave, recruitment, and performance.",
    fullDescription:
      "HRIS is a business-grade HR management platform designed to centralize employee records, automate payroll, manage attendance, handle leave requests, monitor recruitment, and support performance management.",
    tags: ["Laravel", "Inertia.js", "Vue.js", "Tailwind CSS", "MySQL"],
    github: "",
    demo: "",
    features: [
      "Employee Management",
      "Payroll & Compensation",
      "Attendance & Time Tracking",
      "Leave Management",
      "Recruitment & Onboarding",
      "Performance Management",
    ],
  },
  {
    id: 3,
    title: "Lending System",
    images: [],
    description:
      "A lending management system for borrower records, loan applications, payment schedules, collections, and reports.",
    fullDescription:
      "The Lending System is designed for lending businesses, microfinance companies, and financing operations. It manages borrower information, loan applications, approval workflows, interest and penalty computations, repayment schedules, collection tracking, and reporting.",
    tags: ["Laravel", "Inertia.js", "Vue.js", "Tailwind CSS", "MySQL"],
    github: "",
    demo: "",
    features: [
      "Borrower Management",
      "Loan Applications",
      "Approval Workflow",
      "Payment Schedule",
      "Interest & Penalty Computation",
      "Collections Tracking",
    ],
  },
  {
    id: 4,
    title: "Bayad Mo",
    images: [],
    description:
      "Our own QR payment and invoicing system for accepting payments, generating invoices, and tracking transactions.",
    fullDescription:
      "Bayad Mo is a QR payment and invoicing platform built for businesses that need invoice generation, QR-based payment collection, payment links, transaction tracking, merchant dashboards, and financial reports.",
    tags: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "MySQL"],
    github: "",
    demo: "",
    features: [
      "QR Code Payments",
      "Invoice Generation",
      "Payment Links",
      "Transaction Tracking",
      "Merchant Dashboard",
      "Reports & Analytics",
    ],
  },
  {
    id: 5,
    title: "Vyblinx - Social Media Platform",
    images: [projectImage("vyblinx", "1.png")],
    description:
      "A social media platform with user interaction and content-sharing functionalities.",
    fullDescription:
      "Led the development of Vyblinx as Lead Developer, overseeing system architecture and feature implementation. The platform supports user profiles, posts, reactions, content sharing, merchant pages, social rooms, and location-based discovery.",
    tags: ["Laravel", "Inertia.js", "Vue.js"],
    github: "",
    demo: "",
    features: [
      "User Profiles",
      "Posts & Reactions",
      "Social Room",
      "Merchant Pages",
      "Venue Discovery",
      "Guest Content Approval",
    ],
  },
  {
    id: 6,
    title: "Work4U - Online Tutoring Platform",
    images: [projectImage("work4u", "1.png")],
    description:
      "An online tutoring platform connecting students and tutors with scheduling and session management.",
    fullDescription:
      "Directed the development of Work4U as Backend API Developer, implementing user accounts, tutor-student matching, scheduling, and session coordination features.",
    tags: ["Laravel", "Blade"],
    github: "",
    demo: "",
    features: [
      "Student Accounts",
      "Tutor Management",
      "Tutor Matching",
      "Scheduling",
      "Session Management",
    ],
  },
  {
    id: 7,
    title: "Payroll System",
    images: [projectImage("payroll", "1.png")],
    description:
      "A payroll management system for processing employee salaries, records, and reports.",
    fullDescription:
      "Assisted as Support Developer in building and maintaining a payroll system that handles employee salary computation, payroll records, deductions, and report generation.",
    tags: ["Laravel", "Blade"],
    github: "",
    demo: "",
    features: [
      "Salary Computation",
      "Employee Records",
      "Deductions",
      "Payroll Reports",
      "Payslip Records",
    ],
  },
  {
    id: 8,
    title: "UnyRyde - Car Rental Platform",
    images: [projectImage("unyryde", "1.png")],
    description:
      "A car rental platform for browsing vehicles, booking rentals, and managing reservations.",
    fullDescription:
      "Contributed as Support Developer to UnyRyde, a platform allowing users to browse available vehicles, make bookings, and manage rental history.",
    tags: ["Laravel", "Inertia.js", "Vue.js"],
    github: "",
    demo: "",
    features: [
      "Vehicle Listing",
      "Rental Booking",
      "Reservations",
      "Rental History",
      "User Dashboard",
    ],
  },
  {
    id: 9,
    title: "POS Inventory System",
    images: [],
    description:
      "A Point of Sale and Inventory Management System for tracking products, sales, and stock levels in real time.",
    fullDescription:
      "This system allows store owners to efficiently manage products, sales transactions, and stock updates. It includes barcode scanning, sales analytics, and automated low-stock alerts.",
    tags: ["React", "Laravel", "Inertia.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Emerson-13/Heros",
    demo: "",
    features: [
      "Point of Sale",
      "Inventory Tracking",
      "Barcode Support",
      "Sales Analytics",
      "Low Stock Alerts",
    ],
  },
  {
    id: 10,
    title: "Barangay Concern Management System",
    images: [projectImage("barangay", "1.jpg")],
    description:
      "A web-based system for logging, tracking, and resolving barangay complaints and requests with geo-tagging features.",
    fullDescription:
      "This system helps barangay officials manage resident concerns digitally. It includes resident registration, complaint tracking, map-based location tagging, and report generation.",
    tags: ["Laravel", "React", "Inertia.js", "MySQL", "GeoTagging"],
    github: "https://github.com/Emerson-13/Barangay-System",
    demo: "",
    features: [
      "Resident Registration",
      "Complaint Tracking",
      "GeoTagging",
      "Concern Status",
      "Report Generation",
    ],
  },
  {
    id: 11,
    title: "Water Quality Monitoring System",
    images: [],
    description:
      "An IoT-based system to monitor water parameters like pH, temperature, and turbidity in real time.",
    fullDescription:
      "This project integrates sensors with ESP32 to collect and send data to a dashboard for visualization. It helps monitor water conditions for aquaculture and environmental monitoring.",
    tags: ["Arduino", "ESP32", "Node.js", "IoT"],
    github: "https://github.com/Emerson-13/Pondgen24",
    demo: "",
    features: [
      "pH Monitoring",
      "Temperature Monitoring",
      "Turbidity Monitoring",
      "ESP32 Integration",
      "Dashboard Visualization",
    ],
  },
  {
    id: 12,
    title: "Enrollment Management System",
    images: [],
    description:
      "A full-stack web system for managing student applications, grades, and attendance.",
    fullDescription:
      "This system automates enrollment workflows from student registration to admin approval and grading. It features role-based access for students and admins, attendance tracking, and report generation.",
    tags: ["React", "Laravel", "Inertia.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Emerson-13/Enrollment",
    demo: "",
    features: [
      "Student Registration",
      "Application Approval",
      "Grade Management",
      "Attendance Tracking",
      "Reports",
    ],
  },
];

export default projects; 
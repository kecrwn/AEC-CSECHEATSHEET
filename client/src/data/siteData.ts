/** AECCHEATSHEET data: researched public routes, source classes, and explicitly marked information gaps. */
import { assets, calendarRows, facultyRows, feeRows, semOne, semTwo } from "./guideData";

export { assets, calendarRows, facultyRows, feeRows, semOne, semTwo };

export type PageId = "home" | "links" | "resources" | "curriculum" | "placements" | "faculty" | "social" | "extras";

export const sitePages: { id: PageId; path: string; no: string; label: string; micro: string }[] = [
  { id: "home", path: "/", no: "01", label: "Home", micro: "Start / verified map" },
  { id: "links", path: "/links", no: "02", label: "Important Links", micro: "Portals / notices / forms" },
  { id: "resources", path: "/resources", no: "03", label: "Resources", micro: "Study / code / tools" },
  { id: "curriculum", path: "/curriculum", no: "04", label: "Curriculum", micro: "CSE / MAKAUT / assessments" },
  { id: "placements", path: "/placements", no: "05", label: "Placements", micro: "Evidence / preparation" },
  { id: "faculty", path: "/faculty", no: "06", label: "Faculty & Contacts", micro: "CSE / departments / support" },
  { id: "social", path: "/social", no: "07", label: "Socials", micro: "Official / community channels" },
  { id: "extras", path: "/extras", no: "08", label: "Extras", micro: "Campus / scholarships / safeguards" },
];

export const linkGroups = [
  {
    label: "AEC core routes", note: "College-specific notices, departments, forms and central support.",
    items: [
      ["AEC official website", "https://www.aecwb.edu.in/", "Official", "Institution notices, departments, admissions and central context."],
      ["AEC news & notices", "https://www.aecwb.edu.in/news-notices.php", "Official", "Check this beside department notices before acting on a deadline."],
      ["AEC CSE department", "https://www.aecwb.edu.in/cse-department.php", "Official", "CSE overview, current public syllabus archive links and department context."],
      ["AEC CSE department site", "https://sites.google.com/view/aecwb-cse/home", "Official department", "Faculty and technical-assistant pages maintained for the CSE department."],
      ["AEC downloads", "https://www.aecwb.edu.in/nirf-engineering.php", "Official", "Hostel clearance, anti-ragging affidavits, caution-deposit documents and hostel form routes."],
    ],
  },
  {
    label: "MAKAUT academic system", note: "University curriculum, academic calendar, exams and published routines.",
    items: [
      ["MAKAUT official site", "https://makautwb.ac.in/", "Official", "University pages and public notices."],
      ["MAKAUT Exam", "https://makautexam.net/", "Official", "Routine, results, examination notices and Member’s Area gateway."],
      ["NEP curriculum index", "https://makautexam.net/aicte_details/aicteugdetailsnep.html", "Official", "Current index for the applicable curriculum document."],
      ["Semester I syllabus PDF", "https://makautexam.net/aicte_details/Syllabusnep/sem126.pdf", "Official", "First-year Semester I structure under the 2026–27 listed document."],
      ["Semester II syllabus PDF", "https://makautexam.net/aicte_details/Syllabusnep/sem226.pdf", "Official", "First-year Semester II structure under the 2026–27 listed document."],
      ["MAKAUT routine", "https://makautexam.net/routine.html", "Official", "Use the current published routine, not a forwarded screenshot."],
      ["Provisional academic calendar", "https://d2xe8shibzpjog.cloudfront.net/Notice/makaut1/4905_1784710139.pdf", "Official", "2026–27 calendar; later notices may supersede dates."],
    ],
  },
  {
    label: "College systems & access", note: "These routes may require credentials, a college network, or a current AEC instruction.",
    items: [
      ["AEC Library", "https://www.aecwb.edu.in/library-home.php", "Official", "Library announcements, forms, OPAC guidance and e-copy request routes."],
      ["AEC Web OPAC", "http://122.252.249.26:5096/forms/frmLogin.aspx", "Login", "Catalogue search after library credentials are issued."],
      ["AEC Knimbus", "https://aecwb.knimbus.com/portal/v2/default/login", "Login", "Account-gated e-library; available holdings are not public."],
      ["MAKAUT Member’s Area", "https://makaut1.ucanapply.com/smartexam/public/", "Gateway", "University examination-facing account functions."],
      ["AEC student login", "http://112.133.209.26:82/Forms/frmLogin.aspx?branch_id=401", "Login", "Route visible in AEC navigation. Obtain credentials through AEC, never chat groups."],
      ["Training & Placement", "https://www.aecwb.edu.in/tp-officers.php", "Official", "Public Training & Placement officer route."],
    ],
  },
] as const;

export const resourceBlocks = [
  {
    no: "R1", title: "Library before the browser", label: "AEC / official", text: "AEC’s library page documents Web OPAC, book/e-copy requisition paths and a computing-oriented collection. Sign in only after getting your own credentials; the public Knimbus page does not reveal individual entitlement lists.",
    links: [["AEC Library", "https://www.aecwb.edu.in/library-home.php"], ["Web OPAC", "http://122.252.249.26:5096/forms/frmLogin.aspx"], ["Knimbus sign-in", "https://aecwb.knimbus.com/portal/v2/default/login"]],
  },
  {
    no: "R2", title: "Build a CSE base in layers", label: "Study sequence", text: "Start with C fundamentals, then algorithmic thinking and DSA. Add Python for scripting and data work, Git for version history, and operating-system basics as you begin using the terminal. Keep course outcomes—not random playlists—as your filter.",
    links: [["C language reference", "https://en.cppreference.com/w/c"], ["Python tutorial", "https://docs.python.org/3/tutorial/"], ["Pro Git book", "https://git-scm.com/book/en/v2"], ["NPTEL", "https://nptel.ac.in/"], ["SWAYAM", "https://swayam.gov.in/"]],
  },
  {
    no: "R3", title: "Practice with an exit signal", label: "Legitimate public tools", text: "Use a lightweight editor, one compiler/runtime, a Git repository and a problem log. At first, measure output rather than hours: one executable program, one readable commit, or one explained algorithm per practice session.",
    links: [["Visual Studio Code", "https://code.visualstudio.com/"], ["GitHub Skills", "https://skills.github.com/"], ["Programiz C compiler", "https://www.programiz.com/c-programming/online-compiler/"], ["GeeksforGeeks DSA", "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/"], ["Desmos calculator", "https://www.desmos.com/scientific"]],
  },
] as const;

export const programmingMap = [
  ["Weeks 1–2", "C syntax + input/output", "Variables, decisions, loops; type each example before reading a solution."],
  ["Weeks 3–4", "Functions + arrays", "Split one program into functions; trace arrays on paper before running."],
  ["Weeks 5–6", "Pointers + files", "Treat memory diagrams as compulsory; build one read/write file program."],
  ["Weeks 7–8", "Search/sort + complexity", "Compare linear/binary search and write basic sort logic without copy-paste."],
  ["Alongside", "Python + Git", "Use Python for quick practice; commit small working changes with a clear message."],
] as const;

export const cseCourseNotes = [
  ["26-ES-CS201", "Programming for Problem Solving and Introduction to AI", "Computer basics → algorithms → C → functions/pointers/files → search/sort → introductory AI concepts."],
  ["26-ES-CS291", "Programming for Problem Solving Lab & AI Tools", "Practical counterpart; use lab time to run, explain and revise your own code."],
  ["26-BS-M101 / M201", "Mathematics I / II", "Keep a formula-and-errors notebook; revisit weak question types after each assessment."],
  ["26-SEC-181 / 282", "MOOCs / Skills", "A named skill-enhancement course appears in both terms; confirm AEC’s current approved choice and submission process."],
] as const;

export const placementRows = [
  ["2026 batch / CSE", "171 eligible · 47 opportunity received · 85 offers · 71 heads", "42%", "AEC Placement Report 2026 table. Report context and completion status should be reconfirmed before comparison."],
  ["2025 batch / CSE", "168 eligible · 108 opportunity received · 181 offers · 137 heads", "82%", "AEC Placement Report 2025 table."],
  ["2024 / institution", "Campus-interview placement listed as ongoing", "81% · ₹30 LPA max · ₹5.02 LPA avg", "AEC-supplied profile hosted by WBJEEB; WBJEEB says institute data is not independently verified."],
  ["2023 / institution", "Campus-interview record", "83.76% · ₹23 LPA max · ₹4.92 LPA avg", "AEC-supplied profile hosted by WBJEEB; AEC homepage/Shiksha cite ₹22 LPA max instead."],
  ["2022 / institution", "Campus-interview record", "83.44% · ₹29 LPA max · ₹4.8 LPA avg", "AEC-supplied profile hosted by WBJEEB; not a CSE-only figure."],
] as const;

export const placementHistory = [
  ["2018–2021", "Mechanical department", "AEC Mechanical department publishes historical placement-record links; no five-year CSE-only series was located."],
  ["2022–2024", "Institution-level", "WBJEEB-hosted AEC profile gives aggregate placement entries; source explicitly carries a non-verification disclaimer."],
  ["2025–2026", "CSE branch", "AEC’s current branch tables provide CSE rows for the two listed batches."],
] as const;

export const recruiterAndPreparation = [
  ["Published context", "The AEC website highlights campus placement routes but does not publish a stable branch-by-branch recruiter roster in the retrieved report."],
  ["Avoid false comparison", "Highest/average CTC, offers, heads placed and placement percentage are different measures. Keep the column header when quoting a number."],
  ["First-year preparation", "Learn C well, maintain GitHub projects, solve progressively harder basic problems, write concise lab records, and ask seniors for current drive patterns."],
  ["Internship route", "Track official T&P notices and verified faculty/club opportunities. Never pay a person for an unverified internship or placement offer."],
] as const;

export const contacts = [
  ["Central administration", "Asansol Engineering College", "9073683912 · principal@aecwb.edu.in", "Official central route"],
  ["Principal", "Prof. Dr. Arup Kumar Bhaumik", "Use central AEC contact", "Name appears on the AEC homepage; a separate direct card was not verified."],
  ["Registrar", "Dr. Debashis Sarkar", "Use central AEC contact", "Name appears on the AEC homepage; current direct contact not verified."],
  ["Training & Placement", "Ms. Debika Chatterjee", "AEC T&P officers page", "In-charge, T&P / Manager Corporate Relations as stated publicly."],
  ["CSE", "Dr. Debasis Chakraborty", "hodcse@aecwb.edu.in · CSE Block NB", "Public CSE faculty page; confirm current office procedure before formal correspondence."],
  ["Examination Cell", "Not publicly verified", "AEC Examination page / MAKAUT Exam", "Use current AEC notice or central contact for a named route."],
] as const;

export const departmentDirectory = [
  ["CSE", "Dr. Debasis Chakraborty", "https://www.aecwb.edu.in/cse-department.php", "B.Tech CSE / departmental faculty site"],
  ["Information Technology", "Dr. Vedatrayee Chatterjee", "https://www.aecwb.edu.in/it-department.php", "Department page"],
  ["CSE (AI & ML)", "Dr. Sheuli Chakraborty", "https://www.aecwb.edu.in/aiml-department.php", "Department page"],
  ["CSE (IoT)", "Dr. Prajit Paul", "https://www.aecwb.edu.in/cseiot-department.php", "Department page"],
  ["CSBS", "Dr. Abhishek Bandyopadhyay", "https://www.aecwb.edu.in/csbs-department.php", "Department page / TCS-linked programme context"],
  ["ECE", "Dr. Chiranjib Goswami", "https://www.aecwb.edu.in/ece-department.php", "Department page"],
  ["Electrical", "Dr. Rajan Sarkar", "https://sites.google.com/view/aec-ee/people/faculty-members", "Official department Google Site"],
  ["Mechanical", "Dr. Debashis Sarkar", "https://sites.google.com/view/department-of-me-aec/academics/faculty-members", "Official department Google Site"],
  ["Civil", "Professor Biplab Saha", "https://www.aecwb.edu.in/civil-department.php", "All eight semester syllabus links listed publicly"],
  ["Computer Application", "Dr. Sudip Kumar De", "https://www.aecwb.edu.in/ca-department.php", "BCA/MCA department page"],
  ["Management Studies", "Dr. Sudip Basu", "https://www.aecwb.edu.in/ms-department.php", "BBA department page"],
  ["Basic Science & Humanities", "Dr. Mithu Dey", "https://www.aecwb.edu.in/bsh-department.php", "First-year foundation department"],
] as const;

export const socials = [
  ["AEC Facebook", "https://www.facebook.com/AEC1998/", "Website-linked institutional", "AEC’s official-site footer link."],
  ["AEC Instagram", "https://www.instagram.com/asansol_engineering_college/", "Website-linked institutional", "AEC’s official-site footer link."],
  ["AEC LinkedIn", "https://www.linkedin.com/company/aec-social", "Website-linked institutional", "AEC’s official-site footer link."],
  ["AEC X / Twitter", "https://twitter.com/AsansolCollege", "Website-linked institutional", "AEC’s official-site footer link; current activity not independently captured."],
  ["YouTube candidate A", "https://www.youtube.com/@asansolengineeringcollegeo3959", "Search-verified candidate", "Search describes it as an AEC channel, but the inspected AEC footer did not link it."],
  ["YouTube candidate B", "https://www.youtube.com/@asansolengineeringcollege7365", "Search-verified candidate", "Older-content candidate; recheck AEC confirmation before treating it as canonical."],
] as const;

export const communities = [
  ["Tech Club AEC", "https://www.facebook.com/AECTechClub/", "CSE-linked club", "Its public Facebook description calls it an initiative of the CSE department and links @techclubaec."],
  ["Development Society AEC", "https://devsoc-aec.vercel.app/", "Club-maintained", "The site links Instagram @dev.soc_aec, LinkedIn and X. Treat event details as community updates."],
  ["AEC Hardware Club", "https://aechardwareclub.in/", "Club-maintained", "Public site lists IHMMC 2026 and its own contacts/social links."],
  ["Robotics Club AEC", "https://rcaec.vercel.app/", "Club-maintained", "Public site records workshops/events and its social links; shown as a community route."],
  ["AEC Alumni", "https://www.aecwb.edu.in/alumni.php", "Official route", "The official page states the Alumni Association is registered; its activity content returned a public database error."],
] as const;

export const extraPanels = [
  ["CSE fee reference", "₹701,800", "Calculated from the sem-wise CSE figures in an AEC-supplied profile hosted by WBJEEB. The document says this supplied information is not independently verified; it is not a demand notice."],
  ["Hostel reference", "600 boys’ + 400 girls’ seats", "This seat count is stated in the same AEC-supplied WBJEEB profile. AEC’s homepage separately says three boys’ and two girls’ hostels; no dedicated hostel contact was verified."],
  ["Transport", "Not publicly verified", "Targeted review of AEC transport routes did not produce a public schedule, fee, contact, or route map. Ask the admissions/college office directly."],
] as const;

export const safeguardLinks = [
  ["Anti-ragging measures", "https://www.aecwb.edu.in/anti-ragging-measures.php", "Official college policy route; keep the affidavit copy and current induction instructions."],
  ["College anti-ragging affidavit", "https://www.aecwb.edu.in/assets/downloads/ant_rag_aff_col.pdf", "Official downloadable student/guardian form."],
  ["Hostel anti-ragging affidavit", "https://www.aecwb.edu.in/assets/downloads/ant_rag_aff_hos.pdf", "Official downloadable hostel student/guardian form."],
  ["Scholarship overview", "https://www.aecwb.edu.in/scholarship-overview.php", "AEC lists scholarship routes; current award amounts and eligibility must be checked on the active scheme page."],
  ["Scholarship policy hub", "https://www.aecwb.edu.in/scholarship-policy.php", "Links SC/ST/OBC, core-branch, JIS, SVMCM, other scholarships and Student Credit Card routes."],
  ["Annual events", "https://www.aecwb.edu.in/annual-events.php", "Official events route; follow current notices for dates and registration."],
] as const;

export const searchIndex: { title: string; detail: string; terms: string; path: string }[] = [
  ...sitePages.map((page) => ({ title: page.label, detail: page.micro, terms: `${page.label} ${page.micro} AEC CSE BTech`, path: page.path })),
  { title: "MAKAUT examination route", detail: "Routine, notices and Member’s Area", terms: "makaut exam routine results form fillup admit card attendance", path: "/links" },
  { title: "First-year CSE curriculum", detail: "Semester I–II codes, credits and course map", terms: "syllabus curriculum sem semester programming AI math physics chemistry R25 NEP", path: "/curriculum" },
  { title: "Programming foundation", detail: "C, Python, DSA, Git and practice sequence", terms: "C python dsa git github editor compiler terminal programming", path: "/resources" },
  { title: "CSE faculty directory", detail: "Public faculty names and displayed institutional emails", terms: "faculty hod professor teacher debasis monish sandip pintu subhendu", path: "/faculty" },
  { title: "Fees, hostel and scholarships", detail: "Reference figures, safeguards and current-source warnings", terms: "fees payment hostel scholarship transport anti ragging student credit card", path: "/extras" },
  { title: "Placement evidence", detail: "2022–2026 reporting basis and CSE branch tables", terms: "placement package CTC recruiter offers internship job preparation", path: "/placements" },
  { title: "Official social channels", detail: "Institutional versus club-maintained routes", terms: "instagram facebook linkedin youtube devsoc tech club robotics hardware", path: "/social" },
];

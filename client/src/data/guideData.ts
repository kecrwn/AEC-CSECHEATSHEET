/** Curriculum Terminal data: verified public information with explicit provenance, uncertainty, and source IDs. */
export const assets = {
  hero: "/manus-storage/aec-cse-guide-hero_1ba87b8c.png",
  circuit: "/manus-storage/aec-cse-guide-circuit-detail_0eef9d06.png",
  source: "/manus-storage/aec-cse-guide-source-detail_e5bce844.png",
  mark: "/manus-storage/aec-cse-route-mark_48c4c213.png",
};

export const navItems = [
  ["01", "start", "Fast route"], ["02", "curriculum", "Curriculum"], ["03", "calendar", "Calendar & exams"],
  ["04", "library", "Library & skills"], ["05", "placements", "Placements"], ["06", "contacts", "Contacts"],
  ["07", "faculty", "CSE faculty"], ["08", "campus", "Fees & hostel"], ["09", "social", "Social register"], ["10", "sources", "Sources"],
] as const;

export const quickLinks = [
  ["AEC main website", "https://www.aecwb.edu.in/", "Public", "Notices, departments, central contacts and admissions context."],
  ["AEC CSE department", "https://www.aecwb.edu.in/cse-department.php", "Public", "Department context and AEC-hosted syllabus archive links."],
  ["AEC CSE department site", "https://sites.google.com/view/aecwb-cse/home", "Public", "CSE contact route and current faculty listing."],
  ["AEC Library", "https://www.aecwb.edu.in/library-home.php", "Public", "OPAC workflow, requisition forms and library announcements."],
  ["AEC Web OPAC", "http://122.252.249.26:5096/forms/frmLogin.aspx", "Login", "Library-catalogue search after you receive credentials."],
  ["AEC Knimbus e-library", "https://aecwb.knimbus.com/portal/v2/default/login", "Login", "Digital-library sign-in; available entitlements are not public."],
  ["MAKAUT Exam", "https://makautexam.net/", "Public", "Routine, admit card, results notices and Member’s Area route."],
  ["MAKAUT Member’s Area", "https://makaut1.ucanapply.com/smartexam/public/", "Gateway", "University exam-facing account functions."],
  ["MAKAUT student registration", "https://makaut.wb.gov.in/", "Gateway", "Student registration route published by MAKAUT."],
  ["MAKAUT NEP syllabus index", "https://makautexam.net/aicte_details/aicteugdetailsnep.html", "Public", "Authoritative first-year CSE curriculum PDFs."],
  ["MAKAUT routine", "https://makautexam.net/routine.html", "Public", "Current published examination routine."],
  ["AEC Training & Placement", "https://www.aecwb.edu.in/tp-officers.php", "Public", "Named T&P function contact and official page."],
] as const;

export const semOne = [
  ["26-BS-M101", "Mathematics I", "3–0–0", "3", "Theory"], ["26-BS-PH101", "Physics", "3–0–0", "3", "CSE & allied"],
  ["26-ES-EE101", "Basic Electrical and Electronics Engineering", "3–1–0", "4", "Theory"], ["26-AEC-101", "English for Communication Skills", "2–0–0", "2", "Theory"],
  ["26-BS-PH191", "Physics Lab", "0–0–3", "1.5", "CSE & allied"], ["26-ES-ME191", "Engineering Graphics & Design", "0–0–4", "2", "CSE & allied"],
  ["26-ES-EE191", "Basic Electrical and Electronics Engineering Lab", "0–0–3", "1.5", "Practical"], ["26-VAC-181", "NCC / NSS / Yoga and Sports", "0–0–4", "2", "Sessional"],
  ["26-SEC-181", "Skill Enhancement Course — MOOCs / Skills", "0–0–2", "1", "Sessional"], ["26-MC-181", "Indian Constitution", "2–0–0", "Non-credit", "CSE & allied"],
] as const;

export const semTwo = [
  ["26-BS-M201", "Mathematics II", "3–0–0", "3", "Theory"], ["26-BS-BI201", "Biology for Engineers", "2–0–0", "2", "Theory"],
  ["26-BS-CH201", "Chemistry", "3–0–0", "3", "CSE & allied"], ["26-ES-CS201", "Programming for Problem Solving and Introduction to AI", "3–0–0", "3", "Theory"],
  ["26-VAC-201", "Environmental Science", "3–0–0", "3", "Theory"], ["26-BS-CH291", "Chemistry Lab", "0–0–3", "1.5", "CSE & allied"],
  ["26-ES-CS291", "Programming for Problem Solving Lab & AI Tools", "0–0–4", "2", "Practical"], ["26-ES-ME292", "Workshop Practice", "0–0–4", "2", "CSE & allied"],
  ["26-AEC-281", "Language Laboratory", "0–0–2", "1", "Sessional"], ["26-AEC-282", "Essentials for Professional Skills", "0–0–3", "1.5", "Sessional"],
  ["26-SEC-282", "Skill Enhancement Course — MOOCs / Skills", "0–0–4", "2", "Sessional"], ["26-MC-282", "Indian Knowledge System", "2–0–0", "Non-credit", "CSE & allied"],
] as const;

export const calendarRows = [
  ["Academic commencement", "30 Jul 2026 — all odd semesters; Sem I: after registration", "04 Jan 2027"],
  ["CA cycle", "CA1: 07–12 Sep · CA2: 02–07 Nov · CA3/online MCQ: 17–21 Nov", "CA1: 15–19 Feb · CA2: 22–26 Mar · CA3: 29 Mar–02 Apr · CA4: 05–09 Apr · ESE CA/MCQ: 12–16 Apr"],
  ["Attendance / WCA", "WCA: 17–21 Nov · attendance upload: 18–20 Nov", "WCA: 12–16 Apr · attendance upload: 13–15 Apr"],
  ["Exam form fill-up", "23 Nov–02 Dec 2026", "19–27 Apr 2027"], ["Theory examinations", "03–19 Dec 2026", "30 Apr–15 May 2027"], ["Practical / sessional / viva", "21–26 Dec 2026", "17–20 May 2027"],
] as const;

export const placementRows = [
  ["2024 — ongoing", "81%", "₹30 LPA", "₹5.02 LPA avg.", "AEC-submitted profile hosted by WBJEEB; WBJEEB states it does not verify institute-supplied data."],
  ["2023", "83.76%", "₹23 LPA", "₹4.92 LPA avg.", "AEC-submitted profile hosted by WBJEEB."],
  ["2022", "83.44%", "₹29 LPA", "₹4.80 LPA avg.", "AEC-submitted profile hosted by WBJEEB."],
  ["2023 — aggregate", "Not stated", "₹22 LPA", "₹4.92 LPA avg.", "AEC homepage + Shiksha agree on ₹22 LPA / ₹4.92 LPA; Shiksha reports 500+ offers and 250+ recruiters."],
  ["NIRF-derived UG outcomes", "59% / 72% / 78%", "Not stated", "₹3.82 / ₹4 / ₹4 LPA median", "2021–22 / 2022–23 / 2023–24, Shiksha transcription of NIRF Report 2025; not comparable to campus-interview figures."],
] as const;

export const contactRows = [
  ["Central administration", "—", "Vivekananda Sarani, Kanyapur, Asansol – 713305 · 9073683912 · principal@aecwb.edu.in", "Official central route"],
  ["Principal", "Prof. Dr. Arup Kumar Bhaumik", "Use central AEC contact", "Name shown on AEC homepage; no separate direct card found"],
  ["Registrar", "Dr. Debashis Sarkar", "Use central AEC contact", "Name shown on AEC homepage; no separate direct card found"],
  ["Vice-Principal", "Not publicly available", "—", "Current official name/contact not verified"],
  ["Examination Cell", "Not publicly available", "AEC Examination page · MAKAUT Exam gateway", "No named cell contact visible in retrieved AEC content"],
  ["Training & Placement", "Ms. Debika Chatterjee", "Use central AEC contact", "In-Charge, T&P Department / Manager Corporate Relations"],
  ["CSE", "Role shown inconsistently", "hodcse@aecwb.edu.in · CSE Block NB, 2nd & 3rd floor", "Confirm current HoD before formal correspondence"],
  ["IT", "Dr. Vedatrayee Chatterjee", "Official IT department page", "No direct department contact visible"],
  ["ECE", "Dr. Chiranjib Goswami", "9474375054 · hodece@aecwb.edu.in · chiranjib.ece@aecwb.edu.in", "Official ECE department page"],
  ["Electrical Engineering", "Dr. Rajan Sarkar", "+91 7908778356 · hod.ee@aecwb.edu.in", "AEC EE department Google Site"],
  ["Mechanical Engineering", "Dr. Debashis Sarkar", "+91 7001320174 · hodme@aecwb.edu.in", "AEC ME department Google Site"],
  ["Civil Engineering", "Professor Biplab Saha", "Official Civil department page", "No direct department contact visible"],
  ["CSBS", "Dr. Abhishek Bandyopadhyay", "Official CSBS department page", "No direct department contact visible"],
] as const;

export const facultyRows = [
  ["Dr. Debasis Chakraborty", "HoD & Professor", "hodcse@aecwb.edu.in"], ["Dr. Monish Chatterjee", "Associate Professor", "monish.cse@aecwb.edu.in"],
  ["Dr. Pintu Pal", "Assistant Professor", "pintupal.cse@aecwb.edu.in"], ["Dr. Sandip Roy", "Assistant Professor", "sandip.cse@aecwb.edu.in"],
  ["Dr. Abhishek Bandyopadhyay", "Assistant Professor", "abhishek.cse@aecwb.edu.in"], ["Dr. Subhendu Barat", "Associate Professor", "subhendu.cse@aecwb.edu.in"],
  ["Dr. Khusbu Chandrakar", "Assistant Professor", "khusbu.cse@aecwb.edu.in"], ["Ujjwal Kumar Kamila", "Assistant Professor", "ujjwal.cse@aecwb.edu.in"],
  ["Simanta Hazra", "Assistant Professor", "simanta.cse@aecwb.edu.in"], ["Shibshankar Bala", "Assistant Professor", "shibshankar.cse@aecwb.edu.in"],
  ["Pranabes Gangopadhyay", "Assistant Professor", "pranabesh.cse@aecwb.edu.in"], ["Uddalok Sen", "Assistant Professor", "uddalok.cse@aecwb.edu.in"],
  ["Shatabdi Saha", "Assistant Professor", "shatabdi.cse@aecwb.edu.in"], ["Vedatrayee Chatterjee", "Assistant Professor", "vedatrayee.cse@aecwb.edu.in"],
  ["Lumbini Bhaumik", "Assistant Professor", "lumbini.cse@aecwb.edu.in"], ["Kinshuk Banerjee", "Assistant Professor", "kinshuk.cse@aecwb.edu.in"],
  ["Sabyasachi Mukherjee", "Assistant Professor", "sabyasachi.cse@aecwb.edu.in"], ["Sujoy Kumar Basu", "Assistant Professor", "sujoybasu.cse@aecwb.edu.in"],
  ["Tapan Kumar Das", "Assistant Professor", "tkdas.cse@aecwb.edu.in"], ["Subash Chandra Nath", "Assistant Professor", "scnath.cse@aecwb.edu.in"],
  ["Biplab Mondal", "Assistant Professor", "biplabmondal.cse@aecwb.edu.in"], ["Dr. Rinku Dutta Rakshit", "Assistant Professor", "rinkudutta.cse@aecwb.edu.in"],
  ["Debabrata Maity", "Assistant Professor", "debabratamaity.cse@aecwb.edu.in"],
] as const;

export const feeRows = [["Semester 1", "₹103,525"], ["Semester 2", "₹70,825"], ["Semester 3", "₹87,825"], ["Semester 4", "₹87,825"], ["Semester 5", "₹87,825"], ["Semester 6", "₹87,825"], ["Semester 7", "₹88,325"], ["Semester 8", "₹87,825"]] as const;

export const socialRows = [
  ["Facebook", "https://www.facebook.com/AEC1998/", "Website-linked", "Public July–August 2026 posts/videos were found; follower count not independently captured."],
  ["Instagram", "https://www.instagram.com/asansol_engineering_college/", "Website-linked", "Public July–August 2026 posts/reels were found; follower count not independently captured."],
  ["LinkedIn", "https://www.linkedin.com/company/aec-social", "Website-linked", "Public AEC posts appeared in search; follower count not independently captured."],
  ["X / Twitter", "https://twitter.com/AsansolCollege", "Website-linked", "Current activity and follower count not independently captured."],
  ["YouTube candidate A", "https://www.youtube.com/@asansolengineeringcollegeo3959", "Search-verified", "Search described it as official and indexed 708 subscribers / 142 videos. Not linked from the inspected AEC footer."],
  ["YouTube candidate B", "https://www.youtube.com/@asansolengineeringcollege7365", "Search-verified", "Search described it as an official channel with older content. Not linked from the inspected AEC footer."],
] as const;

export const references = [
  ["01", "AEC — official website", "https://www.aecwb.edu.in/"], ["02", "MAKAUT — official university navigation", "https://makautwb.ac.in/page.php?id=181"], ["03", "MAKAUT Exam — official gateway", "https://makautexam.net/"],
  ["04", "AEC Library — official library page", "https://www.aecwb.edu.in/library-home.php"], ["05", "AEC Knimbus digital-library login", "https://aecwb.knimbus.com/portal/v2/default/login"],
  ["06", "MAKAUT NEP curriculum index — AY 2026–27", "https://makautexam.net/aicte_details/aicteugdetailsnep.html"], ["07", "AEC Training & Placement officers", "https://www.aecwb.edu.in/tp-officers.php"],
  ["08", "AEC Examination page", "https://www.aecwb.edu.in/examination.php"], ["09", "MAKAUT detailed syllabus — First Year, Semester I", "https://makautexam.net/aicte_details/Syllabusnep/sem126.pdf"],
  ["10", "MAKAUT detailed syllabus — First Year, Semester II", "https://makautexam.net/aicte_details/Syllabusnep/sem226.pdf"], ["11", "AEC Information Technology department", "https://www.aecwb.edu.in/it-department.php"],
  ["12", "AEC Computer Science & Engineering department", "https://www.aecwb.edu.in/cse-department.php"], ["13", "AEC Civil Engineering department", "https://www.aecwb.edu.in/civil-department.php"],
  ["14", "MAKAUT Provisional Academic Calendar 2026–27", "https://d2xe8shibzpjog.cloudfront.net/Notice/makaut1/4905_1784710139.pdf"],
  ["15", "Shiksha — AEC placement overview and NIRF-derived outcomes", "https://www.shiksha.com/college/asansol-engineering-college-24061/placement"],
  ["16", "WBJEEB-hosted AEC institute profile — AEC-supplied; WBJEEB disclaimer", "https://wbjeeb.in/assets/ALPG/PVTENGG/ASANSOL.pdf"],
  ["17", "AEC placement analysis PDF — access blocked in research", "https://www.aecwb.edu.in/assets/pdf/placement-analysis.pdf"], ["18", "AEC official central contact & website-linked social profiles", "https://www.aecwb.edu.in/contact-us.php"],
  ["19", "AEC CSE faculty — department Google Site", "https://sites.google.com/view/aecwb-cse/academics/department/cse-faculty-members"], ["20", "AEC Electronics & Communication Engineering department", "https://www.aecwb.edu.in/ece-department.php"],
  ["21", "AEC Electrical Engineering faculty — department Google Site", "https://sites.google.com/view/aec-ee/people/faculty-members"], ["22", "AEC Mechanical Engineering faculty — department Google Site", "https://sites.google.com/view/department-of-me-aec/academics/faculty-members"],
  ["23", "AEC Computer Science and Business Systems department", "https://www.aecwb.edu.in/csbs-department.php"], ["24", "AEC CSE technical assistants — department Google Site", "https://sites.google.com/view/aecwb-cse/academics/department/cse-technical-assistants"],
] as const;

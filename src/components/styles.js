import {
  lps,
  enis,
  dg,
  rd, ipeis, tl,
} from "../images";
const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    " lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    " font-black ",
  sectionSubText:
    "sm:text-[18px] text-[14px]  tracking-wider ",
};

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Telnet",
    icon: tl,
    iconBg: "#E6DEDD",
    date: "Jul. 2024 - Present",
    points: [
      "- Implemented C++ design patterns (Factory, Observer, Iterator, Strategy) to modularize payment-terminal firmware, improving maintainability and enabling rapid feature rollouts within biweekly sprints.",
      "- Developed certificate-expiry detection logic in C++, cross-checking X.509 certificates against the system clock at startup; terminals now refuse expired credentials and display a 'Certificate Expired' prompt, protecting transactions for thousands of merchants.",
      "- Refactored legacy code paths with modern C++ best practices (lambda expressions, std::unique_ptr, std::function maps), reducing authorization routine execution time by 15% and eliminating critical memory leaks.",
      "- Authored Python scripts to migrate over 50 SVN repositories to Bitbucket, automating branch mapping and preserving full commit history, reducing migration effort by 40%.",
      "- Triaged and resolved high-severity customer issues (terminal reboots, system crashes) by leading 10+ root-cause analysis sessions—examining logs, reproducing firmware faults, and updating configuration guides—to reduce mean time to resolution by 30%.",
      "- Mentored three junior engineers through internal DevOps and advanced C++ certification programs, co-leading weekly hands-on workshops to share best practices in CI/CD pipelines and modern C++ features.",
    ],  
  },
  {
    title: "End of Studies Internship",
    company_name: "ReDX (Revolutionary Digital\nTransformation Technologies)",
    icon: rd,
    iconBg: "#E6DEDD",
    date: "Feb. 2024 - Jun. 2024",
    points: [
      "- Accelerated BFS graph processing by 5.39× on 44 GB seismic datasets by refactoring NextVision’s C++ code to use cugraph::bfs with concurrent multi-source searches and optimized CUDA kernel queues via OpenACC pragmas on an NVIDIA A100 GPU.",
      "- Reduced NextVision environment setup time by 50% (from 40 minutes to 20 minutes) by designing a Docker container pre-installing CUDA 12, cuGraph 0.21, Thrust, and Python 3.10, ensuring reproducible HPC onboarding and eliminating configuration drift.",
      "- Validated algorithmic correctness via byte-for-byte patch comparison, confirming that GPU-accelerated BFS outputs matched CPU results across 120 test graphs (1 GB–44 GB) and maintained 100% fidelity in cluster assignments.",
      "- Collaborated with geophysicists and GIS analysts to identify maximal independent vertex subsets—automating multi‑seed BFS launches—and co-authored an EAGE conference paper that demonstrated a 5× improvement in interpretive throughput.",
      "- Benchmarked FastAPSP versus BFS workloads, projecting a further 3× reduction in compute complexity on large sparse graphs; documented findings to guide future cuGraph integrations once API support becomes available.",
    ],
  },
  {
    title: "Master Degree in Computer Engineering",
    company_name: "National School of Engineers of Sfax (ENIS) | GPA(3.63/4.0)",
    icon: enis,
    iconBg: "#383E56",
    date: "Sep. 2021 – Jun. 2024",
    points: [
      "Master's program focused on advanced topics in computer engineering.",
      "Gained practical experience in software development, high-performance computing, and research projects.",
      "Collaborated on various academic and industry-led projects, achieving technical proficiency in a range of technologies.",
    ],
  },
  {
    title: "DevOps Engineer Intern",
    company_name: "ReDX (Revolutionary Digital\nTransformation Technologies)",
    icon: rd,
    iconBg: "#E6DEDD",
    date: "Jun. 2023 - Sep. 2023",
    points: [
      "- Built CI/CD pipelines with GitHub Actions—accelerating releases by 80%—and containerized microservices with Docker and Kubernetes for scalable HPC/AI deployments.",
      "- Architected AWS (EC2, S3, IAM) infrastructure and implemented Prometheus/Grafana monitoring for 99.99% uptime and proactive alerting on performance issues.",
      "- Migrated infrastructure to Terraform as code, improving deployment repeatability and reducing environment drift.",
      "- Automated course-progress tracking and certificate issuance workflows, reducing manual tasks for trainers by 40%.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company_name: "Djagora FABLAB",
    icon: dg,
    iconBg: "#E6DEDD",
    date: "Jul. 2022 - Sep. 2022",
    points: [
      "- Developed a Flutter/Dart mobile app for patient monitoring, delivering sub‑second vital‑sign updates for 50+ users.",
      "- Engineered an alert subsystem to send notifications within 5 seconds of critical condition detection, reducing response times by 40%.",
      "- Integrated MongoDB with a Python/Flask backend to securely store clinical data and power RESTful API endpoints for seamless data exchange.",
      "- Collaborated with healthcare professionals to gather requirements and optimize UX, achieving over 50 active users during initial testing.",
    ],
  },
  {
    title: "Mathematics and Physics Preparatory Cycle",
    company_name: "Sfax Preparatory Engineering Institute (IPEIS) | Ranked in the top 20 % In the National Exam for Entrance to Engineering Schools",
    icon: ipeis,
    iconBg: "#383E56",
    date: "Sep. 2019 - Jun. 2021",
    points: [
      "Sfax Preparatory Engineering Institute (IPEIS) is a renowned educational institute in Tunisia, specializing in preparing students for engineering careers.",
      "With comprehensive courses and experienced faculty, IPEIS emphasizes rigorous training and practical skills development.",
    ],
  },
  {
    title: "Baccalaureat in Mathematics",
    company_name: "Pioneer High School of Sfax (LPS)",
    icon: lps,
    iconBg: "#E6DEDD",
    date: "Sep. 2015 - Jun. 2019",
    points: [
      "Pioneer High School of Sfax is a prestigious educational institution in Tunisia known for academic excellence.",
      "The school offers diverse programs and extracurricular activities to nurture students' talents and skills.",
      "With dedicated educators, it fosters critical thinking and leadership development.",
      "The school provides a nurturing and enriching learning environment for students' holistic growth.",
    ],
  },
];

export { styles, experiences };

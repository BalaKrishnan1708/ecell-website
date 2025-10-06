"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, Instagram, Phone, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"

type TeamMember = {
  id: number
  name: string
  position: string
  team: string
  domain: string
  image: string
  linkedin?: string
  email?: string
  instagram?: string
  phone?: string
  github?: string
}

const teamMembers: TeamMember[] = [
  // Managers
  {
    id: 49,
    name: "Dr.S.Ilaiyavel",
    position: "Manager",
    team: "Ecell Managers",
    domain: "Faculty",
    image: "/teams/managers/ilayavel.webp",
    linkedin: "",
    email: "",
    instagram: "",
    phone: "",
    github: "",
  },
  {
    id: 50,
    name: "V.senthill velan",
    position: "Manager",
    team: "Ecell Managers",
    domain: "Faculty",
    image: "/teams/managers/sentilvelan.webp",
    linkedin: "",
    email: "",
    instagram: "",
    phone: "",
    github: "",
  },

  // Core Leadership
  {
    id: 1,
    name: "Roshan M",
    position: "President",
    team: "Core Leadership",
    domain: "ECE - 4th Year",
    image: "/teams/core/president.webp",
    linkedin: "https://www.linkedin.com/in/roshan-m-711a95292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022ec0448@svce.ac.in",
    instagram: "@roshan.m.forever",
    phone: "9841092274",
    github: "",
  },
  {
    id: 2,
    name: "Dharshni. R",
    position: "Vice President",
    team: "Core Leadership",
    domain: "Biotechnology - 4th Year",
    image: "/teams/core/Vice president.webp",
    linkedin: "https://www.linkedin.com/in/dharshni-ramesh-a72934286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022bt0547@svce.ac.in",
    instagram: "dharshni6434",
    phone: "8056071990",
    github: "",
  },
  {
    id: 3,
    name: "Manojkumar A",
    position: "Secretary",
    team: "Core Leadership",
    domain: "ECE - 4th Year",
    image: "/teams/core/general secratory.webp",
    linkedin: "https://www.linkedin.com/in/manojkumar-anbuchezhian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022ec0231@svce.ac.in",
    instagram: "https://www.instagram.com/manojkumaranbuchezhian?igsh=MTZvNmJ2b3IybHVqeQ==",
    phone: "7418434691",
    github: "https://github.com/Manojkumaranbuchezhian",
  },

  // Executive Committee
  {
    id: 4,
    name: "Shree Varshini M",
    position: "CEO",
    team: "Executive Committee",
    domain: "ECE - 3rd Year",
    image: "/teams/committee/CEO.webp",
    linkedin: "https://www.linkedin.com/in/shree-varshini-m-533b08304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023ec0448@svce.ac.in",
    instagram: "",
    phone: "9360239715",
    github: "",
  },
  {
    id: 5,
    name: "Bhargavi TR",
    position: "COO",
    team: "Executive Committee",
    domain: "Chemical Engineering - 4th Year",
    image: "/teams/committee/COO.webp",
    linkedin: "https://www.linkedin.com/in/bhargavitr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2022ch0775@svce.ac.in",
    instagram: "bhargavi.tr",
    phone: "9360286533",
    github: "",
  },
  {
    id: 6,
    name: "N.Nitish",
    position: "CFO",
    team: "Executive Committee",
    domain: "AIDS - 3rd Year",
    image: "/teams/committee/CFO.webp",
    linkedin: "https://www.linkedin.com/in/nitish-navaneeth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "2023ad0681@svce.ac.in",
    instagram: "nitish_31x",
    phone: "8428557498",
    github: "",
  },
  {
    id: 7,
    name: "Daksha S",
    position: "CMO",
    team: "Executive Committee",
    domain: "Biotech - 2nd Year",
    image: "/teams/committee/CMO.webp",
    linkedin: "https://www.linkedin.com/in/daksha-suresh-0522b330a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0705@svce.ac.in",
    instagram: "dakshasuresh25",
    phone: "9043590574",
    github: "",
  },
  {
    id: 8,
    name: "Janani T",
    position: "CTO",
    team: "Executive Committee",
    domain: "CSE - 3rd Year",
    image: "/teams/committee/CTO.webp",
    linkedin: "https://www.linkedin.com/in/janani-t-bb507a29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023cs0309@svce.ac.in",
    instagram: "janani_11_2005",
    phone: "9150988305",
    github: "",
  },
  {
    id: 9,
    name: "VIKAASH B G",
    position: "CDO",
    team: "Executive Committee",
    domain: "ECE - 4th Year",
    image: "/teams/committee/CDO.webp",
    linkedin: "https://www.linkedin.com/in/vikaash-b-g-79733830b/",
    email: "viklearner@gmail.com",
    instagram: "",
    phone: "8525068831",
    github: "",
  },

  // Department Heads
  {
    id: 10,
    name: "Balakrishnan.R",
    position: "Tech Head",
    team: "Department Heads",
    domain: "AI&DS - 3rd Year",
    image: "/teams/heads/Tech.webp",
    linkedin: "https://www.linkedin.com/in/balakrishnan-r-5a1006278",
    email: "2023ad0681@svce.ac.in",
    instagram: "iambalakrishnan.r",
    phone: "9444543801",
    github: "https://github.com/BalaKrishnan1708",
  },
  {
    id: 11,
    name: "Sankara Narayanan S",
    position: "Execution Head",
    team: "Department Heads",
    domain: "Biotech - 3rd Year",
    image: "/teams/heads/Execution.webp",
    linkedin: "http://linkedin.com/in/sankara-narayanan-s-biotech",
    email: "2023bt0367@svce.ac.in",
    instagram: "s4nk4r",
    phone: "8610049372",
    github: "",
  },
  {
    id: 12,
    name: "Harshith B",
    position: "Content Head",
    team: "Department Heads",
    domain: "Mechanical and Automation- 3rd Year",
    image: "/teams/heads/Content1.webp",
    linkedin: "https://www.linkedin.com/in/harshith-bubalan-9b3588284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023mn0363@svce.ac.in",
    instagram: "Harshith.007",
    phone: "8608786089",
    github: "",
  },
  {
    id: 13,
    name: "Divya Shree M",
    position: "Design Head",
    team: "Department Heads",
    domain: "IT - 2nd Year",
    image: "/teams/heads/Design.webp",
    linkedin: "https://www.linkedin.com/in/divya-shree-m-09531631a/",
    email: "2024it0765@svce.ac.in",
    instagram: "_divya03shree_",
    phone: "8015848971",
    github: "",
  },
  {
    id: 14,
    name: "Baarath Arumugaraja",
    position: "Operation Lead",
    team: "Department Heads",
    domain: "CSE - 3rd Year",
    image: "/teams/heads/Operational.webp",
    linkedin: "https://www.linkedin.com/in/baarath-arumugaraja-7a8820329/",
    email: "2023cs0772@svce.ac.in",
    instagram: "baarathraja",
    phone: "9952436835",
    github: "",
  },
  {
    id: 15,
    name: "Balapranav K",
    position: "Community Captain",
    team: "Department Heads",
    domain: "EEE - 2nd Year",
    image: "/teams/heads/Community.webp",
    linkedin: "https://www.linkedin.com/in/balapranav/",
    email: "2024ee0123@svce.ac.in",
    instagram: "balabranab",
    phone: "7397380056",
    github: "",
  },
  {
    id: 16,
    name: "THARUN S",
    position: "Creative Lead",
    team: "Department Heads",
    domain: "Mech & Automation - 2nd Year",
    image: "/teams/heads/Creative.webp",
    linkedin: "https://www.linkedin.com/in/tharun-somasundaram",
    email: "2024mn0785@svce.ac.in",
    instagram: "@tharunehhhh",
    phone: "9342526239",
    github: "",
  },

  // Executive Members
  {
    id: 17,
    name: "P.Rasiga",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Chemical Engineering - 2nd Year",
    image: "/teams/executive/rasiga.webp",
    linkedin: "https://www.linkedin.com/in/rasigap28",
    email: "rasigapalanisamy1@gmail.com",
    instagram: "",
    phone: "9500240988",
    github: "",
  },
  {
    id: 18,
    name: "Sri Bharathi R",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Mechanical and automation - 2nd Year",
    image: "/teams/executive/SRI BHARATHI.webp",
    linkedin: "https://www.linkedin.com/in/sribharathi-rajkumar",
    email: "2024mn0785@svce.ac.in",
    instagram: "Sribharathi666",
    phone: "7397103127",
    github: "",
  },
  {
    id: 19,
    name: "Mayooritha P",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Computer Science - 2nd Year",
    image: "/teams/executive/MAYOORITHA.webp",
    linkedin: "https://www.linkedin.com/in/mayooritha-pugazhenthi",
    email: "2024cs0480@svce.ac.in",
    instagram: "mayooritha_",
    phone: "9677809044",
    github: "",
  },
  {
    id: 20,
    name: "Ajay M",
    position: "Executive Member",
    team: "Executive Members",
    domain: "CSE - 3rd Year",
    image: "/teams/executive/AJAY.webp",
    linkedin: "https://www.linkedin.com/in/ajay-m-3416961b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023cs0477@svce.ac.in",
    instagram: "ajay.tel",
    phone: "8925323250",
    github: "",
  },
  {
    id: 21,
    name: "G.Shreenidhi",
    position: "Executive Member",
    team: "Executive Members",
    domain: "EEE - 2nd Year",
    image: "/teams/executive/Shreenidhi.webp",
    linkedin: "https://www.linkedin.com/in/.G.Shreenidhi EEE",
    email: "2024EE0011@svce.ac.in",
    instagram: "I'm not in instagram",
    phone: "9962010822",
    github: "",
  },
  {
    id: 22,
    name: "Mahalakshmi L",
    position: "Executive Member",
    team: "Executive Members",
    domain: "ECE - 2nd Year",
    image: "/teams/executive/mahalashmmi.webp",
    linkedin: "https://www.linkedin.com/in/maha-lakshmi-l-756594329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ec0167@svce.ac.in",
    instagram: "Ival._.nila",
    phone: "8248228218",
    github: "",
  },
  {
    id: 23,
    name: "Yogavarthanee R",
    position: "Executive Member",
    team: "Executive Members",
    domain: "Chemical engineering - 2nd Year",
    image: "/teams/executive/YOGAVARTHANEE.webp",
    linkedin: "https://www.linkedin.com/in/yogavarthanee-rangarajan-569894314",
    email: "2024ch0915@svce.ac.in",
    instagram: "yoga_2007__",
    phone: "7812815995",
    github: "",
  },
  {
    id: 24,
    name: "Dimple Kurugunda",
    position: "Executive Member",
    team: "Executive Members",
    domain: "EEE - 2nd Year",
    image: "/teams/executive/dimple.webp",
    linkedin: "https://www.linkedin.com/in/dimple-kurugunda",
    email: "2024ee0945@svce.ac.in",
    instagram: "dimple___chowdaey",
    phone: "9951661000",
    github: "",
  },

  // Marketing Team
  {
    id: 25,
    name: "Santhoshkumar C",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "EEE - 2nd Year",
    image: "/teams/marketing/SANTHOSHKUMAR.webp",
    linkedin: "https://www.linkedin.com/in/santhoshkumar112",
    email: "2024ee0189@svce.ac.in",
    instagram: "_.mashysandy._",
    phone: "9080083869",
    github: "",
  },
  {
    id: 26,
    name: "GOKUL S",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "Biotech - 2nd Year",
    image: "/teams/marketing/GOKUL S.webp",
    linkedin: "https://www.linkedin.com/in/gokul-s-3526bb337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0848@svce.ac.in",
    instagram: "_.s.gokul._",
    phone: "9884463837",
    github: "",
  },
  {
    id: 27,
    name: "Kayal Nethra K",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "CSE - 2nd Year",
    image: "/teams/marketing/KAYAL NETHRA.webp",
    linkedin: "https://www.linkedin.com/in/kayal-nethra-k-cse-36150b332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024cs0492@svce.ac.in",
    instagram: "_kayaln_",
    phone: "9444311421",
    github: "",
  },
  {
    id: 28,
    name: "Mhadhurra Chandran",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "CSE - 3rd Year",
    image: "/teams/marketing/Mhadhurra.webp",
    linkedin: "https://www.linkedin.com/in/mhadhurra-chandran-a0576b321?trk=contact-info",
    email: "2023CS0956@svce.ac.in",
    instagram: "mhadhu_06",
    phone: "9840646632",
    github: "",
  },
  {
    id: 29,
    name: "Logeshwari N",
    position: "Marketing Team Member",
    team: "Marketing Team",
    domain: "Biotech - 2nd Year",
    image: "/teams/marketing/LOGESHWARI N.webp",
    linkedin: "https://www.linkedin.com/in/logeshwari-n-1ab032327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0388@svce.ac.in",
    instagram: "blue_.moonx_",
    phone: "9360737534",
    github: "",
  },
  {
    id: 30,
    name: "Bharathraj R",
    position: "Marketing Executive",
    team: "Marketing Team",
    domain: "ECE - 3rd Year",
    image: "/teams/marketing/BHARATHRAJ.webp",
    linkedin: "https://www.linkedin.com/in/bharathraj-ranjith-kumar-aa5162294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023ec0327@svce.ac.in",
    instagram: "bharath_krish12",
    phone: "8148582517",
    github: "",
  },

  // Tech Team
  {
    id: 31,
    name: "Sudish M",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "CSE - 3rd Year",
    image: "/teams/web/Sudish.webp",
    linkedin: "https://in.linkedin.com/in/sudish-mohan-14a21331a",
    email: "2023cs0508@svce.ac.in",
    instagram: "_._sudish",
    phone: "9150195835",
    github: "",
  },
  {
    id: 32,
    name: "ABIJITH P",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "CSE - 3rd Year",
    image: "/teams/web/Abijith.webp",
    linkedin: "https://www.linkedin.com/in/abijith-prashanth-064206321",
    email: "abijithmark095@gmail.com",
    instagram: "0__abi__1",
    phone: "6374997429",
    github: "",
  },
  {
    id: 33,
    name: "K Buvaneswaran",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "ECE - 2nd Year",
    image: "/teams/web/bhuvaneswaran.webp",
    linkedin: "https://www.linkedin.com/in/k-buvaneswaran-ece",
    email: "2024ec0673@svce.ac.in",
    instagram: "_buvi_2006",
    phone: "9380867566",
    github: "",
  },
  {
    id: 34,
    name: "Divya Bharathi R",
    position: "Tech Team Member",
    team: "Tech Team",
    domain: "CSE - 3rd Year",
    image: "/teams/web/DIVYA BHARATHI.webp",
    linkedin: "https://in.linkedin.com/in/divya-bharathi-r-71b41b321",
    email: "2023CS0098@SVCE.AC.IN",
    instagram: "divya_bharathi_18",
    phone: "9840658454",
    github: "",
  },

  // Content Team
  {
    id: 35,
    name: "Irfanaa Parveen M",
    position: "Content Team Member",
    team: "Content Team",
    domain: "ECE - 2nd Year",
    image: "/teams/content/IRFANAA PARVEEN.webp",
    linkedin: "https://www.linkedin.com/in/irfanaa-parveen-786106318",
    email: "2024ec0149@svce.ac.in",
    instagram: "",
    phone: "9047871059",
    github: "",
  },
  {
    id: 36,
    name: "Haritha S V",
    position: "Content Team Member",
    team: "Content Team",
    domain: "CSE - 3rd Year",
    image: "/teams/content/HARITHA.webp",
    linkedin: "https://www.linkedin.com/in/haritha-s-v-93896b388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023cs0438@svce.ac.in",
    instagram: "harrithaaaaa",
    phone: "9344096900",
    github: "",
  },
  {
    id: 47,
    name: "Jefina Giftlin J",
    position: "Content Team Member",
    team: "Content Team",
    domain: "Biotech - 2nd Year",
    image: "/teams/content/JEFINA.webp",
    linkedin: "https://www.linkedin.com/in/jefina-giftlin-j-b1b696326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024bt0694@svce.ac.in",
    instagram: "https://www.instagram.com/jefina_2808?igsh=MXZpdmNjcmUxc2xoaQ==",
    phone: "7200285674",
    github: "https://github.com/Jefina08",
  },

  // Design Team
  {
    id: 37,
    name: "THOUFIKUR RAHAMAN Y",
    position: "Design Team Member",
    team: "Design Team",
    domain: "EEE - 2nd Year",
    image: "/teams/design/THOUFIKUR RAHAMAN.webp",
    linkedin: "https://www.linkedin.com/in/thoufikur-rahaman-y-9a66a0388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "thoufikurrahaman@gmail.com",
    instagram: "itx_thoufik_107",
    phone: "8098889409",
    github: "",
  },
  {
    id: 38,
    name: "Yogendra",
    position: "Design Team Member",
    team: "Design Team",
    domain: "Mechanical - 2nd Year",
    image: "/teams/design/YOGENDRA.webp",
    linkedin: "https://www.linkedin.com/in/yogendra-b19ba032b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "yogendraasky@gmail.com",
    instagram: "syncdesign2025",
    phone: "8838773569",
    github: "",
  },
  {
    id: 39,
    name: "PRATHIBA M S K",
    position: "Design Team Member",
    team: "Design Team",
    domain: "ECE - 2nd Year",
    image: "/teams/design/PRATHIBA.webp",
    linkedin: "https://www.linkedin.com/in/m-s-k-prathiba-608588329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ec0664@svce.ac.in",
    instagram: "prathi_075",
    phone: "6374977382",
    github: "",
  },
  {
    id: 40,
    name: "Seyed Mohamed",
    position: "Design Team Member",
    team: "Design Team",
    domain: "Mechanical and Automation - 3rd Year",
    image: "/teams/design/SEYED MOHAMED .webp",
    linkedin: "https://www.linkedin.com/in/seyed-mohamed-0a4172315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023mn0363@svce.ac.in",
    instagram: "s_e_y_e_d_07",
    phone: "7871499588",
    github: "",
  },
  {
    id: 41,
    name: "Vaishali V",
    position: "Design Team Member",
    team: "Design Team",
    domain: "CSE - 2nd Year",
    image: "/teams/design/VAISHALI .webp",
    linkedin: "https://www.linkedin.com/in/vaishali-v",
    email: "2024cs0537@svce.ac.in",
    instagram: "Vaish____1018",
    phone: "6379003163",
    github: "",
  },
  {
    id: 42,
    name: "Sri Hari Roshan N",
    position: "Design Team Member",
    team: "Design Team",
    domain: "CSE - 2nd Year",
    image: "/teams/design/SRI HARI ROSHAN.webp",
    linkedin: "https://www.linkedin.com/in/sri-hari-roshan-n-cse-9741a8328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024cs0492@svce.ac.in",
    instagram: "r_3_o_s_h_1_a_n_7",
    phone: "9025130344",
    github: "",
  },

  // Community Managers
  {
    id: 43,
    name: "Hariis P",
    position: "Community Manager",
    team: "Community Managers",
    domain: "CSE - 3rd Year",
    image: "/teams/community/HARIIS P.webp",
    linkedin: "https://in.linkedin.com/in/hariis-p-aa7759374",
    email: "2023cs0127@svce.ac.in",
    instagram: "",
    phone: "6374593242",
    github: "",
  },
  {
    id: 44,
    name: "Kamalina K",
    position: "Community Manager",
    team: "Community Managers",
    domain: "ECE - 2nd Year",
    image: "/teams/community/KAMALINA.webp",
    linkedin: "https://www.linkedin.com/in/kamalina-k-ece-14a39435a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ec0448@svce.ac.in",
    instagram: "yosantehe",
    phone: "8838814898",
    github: "",
  },
  {
    id: 45,
    name: "CHALAKESH S K",
    position: "Community Manager",
    team: "Community Managers",
    domain: "Chemical engineering - 2nd Year",
    image: "/teams/community/CHALAKESH.webp",
    linkedin: "https://www.linkedin.com/in/chalakesh-s-k-6261bb32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2024ch0915@svce.ac.in",
    instagram: "chalakesh_.sk",
    phone: "6385251225",
    github: "",
  },
  {
    id: 46,
    name: "Sanjana Madankumar",
    position: "Community/LinkedIn Manager",
    team: "Community Managers",
    domain: "IT - 3rd Year",
    image: "/teams/community/Sanjana Madankumar.webp",
    linkedin: "https://www.linkedin.com/in/sanjana-madankumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "2023it0765@svce.ac.in",
    instagram: "sanjanamadankumar",
    phone: "9176638977",
    github: "",
  },
  {
    id: 48,
    name: "Madhav",
    position: "Community Manager",
    team: "Community Managers",
    domain: "EEE - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "",
    email: "",
    instagram: "",
    phone: "",
    github: "",
  },
]

const groupedTeamMembers = teamMembers.reduce(
  (acc, member) => {
    if (!acc[member.team]) {
      acc[member.team] = []
    }
    acc[member.team].push(member)
    return acc
  },
  {} as Record<string, TeamMember[]>,
)

function TeamMemberCard({ member, isFlipped, onFlip }: { member: TeamMember; isFlipped: boolean; onFlip: () => void }) {
  const cardVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  }

  return (
    <div className="aspect-square w-full [perspective:1000px] relative cursor-pointer" onClick={onFlip}>
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        variants={cardVariants}
        initial="unflipped"
        animate={isFlipped ? "flipped" : "unflipped"}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
            <div className="aspect-square relative">
              <Image 
                src={member.image || "/placeholder.svg"} 
                alt={member.name} 
                fill 
                className={`object-cover ${member.name === "Dr.S.Ilaiyavel" || member.name === "V.senthill velan" || member.name === "N.Nitish" || member.name === "VIKAASH B G" || member.name === "Sankara Narayanan S" || member.name === "Divya Shree M" || member.name === "Baarath Arumugaraja" || member.name === "THARUN S" || member.name === "Sri Bharathi R" || member.name === "Yogavarthanee R" || member.name === "K Buvaneswaran" || member.name === "ABIJITH P" || member.name === "Bhargavi TR" || member.name === "Dimple Kurugunda" || member.name === "Yogendra" || member.name === "THOUFIKUR RAHAMAN Y" || member.name === "Vaishali V" || member.name === "Sanjana Madankumar" ? "object-top" : ""}`}
                style={member.name === "Dr.S.Ilaiyavel" || member.name === "V.senthill velan" || member.name === "N.Nitish" || member.name === "VIKAASH B G" || member.name === "Sankara Narayanan S" || member.name === "Divya Shree M" || member.name === "Baarath Arumugaraja" || member.name === "THARUN S" || member.name === "Sri Bharathi R" || member.name === "Yogavarthanee R" || member.name === "K Buvaneswaran" || member.name === "ABIJITH P" || member.name === "Bhargavi TR" || member.name === "Dimple Kurugunda" || member.name === "Yogendra" || member.name === "THOUFIKUR RAHAMAN Y" || member.name === "Vaishali V" || member.name === "Sanjana Madankumar" ? { objectPosition: "center 30%" } : {}}
              />
            </div>
            <div className="p-3 sm:p-4 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-base sm:text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">{member.position}</p>
              <span className="inline-block px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                {member.domain}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-[#0b1b34] text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center justify-center p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-center">{member.name}</h3>
            <p className="text-brand-primary mb-3 text-center text-sm sm:text-base">{member.position}</p>
            <span className="inline-block mb-4 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
              {member.domain}
            </span>
            <div className="flex gap-3 sm:gap-4 mt-2 flex-wrap justify-center">
              <Link 
                href={member.linkedin || "#"} 
                target={member.linkedin ? "_blank" : "_self"} 
                className={`transition-colors p-1 ${member.linkedin ? "hover:text-brand-primary" : "text-gray-500 cursor-not-allowed"}`} 
                title={member.linkedin ? "LinkedIn" : "LinkedIn - Not available"}
                onClick={!member.linkedin ? (e) => e.preventDefault() : undefined}
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link 
                href={member.email ? `mailto:${member.email}` : "#"} 
                target={member.email ? "_self" : "_self"} 
                className={`transition-colors p-1 ${member.email ? "hover:text-brand-primary" : "text-gray-500 cursor-not-allowed"}`} 
                title={member.email ? `Email: ${member.email}` : "Email - Not available"}
                onClick={!member.email ? (e) => e.preventDefault() : undefined}
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link 
                href={member.instagram ? `https://instagram.com/${member.instagram.replace('@', '')}` : "#"} 
                target={member.instagram ? "_blank" : "_self"} 
                className={`transition-colors p-1 ${member.instagram ? "hover:text-brand-primary" : "text-gray-500 cursor-not-allowed"}`} 
                title={member.instagram ? "Instagram" : "Instagram - Not available"}
                onClick={!member.instagram ? (e) => e.preventDefault() : undefined}
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link 
                href={member.phone ? `tel:${member.phone}` : "#"} 
                target={member.phone ? "_self" : "_self"} 
                className={`transition-colors p-1 ${member.phone ? "hover:text-brand-primary" : "text-gray-500 cursor-not-allowed"}`} 
                title={member.phone ? "Phone" : "Phone - Not available"}
                onClick={!member.phone ? (e) => e.preventDefault() : undefined}
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link 
                href={member.github || "#"} 
                target={member.github ? "_blank" : "_self"} 
                className={`transition-colors p-1 ${member.github ? "hover:text-brand-primary" : "text-gray-500 cursor-not-allowed"}`} 
                title={member.github ? "GitHub" : "GitHub - Not available"}
                onClick={!member.github ? (e) => e.preventDefault() : undefined}
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function TeamPage() {
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  const handleCardFlip = (memberId: number) => {
    setFlippedCardId((prevId) => (prevId === memberId ? null : memberId))
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pageRef.current && !pageRef.current.contains(event.target as Node)) {
        setFlippedCardId(null)
      }
    }
    function handleTouchOutside(event: TouchEvent) {
      if (pageRef.current && !pageRef.current.contains(event.target as Node)) {
        setFlippedCardId(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleTouchOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleTouchOutside)
    }
  }, [pageRef])

  return (
    <div
      className="min-h-screen relative overflow-hidden mt-24"
      style={{
        background: "radial-gradient(circle at 50% 40%, #23255d 0%, #181e36 100%)"
      }}
      onClick={() => setFlippedCardId(null)}
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-hero relative z-20 py-12 sm:py-16 md:py-20"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.1),transparent_35%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-40">
          <AnimatedHeading className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl">Our Team</AnimatedHeading>
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
              <span className="text-white">E-cell</span>{" "}
              <span className="text-blue-300">Members</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 px-2">
              Passionate students driving innovation and entrepreneurship
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-brand-secondary px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Meet the passionate individuals behind E-cell SVCE dedicated to fostering entrepreneurship.
          </motion.p>
        </div>
      </motion.section>

      <section className="page-content py-8 sm:py-12" ref={pageRef}>
        <div className="container mx-auto px-4 sm:px-6">
          {Object.entries(groupedTeamMembers).map(([team, members]) => (
            <div key={team} className="mb-12 sm:mb-16">
              <AnimatedHeading className="text-brand-primary text-2xl sm:text-3xl mb-8 sm:mb-12 text-center px-2">{team}</AnimatedHeading>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                {members.map((member) => (
                  <div key={member.id} onClick={(e) => e.stopPropagation()} className="transform transition-transform duration-200 hover:scale-105">
                    <TeamMemberCard
                      member={member}
                      isFlipped={flippedCardId === member.id}
                      onFlip={() => handleCardFlip(member.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="block sm:hidden mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">Tap cards to flip and learn more</p>
            <div className="w-8 h-1 bg-gray-300 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

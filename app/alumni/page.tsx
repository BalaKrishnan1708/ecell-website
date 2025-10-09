"use client"

import Image from "next/image"
import { useState } from "react"

type Alumni = {
  id: number
  name: string
  position: string
  company: string
  period: string
  department?: string
  image?: string
}

const alumni: Alumni[] = [
  { id: 1, name: "B Alagu Selvan", position: "CEO", company: "ChennaiBizz", period: "1988 – 1992", department: "CSE" },
  { id: 2, name: "T. V. Sivakumar", position: "CEO", company: "Ambalsoft InfoTech", period: "1988 – 1992", department: "CSE" },
  { id: 3, name: "Dr. Mallik Mahalingam", position: "Founder", company: "Springpath", period: "1987 - 1991", department: "CSE" },
  { id: 4, name: "Mr. Jigar Doshi", position: "Founder", company: "Cheeni Labs", period: "1989 – 1993", department: "CSE" },
  { id: 5, name: "S. Prashanth", position: "Founder", company: "Akmin Technologies", period: "1990 – 1994", department: "CSE" },
  { id: 6, name: "Mr. Jonathan Siddharth", position: "CEO", company: "Turing.com", period: "2001 – 2005", department: "CSE" },
  { id: 7, name: "G. Srikrishnan", position: "CEO", company: "Rocketlane", period: "2001 -2005", department: "CSE" },
  { id: 8, name: "T. Srinivasan", position: "Director", company: "Glosys Technology", period: "2002 -2004", department: "CSE" },
  { id: 9, name: "Dr. Doreen Hephzibah Miriam", position: "Director", company: "CIRF", period: "2004 -2006", department: "CSE" },
  { id: 10, name: "Mr. Gautham Shankar", position: "Co-Founder", company: "SmokyBeaker Labs", period: "2008 –2012", department: "CSE" },
  { id: 11, name: "Mr. Praveen Sekar", position: "Vice President", company: "Torus Innovations", period: "2009 – 2013", department: "CSE" },
  { id: 12, name: "Ms. Shwetha Lakshmanan", position: "Founder", company: "Stitch & Turn", period: "2010 - 2014", department: "CSE" },
  { id: 13, name: "Mr. Premdas VGP", position: "CEO", company: "VGP Universal Kingdom", period: "2003-2007", department: "EEE" },
  { id: 14, name: "Mr.Karunakaran", position: "CEO", company: "Prodigy Group of Companies", period: "1987-1991", department: "ECE" },
  { id: 15, name: "Mr.Arun Bhikshesvaran", position: "CEO", company: "Radisys Corporation", period: "1987-1991", department: "ECE" },
  { id: 16, name: "Mr.Pravin Shekar", position: "Interim CEO", company: "ESOMAR", period: "1992-1996", department: "ECE" },
  { id: 17, name: "Mr.Udeep.B", position: "CEO", company: "Mayajaal Entertainment Ltd", period: "2010-2014", department: "ECE" },
  { id: 18, name: "Mr.Ramanathan Srinivasan", position: "Director", company: "Trontion E Automotive Ltd", period: "1991-1995", department: "ECE" },
  { id: 19, name: "Ms.Sowmya Mahadevan", position: "COO", company: "Exeter Premedia Services", period: "1995-1999", department: "ECE" },
  { id: 20, name: "Mr.Pradeep A", position: "MD", company: "Sekaran Foundations", period: "2012-2016", department: "CVE" },
  { id: 21, name: "Mr.Moorthy Prakash", position: "Founder", company: "Shree Narayana Environ", period: "1991-1995", department: "ECE" },
  { id: 22, name: "Mr.Satish Vijayan", position: "Founder", company: "Nexdha Fintech", period: "1988-1992", department: "ECE" },
  { id: 23, name: "Mr.A.S.Praveen Raj", position: "MD", company: "Blend Interiors", period: "2014-2018", department: "CVE" },
  { id: 24, name: "Mr.Vineeth Vijayaraghavan", position: "Director", company: "Solarillion Foundation", period: "1994-1998", department: "ECE" },
  { id: 25, name: "Ms.Manasa Pillai", position: "Director", company: "Shrine Velankanni School", period: "1992-1996", department: "ECE" },
  { id: 26, name: "Ms.Pavithra Srinivasan", position: "Co-founder", company: "Galvenize test prep", period: "1996-2000", department: "ECE" },
  { id: 27, name: "Mr.Siddharta Govindaraj", position: "Founder", company: "Silver Stripe Software", period: "1997-2001", department: "ECE" },
  { id: 28, name: "Ms.Asha Yoganandan", position: "Founder", company: "Asha Ink", period: "1997-2001", department: "ECE" },
  { id: 29, name: "Mr.Sriharsha C", position: "MD", company: "Sree Constructions", period: "2012-2016", department: "CVE" },
  { id: 30, name: "Mr.Ratan Vishwanath Subramaniyan", position: "Manager", company: "Fibertek Commn Ltd", period: "2009-2013", department: "ECE" },
  { id: 31, name: "Mr.Kishore I", position: "Proprietor", company: "IK Infratech Solutions", period: "2011-2015", department: "CVE" },
  { id: 32, name: "Mr.B Sudharsan", position: "Head - Business", company: "ABS Consults", period: "2015-2019", department: "CVE" },
  { id: 33, name: "Mr. Rajkumar. D", position: "MD", company: "Solo Paints Pvt Ltd", period: "2010-2014", department: "CHE" },
  { id: 34, name: "Mr.Vasanth Immanuel", position: "CEO", company: "FR8", period: "1999-2003", department: "CHE" },
  { id: 35, name: "Mr. Himakiran Anugula", position: "Director", company: "NFNV Pvt.Ltd", period: "1995-1999", department: "CHE" },
  { id: 36, name: "Mr.Varadharajan Pandian", position: "CEO", company: "Acelabs Pvt. Ltd", period: "1994-1999", department: "CHE" },
  { id: 37, name: "Mr. Thandava Moorthy S", position: "Founder", company: "United Techno Solutions", period: "1995-1999", department: "CHE" },
  { id: 38, name: "Mr. Mohamed Hussain K", position: "Co- Founder", company: "THE ALIEN", period: "2013-2017", department: "CHE" },
  { id: 39, name: "Mr.Kavin K", position: "Co- Founder", company: "THE ALIEN", period: "2013-2017", department: "CHE" },
  { id: 40, name: "Mr. Vignesh Ganesan", position: "Co-founder", company: "Press 9 Solutions", period: "1998-2002", department: "IT" },
  { id: 41, name: "Ms Pallavi Aravind Narasimhan", position: "Co-Founder & CEO", company: "IMPRZD", period: "1996-2000", department: "IT" },
  { id: 42, name: "Mr. Venu madhav Chennupati", position: "Founder", company: "Pegase Health Systems", period: "1996-2000", department: "IT" },
  { id: 43, name: "Mr. Praveen J", position: "Director", company: "Propeltree", period: "2004-2008", department: "IT" },
  { id: 44, name: "Ms. Malini S", position: "VP", company: "Tyche payment Solutions", period: "2008-2012", department: "IT" },
  { id: 45, name: "Mr. Saravanan Ramakrishnan", position: "Managing Director", company: "Kellywille Business Solutions Pvt Ltd", period: "2007-11", department: "IT" },
  { id: 46, name: "Dr.Ramya S Moorthy", position: "Founder & Director", company: "Nimaya Robotics", period: "2007-2011", department: "EEE" },
  { id: 47, name: "Akash Jain", position: "Founder & Chief Executive Office", company: "MuPhile Labs", period: "2014-2018", department: "EEE" },
  { id: 48, name: "Balaji Kulothungan", position: "Co-Founder & CEO", company: "Galore Networks Private Limited", period: "1994-1998", department: "EEE" },
  { id: 49, name: "Mr.ARAVINDANKARUPPIAH K", position: "Managing Director", company: "M. Karuppiah Sons", period: "2017-2021", department: "CVE" },
  { id: 50, name: "Mr.HARITH BHARADWAAJ G", position: "Managing Partner", company: "Sri Chakra Builders & Consultants", period: "2017-2021", department: "CVE" },
  { id: 51, name: "Mr.SHARAFATH ALI J", position: "Proprietor", company: "J S Construction Pvt. Ltd", period: "2016-2020", department: "CVE" },
  { id: 52, name: "Ms.HARIPRIYAA A", position: "Managing Director", company: "Kans Builders Private Limited", period: "2015-2019", department: "CVE" },
  { id: 53, name: "Mr.SRIKRISHNA L", position: "Partner", company: "P S Constructions", period: "2015-2019", department: "CVE" },
  { id: 54, name: "Mr.CHETHANNARAYANAN S", position: "CEO", company: "SRS Design & Construction", period: "2015-2019", department: "CVE" },
  { id: 55, name: "Mr.SANTHOSH G", position: "Proprietor", company: "Santhosh Construction", period: "2015-2019", department: "CVE" },
  { id: 56, name: "Mr.Aadhithya Rajan S", position: "Founder", company: "The Colour Space", period: "2012-2016", department: "CVE" },
  { id: 57, name: "Mr.Karthick Pandiyan S", position: "MD", company: "Karthick Housing Pvt. Ltd", period: "2014-2018", department: "CVE" },
  { id: 58, name: "Mr.JAYAHARISHKUMAR S", position: "Proprietor", company: "JHK Builders", period: "2013-2017", department: "CVE" },
  { id: 59, name: "Mr.Varun Kumar S", position: "MD", company: "Eee Vee Homes", period: "2013-2017", department: "CVE" },
  { id: 60, name: "Mrs S.Vasuki Vinothini", position: "Chairman & Managing Director", company: "Kurukshetra IAS Academy", period: "2008-2012", department: "INT" },
  { id: 61, name: "MR.ANANTH NARAYANAN", position: "CO-FOUNDER & CEO", company: "MEDLIFE", period: "1991-1995", department: "MECH" },
  { id: 62, name: "MR.ISRAEL JEBSINGH IAS", position: "DIRECTOR", company: "OFFICIERS IAS ACADEMY", period: "1992-1996", department: "MECH" },
  { id: 63, name: "MR.SANJEEV S VAKIL", position: "CEO", company: "Hindustan Institute of Maritime Training (HIMT)", period: "1985-1990", department: "MECH" },
  { id: 64, name: "MR.VINAYAK R ESHWAR", position: "DIRECTOR", company: "ORIENT IMPEX", period: "2008-2012", department: "MECH" },
  { id: 65, name: "MR.PALANIAPPAN THIYAGARAJAN", position: "DIRECTOR", company: "IYAPPAN ENGINEERING INDUSTRIES PVT LTD", period: "1995-1999", department: "MECH" },
  { id: 66, name: "Ambareesh Ramakrishnan", position: "Founder & CEO", company: "ANTPOD", period: "2020-2023", department: "Automobile" },
  { id: 67, name: "Shameem Javed A", position: "Proprietor", company: "Alternative Soils", period: "2017-Present", department: "Biotechnology" },
  { id: 68, name: "Harshita Gupta", position: "CEO & Director", company: "Morulaa HealthTech Pvt Ltd", period: "2012-Present", department: "Biotechnology" },
  { id: 69, name: "Saranya Mohan", position: "Proprietor, Innovative health care Pvt Ltd", company: "", period: "", department: "" },
  { id: 70, name: "Balaji E", position: "Founder & Director", company: "Seagrass Tech Private Limited", period: "2016-present", department: "biotechnology" },
  { id: 71, name: "Vyas Dhamodaran", position: "CEO", company: "SYNORBS Biosolutions Pvt Ltd", period: "2016-2019", department: "Biotechnology" },
  { id: 72, name: "Kabilan K M", position: "Director", company: "ZOVI Food Industries Pvt Ltd", period: "2020", department: "" },
]

// Explicit image overrides for known filenames in public/ALumini profile
const imageOverrides: Record<string, string> = {
  "B Alagu Selvan": "/ALumini profile/ALAGU-SELVAN.webp",
  "T. V. Sivakumar": "/ALumini profile/sivakumar-entrepreneur.webp",
  "Dr. Mallik Mahalingam": "/ALumini profile/MALIK-MAHALINGAM-ENTRPRE.webp",
  "Mr. Jigar Doshi": "/ALumini profile/JIGAR-JOSHI-ENTREPR.webp",
  "S. Prashanth": "/ALumini profile/Prashanth S-ENTREPRE.webp",
  "Mr. Jonathan Siddharth": "/ALumini profile/jonathan-entrepr.webp",
  "G. Srikrishnan": "/ALumini profile/Srikrishnan G-entrepre.webp",
  "T. Srinivasan": "/ALumini profile/t-srinivasan-entrpre.webp",
  "Dr. Doreen Hephzibah Miriam": "/ALumini profile/doreen-entrepre.webp",
  "Mr. Gautham Shankar": "/ALumini profile/Gautham Shankar-entrepre.webp",
  "Mr. Praveen Sekar": "/ALumini profile/Praveen Sekar-entrepre.webp",
  "Ms. Shwetha Lakshmanan": "/ALumini profile/swetha-laks-entrep.webp",
  "Mr.Arun Bhikshesvaran": "/ALumini profile/Arun Bhikshesvaran.webp",
  "Mr.Karunakaran": "/ALumini profile/Karunakaran.webp",
  "Mr.Pravin Shekar": "/ALumini profile/Pravin Shekar.webp",
  "Mr.Udeep.B": "/ALumini profile/Udeep.B (1).webp",
  "Mr.Ramanathan Srinivasan": "/ALumini profile/Ramanathan Srinivasan.webp",
  "Ms.Sowmya Mahadevan": "/ALumini profile/Sowmya Mahadevan 1.webp",
  "Mr.Pradeep A": "/ALumini profile/pradeep-cve-1.webp",
  "Mr. Premdas VGP": "/ALumini profile/PREMDAS-PROMINENT-EEE.webp",
  "Mr.Moorthy Prakash": "/ALumini profile/Moorthy Prakash.webp",
  "Mr.Satish Vijayan": "/ALumini profile/Satish Vijayan.webp",
  "Mr.A.S.Praveen Raj": "/ALumini profile/Praveen raj.webp",
  "Mr.Vineeth Vijayaraghavan": "/ALumini profile/Vineeth Vijayaraghavan.webp",
  "Ms.Manasa Pillai": "/ALumini profile/Manasa Pillai.webp",
  "Ms.Pavithra Srinivasan": "/ALumini profile/Pavithra Srinivasan.webp",
  "Mr.Siddharta Govindaraj": "/ALumini profile/Siddharta Govindaraj.webp",
  "Ms.Asha Yoganandan": "/ALumini profile/Asha.webp",
  "Mr.Sriharsha C": "/ALumini profile/Sriharsha.webp",
  "Mr.Ratan Vishwanath Subramaniyan": "/ALumini profile/Ratan Vishwanath Subramaniyan.webp",
  "Mr.Kishore I": "/ALumini profile/Kishore.webp",
  "Mr.B Sudharsan": "/ALumini profile/sudharsan.webp",
  "Mr. Rajkumar. D": "/ALumini profile/RAJKUMAR-CHE.webp",
  "Mr.Vasanth Immanuel": "/ALumini profile/VASANTH -CHE.webp",
  "Mr. Himakiran Anugula": "/ALumini profile/HIMAKIRAN-CHE 1.webp",
  "Mr.Varadharajan Pandian": "/ALumini profile/VARADHARAJAN-CHE.webp",
  "Mr. Thandava Moorthy S": "/ALumini profile/THANDVA MOORTHY -CHE.webp",
  "Mr. Mohamed Hussain K": "/ALumini profile/MOHAMED HOSSAIN-CHE.webp",
  "Mr.Kavin K": "/ALumini profile/KAVIN-CHE.webp",
  "Mr. Vignesh Ganesan": "/ALumini profile/vignesh1.webp",
  "Ms Pallavi Aravind Narasimhan": "/ALumini profile/pallavi.webp",
  "Mr. Venu madhav Chennupati": "/ALumini profile/venu.webp",
  "Mr. Praveen J": "/ALumini profile/Praveen Sekar-entrepre.webp",
  "Ms. Malini S": "/ALumini profile/malini.webp",
  "Dr.Ramya S Moorthy": "/ALumini profile/Ramya-s-moorthy_11zon.webp",
  "Mr. Saravanan Ramakrishnan": "/ALumini profile/saravanan.webp",
  "Akash Jain": "/ALumini profile/akash jain.webp",
  "Balaji Kulothungan": "/ALumini profile/Balajikolochungan.webp",
  "Balaji E": "/ALumini profile/Balaji.webp",
  "Ambareesh Ramakrishnan": "/ALumini profile/Ambareesh Ramakrishnan 2012-2016 batch.webp",
  "Harshita Gupta": "/ALumini profile/Harshitha.webp",
  "Shameem Javed A": "/ALumini profile/shameem.webp",
  "Kabilan K M": "/ALumini profile/kabi.webp",
  "Vyas Dhamodaran": "/ALumini profile/Vyas.webp",
  "MR.ANANTH NARAYANAN": "/ALumini profile/ANAND NARAYANAN.webp",
  "MR.ISRAEL JEBSINGH IAS": "/ALumini profile/Aron Israsel Jebasingh.webp",
  "MR.SANJEEV S VAKIL": "/ALumini profile/SANJIV VAKIL.webp",
  "MR.VINAYAK R ESHWAR": "/ALumini profile/Vinayak Easwar.webp",
  "Mrs S.Vasuki Vinothini": "/ALumini profile/Mrs. S. Vasuki Vinothini.webp",
  "MR.PALANIAPPAN THIYAGARAJAN": "/ALumini profile/PANALIAPPAN.webp",
  "Mr.SRIKRISHNA L": "/ALumini profile/CVE_SRIKRISHNA L 15-19.webp",
  "Mr.ARAVINDANKARUPPIAH K": "/ALumini profile/Aravidhan Karu 17-21.webp",
  "Mr.HARITH BHARADWAAJ G": "/ALumini profile/CVE_HARITH BHARADWAAJ G 17-21.webp",
  "Mr.SHARAFATH ALI J": "/ALumini profile/CVE_Sharafath Ali 16-20.webp",
  "Ms.HARIPRIYAA A": "/ALumini profile/CVE_Haripriya A 15-19.webp",
  "Mr.CHETHANNARAYANAN S": "/ALumini profile/CVE_CHETHANNARAYANAN  S 15-19.webp",
  "Mr.SANTHOSH G": "/ALumini profile/CVE_Santhosh G 15-19 1.webp",
  "Mr.Aadhithya Rajan S": "/ALumini profile/CVE_Aadhithya Rajan 12-16.webp",
  "Mr.Karthick Pandiyan S": "/ALumini profile/CVE_Karthick Pandiyan S 14-18.webp",
  "Mr.JAYAHARISHKUMAR S": "/ALumini profile/CVE_JAYAHARISHKUMAR S 13-17.webp",
  "Mr.Varun Kumar S": "/ALumini profile/CVE_Varun Kumar S 13-17.webp",
  "Saranya Mohan": "/ALumini profile/pras.webp",
}

// Build a normalized lookup so slight name differences still match overrides
function normalizeNameForOverride(input: string): string {
  return removeTitles(input)
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

const normalizedOverrideMap: Record<string, string> = Object.fromEntries(
  Object.entries(imageOverrides).map(([k, v]) => [normalizeNameForOverride(k), v])
)

export default function AlumniPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5efe6] text-stone-900">
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#5a3825]">Entrepreneurs Alumni</h1>
          <p className="text-stone-600">Placeholders for all entries. Share photos/text to fill in.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {alumni.map((a) => (
              <AlumniCard key={a.id} data={{ ...a, image: imageOverrides[a.name] || a.image }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function AlumniCard({ data }: { data: Alumni }) {
  const baseName = data.name
  const noTitle = removeTitles(baseName)
  const tokens = noTitle.split(/\s+/).filter(Boolean)
  const first = tokens[0] || ""
  const last = tokens[tokens.length - 1] || ""
  const firstLast = [first, last].filter(Boolean).join(" ")
  const initials = tokens.map((t) => t[0]).join("")
  const folders = ["ALumini profile", "alumini profile"]
  const names = [
    baseName,
    noTitle,
    firstLast,
    first,
    last,
    initials,
    slugify(baseName),
    slugify(noTitle),
    slugify(firstLast),
    baseName.replace(/\./g, ""),
    noTitle.replace(/\./g, ""),
  ]
  const exts = ["webp", "jpg", "jpeg", "png"]
  const sources: string[] = []
  // explicit image path or normalized override comes first if provided
  const overrideSrc = normalizedOverrideMap[normalizeNameForOverride(baseName)] || data.image
  if (overrideSrc) {
    sources.push(overrideSrc)
  }
  for (const f of folders) {
    const encF = encodeURIComponent(f)
    for (const n of names) {
      for (const e of exts) {
        sources.push(`/${encF}/${n}.${e}`)
      }
    }
  }
  // final guaranteed placeholder
  sources.push("/ALumini%20profile/noprofile.webp")
  const [idx, setIdx] = useState(0)
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null)
  const src = sources[idx]

  return (
    <div className="bg-white rounded-xl shadow-md border border-amber-200 overflow-hidden">
      <div className="px-4 py-6 flex flex-col items-center text-center">
        <div className="h-28 w-28 rounded-full overflow-hidden bg-stone-300 flex items-center justify-center mb-3">
          {idx < sources.length ? (
            <Image
              src={src}
              alt={data.name}
              width={112}
              height={112}
              className="h-full w-full object-cover"
              onError={() => setIdx((i) => i + 1)}
              onLoadingComplete={() => !resolvedSrc && setResolvedSrc(src)}
              priority={false}
            />
          ) : (
            <span className="text-xl font-semibold text-stone-600">
              {data.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-[#7a4930]">{data.name}</h3>
        <p className="text-sm text-stone-700 mt-1">{data.position}</p>
        <p className="text-xs text-stone-500">{data.company}</p>
        {(data.period || data.department) && (
          <p className="mt-2 text-xs text-stone-500">{[data.period, data.department].filter(Boolean).join(" | ")}</p>
        )}
      </div>
    </div>
  )
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

function removeTitles(input: string): string {
  return input.replace(/^(mr\.|mrs\.|ms\.|dr\.|prof\.)\s+/i, "").trim()
}



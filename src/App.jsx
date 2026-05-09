import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import smartBrainLogo from './assets/smartbrain-logo.png';
import {
  GraduationCap,
  BookOpen,
  Presentation,
  Laptop,
  School,
  Plane,
  Mail,
  Phone,
  Globe2,
  ShieldCheck,
  Users,
  CalendarCheck,
  CheckCircle2,
  Menu,
  X,
  MessageCircle,
  Send,
  Award,
  Lock,
  ClipboardList,
  ArrowRight,
  Sparkles,
  FileCheck2,
  HelpCircle,
  Download,
  CreditCard,
  Scale,
  UserCheck,
  BriefcaseBusiness,
  BarChart3,
  PenLine,
  ChevronDown,
  MapPin,
  Clock3,
  Quote,
  Star,
  Target,
  Layers,
  BadgeCheck,
} from 'lucide-react';

const business = {
  name: 'SmartBrain Academic & Research Consultancy',
  shortName: 'SmartBrain',
  tagline: 'Think Smarter. Research Better. Succeed Stronger.',
  email: 'smartbrainconsultancyuk@gmail.com',
  phone1: '+44 7918 093047',
  phone2: '+44 7810 023498',
  whatsapp: '447918093047',
  location: 'United Kingdom / Online Support Available',
};

const academicLevelOptions = [
  'Foundation / Pre-Masters',
  'Undergraduate',
  'Postgraduate Diploma',
  'MSc / MA / MBA',
  'PhD / Doctoral',
  'Professional Document',
  'School Application',
  'International Student Application',
  'Visa Document Preparation',
  'Other',
];

const paymentLinks = [
  {
    name: 'Starter Review',
    price: '£25',
    description:
      'For short documents, proofreading, formatting checks and quick academic or professional review.',
    url: 'https://buy.stripe.com/3cI4gAgub9nseSDbyx4ZG05',
  },
  {
    name: 'Academic Support Deposit',
    price: '£60',
    description:
      'For assignment support, coursework improvement, referencing guidance and presentation/report review.',
    url: 'https://buy.stripe.com/fZu00k2DldDIfWHfON4ZG04',
    featured: true,
  },
  {
    name: 'Application Support',
    price: '£40',
    description:
      'For school applications, personal statements, academic CVs and document checklist preparation.',
    url: 'https://buy.stripe.com/fZu6oI0vdarwaCn7ih4ZG03',
  },
  {
    name: 'Custom Support Deposit',
    price: '£50',
    description:
      'For custom academic, research, project, data, editing, presentation or document support after consultation.',
    url: 'https://buy.stripe.com/6oU28sa5N7fkaCn8ml4ZG02',
  },
  {
    name: 'Premium Support Deposit',
    price: '£100',
    description:
      'For extended academic, research, dissertation, project mentoring or application support arrangements.',
    url: 'https://buy.stripe.com/8x25kEfq72Z4eSDfON4ZG01',
  },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Payments', href: '#payments' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Policies', href: '#policies' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: 'Academic Coaching',
    shortText:
      'Support for students who need guidance with understanding academic tasks, planning work and improving confidence.',
    detailedText:
      'Our academic coaching service helps students understand assignment briefs, marking criteria, academic expectations and the best way to structure their work. This service is designed for learners who want guidance, direction and confidence while remaining responsible for their own final submission.',
    whoNeeds:
      'This is suitable for undergraduate students, postgraduate students, international students, returning learners and professionals studying part-time.',
    supportIncludes: [
      'Assignment brief explanation and task breakdown',
      'Academic structure and report planning guidance',
      'Marking rubric interpretation',
      'Study planning and deadline management',
      'Support with improving clarity, argument and flow',
      'Guidance on how to respond to feedback',
    ],
    outcome:
      'Clients leave with a clearer understanding of what the task requires, how to approach it and how to improve their work ethically.',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Research Support',
    shortText:
      'Guidance for research topics, proposals, literature reviews, methodology and dissertation planning.',
    detailedText:
      'This service supports students and researchers who need help shaping a research idea into a clear, well-structured academic project. We help clients refine their topic, align their aims and objectives, choose appropriate methods and organise their research chapters professionally.',
    whoNeeds:
      'This is ideal for MSc, undergraduate, postgraduate diploma, MBA, research proposal and dissertation students.',
    supportIncludes: [
      'Research topic refinement',
      'Aim, objectives and research question development',
      'Proposal structure guidance',
      'Literature review planning',
      'Methodology chapter support',
      'Ethics pathway and data source planning',
      'Research gap and justification development',
    ],
    outcome:
      'Clients gain a stronger research direction, clearer academic structure and better understanding of how to present a convincing research project.',
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: 'Project Mentoring',
    shortText:
      'Mentoring for IT, software, engineering, business, database and data-related academic projects.',
    detailedText:
      'SmartBrain provides project mentoring for students working on practical projects, dissertations and technical artefacts. We help clients think through system design, project scope, implementation evidence, diagrams, testing, evaluation and technical documentation.',
    whoNeeds:
      'This is suitable for IT, computing, software engineering, data analytics, project management, business systems, engineering and technical students.',
    supportIncludes: [
      'Project idea refinement and feasibility guidance',
      'System architecture and workflow planning',
      'Database and data-flow documentation support',
      'Testing and evaluation planning',
      'Screenshots and evidence organisation',
      'Technical report improvement',
      'Presentation and viva preparation support',
    ],
    outcome:
      'Clients gain a clearer project direction, stronger documentation and better confidence explaining their project decisions.',
  },
  {
    icon: <PenLine className="h-6 w-6" />,
    title: 'Editing & Referencing',
    shortText:
      'Proofreading, academic editing, formatting, referencing checks and citation guidance.',
    detailedText:
      'This service helps clients improve the quality, clarity and presentation of their written work. We review grammar, flow, academic tone, structure, formatting and referencing consistency while ensuring the client remains the author of the work.',
    whoNeeds:
      'This is useful for students, researchers, job applicants, professionals and anyone preparing formal academic or professional documents.',
    supportIncludes: [
      'Proofreading for grammar and clarity',
      'Academic tone improvement',
      'Structure and paragraph flow review',
      'Referencing consistency checks',
      'Citation style guidance',
      'Formatting and layout improvement',
      'Final submission checklist support',
    ],
    outcome:
      'Clients receive a cleaner, more professional and better-presented document while maintaining academic integrity.',
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Data Analysis Support',
    shortText:
      'Guidance with Excel, SPSS, Python, Power BI, charts, dashboards and results interpretation.',
    detailedText:
      'SmartBrain supports clients who need help understanding, organising and presenting data analysis. We can guide clients through choosing suitable tools, preparing data, creating charts, interpreting outputs and presenting results clearly.',
    whoNeeds:
      'This is suitable for students, researchers, business learners, data analytics students and project clients who need help presenting evidence.',
    supportIncludes: [
      'Excel and spreadsheet guidance',
      'SPSS output explanation',
      'Python data analysis support',
      'Power BI dashboard guidance',
      'Chart selection and explanation',
      'Results interpretation support',
      'Data cleaning and presentation advice',
    ],
    outcome:
      'Clients gain clearer data outputs, better visual presentation and stronger interpretation of results.',
  },
  {
    icon: <Presentation className="h-6 w-6" />,
    title: 'Presentation & Viva Preparation',
    shortText:
      'PowerPoint review, speaker notes, mock viva questions and confidence-building support.',
    detailedText:
      'This service helps clients prepare for academic presentations, project demonstrations, dissertation vivas and professional presentations. We help structure slides, simplify content, prepare speaker notes and anticipate possible questions.',
    whoNeeds:
      'This is ideal for students preparing for group presentations, final project vivas, dissertation defence, business pitches or academic seminars.',
    supportIncludes: [
      'PowerPoint structure review',
      'Slide simplification and improvement',
      'Speaker note preparation',
      'Mock questions and model answers',
      'Presentation flow guidance',
      'Confidence-building preparation',
      'Support with explaining individual contribution',
    ],
    outcome:
      'Clients become more prepared, confident and able to explain their work clearly and professionally.',
  },
  {
    icon: <School className="h-6 w-6" />,
    title: 'International Student Applications',
    shortText:
      'Support with course search, school applications, personal statements, CVs and application checklists.',
    detailedText:
      'SmartBrain helps international applicants organise their academic application journey. We support course search, document preparation, personal statement improvement, CV review and application readiness checks.',
    whoNeeds:
      'This service is suitable for international applicants seeking foundation, undergraduate, postgraduate, professional or further study opportunities.',
    supportIncludes: [
      'Course and institution search support',
      'Application document checklist',
      'Personal statement review',
      'Academic CV review',
      'Statement of purpose guidance',
      'Application readiness review',
      'General admission process guidance',
    ],
    outcome:
      'Clients gain a better-organised application package and improved confidence before submitting applications.',
  },
  {
    icon: <Plane className="h-6 w-6" />,
    title: 'Student Visa Document Preparation',
    shortText:
      'Administrative document organisation and checklist support based on public information only.',
    detailedText:
      'SmartBrain can support clients with organising general student visa documents, preparing checklists and understanding publicly available process information. This service is strictly administrative and does not include regulated immigration advice.',
    whoNeeds:
      'This is suitable for students who need help organising documents and understanding general preparation steps after receiving admission or CAS-related instructions.',
    supportIncludes: [
      'Document organisation support',
      'General checklist preparation',
      'Administrative readiness review',
      'Public information explanation',
      'Support with organising timelines',
      'Guidance on what to confirm with official sources',
      'No legal or immigration advice',
    ],
    outcome:
      'Clients become more organised and better prepared, while remaining responsible for official visa decisions and professional immigration advice where needed.',
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'Academic Skills Workshops',
    shortText:
      'Training-style support on academic writing, research methods, referencing and presentation skills.',
    detailedText:
      'SmartBrain offers academic skills workshops for individuals or small groups. These sessions are designed to improve long-term academic confidence, not just one document or assignment.',
    whoNeeds:
      'This is useful for students, small study groups, new international students and learners who want to strengthen their academic foundation.',
    supportIncludes: [
      'Academic writing skills',
      'Research methods basics',
      'Referencing and citation practice',
      'Presentation skills',
      'Critical thinking guidance',
      'Report structure training',
      'Study and planning techniques',
    ],
    outcome:
      'Clients develop stronger academic habits, better confidence and improved ability to manage future academic tasks.',
  },
];

const packages = [
  {
    name: 'Starter Review',
    price: 'From £25',
    bestFor: 'Short documents, proofreading, formatting and quick academic review.',
    description:
      'A light-touch review package for clients who already have a document and need a quick professional check before moving forward.',
    includes: [
      'Basic document review',
      'Formatting and layout check',
      'Short improvement comments',
      'Grammar and clarity suggestions',
      'Email or WhatsApp feedback',
    ],
    suitableFor: [
      'Short assignments',
      'Personal statements',
      'CVs',
      'Presentation slides',
      'Small report sections',
    ],
  },
  {
    name: 'Academic Support',
    price: 'From £60',
    bestFor: 'Assignments, reports, presentations and coursework improvement.',
    description:
      'A stronger support option for clients who need help improving structure, clarity, academic tone and overall presentation.',
    includes: [
      'Assignment structure guidance',
      'Content improvement advice',
      'Referencing support',
      'Presentation or report review',
      'Marking criteria alignment check',
      'Practical improvement recommendations',
    ],
    suitableFor: [
      'Coursework reports',
      'Academic presentations',
      'Portfolio sections',
      'Reflective writing',
      'Postgraduate assignments',
    ],
    featured: true,
  },
  {
    name: 'Research Premium',
    price: 'Custom Quote',
    bestFor: 'Dissertations, proposals, literature reviews and methodology chapters.',
    description:
      'A premium research support package for clients who need structured guidance across larger research documents or dissertation chapters.',
    includes: [
      'Research planning support',
      'Chapter structure guidance',
      'Literature review planning',
      'Methodology support',
      'Research gap development',
      'Final improvement review',
    ],
    suitableFor: [
      'Research proposals',
      'Dissertations',
      'Literature reviews',
      'Methodology chapters',
      'Research project planning',
    ],
  },
  {
    name: 'Project Mentoring',
    price: 'Custom Quote',
    bestFor: 'Software, IT, engineering, business, database and data projects.',
    description:
      'A structured mentoring option for practical or technical projects where clients need help explaining design, implementation, testing and evaluation.',
    includes: [
      'Project idea refinement',
      'System design support',
      'Architecture and workflow diagrams',
      'Testing plan support',
      'Technical report improvement',
      'Presentation and viva preparation',
    ],
    suitableFor: [
      'Software projects',
      'Database projects',
      'Data analytics dashboards',
      'Engineering reports',
      'Business systems projects',
    ],
  },
  {
    name: 'Application Support',
    price: 'From £40',
    bestFor: 'School applications, CVs, personal statements and document checklists.',
    description:
      'A practical support package for applicants who need help preparing a stronger and better-organised application profile.',
    includes: [
      'Personal statement support',
      'Academic CV review',
      'Application checklist',
      'Document organisation',
      'Statement of purpose guidance',
      'General application readiness review',
    ],
    suitableFor: [
      'International students',
      'Postgraduate applicants',
      'Professional programme applicants',
      'Scholarship document preparation',
      'Course application planning',
    ],
  },
  {
    name: 'Premium Support',
    price: 'Custom Quote',
    bestFor: 'Extended support across academic, research, project and application needs.',
    description:
      'A flexible premium support package for clients who need ongoing help across multiple documents, stages or deadlines.',
    includes: [
      'Priority consultation',
      'Structured support plan',
      'Multiple review stages',
      'Ongoing communication',
      'Document and presentation support',
      'Final readiness review',
    ],
    suitableFor: [
      'Dissertation support',
      'Major project support',
      'Multiple academic tasks',
      'Application plus document preparation',
      'Longer-term coaching support',
    ],
  },
];

const process = [
  {
    title: 'Submit Request',
    text: 'Use the booking form, WhatsApp or email to explain the support you need.',
    detail:
      'Clients begin by sending a clear request, including the task type, deadline, academic level, document length and the kind of support required. This allows SmartBrain to understand the scope before giving guidance or pricing.',
    icon: <CalendarCheck className="h-5 w-5" />,
  },
  {
    title: 'Consultation',
    text: 'We confirm the task, deadline, scope, price and best support option.',
    detail:
      'The consultation stage is used to clarify expectations, confirm whether the request fits SmartBrain’s ethical service boundaries and agree the most suitable package or support route.',
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    title: 'Support Delivery',
    text: 'You receive structured guidance, review, design, editing or documentation support.',
    detail:
      'Support is delivered according to the agreed scope. This may include feedback, chapter guidance, document review, academic structure planning, project documentation, presentation support or application document preparation.',
    icon: <ClipboardList className="h-5 w-5" />,
  },
  {
    title: 'Review & Finalise',
    text: 'You review the outcome and receive practical advice for final improvement.',
    detail:
      'The final stage helps clients understand what has been improved, what still requires their attention and how to prepare confidently for submission, presentation or application.',
    icon: <FileCheck2 className="h-5 w-5" />,
  },
];

const resources = [
  {
    icon: <Download className="h-5 w-5" />,
    title: 'Dissertation Planning Checklist',
    text: 'A checklist to help students organise dissertation chapters, objectives, research methods, evidence, testing and final submission stages.',
    points: [
      'Chapter-by-chapter planning',
      'Objective and evidence mapping',
      'Methodology and ethics reminders',
      'Final formatting and submission checks',
    ],
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: 'Assignment Submission Checklist',
    text: 'A practical guide for checking structure, clarity, references, formatting and marking criteria before submitting assignments.',
    points: [
      'Brief and marking criteria review',
      'Introduction, main body and conclusion check',
      'Referencing and citation review',
      'Proofreading and final document polish',
    ],
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: 'Personal Statement Checklist',
    text: 'A preparation checklist for improving motivation, achievements, programme fit, career goals and final presentation.',
    points: [
      'Opening paragraph clarity',
      'Academic and professional motivation',
      'Course and university fit',
      'Final grammar and tone review',
    ],
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: 'Viva Preparation Checklist',
    text: 'A guide to help students prepare for project explanation, methodology questions, individual contribution and evaluation discussion.',
    points: [
      'Project aim and objectives',
      'Methodology and design explanation',
      'Testing and results discussion',
      'Possible questions and confident answers',
    ],
  },
];

const faqs = [
  {
    q: 'What services does SmartBrain provide?',
    a: 'SmartBrain provides academic coaching, research support, project mentoring, proofreading and editing, referencing support, data analysis guidance, presentation and viva preparation, international student application support, and student visa document preparation support.',
  },
  {
    q: 'Do you write assignments for students?',
    a: 'No. SmartBrain provides coaching, feedback, proofreading, structure guidance, research support and learning development services. We do not write, complete or submit assessed work on behalf of students.',
  },
  {
    q: 'Can you help with dissertations and research projects?',
    a: 'Yes. We support topic refinement, proposal structure, literature review planning, methodology development, chapter review, formatting, presentation preparation and final improvement guidance.',
  },
  {
    q: 'Can you help with IT, software or data projects?',
    a: 'Yes. We provide project mentoring, system design guidance, database documentation support, diagrams, testing plans, implementation explanation, deployment guidance and technical report improvement.',
  },
  {
    q: 'Do you provide visa or immigration advice?',
    a: 'No. SmartBrain is not a regulated immigration advice provider. We provide general information, document organisation and administrative preparation support only. We do not provide legal immigration advice, assess visa eligibility, represent clients or guarantee visa outcomes.',
  },
  {
    q: 'Do you guarantee grades, admission or visa outcomes?',
    a: 'No. SmartBrain does not guarantee academic grades, school admission, scholarship outcomes, job outcomes or visa decisions. We provide professional support to improve clarity, structure, readiness and presentation.',
  },
];

const policies = [
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: 'Payment & Refund Policy',
    text:
      'SmartBrain uses secure payment links for fixed services, deposits and custom support. Larger, urgent, dissertation, research or project work should normally be reviewed first before payment is requested.',
    details: [
      'Payments may be made through secure Stripe payment links provided by SmartBrain.',
      'Fixed services, deposits and custom payment links may be used depending on the service type, urgency and complexity.',
      'For custom, urgent, dissertation, research or project support, clients should submit a booking request first so the scope, deadline and price can be confirmed.',
      'Work normally begins only after the agreed scope has been confirmed and the required payment or deposit has been received.',
      'Clients may request cancellation before work starts. Where no work has been completed, no time has been reserved and no administrative preparation has been carried out, a full refund may be considered.',
      'Where work has started, a refund may be reduced to reflect preparation time, consultation, document review, reserved time or support already delivered.',
      'Completed services are generally non-refundable unless SmartBrain has failed to deliver the agreed support.',
      'SmartBrain does not refund payments because a client later changes their mind after receiving support, misses a deadline, does not use the guidance provided, or does not achieve a particular grade, admission, visa, job or third-party outcome.',
      'Refund requests should be sent to smartbrainconsultancyuk@gmail.com with the client name, payment date, service paid for and reason for the request.',
    ],
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: 'Privacy Policy',
    text:
      'SmartBrain respects client privacy and collects only the information needed to respond to enquiries, manage bookings, provide support, process payments and maintain business records.',
    details: [
      'SmartBrain may collect full name, email address, phone or WhatsApp number, country or location, service requested, academic level or purpose, deadline, budget range, preferred contact method, message details and consent confirmation.',
      'Booking form submissions are stored through Netlify Forms and may also be sent to the SmartBrain email inbox for notification and administration.',
      'Payments are processed securely through Stripe. SmartBrain does not directly store full card details on the website.',
      'SmartBrain may receive payment confirmation information such as payer name, email address, payment amount, payment status and service purchased.',
      'Client information may be used to respond to enquiries, confirm scope and pricing, provide support, process payments, maintain records and protect the business from misuse or disputes.',
      'SmartBrain does not sell client personal data to third parties.',
      'Limited information may be processed through trusted service providers such as Netlify, Stripe, email services, WhatsApp or professional advisers where necessary.',
      'Clients should not submit passwords, bank details, private login details or unnecessary sensitive information through the booking form, email or WhatsApp.',
      'Privacy-related requests can be sent to smartbrainconsultancyuk@gmail.com.',
    ],
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: 'Terms of Service',
    text:
      'These terms explain how SmartBrain provides academic, research, project, editing, data, presentation, application and document preparation support.',
    details: [
      'Submitting a booking request does not automatically mean the service has been accepted. SmartBrain may first review the request and confirm scope, price, deadline and service boundaries.',
      'Clients must provide accurate contact details, clear instructions, relevant documents, correct deadlines and any marking criteria or requirements where applicable.',
      'SmartBrain may refuse or stop a request that appears unethical, unlawful, abusive, misleading or outside the service scope.',
      'SmartBrain does not guarantee academic grades, dissertation marks, admission, scholarship approval, visa approval, job outcomes, project assessment outcomes or third-party decisions.',
      'Prices may depend on document length, urgency, complexity, academic level, number of review stages, project type and turnaround time.',
      'Reasonable revisions may be provided where they fall within the original agreed scope.',
      'Revisions do not include completely new tasks, new documents, major instruction changes or work outside the agreed service.',
      'Clients are responsible for reviewing final documents, checking institutional rules, submitting their own work and using SmartBrain’s support ethically.',
      'SmartBrain may use third-party platforms such as Netlify, Stripe, email services, WhatsApp and website hosting tools.',
    ],
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: 'Academic Integrity Policy',
    text:
      'SmartBrain supports learning, planning, review, editing, preparation and confidence-building. It does not replace the client’s own work, learning or final responsibility.',
    details: [
      'SmartBrain can help with assignment brief explanation, marking criteria interpretation, structure guidance, proofreading, editing, research planning, methodology support, literature review organisation, referencing guidance, data interpretation, presentation preparation and application document review.',
      'SmartBrain does not write assignments for students.',
      'SmartBrain does not complete assessed work on behalf of students.',
      'SmartBrain does not submit work to a university, college, school, employer or institution.',
      'SmartBrain does not pretend to be the student or applicant.',
      'SmartBrain does not support plagiarism, contract cheating, false information, fake references, misrepresentation or academic dishonesty.',
      'Clients remain responsible for producing, understanding, reviewing and submitting their own work.',
      'For dissertations and research projects, clients remain responsible for conducting their research, understanding their methodology, selecting data appropriately and interpreting findings honestly.',
      'For IT, software, business, engineering, data or technical projects, clients must understand and be able to explain their own project.',
    ],
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: 'Client Consent & Booking Disclaimer',
    text:
      'Before submitting a booking request, clients confirm that they understand SmartBrain’s service boundaries, responsibilities and communication process.',
    details: [
      'Clients understand that SmartBrain provides academic guidance, document support, project mentoring, editing, research support, application support and administrative assistance only.',
      'Clients remain responsible for their own academic work, application documents, project materials and professional documents.',
      'Clients understand that SmartBrain does not complete assessed work for students or provide regulated immigration advice.',
      'Clients agree not to use SmartBrain’s support for plagiarism, contract cheating, false representation, academic dishonesty or any action that breaches institutional rules.',
      'Clients understand that SmartBrain does not guarantee grades, admission, scholarship approval, visa outcomes, job outcomes, project marks or third-party decisions.',
      'Clients agree not to submit passwords, bank details, private login information or unnecessary sensitive information through the booking form, email or WhatsApp.',
      'Clients understand that larger, urgent, dissertation, research or project-related work may require a custom quote before payment.',
      'Clients agree that SmartBrain may contact them by email, phone call or WhatsApp to respond to enquiries, confirm requests, discuss pricing, arrange payment or deliver support.',
    ],
  },
  {
    icon: <Plane className="h-5 w-5" />,
    title: 'Student Visa Service Boundary',
    text:
      'SmartBrain may support general document organisation and administrative preparation, but it does not provide regulated immigration advice.',
    details: [
      'SmartBrain may help clients organise documents and understand general publicly available preparation information.',
      'SmartBrain does not provide legal immigration advice.',
      'SmartBrain does not assess visa eligibility.',
      'SmartBrain does not represent clients in immigration matters.',
      'SmartBrain does not complete regulated immigration advice work.',
      'SmartBrain does not guarantee visa outcomes.',
      'Clients who need immigration advice should contact an authorised immigration adviser, solicitor or official government source.',
    ],
  },
];

const Button = ({ children, href, variant = 'primary', className = '', target }) => {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2';

  const styles = {
    primary:
      'bg-amber-500 text-[#061B3A] hover:-translate-y-0.5 hover:bg-amber-400 shadow-lg shadow-amber-500/25',
    navy:
      'bg-[#061B3A] text-white hover:-translate-y-0.5 hover:bg-[#082B5F] shadow-lg shadow-slate-900/15',
    light:
      'border border-white/30 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white hover:text-[#061B3A]',
    outline:
      'border border-slate-300 bg-white text-[#061B3A] hover:-translate-y-0.5 hover:bg-slate-100',
  };

  return (
    <a
      href={href}
      target={target}
      rel={target ? 'noreferrer' : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

const SectionHeader = ({ eyebrow, title, text, light = false }) => (
  <div className="mx-auto max-w-3xl text-center">
    <p
      className={`text-sm font-black uppercase tracking-[0.3em] ${
        light ? 'text-amber-300' : 'text-amber-600'
      }`}
    >
      {eyebrow}
    </p>

    <h2
      className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${
        light ? 'text-white' : 'text-[#061B3A]'
      }`}
    >
      {title}
    </h2>

    {text && (
      <p className={`mt-4 text-base leading-8 ${light ? 'text-slate-200' : 'text-slate-600'}`}>
        {text}
      </p>
    )}
  </div>
);

const Card = ({ children, className = '' }) => (
  <div className={`rounded-3xl border shadow-sm ${className}`}>{children}</div>
);

const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Stat = ({ value, label }) => (
  <div className="rounded-3xl bg-white/10 p-5 text-center ring-1 ring-white/10 backdrop-blur">
    <p className="text-3xl font-black text-amber-300">{value}</p>
    <p className="mt-1 text-sm font-semibold text-slate-200">{label}</p>
  </div>
);

const LogoMark = ({ size = 'md' }) => {
  const sizes = {
    sm: 'h-10 w-10 rounded-xl',
    md: 'h-12 w-12 rounded-2xl',
    lg: 'h-20 w-20 rounded-3xl',
  };

  return (
    <div
      className={`flex ${sizes[size]} items-center justify-center overflow-hidden bg-white shadow-sm ring-1 ring-slate-200`}
    >
      <img
        src={smartBrainLogo}
        alt="SmartBrain Academic & Research Consultancy logo"
        className="h-full w-full object-contain p-1"
      />
    </div>
  );
};

const AccordionItem = ({
  title,
  children,
  icon,
  isOpen,
  onClick,
  dark = false,
  badge,
}) => (
  <div
    className={`rounded-3xl border shadow-sm transition ${
      dark
        ? 'border-white/10 bg-white/10 text-white hover:bg-white/15'
        : 'border-slate-200 bg-white text-slate-900 hover:shadow-md'
    }`}
  >
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-4 p-6 text-left"
      aria-expanded={isOpen}
    >
      <span className="flex items-center gap-3">
        {icon && (
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
              dark ? 'bg-amber-500 text-[#061B3A]' : 'bg-amber-100 text-amber-700'
            }`}
          >
            {icon}
          </span>
        )}

        <span>
          <span
            className={`block text-lg font-black ${
              dark ? 'text-white' : 'text-[#061B3A]'
            }`}
          >
            {title}
          </span>

          {badge && (
            <span
              className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-black ${
                dark
                  ? 'bg-white/10 text-amber-300'
                  : 'bg-slate-100 text-amber-700'
              }`}
            >
              {badge}
            </span>
          )}
        </span>
      </span>

      <ChevronDown
        className={`h-6 w-6 shrink-0 transition ${
          isOpen ? 'rotate-180' : ''
        } ${dark ? 'text-amber-300' : 'text-amber-600'}`}
      />
    </button>

    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.25 }}
        className={`px-6 pb-6 leading-8 ${dark ? 'text-slate-200' : 'text-slate-600'}`}
      >
        {children}
      </motion.div>
    )}
  </div>
);

const DetailList = ({ title, items, dark = false }) => (
  <div className="mt-6">
    <h4 className={`text-base font-black ${dark ? 'text-amber-300' : 'text-[#061B3A]'}`}>
      {title}
    </h4>

    <ul className="mt-3 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-2 rounded-2xl p-3 text-sm font-bold ${
            dark
              ? 'bg-white/10 text-slate-100 ring-1 ring-white/10'
              : 'bg-slate-50 text-slate-700 ring-1 ring-slate-100'
          }`}
        >
          <CheckCircle2
            className={`mt-0.5 h-4 w-4 shrink-0 ${
              dark ? 'text-amber-300' : 'text-amber-600'
            }`}
          />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const encodeFormData = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export default function SmartBrainPremiumWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [openAbout, setOpenAbout] = useState(0);
  const [openService, setOpenService] = useState(0);
  const [openPackage, setOpenPackage] = useState(1);
  const [openPayment, setOpenPayment] = useState(1);
  const [openPolicy, setOpenPolicy] = useState(null);
  const [openResource, setOpenResource] = useState(null);
  const [openProcess, setOpenProcess] = useState(null);

  const [formStatus, setFormStatus] = useState({
    type: '',
    message: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: 'Academic Coaching',
    level: '',
    deadline: '',
    budget: '',
    contactMethod: 'WhatsApp',
    message: '',
    consent: false,
  });

  const tel1 = business.phone1.replace(/\s/g, '');
  const tel2 = business.phone2.replace(/\s/g, '');

  const serviceOptions = useMemo(() => services.map((service) => service.title), []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      service: 'Academic Coaching',
      level: '',
      deadline: '',
      budget: '',
      contactMethod: 'WhatsApp',
      message: '',
      consent: false,
    });
  };

  const handleBookingSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.level ||
      !formData.message
    ) {
      setFormStatus({
        type: 'error',
        message:
          'Please complete your name, email, phone number, service needed, academic level/purpose and message before submitting.',
      });
      return;
    }

    if (!formData.consent) {
      setFormStatus({
        type: 'error',
        message: 'Please confirm the consent statement before submitting your booking.',
      });
      return;
    }

    const submissionData = {
      'form-name': 'smartbrain-booking',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      service: formData.service,
      level: formData.level,
      deadline: formData.deadline,
      budget: formData.budget,
      contactMethod: formData.contactMethod,
      message: formData.message,
      consent: formData.consent ? 'Yes' : 'No',
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(submissionData),
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message:
            'Thank you. Your booking request has been submitted successfully. SmartBrain has received your enquiry and will contact you shortly by your preferred contact method.',
        });

        resetForm();
      } else {
        setFormStatus({
          type: 'error',
          message: 'The booking could not be submitted. Please use WhatsApp or email.',
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'The booking could not be submitted. Please use WhatsApp or email.',
      });
    }
  };

  const requestSummary = `Hello ${business.name},

I would like to request support.

Name: ${formData.name}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Country/Location: ${formData.country}
Service Needed: ${formData.service}
Academic Level / Purpose: ${formData.level}
Deadline / Preferred Date: ${formData.deadline}
Budget Range: ${formData.budget}
Preferred Contact Method: ${formData.contactMethod}

Message:
${formData.message}

Important:
I understand that SmartBrain provides academic guidance, document support and administrative assistance only.

Thank you.`;

  const mailtoLink = `mailto:${business.email}?subject=${encodeURIComponent(
    `Booking Request - ${formData.service}`
  )}&body=${encodeURIComponent(requestSummary)}`;

  const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    requestSummary
  )}`;

  return (
    <div className="min-h-screen scroll-smooth bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark size="md" />

            <div>
              <p className="text-lg font-black tracking-tight text-[#061B3A]">
                {business.shortName}
              </p>
              <p className="hidden text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:block">
                Academic & Research Consultancy
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-4 text-sm font-bold text-slate-700 xl:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-amber-600">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href={`tel:${tel1}`} variant="outline">
              Call Us
            </Button>
            <Button href="#booking">Book Support</Button>
          </div>

          <button
            className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 xl:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 xl:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 font-bold text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Button href={`tel:${tel1}`} variant="outline">
                  Call Us
                </Button>
                <Button href="#booking">Book Support</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="home">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#061B3A] via-[#082B5F] to-[#061B3A]">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-white/10 px-4 py-2 text-sm font-bold text-amber-300">
                <Sparkles className="h-4 w-4" />
                Academic, Research, Project & International Student Support
              </p>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Premium guidance for academic and professional success.
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-black text-amber-300">
                {business.tagline}
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                SmartBrain helps learners, researchers, professionals and international
                students gain clarity, confidence and structure through ethical academic
                coaching, research support, project mentoring, editing, data analysis,
                presentation preparation and application document support.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#booking">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button href="#services" variant="light">
                  Explore Services
                </Button>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                <Stat value="9+" label="Service Areas" />
                <Stat value="100%" label="Online Support" />
                <Stat value="Ethical" label="Guidance Only" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75 }}
              className="relative"
            >
              <div className="mb-5 hidden justify-end lg:flex">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-6 py-3 text-sm font-black text-[#061B3A] shadow-xl shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-400"
                >
                  Get Support Hub <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-white p-7 shadow-xl">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <LogoMark size="lg" />

                    <div>
                      <h2 className="text-2xl font-black text-[#061B3A] sm:text-3xl">
                        SmartBrain Support Hub
                      </h2>
                      <p className="text-sm font-bold text-slate-500 sm:text-base">
                        Built for students, researchers and applicants
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {[
                      'Academic coaching and study support',
                      'Research and dissertation mentoring',
                      'Project documentation and data support',
                      'International student application support',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100"
                      >
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="h-5 w-5 shrink-0 text-amber-600" />
                          <span className="font-bold text-slate-800">{item}</span>
                        </div>
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-[#061B3A] p-5 text-white">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
                        Support Style
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">
                        Structured, ethical and practical guidance.
                      </p>
                    </div>

                    <div className="rounded-3xl bg-amber-500 p-5 text-[#061B3A]">
                      <p className="text-sm font-black uppercase tracking-[0.2em]">
                        Delivery
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6">
                        Online, flexible and client-focused.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              { icon: <Award />, label: 'Academic Excellence' },
              { icon: <Lock />, label: 'Confidential Support' },
              { icon: <Users />, label: 'Student-Friendly' },
              { icon: <BriefcaseBusiness />, label: 'Professional Service' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-3xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="text-amber-600">
                  {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
                </div>
                <span className="font-black text-[#061B3A]">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="About SmartBrain"
              title="A consultancy built around clarity, integrity and growth"
              text="SmartBrain supports students, researchers, professionals and international applicants with structured, ethical and practical guidance. Click each heading below to learn more."
            />

            <div className="mt-10 space-y-4">
              <AccordionItem
                title="Who We Are"
                icon={<LogoMark size="sm" />}
                isOpen={openAbout === 0}
                onClick={() => setOpenAbout(openAbout === 0 ? null : 0)}
              >
                <p>
                  SmartBrain Academic & Research Consultancy provides professional academic
                  coaching, research support, project mentoring, editing, data support,
                  presentation preparation and international student application support.
                  The business is designed for students and professionals who need clear,
                  practical and ethical guidance to improve their work, confidence and
                  readiness.
                </p>

                <p className="mt-4">
                  Our support is not about replacing the client’s responsibility. Instead,
                  we help clients understand requirements, organise their ideas, improve
                  structure and prepare stronger academic, professional and application
                  documents.
                </p>
              </AccordionItem>

              <AccordionItem
                title="Our Mission"
                icon={<Target className="h-5 w-5" />}
                isOpen={openAbout === 1}
                onClick={() => setOpenAbout(openAbout === 1 ? null : 1)}
              >
                <p>
                  To provide ethical, professional and practical academic and international
                  education support that helps learners think clearly, conduct better
                  research and succeed with confidence.
                </p>
              </AccordionItem>

              <AccordionItem
                title="Our Vision"
                icon={<Globe2 className="h-5 w-5" />}
                isOpen={openAbout === 2}
                onClick={() => setOpenAbout(openAbout === 2 ? null : 2)}
              >
                <p>
                  To become a trusted academic, research and international student support
                  brand known for integrity, quality, practical guidance and excellent
                  client service.
                </p>
              </AccordionItem>

              <AccordionItem
                title="Our Core Values"
                icon={<Award className="h-5 w-5" />}
                isOpen={openAbout === 3}
                onClick={() => setOpenAbout(openAbout === 3 ? null : 3)}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'Integrity',
                    'Excellence',
                    'Clarity',
                    'Confidence',
                    'Growth',
                    'Responsibility',
                  ].map((value) => (
                    <div
                      key={value}
                      className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-amber-600" />
                      <p className="font-bold text-[#061B3A]">{value}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5">
                  These values guide how SmartBrain communicates, reviews documents,
                  supports clients and maintains professional boundaries.
                </p>
              </AccordionItem>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Why Choose Us"
              title="Professional support with clear ethical boundaries"
              text="SmartBrain is positioned as a premium support consultancy that improves client confidence without crossing academic or legal boundaries."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Target />,
                  title: 'Clear Direction',
                  text: 'We help clients understand what to do, how to structure it and how to improve it.',
                },
                {
                  icon: <Layers />,
                  title: 'Structured Support',
                  text: 'Every service is organised around scope, expectations, deadlines and deliverables.',
                },
                {
                  icon: <BadgeCheck />,
                  title: 'Ethical Practice',
                  text: 'We support learning, preparation, editing and guidance, not academic misconduct.',
                },
                {
                  icon: <Star />,
                  title: 'Premium Feel',
                  text: 'Professional communication, strong presentation and reliable client support.',
                },
              ].map((item) => (
                <FadeIn key={item.title}>
                  <Card className="h-full border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#061B3A] text-amber-400">
                        {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
                      </div>
                      <h3 className="text-xl font-black text-[#061B3A]">{item.title}</h3>
                      <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Services"
              title="Explore SmartBrain’s service areas"
              text="Click each service area to view detailed information about what is offered, who it is for and what outcome clients can expect."
            />

            <div className="mt-10 space-y-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={service.title}
                  title={service.title}
                  icon={service.icon}
                  isOpen={openService === index}
                  onClick={() => setOpenService(openService === index ? null : index)}
                >
                  <p className="font-semibold text-slate-700">{service.shortText}</p>

                  <p className="mt-4">{service.detailedText}</p>

                  <div className="mt-5 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
                    <h4 className="font-black text-[#061B3A]">Who this service is for</h4>
                    <p className="mt-2 text-slate-700">{service.whoNeeds}</p>
                  </div>

                  <DetailList title="Support Includes" items={service.supportIncludes} />

                  <div className="mt-6 rounded-2xl bg-[#061B3A] p-5 text-white">
                    <h4 className="font-black text-amber-300">Expected Outcome</h4>
                    <p className="mt-2 leading-7 text-slate-200">{service.outcome}</p>
                  </div>

                  <Button href="#booking" variant="navy" className="mt-6">
                    Request This Service
                  </Button>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Packages & Pricing"
              title="Choose the support level that fits your need"
              text="Click each package to view details. Final pricing depends on document length, urgency, complexity and agreed support level."
            />

            <div className="mt-10 space-y-4">
              {packages.map((pkg, index) => (
                <AccordionItem
                  key={pkg.name}
                  title={`${pkg.name} — ${pkg.price}`}
                  icon={<CreditCard className="h-5 w-5" />}
                  badge={pkg.featured ? 'Popular Package' : undefined}
                  isOpen={openPackage === index}
                  onClick={() => setOpenPackage(openPackage === index ? null : index)}
                >
                  <p className="font-semibold text-slate-700">{pkg.bestFor}</p>
                  <p className="mt-4">{pkg.description}</p>

                  <DetailList title="What is included" items={pkg.includes} />
                  <DetailList title="Suitable for" items={pkg.suitableFor} />

                  <Button href="#booking" variant="navy" className="mt-6">
                    Request This Package
                  </Button>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        <section id="payments" className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Secure Payments"
              title="Pay securely after confirming your support needs"
              text="For custom, urgent, dissertation, research or project support, please submit a booking request first. SmartBrain will confirm the scope, deadline and correct payment option before work begins."
            />

            <div className="mt-10 space-y-4">
              {paymentLinks.map((payment, index) => (
                <AccordionItem
                  key={payment.name}
                  title={`${payment.name} — ${payment.price}`}
                  icon={<CreditCard className="h-5 w-5" />}
                  badge={payment.featured ? 'Popular Payment Option' : undefined}
                  isOpen={openPayment === index}
                  onClick={() => setOpenPayment(openPayment === index ? null : index)}
                >
                  <p>{payment.description}</p>

                  <div className="mt-5 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
                    <p className="font-bold text-[#061B3A]">Important payment notice</p>
                    <p className="mt-2 text-slate-700">
                      Payments are for academic coaching, review, guidance, editing,
                      preparation and administrative support only. SmartBrain does not
                      guarantee grades, admission, visa outcomes, job outcomes or third-party
                      decisions.
                    </p>
                  </div>

                  <a
                    href={payment.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#061B3A] px-6 py-3 text-sm font-black text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[#082B5F]"
                  >
                    Pay Securely <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="How It Works"
              title="A simple, professional client journey"
              text="Click each step to understand how SmartBrain handles requests from first contact to final support."
            />

            <div className="mt-10 space-y-4">
              {process.map((step, index) => (
                <AccordionItem
                  key={step.title}
                  title={`Step ${index + 1}: ${step.title}`}
                  icon={step.icon}
                  isOpen={openProcess === index}
                  onClick={() => setOpenProcess(openProcess === index ? null : index)}
                >
                  <p className="font-semibold text-slate-700">{step.text}</p>
                  <p className="mt-4">{step.detail}</p>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="bg-[#061B3A] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <FadeIn>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">
                Booking & Consultation
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Request support through the professional booking form.
              </h2>

              <p className="mt-5 leading-8 text-slate-200">
                Complete the form and submit your request. You can also use the email or
                WhatsApp buttons for direct contact.
              </p>

              <div className="mt-8 rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                <h3 className="text-xl font-black text-amber-300">
                  Before submitting your request
                </h3>

                <ul className="mt-4 space-y-3 text-slate-200">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    Clearly describe the support you need.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    Include your deadline or preferred consultation date.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    Do not send passwords, bank details or unnecessary sensitive information.
                  </li>
                </ul>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${tel1}`}
                  className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 transition hover:bg-white/15"
                >
                  <Phone className="h-6 w-6 text-amber-300" />
                  <p className="mt-3 font-black">Call/WhatsApp</p>
                  <p className="mt-1 text-sm text-slate-200">{business.phone1}</p>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 transition hover:bg-white/15"
                >
                  <Mail className="h-6 w-6 text-amber-300" />
                  <p className="mt-3 font-black">Email</p>
                  <p className="mt-1 break-words text-sm text-slate-200">{business.email}</p>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <form
                name="smartbrain-booking"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleBookingSubmit}
                className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl sm:p-8"
              >
                <input type="hidden" name="form-name" value="smartbrain-booking" />

                <p className="hidden">
                  <label>
                    Do not fill this out if you are human:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-[#061B3A]">Booking Request</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      Complete the form and submit your request.
                    </p>
                  </div>
                  <LogoMark size="sm" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Full Name
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Email Address
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      autoComplete="email"
                      required
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Phone/WhatsApp
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      placeholder="Your phone number"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Country/Location
                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      autoComplete="country-name"
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      placeholder="Example: UK, Ghana"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Service Needed
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Budget Range
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    >
                      <option value="">Select budget range</option>
                      <option value="Below £50">Below £50</option>
                      <option value="£50 - £100">£50 - £100</option>
                      <option value="£100 - £250">£100 - £250</option>
                      <option value="£250+">£250+</option>
                      <option value="Need a quote">Need a quote</option>
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A] sm:col-span-2">
                    Academic Level / Purpose
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    >
                      <option value="">Select academic level or purpose</option>

                      {academicLevelOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Deadline / Preferred Date
                    <input
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      placeholder="Example: 20 May 2026"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A]">
                    Preferred Contact Method
                    <select
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    >
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email">Email</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>
                  </label>

                  <label className="grid gap-2 text-sm font-bold text-[#061B3A] sm:col-span-2">
                    Message
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      placeholder="Briefly describe what you need help with."
                    />
                  </label>

                  <label className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700 sm:col-span-2">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 accent-amber-500"
                    />
                    I understand that SmartBrain provides academic guidance, document support,
                    project mentoring, editing, research support, application support and
                    administrative assistance only. I remain responsible for my own work,
                    documents and submissions. I understand that SmartBrain does not complete
                    assessed work for students, provide regulated immigration advice, or
                    guarantee grades, admission, visa, job or third-party outcomes.
                  </label>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#061B3A] px-6 py-3 text-sm font-black text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[#082B5F]"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Booking
                  </button>

                  <Button href={mailtoLink} variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>

                  <Button href={whatsappLink} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>

                {formStatus.message && (
                  <div
                    className={`mt-4 rounded-2xl p-4 text-sm font-bold ${
                      formStatus.type === 'success'
                        ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'
                        : 'bg-red-50 text-red-700 ring-1 ring-red-100'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  Your booking request will be stored securely in the administrator’s Netlify
                  Forms dashboard. You may also use email or WhatsApp for direct contact.
                </p>
              </form>
            </FadeIn>
          </div>
        </section>

        <section id="resources" className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Client Resources"
              title="Free resources to help clients prepare better"
              text="Click each resource to see what it will help clients prepare. These can later become downloadable PDFs."
            />

            <div className="mt-10 space-y-4">
              {resources.map((resource, index) => (
                <AccordionItem
                  key={resource.title}
                  title={resource.title}
                  icon={resource.icon}
                  badge="Coming Soon"
                  isOpen={openResource === index}
                  onClick={() => setOpenResource(openResource === index ? null : index)}
                >
                  <p>{resource.text}</p>
                  <DetailList title="This resource will cover" items={resource.points} />

                  <button
                    type="button"
                    className="mt-5 rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-amber-700"
                  >
                    Download option coming soon
                  </button>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
                <Quote className="h-10 w-10 text-amber-500" />

                <p className="mt-5 text-2xl font-black leading-10 text-[#061B3A]">
                  “SmartBrain is designed to help clients become clearer, more confident
                  and better prepared, while keeping every service ethical, professional
                  and transparent.”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <LogoMark size="sm" />
                  <div>
                    <p className="font-black text-[#061B3A]">{business.shortName}</p>
                    <p className="text-sm font-semibold text-slate-500">
                      Academic & Research Consultancy
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions"
              text="Clear answers to common questions about SmartBrain services and expectations."
            />

            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.q}
                  title={faq.q}
                  icon={<HelpCircle className="h-5 w-5" />}
                  isOpen={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <p>{faq.a}</p>
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        <section id="policies" className="bg-[#061B3A] py-16 text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Policies & Protection"
              title="Clear policies for safe and professional support"
              text="Click each policy area to understand SmartBrain’s payment terms, privacy approach, service boundaries, academic integrity rules and client responsibilities."
              light
            />

            <div className="mt-10 space-y-4">
              {policies.map((policy, index) => (
                <AccordionItem
                  key={policy.title}
                  title={policy.title}
                  icon={policy.icon}
                  isOpen={openPolicy === index}
                  onClick={() => setOpenPolicy(openPolicy === index ? null : index)}
                  dark
                >
                  <p>{policy.text}</p>
                  <DetailList title="Important points" items={policy.details} dark />
                </AccordionItem>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <FadeIn>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-600">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#061B3A] sm:text-4xl">
                Let’s build your academic and professional future together.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Contact SmartBrain today for academic, research, project, application and
                professional support. Online support is available for clients worldwide.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={`tel:${tel1}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-white hover:shadow-md"
                >
                  <Phone className="h-6 w-6 shrink-0 text-amber-600" />
                  <span className="font-bold text-[#061B3A]">
                    {business.phone1} / {business.phone2}
                  </span>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-white hover:shadow-md"
                >
                  <Mail className="h-6 w-6 shrink-0 text-amber-600" />
                  <span className="break-words font-bold text-[#061B3A]">
                    {business.email}
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <Globe2 className="h-6 w-6 shrink-0 text-amber-600" />
                  <span className="font-bold text-[#061B3A]">{business.location}</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <MapPin className="h-6 w-6 shrink-0 text-amber-600" />
                    <span className="font-bold text-[#061B3A]">UK-Based Support</span>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <Clock3 className="h-6 w-6 shrink-0 text-amber-600" />
                    <span className="font-bold text-[#061B3A]">Flexible Consultation</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-[2rem] bg-[#061B3A] p-7 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <LogoMark size="md" />
                  <div>
                    <h3 className="text-2xl font-black">Ready to begin?</h3>
                    <p className="text-sm font-semibold text-slate-300">
                      Start with a simple consultation request.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-8 text-slate-200">
                  Send your request now and SmartBrain will respond with the next steps,
                  expected timeframe and support options.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button href="#booking">Book Support</Button>
                  <Button
                    href={`https://wa.me/${business.whatsapp}`}
                    target="_blank"
                    variant="light"
                  >
                    WhatsApp Us
                  </Button>
                </div>

                <div className="mt-8 rounded-3xl bg-white/10 p-6">
                  <p className="font-black text-amber-300">Important Notice</p>
                  <p className="mt-2 leading-7 text-slate-200">
                    SmartBrain provides academic coaching, research support, project
                    mentoring, editing, data analysis, presentation preparation and
                    administrative international student document support only. We do not
                    provide regulated immigration advice, legal advice or immigration
                    representation.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <a
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-[#061B3A] shadow-2xl shadow-amber-500/30 transition hover:-translate-y-1 hover:bg-amber-400"
        aria-label="Chat with SmartBrain on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <LogoMark size="sm" />
            <div className="text-left">
              <p className="font-black text-[#061B3A]">{business.name}</p>
              <p className="font-bold text-slate-500">{business.tagline}</p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <p>© 2026 {business.name}. All rights reserved.</p>
            <p className="mt-1">
              <a href={`tel:${tel1}`} className="font-bold text-[#061B3A] hover:text-amber-600">
                {business.phone1}
              </a>{' '}
              /{' '}
              <a href={`tel:${tel2}`} className="font-bold text-[#061B3A] hover:text-amber-600">
                {business.phone2}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
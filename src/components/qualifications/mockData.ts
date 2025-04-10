import { QualificationType } from './types';
import { accaModules } from './accaDetails';
import { cpaModules } from './cpaDetails';
import { cfaModules } from './cfaDetails';
import { frmModules } from './frmDetails';
import { cimaModules } from './cimaDetails';
import { cmaModules } from './cmaDetails';
import { cfpModules } from './cfpDetails';
import { caiaModules } from './caiaDetails';
import { bsmathModules } from './bsmathDetails';
import { mathstatModules } from './mathstatDetails';
import { actuaryModules } from './actuaryDetails';
import { datascienceModules } from './datascienceDetails';

export const qualifications: QualificationType[] = [
  {
    id: 'acca',
    name: 'ACCA',
    fullName: 'Association of Chartered Certified Accountants',
    description: 'A globally recognized accounting qualification providing the skills, knowledge and professional values for a successful career in finance.',
    levels: ['Knowledge', 'Skills', 'Professional'],
    totalExams: 13,
    examsPassed: 5,
    startedDate: 'Jan 2023',
    expectedCompletion: 'Dec 2025',
    activeStudents: 2850,
    status: 'in-progress',
    color: 'bg-blue-500'
  },
  {
    id: 'cpa',
    name: 'CPA',
    fullName: 'Certified Public Accountant',
    description: 'The U.S. CPA certification is one of the most respected accounting credentials that demonstrates expertise in accounting and taxation.',
    levels: ['AUD', 'BEC', 'FAR', 'REG'],
    totalExams: 4,
    examsPassed: 1,
    startedDate: 'Mar 2023',
    expectedCompletion: 'Jun 2024',
    activeStudents: 3200,
    status: 'in-progress',
    color: 'bg-purple-500'
  },
  {
    id: 'cima',
    name: 'CIMA',
    fullName: 'Chartered Institute of Management Accountants',
    description: 'The largest professional body of management accountants offering the most relevant finance qualification for business.',
    levels: ['Operational', 'Management', 'Strategic'],
    totalExams: 9,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 1890,
    color: 'bg-emerald-500'
  },
  {
    id: 'cma',
    name: 'CMA',
    fullName: 'Certified Management Accountant',
    description: 'A globally recognized certification that demonstrates competency in management accounting and financial management.',
    levels: ['Part 1', 'Part 2'],
    totalExams: 2,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 1560,
    color: 'bg-amber-500'
  },
  {
    id: 'cfa',
    name: 'CFA',
    fullName: 'Chartered Financial Analyst',
    description: 'A globally recognized professional designation that measures and certifies the competence and integrity of financial analysts. The curriculum covers ethical and professional standards, investment tools, asset classes, portfolio management, and wealth planning.',
    levels: ['Level I', 'Level II', 'Level III'],
    totalExams: 3,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 2750,
    color: 'bg-blue-600'
  },
  {
    id: 'frm',
    name: 'FRM',
    fullName: 'Financial Risk Manager',
    description: 'A professional designation for risk management professionals, with a focus on credit risk, market risk, operational risk, and investment management.',
    levels: ['Part I', 'Part II'],
    totalExams: 2,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 1450,
    color: 'bg-red-500'
  },
  {
    id: 'cfp',
    name: 'CFP',
    fullName: 'Certified Financial Planner',
    description: 'A professional certification for financial planners conferred by the Certified Financial Planner Board of Standards.',
    levels: ['Education', 'Exam', 'Experience', 'Ethics'],
    totalExams: 1,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 1890,
    color: 'bg-indigo-500'
  },
  {
    id: 'caia',
    name: 'CAIA',
    fullName: 'Chartered Alternative Investment Analyst',
    description: 'A professional designation offered by the CAIA Association to investment professionals who specialize in alternative investments.',
    levels: ['Level I', 'Level II'],
    totalExams: 2,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 980,
    color: 'bg-teal-500'
  },
  {
    id: 'bsmath',
    name: 'BS Math',
    fullName: 'Bachelor of Science in Mathematics',
    description: 'A comprehensive undergraduate degree in mathematics covering foundational and advanced topics in pure and applied mathematics.',
    levels: ['Core Courses', 'Advanced Courses'],
    totalExams: 8,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 1240,
    color: 'bg-violet-500'
  },
  {
    id: 'mathstat',
    name: 'Math Stats',
    fullName: 'Mathematical Statistics Certification',
    description: 'Advanced certification in statistical theory and methods, emphasizing theoretical foundations and practical applications of statistics.',
    levels: ['Foundation', 'Advanced'],
    totalExams: 4,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 950,
    color: 'bg-pink-500'
  },
  {
    id: 'actuary',
    name: 'Actuarial',
    fullName: 'Actuarial Science Qualification',
    description: 'Professional qualification for actuaries, covering probability, statistics, finance, and insurance mathematics.',
    levels: ['Preliminary Exams', 'Advanced Exams'],
    totalExams: 4,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 1120,
    color: 'bg-orange-500'
  },
  {
    id: 'datascience',
    name: 'Data Science',
    fullName: 'Data Science Certification',
    description: 'Comprehensive certification in data science methodologies, machine learning, statistical analysis, and big data technologies.',
    levels: ['Core', 'Specialized'],
    totalExams: 4,
    examsPassed: 0,
    status: 'not-started',
    activeStudents: 2100,
    color: 'bg-cyan-500'
  }
];

// Export all modules for backwards compatibility
export { 
  accaModules,
  cpaModules,
  cfaModules,
  frmModules,
  cimaModules,
  cmaModules,
  cfpModules,
  caiaModules,
  bsmathModules,
  mathstatModules,
  actuaryModules,
  datascienceModules
};

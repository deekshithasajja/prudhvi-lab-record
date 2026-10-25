// ===== EDIT STUDENT DETAILS AND WEEKLY RECORDS HERE =====

export const student = {
  name: 'R. Prudhviraj',
  nameUpper: 'R. PRUDHVIRAJ',
  rollNo: '25EU02113',
  branch: 'Artificial Intelligence and Machine Learning (AIML)',
  branchShort: 'AIML',
  section: 'B',
  subject: 'Java Programming Laboratory',
}

// type: 'pdf'      -> shows "View PDF" only if the file really exists
// type: 'no-tasks' -> shows the "No tasks were assigned" message, never a PDF button
export const weeks = [
  { week: 1, type: 'pdf', pdf: '/pdfs/week1.pdf' },
  { week: 2, type: 'pdf', pdf: '/pdfs/week2.pdf' },
  { week: 3, type: 'pdf', pdf: '/pdfs/week3.pdf' },
  { week: 4, type: 'no-tasks' },
  { week: 5, type: 'no-tasks' },
  { week: 6, type: 'pdf', pdf: '/pdfs/week6.pdf' },
  { week: 7, type: 'pdf', pdf: '/pdfs/week7.pdf' },
  { week: 8, type: 'pdf', pdf: '/pdfs/week8.pdf' },
  { week: 9, type: 'pdf', pdf: '/pdfs/week9.pdf' },
  { week: 10, type: 'pdf', pdf: '/pdfs/week10.pdf' },
  { week: 11, type: 'pdf', pdf: '/pdfs/week11.pdf', pendingStatus: 'Pending' },
  { week: 12, type: 'pdf', pdf: '/pdfs/week12.pdf', pendingStatus: 'Pending' },
]

import usePdfExists from './usePdfExists'

export default function WeekCard({ data }) {
  const noTasks = data.type === 'no-tasks'
  const pdfState = usePdfExists(noTasks ? null : data.pdf)

  let status = 'Checking…'
  let statusClass = 'badge-wait'
  if (noTasks) {
    status = 'No Tasks Assigned'
    statusClass = 'badge-none'
  } else if (pdfState === 'yes') {
    status = 'Completed'
    statusClass = 'badge-done'
  } else if (pdfState === 'no') {
    status = data.pendingStatus || 'PDF Pending'
    statusClass = 'badge-wait'
  }

  return (
    <article className={noTasks ? 'week-card week-card-muted' : 'week-card'}>
      <div className="week-top">
        <span className="week-num">Week {data.week}</span>
        <span className={`badge ${statusClass}`}>{status}</span>
      </div>
      <h3>Week {data.week} Laboratory</h3>

      {noTasks ? (
        <p className="no-tasks">No tasks were assigned in Week {data.week}.</p>
      ) : (
        <p className="week-desc">Java laboratory record for this week.</p>
      )}

      <div className="week-action">
        {!noTasks && pdfState === 'yes' && (
          <a className="btn btn-orange" href={data.pdf} target="_blank" rel="noopener noreferrer">
            View PDF
          </a>
        )}
        {!noTasks && pdfState === 'no' && <p className="pdf-missing">PDF not added yet.</p>}
      </div>
    </article>
  )
}

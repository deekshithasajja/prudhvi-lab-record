import { useEffect, useState } from 'react'

// Returns: 'checking' | 'yes' | 'no'
// A dev server or host may answer 200 with index.html for a missing file,
// so we also check that the response is really a PDF.
export default function usePdfExists(path) {
  const [state, setState] = useState(path ? 'checking' : 'no')

  useEffect(() => {
    if (!path) return
    let cancelled = false
    fetch(path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        const ok = res.ok && type.toLowerCase().includes('pdf')
        if (!cancelled) setState(ok ? 'yes' : 'no')
      })
      .catch(() => !cancelled && setState('no'))
    return () => {
      cancelled = true
    }
  }, [path])

  return state
}

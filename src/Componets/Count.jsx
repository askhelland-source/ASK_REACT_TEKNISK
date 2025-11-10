import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Your count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
        {count}
        </button>
      </div>
    </>
  )
}

export default Count
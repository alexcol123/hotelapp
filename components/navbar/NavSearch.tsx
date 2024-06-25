'use client'
import { Input } from '../ui/input'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'
import { set } from 'date-fns'

const NavSearch = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [search, setsearch] = useState(searchParams.get('search')?.toString() || '')

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams)

    
    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 500)


  useEffect(() => {
    if (!searchParams.get('search')) {
      setsearch('')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('search')])

  return (<Input
    type="text"
    placeholder="find a property"
    className="max-w-xs dark:bg-muted"
    onChange={(e) => (setsearch(e.target.value), handleSearch(e.target.value))

    }
  />
  )
}
export default NavSearch
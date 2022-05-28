import Head from 'next/head'
import Image from 'next/image'
import { EnterNameStep } from '../components/steps/EnterNameStep'

export default function Home() {
  return (
    <div>
      <EnterNameStep />
    </div>
  )
} 

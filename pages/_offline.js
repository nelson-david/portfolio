import Head from 'next/head'
import Header from '../layout/Header'

const Fallback = () => (
    <>
        <Header />
        <div className='offlineFallback'>
            <div className=''>
            </div>
        </div>
    </>
)

export default Fallback;
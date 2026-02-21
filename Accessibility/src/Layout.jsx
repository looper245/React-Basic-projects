import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from './logo.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import { SearchContax } from './SearchContax'
import { useDispatch, useSelector } from 'react-redux'
import { setDescription } from './Redux/DescriptionSlice'
import { WebMod } from './WebMod'
export default function Layout() {


    let { colorMod, setColor } = useContext(WebMod)
    let dispatch = useDispatch()
    let { data, loading, error } = useSelector((state) => state.product)


    let navigation = useNavigate()


    useEffect(() => {
        if (data.length === 0) return;
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.onresult = (e) => {
            const text = e.results[e.results.length - 1][0].transcript.toLowerCase();

            console.log(text);

            let productMatcher = data.find(p =>
                text.includes(p.name.toLowerCase())
            )

            if (productMatcher) {
                dispatch(setDescription(productMatcher))
                navigation('/description')
            }
            if (text.includes('dark mod') || text.includes('switch in dark mon')) {
                setColor(true)
            }
            if (text.includes('light mod') || text.includes('switch in light mon')) {
                setColor(false)
            }


            if (text.includes('open home page') || text.includes('home')) {
                navigation('/');
            }
            if (text.includes('open user page') || text.includes('user')) {
                navigation('/User/:iPhone 15');
            }

            if (text.includes('open cart page') || text.includes('open card page') || text.includes('cart')) {
                navigation('/Cart');
            }
            if (text.includes('open description page') || text.includes('description')) {
                navigation('/description');
            }
        };

        recognition.onend = () => recognition.start();

        const start = () => recognition.start();
        window.addEventListener("click", start, { once: true });

        return () => {
            recognition.stop();
            window.removeEventListener("click", start);
        }
    }, [data]);
    const { searchData, SetSearchData } = useContext(SearchContax)


    return (
        <>
           

            <header className='flex justify-between align-center bg-blue-300 p-3' style={{ background: colorMod ? '#1b1c1d' : '#539eee', borderBottom: colorMod ? "3px solid white" : '2px solid black', color: colorMod ? 'white' : 'black' }} >

                <div className="logo">
                    <img src={logo} alt="Company Logo" className='w-15 ' />
                </div>
                <nav className='flex align-center justify-center gap-3 text-[20px] font-bold font-sans'>
                    <Link to='/' className="focus-visible:ring-2 outline-none" tabIndex='1'><h3 aria-label='go-to-home-page-btn' >Home</h3></Link>
                    <Link to='/Cart' className="focus-visible:ring-2 outline-none" tabIndex='2'><h3 aria-label='go-to-Cart-page-btn' >Cart</h3></Link>
                    <Link to='/description' className="focus-visible:ring-2 outline-none" tabIndex='3'><h3 aria-label='go-to-Description-page-btn' >Description</h3></Link>
                </nav>
                <nav className='flex gap-5'>
                    <form action="">
                        <label htmlFor="Search" className='font-bold pr-4' >Search</label>
                        <input className={colorMod ? 'dark-input' : 'light-input'} type="search" name="" value={searchData} onChange={(e) => { SetSearchData(e.target.value) }} id="Search" tabIndex='4' placeholder='Search' />
                    </form>
                    <nav onClick={() => {
                        setColor(prev => {
                            return prev = !prev
                        })
                    }}>
                        {colorMod ? '⏾' : '☀︎'}
                    </nav>
                </nav>
            </header>
            <section style={{ background: colorMod ? '#0B0D10' : 'white' }}>
                <Outlet />
            </section>
        </>
    )
}

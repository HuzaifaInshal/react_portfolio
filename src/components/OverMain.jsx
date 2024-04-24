import React, { useEffect, useState,useRef,useCallback } from 'react'
import VideoPlayer from './VideoPlayer'

const OverMain = ({ data, count,setShowOver }) => {
    const [overlay1W, setOverlay1W] = useState(0)
    const [overlay2W, setOverlay2W] = useState(0)
    const [overlay3W, setOverlay3W] = useState(0)
    useEffect(() => {
        if (count !== 1) {
            document.body.style.overflowY = 'hidden';
            document.documentElement.style.overflowY = 'hidden';
            setOverlay1W(100)
            setTimeout(() => {
                setOverlay2W(100)
            }, 350)
            setTimeout(() => {
                setOverlay3W(100)
            }, 650)
        }
    }, [count])

    function closeOverlay() {
        document.documentElement.style.overflowY = 'visible';
        document.body.style.overflowY = "visible";
        setOverlay3W(0)
        setTimeout(() => {
            setOverlay2W(0)
        }, 200)
        setTimeout(() => {
            setOverlay1W(0)
        }, 500)
    }

    return (
        <>
            <div className='overlay overlay1' style={{ width: `${overlay1W}vw` }}></div>
            <div className='overlay overlay2' style={{ width: `${overlay2W}vw` }}></div>
            <div className='overlay overlay3' style={{ width: `${overlay3W}vw` }} >
                <div className="overlayChild2">
                    <button className='overlay_goBack' onClick={closeOverlay}><i class="fa-solid fa-arrow-left"></i></button>
                    <div className="hashtags">
                        {data ? data.majorHashtags.map((each) => (
                            `#${each} `
                        )) : 'loading'}
                        {data ? data.minorHashtags.map((each) => (
                            `#${each} `
                        )) : 'loading'}
                    </div>
                    <h1 className='overlayTitle'>{data ? data.title : 'loading..'}</h1>
                    <p className='overlaytagLine'>~ {data ? data.tagLine : 'loading..'} ~</p>
                    <p className='overlayPara'>{data ? data.mainPara : 'loading..'}</p>
                    {data && data.gitLinks.length !== 0 ?
                        <>
                            {data.gitLinks.map((each) => (
                                <a href={each} target='_blank'><button className='emailme overlayBtn'>Link to Code</button></a>
                            ))}
                        </> : ''}
                    {data && data.liveLinks.length !== 0 ?
                        <>
                            {data.liveLinks.map((each) => (
                                <a href={each} target='_blank'><button className='emailme overlayBtn'>Check Live</button></a>
                            ))}
                        </> : ''}
                </div>
                <div className="overlayChild1">
                    {data && data.mp4URL!=='' ? <VideoPlayer url={data.mp4URL}/> : ''}
                    {data ? <img src={data.titlePictureURL} alt='picture' className='overlayTitlePic'/> : 'loading..'}
                    {data && data.blogFlow!=='' ? <div className='overlayBlog' dangerouslySetInnerHTML={{ __html: data.blogFlow }}></div> : ''}
                </div>
            </div>
        </>
    )
}

export default OverMain

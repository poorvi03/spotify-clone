import { useEffect, useState } from "react"
import { AUTH_URL } from "../../lib/spotify"
import { Description, DescriptionContainer, Developer, Disclaimer, DisclaimerButton, DisclaimerP, Github, Img, Linkedin, LoginBody, LoginButton, LoginContainer, LoginFooter, SocialMedia, Span, Title, Trademarks, Twitter, Video, Web } from "./LoginElements"
import logo from '../../assets/logos/01_RGB/Spotify_Logo_RGB_White.png'
import logo2 from '../../assets/logos/01_RGB/Spotify_Logo_RGB_Green.png'
import video1 from '../../assets/videos/video1.mp4'
import { Typewriter } from 'react-simple-typewriter'

const Login = () => {
    const [focus, setFocus] = useState(false)
    const [toggleDisclaimer, setToggleDisclaimer] = useState(true)


    useEffect(()=>{
        setTimeout(()=>{
            setToggleDisclaimer(false)
        },5000)
       document.title = "Spotify Client Login" 
    },[])

    return (
        <LoginContainer>
            <LoginBody>
            <Video src={video1} autoPlay loop type="video/mp4"/>
                <DescriptionContainer>
                    <Img  
                        onClick={()=>window.location.assign('https://www.spotify.com')}
                        src={focus ? logo : logo2} onMouseEnter={()=>{setFocus(false)}}
                        onMouseLeave={()=>{
                            setFocus(true)
                        }}
                    />
                    <Description> 
                    <Title>
                        Listen without limits !!!
                    </Title>
                    <Typewriter
                        words={[
                        "Play millions of songs ad-free & on-demand","Share",
                        "Explore",
                        "Listen to the songs you love",
                        "Discover new music and podcasts",
                        "Spotify is all the music you'll ever need"]}
                        loop
                        cursor
                        cursorStyle=' |'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                     />
                
                    </Description>
                    <LoginButton href={AUTH_URL}>Login with Spotify</LoginButton>
                </DescriptionContainer>

            </LoginBody>
           

            
        </LoginContainer>
    )
}

export default Login
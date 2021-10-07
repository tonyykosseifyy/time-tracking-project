import styled from 'styled-components' ;


export const AppWrapper = styled.main`
    background-color: var(--Very-dark-blue) ;
    color: white ;
    display: grid ;
    place-items: center ;
    height: 100vh ;
    width: 100vw ;
    padding: 0 ;
    @media (max-width: 765px) {
        display: block ;
        padding: 55px 30px ;
        width: auto;
        height: auto ;
    }
    @media (max-width: 500px) {
        padding: 40px 10px ;
    }
`

export const ContentWrapper = styled.section`
    display: grid ;
    grid-template-rows: repeat(2 , 1fr) ;
    grid-template-columns: repeat(4, 4fr);
    grid-gap: 20px ;
    width: 90vw ;
    max-width: 900px ;
    height: 400px ;

    @media (max-width: 765px) {
        display: flex ;
        flex-direction: column ;
        width: 100% ;
        height: auto ;

        & > div {
            min-height: 190px ;
        }
    }
`

export const BigContainer = styled.div`
    border-radius: 10px ;
    background-color: var(--Dark-blue) ;
    display: grid ;
    grid-template-columns: 1fr ;
    grid-template-rows: 2.5fr 1fr ;
    grid-row: 1/3 ;

    @media (max-width: 765px) {
        grid-template-rows: 2fr 1fr ;
    }
`

export const UserInfo = styled.div`
    background-color: var(--blue) ;
    border-radius: 10px ;
    display: flex ;
    flex-direction: column ;
    align-items: flex-start ;
    padding: 20px ;
    
    & > img {
        object-fit: contain ;
        max-height: 80px ;
        max-width: 80px ;
        margin-bottom: 30px ;
    }

    & > div > * {
        font-weight: 300 ;
    }
    & > div > span {
        opacity: .7 ;
        font-size: .75rem ;
    }
    & > div > h1 {
        font-size: 2rem ;
        margin-top: 5px;
    }
    @media (max-width:765px) {
        flex-direction: row ;
        align-items: center ;

        & > div {
            margin-left: 15px ;
        }
        & > img {
            margin-bottom: 0 ;
        }
        & br {
            display: none ;
        }
        & > div > h1 {
            font-size: 1.3rem ;
            margin-top: 0 ;
        }
    }
    
`
export const DateInfo = styled.div`
    display: flex ;
    flex-direction: column ;
    justify-content : center ;
    padding: 20px ;

    @media (max-width: 765px) {
        flex-direction: row ;
        justify-content: space-between ;
    }
`

export const DateInfoSpan = styled.span`
    color: ${(props) => props.active ? "white" : "#6C70AE"} ;
    transition: .3s ease-out ;
    cursor: pointer ;
    margin: 5px 0 ;
    width: fit-content ;

    &:hover {
        color: white;
    }

`
const colors = ["light-red-work" , "Soft-blue-play" , "light-red-study" , "Lime-green-exercise", "Violet-social", "Soft-orange-selfcare"] ;
export const SmallContainer = styled.div`
    border-radius: 10px ;
    background-color: var(--Dark-blue) ;
    display: grid ;
    grid-template-columns: 1fr ;
    grid-template-rows: 40px 3fr ;
    background-color: ${(props) => `var(--${colors[props.index]})`} ;
`

export const SmallContainerInfo = styled.div`
    padding: 20px ;
    border-radius: 10px ;
    background-color: var(--Dark-blue) ;
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: .3s ease-out ;

    &:hover {
        background-color: #34397B ;
    }
    & > div > * {
        font-weight: 400 ;
    }
`


export const SmallContainerDesign = styled.div`
    border-top-left-radius: 10px ;
    border-top-right-radius: 10px ;
    overflow: hidden ;
    position: relative ;
    & > img {
        position: absolute ;
        object-fit: contain;
        max-height: 60px ;
        max-width: 60px ;
        top: 0px ;
        right: 20px ;
    }
`
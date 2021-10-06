import styled from 'styled-components' ;


export const AppWrapper = styled.main`
    background-color: var(--Very-dark-blue) ;
    color: white ;
    @media (min-width: 768px) {
        display: grid ;
        place-items: center ;
        height: 100vh ;
        width: 100vw ;
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
`

export const BigContainer = styled.div`
    border-radius: 10px ;
    background-color: var(--Dark-blue) ;
    display: grid ;
    grid-template-columns: 1fr ;
    grid-template-rows: 2.5fr 1fr ;
    grid-row: 1/3 ;
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
`
export const DateInfo = styled.div`
    display: flex ;
    
`
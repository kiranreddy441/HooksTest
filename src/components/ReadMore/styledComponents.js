import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 2040px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`

export const Heading = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  color: black;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Paragraph = styled.p`
  font-size: 16px;
  color: black;
  font-family: 'poppins';
  margin-bottom: 8px;
`

export const ImageElement = styled.img`
  height: 210px;
  width: 60%;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  color: black;
  font-family: 'poppins';
  width: 60%;
`

export const ButtonElement = styled.button`
  padding: 8px 12px;
  color: white;
  background-color: #1f81ff;
  font-weight: bold;
  font-family: 'poppins';
  border-radius: 6px;
  margin: 8px 9px;
  font-size: 13px;
  outline: none;
  border: none;
`

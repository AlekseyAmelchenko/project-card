import React from 'react'
import styled from 'styled-components'

export const ContainerPricing = styled.div`
  display: flex;
  justify-content: center;
  width: 390px;
  background: #fff;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 11px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  user-select: none;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const Container = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  svg {
    fill: ${({ fill = '#ccc' }) => fill};
  }
`
export const Cloud = () => {
  return (
    <LogoContainer fill="#f93262">
      <svg
        width="65"
        height="43"
        viewBox="0 0 65 43"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M51.8981 16.25C50.9596 11.7162 48.4824 7.64646 44.8862 4.73044C41.29 1.81442 36.7962 0.231566 32.1663 0.250162C24.4344 0.250162 17.7665 4.51812 14.5665 10.9181C6.29859 11.982 0.166656 18.65 0.166656 26.9179C0.166656 35.7178 7.36658 42.9177 16.1665 42.9177H50.8341C52.59 42.9348 54.3316 42.6015 55.9571 41.9374C57.5826 41.2732 59.0593 40.2914 60.3007 39.0496C61.5422 37.8078 62.5235 36.3308 63.1872 34.7051C63.8509 33.0795 64.1836 31.3377 64.166 29.5819C64.166 22.6499 58.5661 16.782 51.8981 16.25ZM50.8341 37.5818H16.1665C13.3405 37.5733 10.6326 36.4472 8.63388 34.4493C6.63521 32.4514 5.5081 29.7439 5.4986 26.9179C5.4986 21.0499 10.2986 16.25 16.1665 16.25H18.0345C19.8985 10.1181 25.4984 5.58211 32.1663 5.58211C40.1662 5.58211 46.8342 12.25 46.8342 20.25V21.5819H50.8341C55.3661 21.5819 58.834 25.0499 58.834 29.5819C58.834 34.1178 55.3661 37.5818 50.8341 37.5818Z" />
      </svg>
    </LogoContainer>
  )
}

export const Wordpress = () => {
  return (
    <LogoContainer fill="rgb(24, 155, 215);">
      <svg
        width="58"
        height="58"
        viewBox="0 0 58 58"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M28.9997 0.230469C13.1112 0.230469 0.230469 13.1105 0.230469 29.0003C0.230469 44.8888 13.1117 57.7695 28.9997 57.7695C44.8894 57.7695 57.7688 44.8882 57.7688 29.0003C57.7688 13.1105 44.8888 0.230469 28.9997 0.230469V0.230469ZM11.4598 11.4598C16.1453 6.77428 22.3737 4.19472 28.9997 4.19472C35.2255 4.19472 41.1013 6.47322 45.6753 10.635C45.1259 10.6243 44.5401 10.7134 43.9242 10.9141C42.4159 11.4052 39.1985 14.5453 43.2788 20.1472C47.3598 25.7496 45.3015 30.9688 44.9446 32.1316C44.4999 33.5772 41.3867 43.9348 41.3867 43.9348L32.4321 17.298C32.4321 17.298 34.9595 17.1092 35.322 17.054C35.6845 17.0001 36.2853 16.6445 36.185 15.8882C36.0847 15.1318 35.5297 15.0233 34.9997 15.0497C34.735 15.0635 31.613 15.2999 28.5111 15.2993C25.4286 15.2993 22.3668 15.0622 22.1492 15.0497C21.712 15.0252 21.0798 15.0747 20.9275 15.7596C20.8177 16.3347 21.093 16.9725 21.712 17.0447C22.331 17.118 21.9158 17.0647 24.4201 17.2968C24.4201 17.2968 26.1235 21.9597 28.2765 27.8588L22.824 44.0497L13.8386 17.2968C13.8386 17.2968 16.366 17.1087 16.7279 17.0535C17.091 16.9983 17.6906 16.6433 17.5922 15.8876C17.4912 15.1312 16.9355 15.0208 16.4062 15.0491C16.1422 15.0629 13.0208 15.2987 9.91759 15.2987C9.36697 15.2981 8.83697 15.2906 8.32647 15.2793C9.23209 13.9202 10.2782 12.6408 11.4598 11.4598L11.4598 11.4598ZM4.19478 28.9997C4.19478 25.423 4.94803 21.9635 6.37666 18.7995C8.60684 24.9074 16.9437 47.7392 18.2645 51.3743C15.7722 50.1764 13.473 48.5527 11.4598 46.5395C6.77559 41.8546 4.19478 35.6256 4.19478 28.9997V28.9997ZM22.0131 52.8105C22.5669 51.109 27.2725 37.5334 29.4751 31.142C32.821 40.3061 36.7972 51.4602 37.1509 52.4392C34.5638 53.336 31.8182 53.8045 28.9997 53.8045C26.6008 53.8045 24.2533 53.4646 22.0131 52.8105V52.8105ZM46.5402 46.5401C44.9917 48.0879 43.2745 49.405 41.4313 50.4762C42.7753 46.5677 46.4298 36.2747 49.6195 26.9388C50.8199 23.3207 51.1542 19.8964 50.793 17.1293C52.7597 20.7293 53.8058 24.7832 53.8058 28.9997C53.8052 35.6256 51.2257 41.8546 46.5402 46.5401V46.5401Z" />
      </svg>
    </LogoContainer>
  )
}

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`
export const Caption = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: hsla(0, 0%, 7%, 0.7);
  margin-top: 2px;
  margin-bottom: 20px;
`
export const PriceValue = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin-bottom: 20px;
`
export const FeaturesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  margin-bottom: 32px;
`
export const FeaturesItem = styled.div`
  display: flex;
  margin-bottom: 4px;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 12px 50px;
  background: #5cd91e;
  border: none;
  outline: none;
  cursor: pointer;
  height: 48px;
  font-weight: 600;
  color: #fff;
  border-radius: 4px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
  }
`
export const Feature = styled.div`
  display: flex;
  justify-content: center;
  i {
    margin-right: 5px;
    color: #5cd91e;
  }
`

import React from 'react'
import styled from 'styled-components'

export const ContainerPrice = styled.div`
  display: flex;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgColor};
  box-shadow: 0 11px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-right: 10px;
  user-select: none;
  &:last-of-type {
    margin: 0;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.flag};
  width: 250px;
  height: 70px;
  color: ${({ theme }) => theme.flagTextColor};
  position: relative;
  margin-bottom: 30px;
  span {
    position: absolute;
    width: 100%;
    height: 30px;
    top: 100%;
    overflow: hidden;
    z-index: 2;
    background-color: ${({ theme }) => theme.middle};
  }
  span:after {
    content: '';
    display: block;
    width: 140%;
    height: 100px;
    background-color: ${({ theme }) => theme.flag};
    position: absolute;
    bottom: 14px;
    left: -20px;
    transform: ${({ theme }) => `rotate(${theme.angleTitle})`};
  }
`
export const BlockTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.middle};
  width: 100%;
  height: 70px;
  position: relative;
  span {
    position: absolute;
    width: 100%;
    height: 30px;
    top: 100%;
    overflow: hidden;
    z-index: 2;
    background-color: ${({ theme }) => theme.bgColor};
  }
  span:after {
    content: '';
    display: block;
    width: 140%;
    height: 30px;
    background-color: ${({ theme }) => theme.middle};
    position: absolute;
    bottom: 14px;
    left: -20px;
    transform: ${({ theme }) => `rotate(${theme.angleBlock})`};
  }
`
export const Price = styled.div`
  display: flex;
  font-size: 32px;
  margin-bottom: 5px;
  color: #72b136;
  font-weight: 700;
`
export const BlockCenter = styled.div`
  display: flex;
`
export const Description = styled.div`
  display: flex;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.descriptionText};
`
export const FeaturesContainer = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.featuresContainerText}
  flex-direction: column;
  margin-bottom: 20px;
  align-items: flex-start;
  i {
    color: #20bf6b;
    margin-right: 5px;
    font-size: 12px;
  }
`
export const Feature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`
export const FeaturesItem = styled.div`
  display: flex;
`
export const Button = styled.button`
  text-transform: capitalize;
  background-color: #5ead31;
  padding: 10px 40px;
  border-radius: 5px;
  margin-bottom: 30px;
  cursor: pointer;
  border: 0;
  outline: none;
  color: #fff;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
  }
`

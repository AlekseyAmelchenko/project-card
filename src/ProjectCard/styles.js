import React from 'react'
import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0;
  }
`
export const TopContainer = styled.div`
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 1;
`
export const GreenContainer = styled.div`
  display: flex;
  background-color: #97ce69;
  width: 300px;
  box-shadow: 0 0 0 3px green;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  user-select: none;
  position: relative;
  padding-top: 60px;
  overflow: hidden;
`

export const Price = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: green;
  border: 3px solid green;
  position: relative;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
`
export const TitleContainer = styled.div`
  display: flex;
`
export const Name = styled.div`
  display: flex;
  font-size: 28px;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 20px;
`
export const Line = styled.div`
  width: 80%;
  border: 1px solid #568056;
  border-bottom: 1px solid #69bf69;
  margin-bottom: 10px;
`
export const PriceMonth = styled.div`
  display: flex;
  background: linear-gradient(180deg, #93d954, green);
  border-radius: 4px;
  padding: 7px;
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
`
export const List = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  flex-direction: column;
`
export const First = styled.div`
  display: flex;
  height: 40px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  color: #eee;
`
export const Second = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #cccccc;
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #eee;
`
export const Third = styled.div`
  display: flex;
  height: 40px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  color: #eee;
`
export const Btn = styled.button`
  display: flex;
  width: 300px;
  height: 40px;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  background: linear-gradient(180deg, #93d954, green);
  border: 0;
  outline: none;
  &:active {
    background: linear-gradient(180deg, green, #93d954);
  }
`
export const Table = styled.div`
  display: flex;
`

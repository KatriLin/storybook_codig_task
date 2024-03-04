import React from 'react'
import styled from 'styled-components'

export const Timeline = ({ items }) => {
  const formatDate = dateString => {
    const parts = dateString.split('-')
    return `${parts[2]}.${parts[1]}.${parts[0]}`
  }
  return (
    <StyledTable>
      <MobileHeader>Timeline</MobileHeader>
      <thead>
        <StyledTr>
          <StyledTh>Date</StyledTh>
          <StyledTh>Type</StyledTh>
          <StyledTh>Description</StyledTh>
          <StyledTh>Priority</StyledTh>
        </StyledTr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <StyledTableRow key={index} iseven={index % 2 === 0}>
            <StyledTd>{formatDate(item.date)}</StyledTd>
            <StyledTd>{item?.type}</StyledTd>
            <StyledTd>{item?.description}</StyledTd>
            <PriorityWrapper>
              <PriorityColor priority={item?.priority}></PriorityColor>
              <Priority priority={item?.priority}>{item?.priority}</Priority>
            </PriorityWrapper>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  )
}

const StyledTr = styled.tr`
  border-bottom: 1px solid lightgray;
`
const MobileHeader = styled.h2`
  display: none;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }
`
export const PriorityColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.priority) {
      case 'HIGH':
        return 'rgb(255, 99, 97)'
      case 'MODERATE':
        return 'rgb(255, 166, 0)'
      case 'LOW':
        return 'rgb(57, 210, 115)'
      default:
        return 'transparent'
    }
  }};
  margin-right: 10px;
`

export const Priority = styled.div`
  font-size: 12px;
  color: ${props => {
    switch (props.priority) {
      case 'HIGH':
        return 'rgb(255, 99, 97)'
      case 'MODERATE':
        return 'rgb(255, 166, 0)'
      case 'LOW':
        return 'rgb(57, 210, 115)'
      default:
        return 'inherit'
    }
  }};
`

const StyledTh = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #f0f2f5;
  color: rgb(38, 44, 48);
`

const StyledTd = styled.td`
  padding: 8px;
  text-align: left;
`

const PriorityWrapper = styled.div`
  display: flex;
  align-items: center;

  min-height: 40px;
`

const StyledTableRow = styled(StyledTr)`
  @media (max-width: 768px) {
    background-color: ${props => (props.iseven ? '#f2f2f2' : 'transparent')};
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Nunito, sans-serif;
  color: #7a7a7a;
  line-height: 1.8;

  @media (max-width: 768px) {
    thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 100px;
    }
    tbody {
      tr {
        border-bottom: 3px solid #ddd;
        display: block;
      }
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
    }

    td {
      border-bottom: 3px solid #ddd;
      display: block;
      text-align: left;
      min-height: 25px;
    }

    td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }
  }
`

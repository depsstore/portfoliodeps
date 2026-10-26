import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding-bottom: 5rem;
  position: relative;
  z-index: 1;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
    color: var(--blue);
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;

    &::before {
      content: '';
      position: absolute;
      width: 4px;
      background-color: #333;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -2px;
    }
  }

  .timeline-item {
    position: relative;
    width: 50%;
    padding: 1rem 3rem;
    box-sizing: border-box;

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      background-color: var(--blue);
      border: 4px solid #212121;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 0 10px var(--blue);
    }

    &.left {
      left: 0;
      text-align: right;
    }

    &.right {
      left: 50%;
      
      &::after {
        left: -10px;
      }
    }

    .content {
      background-color: #212121;
      border: 1px solid #333;
      padding: 2rem;
      border-radius: 12px;
      transition: 0.3s ease;
      position: relative;

      &:hover {
        transform: translateY(-5px);
        border-color: var(--blue);
        box-shadow: 0 10px 20px rgba(0, 255, 135, 0.1);
      }

      .date {
        display: inline-block;
        color: var(--blue);
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 0.8rem;
        background: rgba(0, 255, 135, 0.1);
        padding: 0.3rem 1rem;
        border-radius: 50px;
      }

      h3 {
        font-size: 2rem;
        color: #FFF;
        margin-bottom: 0.5rem;
      }

      h4 {
        font-size: 1.5rem;
        color: #AAA;
        font-weight: 500;
        margin-bottom: 1.5rem;
      }

      p {
        font-size: 1.4rem;
        color: #CCC;
        line-height: 1.6;
      }
    }
  }

  @media (max-width: 768px) {
    .timeline {
      &::before {
        left: 30px;
      }
    }

    .timeline-item {
      width: 100%;
      padding-left: 70px;
      padding-right: 0;
      
      &.left {
        text-align: left;
      }

      &.right {
        left: 0;
      }

      &::after {
        left: 20px !important;
        right: auto;
      }
    }
  }
`;
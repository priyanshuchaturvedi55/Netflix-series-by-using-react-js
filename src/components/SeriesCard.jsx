import React from "react";
import styles from "./codeseriescss.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  const ButtonThapa = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--bg-color);
    font-weight: bold;
    cursor: pointer;
  `;

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return (
    <li key={name} className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>{name}</h2>
        <Rating>
          Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p>{description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <ButtonThapa rating={rating}>Watch Now</ButtonThapa>
        </a>
      </div>
    </li>
  );
};

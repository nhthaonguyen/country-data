import React from "react";
import Button from "../common/Button";
import styles from "./CountryDetail.module.css";

// Copy code from https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
const calcTime = (city, offset) => {
  if (!offset) {
    return "Cannot locate time";
  }
  const MINUTE_MS = 60 * 1000;
  const HOUR_MS = 60 * MINUTE_MS;
  const localUserDate = new Date();
  const utcDate =
    localUserDate.getTime() + localUserDate.getTimezoneOffset() * MINUTE_MS;
  const calcDate = new Date(utcDate + HOUR_MS * offset);

  return "The local time in " + city + " is " + calcDate.toLocaleString();
};

// Only works with format UTC+00:00
const parseTimezoneOffset = (timezone) => {
  if (timezone.substring(0, 3) === "UTC") {
    const [hour, min] = timezone.substring(3).split(":");
    const absoluteTime = Math.abs(parseInt(hour)) + parseFloat(min / 60);
    return hour < 0 ? absoluteTime * -1 : absoluteTime;
  }
  return null;
};

function CountryDetail(props) {
  const { country, onClearCountryClick } = props;

  return (
    <div className={styles.container}>
      <h3>{country.name.official}</h3>
      <div className={styles.countryDetail}>
        <div className={styles.leftColumn}>
          <img className={styles.coatOfArms} src={country.coatOfArms.png} />
        </div>
        <div className={styles.rightColumn}>
          <div>
            <small>Region: {country.region}</small>
          </div>
          <div>
            <small>Capital: {country.capital[0]}</small>
          </div>
          <div>
            <small>
              {calcTime(
                country.capital[0],
                parseTimezoneOffset(country.timezones[0])
              )}
            </small>
          </div>
          <p>
            The country belongs to <strong>{country.region}</strong> region and{" "}
            <strong>{country.subregion}</strong> sub-region. Located at {country.latlng} This country has
            population of <strong>{country.population}</strong>.
          </p>
          <p>
            <a href={country.maps.googleMaps}>Link to Google Maps</a>
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <Button onClick={() => onClearCountryClick()}>{"<"}</Button>
      </div>
    </div>
  );
}

export default CountryDetail;

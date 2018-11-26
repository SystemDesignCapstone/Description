  CREATE TABLE IF NOT EXISTS ajd(
  id INT UNIQUE,
  imageUrl VARCHAR,
  Owner VARCHAR,
  houseName VARCHAR,
  type VARCHAR,
  description VARCHAR,
  bedrooms INT,
  beds INT,
  guests INT,
  baths INT,
  amenities VARCHAR,
  city VARCHAR,
  lock VARCHAR,
  rate INT
  );

create table Addresses (
    id INTEGER PRIMARY KEY,
    streetNumber INTEGER,
    apartment varchar,
    streetName varchar,
    city varchar,
    province varchar,
    postalCode varchar,
    country varchar
);

create table Restaurants (
    id INTEGER PRIMARY KEY,
    name varchar not null,
    website varchar,
    phone varchar,
    avgMealPrice INTEGER,
    location INTEGER,
    FOREIGN KEY (location) REFERENCES addresses(id)
);

create table Reviews (
    id INTEGER PRIMARY KEY,
    restaurant int not null,
    author varchar  not null,
    rating varchar not null,
    title varchar not null,
    body varchar not null,
    created varchar not null,
    FOREIGN KEY (restaurant) REFERENCES restaurants(id)
);

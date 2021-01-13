

  select "countries". "name" as "Country",
        count("cities".*) as "number of cities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries". "countryId";

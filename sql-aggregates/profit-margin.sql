


select "title",
      count("rentals"."inventoryId") as "Number of checkouts",
     sum("payments"."amount") as "$ Gross Profit",
     sum ("payments". "amount") - ("films"."replacementCost") as "$Profit after replacement cost"
from "films"
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "payments" using ("rentalId")
group by "filmId"
order by "$ Gross Profit" desc
limit 5;
